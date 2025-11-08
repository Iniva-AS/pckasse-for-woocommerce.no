/**
 * Conversion Tracking Utilities
 *
 * Centralized tracking functions for Google Analytics (via GTM) and Plausible.
 * All tracking respects user consent preferences.
 */

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer?: any[]
    plausible?: (
      eventName: string,
      options?: { props?: Record<string, string | number | boolean> },
    ) => void
    gtag?: (...args: any[]) => void
  }
}

export interface TrackingEvent {
  event: string
  eventCategory?: 'conversion' | 'engagement' | 'navigation'
  eventLabel?: string
  eventValue?: number
  [key: string]: any
}

/**
 * Check if user has granted analytics consent
 */
function hasAnalyticsConsent(): boolean {
  // Check if Klaro consent manager has analytics enabled
  if (typeof window !== 'undefined' && (window as any).klaro) {
    const klaro = (window as any).klaro
    const manager = klaro.getManager?.()
    if (manager) {
      return (
        manager.getConsent('google-analytics') ||
        manager.getConsent('google-ads')
      )
    }
  }
  // If consent manager not available, assume no consent
  return false
}

/**
 * Track event to Google Tag Manager (dataLayer)
 */
function trackToGTM(eventData: TrackingEvent): void {
  if (typeof window === 'undefined') return

  // Initialize dataLayer if it doesn't exist
  window.dataLayer = window.dataLayer || []

  // Push event to dataLayer
  window.dataLayer.push(eventData)

  if (process.env.NODE_ENV === 'development') {
    console.log('[GTM Event]', eventData)
  }
}

/**
 * Track event to Plausible Analytics
 */
function trackToPlausible(
  eventName: string,
  props?: Record<string, string | number | boolean>,
): void {
  if (typeof window === 'undefined') return
  if (!window.plausible) return

  try {
    if (props) {
      window.plausible(eventName, { props })
    } else {
      window.plausible(eventName)
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('[Plausible Event]', eventName, props)
    }
  } catch (error) {
    console.error('Error tracking to Plausible:', error)
  }
}

/**
 * Track custom event to both GTM and Plausible
 * Respects user consent preferences
 */
export function trackEvent(
  eventName: string,
  eventData?: Omit<TrackingEvent, 'event'>,
  plausibleProps?: Record<string, string | number | boolean>,
): void {
  // Don't track in server-side rendering
  if (typeof window === 'undefined') return

  // Check consent (Plausible doesn't require consent, but GTM does)
  const hasConsent = hasAnalyticsConsent()

  // Always track to Plausible (privacy-friendly, no cookies)
  const plausibleEventName = eventName
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  trackToPlausible(plausibleEventName, plausibleProps)

  // Only track to GTM if user has consented
  if (hasConsent) {
    const fullEventData: TrackingEvent = {
      event: eventName,
      ...eventData,
    }
    trackToGTM(fullEventData)
  } else if (process.env.NODE_ENV === 'development') {
    console.log(
      '[Tracking Blocked] No analytics consent for GTM event:',
      eventName,
    )
  }
}

/**
 * Track conversion event (high-value action)
 */
export function trackConversion(
  conversionName: string,
  conversionData?: Record<string, any>,
): void {
  trackEvent(
    conversionName,
    {
      eventCategory: 'conversion',
      ...conversionData,
    },
    conversionData,
  )
}

/**
 * Track CTA click (Call-to-Action)
 */
export function trackCTAClick(
  ctaLocation: string,
  ctaLabel?: string,
  additionalData?: Record<string, any>,
): void {
  trackEvent(
    'cta_click_app',
    {
      eventCategory: 'conversion',
      eventLabel: ctaLabel,
      ctaLocation,
      ...additionalData,
    },
    {
      location: ctaLocation,
      label: ctaLabel || '',
      ...additionalData,
    },
  )
}

/**
 * Track partner referral click
 */
export function trackPartnerClick(
  partnerName: string,
  linkType: 'website' | 'email' | 'phone',
  partnerUrl?: string,
): void {
  trackEvent(
    'partner_click',
    {
      eventCategory: 'engagement',
      eventLabel: partnerName,
      partnerName,
      linkType,
      partnerUrl,
    },
    {
      partner: partnerName,
      type: linkType,
    },
  )
}

/**
 * Track contact form submission
 */
export function trackContactFormSubmit(
  status: 'success' | 'error',
  errorMessage?: string,
): void {
  trackConversion('contact_form_submit', {
    formType: 'contact',
    status,
    errorMessage,
  })
}

/**
 * Track pricing plan view/interaction
 */
export function trackPricingView(planName?: string): void {
  trackEvent(
    'pricing_view',
    {
      eventCategory: 'engagement',
      planName,
    },
    {
      plan: planName || 'all',
    },
  )
}
