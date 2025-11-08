// Klaro Cookie Consent Configuration for PCKasse for WooCommerce

export const klaroConfig = {
  version: 1,
  elementID: 'klaro',
  styling: {
    theme: ['light', 'wide'],
  },
  noAutoLoad: false,
  htmlTexts: true,
  embedded: false,
  groupByPurpose: true,
  storageMethod: 'cookie',
  cookieName: 'klaro',
  cookieExpiresAfterDays: 365,
  default: false,
  mustConsent: true,
  acceptAll: true,
  hideDeclineAll: false,
  hideLearnMore: false,
  noticeAsModal: true,

  // Norwegian language
  lang: 'no',

  translations: {
    no: {
      consentModal: {
        title: 'Informasjonskapsler og personvern',
        description:
          'Vi bruker informasjonskapsler og lignende teknologier for å forbedre din opplevelse, analysere nettstedstrafikk, og vise personlig tilpassede annonser. Du kan velge hvilke kategorier du vil godta.',
      },
      consentNotice: {
        changeDescription:
          'Det har vært endringer siden ditt siste besøk. Vennligst oppdater ditt samtykke.',
        description:
          'Vi bruker informasjonskapsler og lignende teknologier for å forbedre din opplevelse, analysere nettstedstrafikk, og vise personlig tilpassede annonser.',
        learnMore: 'Les mer',
      },
      purposeItem: {
        service: 'tjeneste',
        services: 'tjenester',
      },
      purposes: {
        analytics: 'Analyse',
        marketing: 'Markedsføring og annonsering',
      },
      ok: 'Godta alle',
      save: 'Lagre valg',
      decline: 'Avslå alle',
      close: 'Lukk',
      acceptAll: 'Godta alle',
      acceptSelected: 'Godta valgte',
    },
    en: {
      consentModal: {
        title: 'Cookies and Privacy',
        description:
          'We use cookies and similar technologies to improve your experience, analyze website traffic, and display personalized advertisements. You can choose which categories to accept.',
      },
      consentNotice: {
        changeDescription:
          'There have been changes since your last visit. Please update your consent.',
        description:
          'We use cookies and similar technologies to improve your experience, analyze website traffic, and display personalized advertisements.',
        learnMore: 'Learn more',
      },
      purposeItem: {
        service: 'service',
        services: 'services',
      },
      purposes: {
        analytics: 'Analytics',
        marketing: 'Marketing and Advertising',
      },
      ok: 'Accept all',
      save: 'Save choices',
      decline: 'Decline all',
      close: 'Close',
      acceptAll: 'Accept all',
      acceptSelected: 'Accept selected',
    },
  },

  // Services configuration
  services: [
    {
      name: 'google-analytics',
      title: 'Google Analytics',
      description: {
        no: 'Hjelper oss forstå hvordan besøkende bruker nettstedet vårt.',
        en: 'Helps us understand how visitors use our website.',
      },
      purposes: ['analytics'],
      required: false,
      optOut: false,
      default: false,
      onAccept: function () {
        // Update Google Consent Mode
        if (typeof window !== 'undefined' && (window as any).gtag) {
          ;(window as any).gtag('consent', 'update', {
            analytics_storage: 'granted',
          })
        }
      },
      onDecline: function () {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          ;(window as any).gtag('consent', 'update', {
            analytics_storage: 'denied',
          })
        }
      },
    },
    {
      name: 'google-ads',
      title: 'Google Ads',
      description: {
        no: 'Brukes til å måle effektiviteten av våre annonsekampanjer og vise relevante annonser.',
        en: 'Used to measure the effectiveness of our advertising campaigns and show relevant ads.',
      },
      purposes: ['marketing'],
      required: false,
      optOut: false,
      default: false,
      onAccept: function () {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          ;(window as any).gtag('consent', 'update', {
            ad_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted',
          })
        }
      },
      onDecline: function () {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          ;(window as any).gtag('consent', 'update', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
          })
        }
      },
    },
    {
      name: 'facebook-pixel',
      title: 'Facebook Pixel',
      description: {
        no: 'Brukes til å måle og optimalisere Facebook-annonsekampanjer og bygge målgrupper for retargeting.',
        en: 'Used to measure and optimize Facebook ad campaigns and build audiences for retargeting.',
      },
      purposes: ['marketing'],
      required: false,
      optOut: false,
      default: false,
      onAccept: function () {
        // Facebook Pixel will be loaded via GTM
        console.log('Facebook Pixel consent granted')
      },
      onDecline: function () {
        console.log('Facebook Pixel consent denied')
      },
    },
    {
      name: 'linkedin-insight',
      title: 'LinkedIn Insight Tag',
      description: {
        no: 'Brukes til å spore konverteringer fra LinkedIn-annonser og bygge målgrupper for retargeting.',
        en: 'Used to track conversions from LinkedIn ads and build audiences for retargeting.',
      },
      purposes: ['marketing'],
      required: false,
      optOut: false,
      default: false,
      onAccept: function () {
        // LinkedIn tag will be loaded via GTM
        console.log('LinkedIn Insight Tag consent granted')
      },
      onDecline: function () {
        console.log('LinkedIn Insight Tag consent denied')
      },
    },
  ],
}
