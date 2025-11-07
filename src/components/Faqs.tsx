import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Hvor lang tid tar det å sette opp integrasjonen?',
      answer: `De fleste kommer i gang på 5-10 minutter. 
        Du må ha tilgang til din PCKasse og WordPress installasjon.
        Veiledningen når du konfigurerer integrasjonen viser deg skritt for 
        skritt akkurat hva du skal gjøre for å komme i gang.`,
    },
    {
      question: 'Hva synkroniseres mellom PCKasse og WooCommerce?',
      answer: `Fra PCKasse til WooCommerce: Produkter med alle detaljer (varianter,
                                                                       lagerbeholdning, priser, bilder, dimensjoner, moms), kategorier (opptil 3 nivåer),
                                                                       produktattributter (merke, farge, størrelse), kundedata, ordrestatus, krediteringer
                                                                       og sporingsinfo. Fra WooCommerce til PCKasse: Ordre med kunde-, leverings- og
                                                                       betalingsinformasjon.`,
    },
    {
      question: 'Hva skjer hvis en synkronisering feiler?',
      answer: `Alle feil som skjer logges inne i ditt dashboard i sanntid. Det er også 
         en kø i PCKasse som viser alle oppgaver fra PCKasse til nettbutikken. 
         Har et skjedd en feil kan du forsøke å slette feilmeldingen i PCKasse og 
         forsøke handlingen på nytt.`,
    },
  ],
  [
    {
      question: 'Kan jeg teste integrasjonen før jeg går live?',
      answer: `Din PCKasse kan kun være koblet til en ekstern nettbutikk av gangen. 
         Om du ikke har en eksisterende nettbutikk er det bare til å sette opp 
         en ny, og bruk en "under konstruksjon" plugin fra wordpress mens du 
         setter opp nettbutikken din. Har du allerede en nettbutikk anbefaler vi 
         at du gjør helt klart den nye nettbutikken før du kobler over integrasjonen.`,
    },
    {
      question: 'Kan jeg ha fler integrasjoner på en konto?',
      answer:
        'Ja, du kan opprette flere integrasjoner under samme organisasjon. Hver integrasjon håndteres separat med egne innstillinger og logger.',
    },
    {
      question: 'Hvordan håndteres hemmelig informasjon og sikkerhet?',
      answer: `Alle API-nøkler og passord krypteres med AES-256 før lagring. Webhooks
      valideres med HMAC-SHA256 signaturer. Komplett auditlogg med fullstendige
      request/response detaljer (automatisk sensurert for sensitive data) gir full
        sporbarhet av alle operasjoner.`,
    },
  ],
  [
    {
      question: 'Hva inkluderer prøveperioden?',
      answer:
        'Du får 14 dager gratis tilgang til alle funksjoner for din første integrasjon. Du kan teste full synkronisering før du bestemmer deg.',
    },
    {
      question: 'Kan jeg invitere medarbeidere?',
      answer:
        'Ja, du kan invitere medarbeidere til organisasjonen din. Alle får tilgang til dashboardet og dere kan administrere integrasjonene sammen.',
    },
    {
      question: 'Hvor ofte gjøres synkroniseringen?',
      answer: `Produkter, lager og priser synkroniseres umiddelbart når du gjør endringer
      i PCKasse. Nye ordre fra WooCommerce legges i kø og venter til du trykker "Hent webordre"
      i PCKasse. I tillegg kjører systemet en sikkerhetskontroll hver 15. minutt for å fange
        opp ordre som eventuelt ikke ble fanget opp av webhook.`,
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
            Har du andre spørsmål? Ta kontakt med oss - hello@iniva.no
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
