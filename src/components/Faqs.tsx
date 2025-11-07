import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Hvor lang tid tar det å sette opp integrasjonen?',
      answer:
        'De fleste kommer i gang på 5-10 minutter. Du trenger kun WooCommerce-legitimasjon og PCKasse API-nøkkel. Dashboardet guider deg gjennom hele prosessen.',
    },
    {
      question: 'Hva synkroniseres mellom PCKasse og WooCommerce?',
      answer:
        'Produkter, lagerbeholdning, priser, bilder og varianter synkroniseres fra PCKasse til WooCommerce. Ordre, ordrestatus, krediteringer og kundedata synkroniseres begge veier.',
    },
    {
      question: 'Hva skjer hvis en synkronisering feiler?',
      answer:
        'Du får umiddelbar varsel i dashboardet. Alle feilmeldinger inneholder detaljerte logger med forespørsels- og responsdata for enkel feilsøking. Automatisk overvåking varsler deg hvis det oppstår gjentatte feil.',
    },
  ],
  [
    {
      question: 'Kan jeg teste integrasjonen før jeg går live?',
      answer:
        'Ja! Dashboardet har innebygde testverktøy for å validere WooCommerce-legitimasjon og PCKasse API-tilkobling før du aktiverer synkronisering.',
    },
    {
      question: 'Støtter dere flere WooCommerce-butikker?',
      answer:
        'Ja, du kan opprette flere integrasjoner under samme organisasjon. Hver integrasjon håndteres separat med egne innstillinger og logger.',
    },
    {
      question: 'Hvordan håndteres kundedata og sikkerhet?',
      answer:
        'All legitimasjon krypteres med AES-256. API-tilgang bruker SOAP API som PCKasse kaller direkte. Komplett auditlogg gir full sporbarhet av alle operasjoner.',
    },
  ],
  [
    {
      question: 'Hva inkluderer prøveperioden?',
      answer:
        'Du får 14 dager gratis tilgang til alle funksjoner for din første integrasjon. Ingen kredittkort påkrevd. Du kan teste full synkronisering før du bestemmer deg.',
    },
    {
      question: 'Kan jeg invitere medarbeidere?',
      answer:
        'Ja, du kan invitere medarbeidere til organisasjonen din. Alle får tilgang til dashboardet og kan administrere integrasjoner sammen.',
    },
    {
      question: 'Hva er forskjellen på sanntidssynkronisering og bakgrunnssynkronisering?',
      answer:
        'Sanntidssynkronisering bruker webhooks for umiddelbare oppdateringer. Bakgrunnssynkronisering kjører hver 15. minutt som sikkerhetsnett for å fange opp eventuelle ordre som ble savnet.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Ofte stilte spørsmål
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Har du andre spørsmål? Ta kontakt med oss på support@pckasse-for-woocommerce.no
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg/7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
