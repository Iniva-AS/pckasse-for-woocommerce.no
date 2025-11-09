import posthog from 'posthog-js'

/**
 * Landing Page Event Tracking Utilities
 * All events automatically include source: 'landing' from global register
 */

/**
 * Track CTA button clicks
 */
export function trackCTAClick(ctaType: string, properties?: Record<string, any>) {
  posthog.capture('cta_clicked', {
    cta_type: ctaType,
    ...properties,
  })
}

/**
 * Track form submissions
 */
export function trackFormSubmission(formName: string, success: boolean, properties?: Record<string, any>) {
  posthog.capture('form_submitted', {
    form_name: formName,
    success,
    ...properties,
  })
}

/**
 * Track feature interactions
 */
export function trackFeatureInteraction(featureName: string, action: string, properties?: Record<string, any>) {
  posthog.capture('feature_interaction', {
    feature_name: featureName,
    action,
    ...properties,
  })
}

/**
 * Track when user navigates to dashboard/app
 */
export function trackNavigateToDashboard(source?: string) {
  posthog.capture('navigate_to_dashboard', {
    navigation_source: source || 'unknown',
  })
}

/**
 * Get PostHog instance (for advanced usage)
 */
export function getPostHog() {
  return posthog
}
