import posthog from 'posthog-js'

export function register() {
  // Only run on client side
  if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
      defaults: '2025-05-24', // PostHog's recommended defaults for 2025
      capture_pageview: 'history_change', // Automatically capture pageviews and pageleave
      person_profiles: 'identified_only', // Only create profiles for identified users
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') {
          posthog.debug() // Enable debug mode in development
        }
      },
    })

    // Set global properties for all events from landing page
    posthog.register({
      source: 'landing',
    })
  }
}
