'use server'

import { headers } from 'next/headers'
import { sendContactFormEmail, type ContactFormData } from '@/lib/email'

export interface ContactFormResponse {
  success: boolean
  message: string
}

// Simple in-memory rate limiter
// Maps IP address -> array of submission timestamps
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes in milliseconds
const MAX_SUBMISSIONS = 3 // Maximum submissions per window

/**
 * Cleans up old entries from rate limit map
 */
function cleanupRateLimitMap() {
  const now = Date.now()
  for (const [ip, timestamps] of rateLimitMap.entries()) {
    const recentTimestamps = timestamps.filter(
      (ts) => now - ts < RATE_LIMIT_WINDOW,
    )
    if (recentTimestamps.length === 0) {
      rateLimitMap.delete(ip)
    } else {
      rateLimitMap.set(ip, recentTimestamps)
    }
  }
}

/**
 * Checks if IP is rate limited
 */
function checkRateLimit(ip: string): boolean {
  cleanupRateLimitMap()

  const now = Date.now()
  const timestamps = rateLimitMap.get(ip) || []

  // Filter to only recent submissions
  const recentSubmissions = timestamps.filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW,
  )

  if (recentSubmissions.length >= MAX_SUBMISSIONS) {
    return false // Rate limited
  }

  // Add current timestamp
  recentSubmissions.push(now)
  rateLimitMap.set(ip, recentSubmissions)

  return true // Not rate limited
}

export async function submitContactForm(
  formData: FormData,
): Promise<ContactFormResponse> {
  try {
    // Get client IP for rate limiting
    const headersList = await headers()
    const ip =
      headersList.get('x-forwarded-for')?.split(',')[0] ||
      headersList.get('x-real-ip') ||
      'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return {
        success: false,
        message:
          'Du har sendt for mange meldinger. Vennligst prøv igjen om 15 minutter.',
      }
    }

    // Check honeypot field (bot detection)
    const honeypot = formData.get('website')?.toString()
    if (honeypot) {
      // Bot detected - pretend success but don't send email
      console.warn('Bot detected: honeypot field filled')
      return {
        success: true,
        message:
          'Takk for din henvendelse! Vi tar kontakt med deg så snart som mulig.',
      }
    }

    // Extract form data
    const firstName = formData.get('first-name')?.toString().trim()
    const lastName = formData.get('last-name')?.toString().trim()
    const email = formData.get('email')?.toString().trim()
    const phone = formData.get('phone-number')?.toString().trim()
    const message = formData.get('message')?.toString().trim()

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return {
        success: false,
        message: 'Vennligst fyll ut alle obligatoriske felt.',
      }
    }

    // Validate field lengths
    if (firstName.length > 50) {
      return {
        success: false,
        message: 'Fornavn kan ikke være lengre enn 50 tegn.',
      }
    }

    if (lastName.length > 50) {
      return {
        success: false,
        message: 'Etternavn kan ikke være lengre enn 50 tegn.',
      }
    }

    // Validate name characters (allow letters, spaces, hyphens, apostrophes)
    const nameRegex = /^[a-zA-ZæøåÆØÅ\s'-]+$/
    if (!nameRegex.test(firstName)) {
      return {
        success: false,
        message: 'Fornavn inneholder ugyldige tegn.',
      }
    }

    if (!nameRegex.test(lastName)) {
      return {
        success: false,
        message: 'Etternavn inneholder ugyldige tegn.',
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: 'Vennligst oppgi en gyldig e-postadresse.',
      }
    }

    if (email.length > 254) {
      // RFC 5321 max email length
      return {
        success: false,
        message: 'E-postadressen er for lang.',
      }
    }

    // Validate phone number if provided
    if (phone && phone.length > 0) {
      // Allow Norwegian phone numbers: +47, 47, or 8 digits
      const phoneRegex = /^(\+?47)?[0-9\s-]{8,15}$/
      if (!phoneRegex.test(phone)) {
        return {
          success: false,
          message: 'Vennligst oppgi et gyldig telefonnummer.',
        }
      }
    }

    // Validate message length
    if (message.length < 10) {
      return {
        success: false,
        message: 'Meldingen må være minst 10 tegn lang.',
      }
    }

    if (message.length > 5000) {
      return {
        success: false,
        message: 'Meldingen kan ikke være lengre enn 5000 tegn.',
      }
    }

    // Prepare contact form data
    const contactData: ContactFormData = {
      firstName,
      lastName,
      email,
      phone: phone || 'Ikke oppgitt',
      message,
    }

    // Send email via Brevo
    await sendContactFormEmail(contactData)

    return {
      success: true,
      message:
        'Takk for din henvendelse! Vi tar kontakt med deg så snart som mulig.',
    }
  } catch (error) {
    console.error('Error in submitContactForm:', error)
    return {
      success: false,
      message:
        'Det oppstod en feil ved sending av skjemaet. Vennligst prøv igjen senere.',
    }
  }
}
