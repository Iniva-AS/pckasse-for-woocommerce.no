import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Personvern() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-white px-6 py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
            <p className="text-base/7 font-semibold text-indigo-600">
              Personvern
            </p>
            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Personvernerklæring
            </h1>
            <p className="mt-6 text-xl/8">
              Vi tar personvernet ditt på alvor. Denne personvernerklæringen
              forklarer hvordan vi samler inn, bruker og beskytter dine
              personopplysninger når du bruker PCKasse for WooCommerce.
            </p>
            <div className="mt-10 max-w-2xl text-gray-600">
              <p>
                PCKasse for WooCommerce er forpliktet til å beskytte ditt
                personvern i samsvar med gjeldende personvernlovgivning,
                inkludert GDPR. Vi behandler kun personopplysninger som er
                nødvendige for å levere våre tjenester.
              </p>
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    data-slot="icon"
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  >
                    <path
                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Datainnsamling.
                    </strong>{' '}
                    Vi samler kun inn nødvendige opplysninger for å levere
                    tjenesten, inkludert kontoinformasjon, butikkdata og
                    transaksjonsdetaljer.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    data-slot="icon"
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  >
                    <path
                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Sikkerhet.
                    </strong>{' '}
                    Alle data krypteres under overføring og lagres sikkert i
                    samsvar med bransjestandard praksis.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    data-slot="icon"
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  >
                    <path
                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Dine rettigheter.
                    </strong>{' '}
                    Du har rett til innsyn, retting, sletting og flytting av
                    dine personopplysninger når som helst.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Vi deler aldri dine personopplysninger med tredjeparter uten
                ditt samtykke, med mindre det er påkrevd av lov eller nødvendig
                for å levere tjenesten.
              </p>
              <h2 className="mt-16 text-pretty text-3xl font-semibold tracking-tight text-gray-900">
                Hvilke opplysninger samler vi inn?
              </h2>
              <p className="mt-6">
                Vi samler inn opplysninger som er nødvendige for å opprette og
                administrere din konto, samt for å tilby integrasjon mellom din
                WooCommerce-butikk og PC Markesdsystem. Dette inkluderer
                kontaktinformasjon, bedriftsdetaljer, produkt- og
                kundedata, samt transaksjonshistorikk.
              </p>
              <figure className="mt-10 border-l border-indigo-600 pl-9">
                <blockquote className="font-semibold text-gray-900">
                  <p>
                    "Vi behandler dine data med respekt og sørger for at all
                    informasjon håndteres i henhold til norsk lov og GDPR."
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4">
                  <div className="text-sm/6">
                    <strong className="font-semibold text-gray-900">
                      PCKasse
                    </strong>{' '}
                    – Datasikkerhet
                  </div>
                </figcaption>
              </figure>
              <p className="mt-10">
                All kommunikasjon mellom din WooCommerce-butikk og våre servere
                er kryptert med industri-standard TLS/SSL-protokoller. Vi
                oppbevarer kun data så lenge det er nødvendig for å levere
                tjenesten eller som påkrevd av lov.
              </p>
            </div>
            <div className="mt-16 max-w-2xl text-gray-600">
              <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
                Slik bruker vi informasjonen
              </h2>
              <p className="mt-6">
                Informasjonen vi samler inn brukes til å synkronisere produkter,
                kunder og ordrer mellom din WooCommerce-butikk og PC
                Markedssystem. Vi bruker også dataene til å gi deg support,
                forbedre tjenesten og sende viktige oppdateringer om tjenesten.
              </p>
              <p className="mt-8">
                Du kan når som helst kontakte oss for å få innsyn i, rette
                eller slette dine personopplysninger. Vi vil besvare alle
                henvendelser innen 30 dager i samsvar med GDPR-kravene.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
