/**
 * Conversion Tracking Utilities
 *
 * Centralized tracking functions for Google Analytics (via GTM).
 * All tracking respects user consent preferences.
 */

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer?: any[]
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
 * Track custom event to GTM
 * Respects user consent preferences
 */
export function trackEvent(
  eventName: string,
  eventData?: Omit<TrackingEvent, 'event'>,
): void {
  // Don't track in server-side rendering
  if (typeof window === 'undefined') return

  // Check consent
  const hasConsent = hasAnalyticsConsent()

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
  trackEvent(conversionName, {
    eventCategory: 'conversion',
    ...conversionData,
  })
}

/**
 * Track CTA click (Call-to-Action)
 */
export function trackCTAClick(
  ctaLocation: string,
  ctaLabel?: string,
  additionalData?: Record<string, any>,
): void {
  trackEvent('cta_click_app', {
    eventCategory: 'conversion',
    eventLabel: ctaLabel,
    ctaLocation,
    ...additionalData,
  })
}

/**
 * Track partner referral click
 */
export function trackPartnerClick(
  partnerName: string,
  linkType: 'website' | 'email' | 'phone',
  partnerUrl?: string,
): void {
  trackEvent('partner_click', {
    eventCategory: 'engagement',
    eventLabel: partnerName,
    partnerName,
    linkType,
    partnerUrl,
  })
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
  trackEvent('pricing_view', {
    eventCategory: 'engagement',
    planName,
  })
}
