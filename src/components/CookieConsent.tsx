'use client'

import Script from 'next/script'

export function CookieConsent() {
  return (
    <>
      {/* Klaro Config Script */}
      <Script
        id="klaro-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.klaroConfig = {
              version: 1,
              elementID: 'klaro',
              styling: {
                theme: ['light', 'wide']
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
              lang: 'no',
              translations: {
                no: {
                  consentModal: {
                    title: 'Informasjonskapsler og personvern',
                    description: 'Vi bruker informasjonskapsler og lignende teknologier for å forbedre din opplevelse, analysere nettstedstrafikk, og vise personlig tilpassede annonser. Du kan velge hvilke kategorier du vil godta.'
                  },
                  consentNotice: {
                    changeDescription: 'Det har vært endringer siden ditt siste besøk. Vennligst oppdater ditt samtykke.',
                    description: 'Vi bruker informasjonskapsler og lignende teknologier for å forbedre din opplevelse, analysere nettstedstrafikk, og vise personlig tilpassede annonser.',
                    learnMore: 'Les mer'
                  },
                  purposeItem: {
                    service: 'tjeneste',
                    services: 'tjenester'
                  },
                  purposes: {
                    analytics: 'Analyse',
                    marketing: 'Markedsføring og annonsering'
                  },
                  ok: 'Godta alle',
                  save: 'Lagre valg',
                  decline: 'Avslå alle',
                  close: 'Lukk',
                  acceptAll: 'Godta alle',
                  acceptSelected: 'Godta valgte'
                },
                en: {
                  consentModal: {
                    title: 'Cookies and Privacy',
                    description: 'We use cookies and similar technologies to improve your experience, analyze website traffic, and display personalized advertisements. You can choose which categories to accept.'
                  },
                  consentNotice: {
                    changeDescription: 'There have been changes since your last visit. Please update your consent.',
                    description: 'We use cookies and similar technologies to improve your experience, analyze website traffic, and display personalized advertisements.',
                    learnMore: 'Learn more'
                  },
                  purposeItem: {
                    service: 'service',
                    services: 'services'
                  },
                  purposes: {
                    analytics: 'Analytics',
                    marketing: 'Marketing and Advertising'
                  },
                  ok: 'Accept all',
                  save: 'Save choices',
                  decline: 'Decline all',
                  close: 'Close',
                  acceptAll: 'Accept all',
                  acceptSelected: 'Accept selected'
                }
              },
              services: [
                {
                  name: 'google-analytics',
                  title: 'Google Analytics',
                  description: {
                    no: 'Hjelper oss forstå hvordan besøkende bruker nettstedet vårt.',
                    en: 'Helps us understand how visitors use our website.'
                  },
                  purposes: ['analytics'],
                  required: false,
                  optOut: false,
                  default: false,
                  onAccept: function() {
                    if (typeof gtag !== 'undefined') {
                      gtag('consent', 'update', {
                        'analytics_storage': 'granted'
                      });
                    }
                  },
                  onDecline: function() {
                    if (typeof gtag !== 'undefined') {
                      gtag('consent', 'update', {
                        'analytics_storage': 'denied'
                      });
                    }
                  }
                },
                {
                  name: 'google-ads',
                  title: 'Google Ads',
                  description: {
                    no: 'Brukes til å måle effektiviteten av våre annonsekampanjer og vise relevante annonser.',
                    en: 'Used to measure the effectiveness of our advertising campaigns and show relevant ads.'
                  },
                  purposes: ['marketing'],
                  required: false,
                  optOut: false,
                  default: false,
                  onAccept: function() {
                    if (typeof gtag !== 'undefined') {
                      gtag('consent', 'update', {
                        'ad_storage': 'granted',
                        'ad_user_data': 'granted',
                        'ad_personalization': 'granted'
                      });
                    }
                  },
                  onDecline: function() {
                    if (typeof gtag !== 'undefined') {
                      gtag('consent', 'update', {
                        'ad_storage': 'denied',
                        'ad_user_data': 'denied',
                        'ad_personalization': 'denied'
                      });
                    }
                  }
                },
                {
                  name: 'facebook-pixel',
                  title: 'Facebook Pixel',
                  description: {
                    no: 'Brukes til å måle og optimalisere Facebook-annonsekampanjer og bygge målgrupper for retargeting.',
                    en: 'Used to measure and optimize Facebook ad campaigns and build audiences for retargeting.'
                  },
                  purposes: ['marketing'],
                  required: false,
                  optOut: false,
                  default: false,
                  onAccept: function() {
                    console.log('Facebook Pixel consent granted');
                  },
                  onDecline: function() {
                    console.log('Facebook Pixel consent denied');
                  }
                },
                {
                  name: 'linkedin-insight',
                  title: 'LinkedIn Insight Tag',
                  description: {
                    no: 'Brukes til å spore konverteringer fra LinkedIn-annonser og bygge målgrupper for retargeting.',
                    en: 'Used to track conversions from LinkedIn ads and build audiences for retargeting.'
                  },
                  purposes: ['marketing'],
                  required: false,
                  optOut: false,
                  default: false,
                  onAccept: function() {
                    console.log('LinkedIn Insight Tag consent granted');
                  },
                  onDecline: function() {
                    console.log('LinkedIn Insight Tag consent denied');
                  }
                }
              ]
            };
          `,
        }}
      />

      {/* Custom Klaro Styling */}
      <style jsx global>{`
        .klaro .cookie-notice,
        .klaro .cookie-modal {
          --primary-color: #0ea5e9;
          --primary-hover: #0284c7;
        }

        .klaro .cookie-notice,
        .klaro .cookie-modal .cm-modal {
          border-radius: 0.75rem;
          box-shadow:
            0 20px 25px -5px rgb(0 0 0 / 0.1),
            0 8px 10px -6px rgb(0 0 0 / 0.1);
        }

        .klaro .cn-buttons button.cm-btn.cm-btn-success,
        .klaro .cookie-modal .cm-btn.cm-btn-success {
          background-color: var(--primary-color);
          border-color: var(--primary-color);
        }

        .klaro .cn-buttons button.cm-btn.cm-btn-success:hover,
        .klaro .cookie-modal .cm-btn.cm-btn-success:hover {
          background-color: var(--primary-hover);
          border-color: var(--primary-hover);
        }

        .klaro .cookie-modal .cm-btn.cm-btn-info {
          color: var(--primary-color);
          border-color: var(--primary-color);
          background-color: white;
        }

        .klaro .cookie-modal .cm-btn.cm-btn-info:hover {
          background-color: #f0f9ff;
        }

        .klaro .cookie-modal .cm-switch input:checked + .cm-slider {
          background-color: var(--primary-color);
        }

        .klaro .cookie-modal .cm-switch .cm-slider:before {
          background-color: white;
        }

        .klaro .cookie-notice {
          max-width: 24rem;
        }

        @media (max-width: 640px) {
          .klaro .cookie-notice {
            max-width: 100%;
            margin: 0 1rem 1rem 1rem;
          }
        }
      `}</style>

      {/* Klaro CSS via Script */}
      <Script
        id="klaro-css"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = 'https://cdn.jsdelivr.net/npm/klaro@0.7.18/dist/klaro.min.css';
              document.head.appendChild(link);
            })();
          `,
        }}
      />

      {/* Klaro Script */}
      <Script
        src="https://cdn.jsdelivr.net/npm/klaro@0.7.18/dist/klaro-no-css.min.js"
        data-config="klaroConfig"
        strategy="afterInteractive"
      />
    </>
  )
}
