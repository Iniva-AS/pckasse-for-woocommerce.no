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
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Personvernerklæring
            </h1>
            <p className="mt-6 text-xl/8">
              Vi tar personvernet ditt på alvor. Denne erklæringen forklarer
              hvordan vi i Iniva AS (org.nr. 935765641) samler inn, bruker og
              beskytter personopplysninger i forbindelse med PCKasse for
              WooCommerce.
            </p>
            <div className="mt-10 max-w-2xl text-gray-600">
              <p>
                Vi følger gjeldende personvernlovgivning (GDPR og norsk
                personopplysningslov) og behandler kun data som er nødvendige
                for å levere og forbedre tjenesten.
              </p>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                1. Hvilke data vi samler inn
              </h2>
              <ul role="list" className="mt-6 max-w-xl space-y-3 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Kontodata:
                    </strong>{' '}
                    Navn, e-post, organisasjonsnavn og innloggingsinformasjon.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Integrasjonsdata:
                    </strong>{' '}
                    Kundedata, ordrer og produkter som synkroniseres mellom
                    WooCommerce og PCK.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Tekniske data:
                    </strong>{' '}
                    IP-adresser, logger og feilmeldinger for drift og sikkerhet.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Betalingsdata:
                    </strong>{' '}
                    Håndteres av Stripe (Iniva lagrer ingen kortopplysninger).
                  </span>
                </li>
              </ul>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                2. Formål og behandlingsgrunnlag
              </h2>
              <p className="mt-6">Vi behandler data for å:</p>
              <ul role="list" className="mt-6 max-w-xl space-y-2 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>Levere tjenesten (kontraktsgrunnlag)</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>
                    Fakturere og administrere kundeforhold (rettslig plikt)
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>
                    Forbedre brukeropplevelse og drift (berettiget interesse)
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>
                    Sende informasjon og varsler om tjenesten (berettiget
                    interesse)
                  </span>
                </li>
              </ul>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                3. Lagringstid
              </h2>
              <p className="mt-6">
                Data lagres så lenge du har konto. Når kontoen slettes:
              </p>
              <ul role="list" className="mt-6 max-w-xl space-y-2 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>Integrasjoner får soft delete-status i 6 måneder.</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>
                    Logger og backups slettes eller anonymiseres etter 12
                    måneder.
                  </span>
                </li>
              </ul>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                4. Deling og underleverandører
              </h2>
              <p className="mt-6">Vi bruker følgende databehandlere:</p>

              <div className="mt-8 overflow-hidden rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                        Leverandør
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                        Formål
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                        Lokasjon
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Hetzner Cloud
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Serverhosting
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        EU/Tyskland
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Google Cloud
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Backups og medielagring
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">EU</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Stripe
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Betaling
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        USA (SCC-avtale)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Brevo
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        E-postutsending
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">EU</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Sentry
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Feilsporing
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        USA (SCC-avtale)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6">
                Ingen data selges eller brukes til tredjeparts markedsføring.
              </p>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                5. Dine rettigheter
              </h2>
              <p className="mt-6">
                Du kan kreve innsyn, retting, sletting og dataportabilitet ved å
                kontakte oss på{' '}
                <a
                  href="mailto:hello@iniva.no"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  hello@iniva.no
                </a>
                . Vi svarer innen 30 dager.
              </p>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                6. Informasjonskapsler
              </h2>
              <p className="mt-6">
                Vi bruker nødvendige cookies for innlogging og valg. Se{' '}
                <a
                  href="/informasjonskapsler"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  vår cookie-erklæring
                </a>{' '}
                for detaljer.
              </p>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                7. Sikkerhet
              </h2>
              <p className="mt-6">
                All kommunikasjon krypteres (TLS/SSL). Sensitiv data lagres
                kryptert (AES‑256‑CBC). Tilgang er begrenset til autorisert
                personell.
              </p>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                8. Kontakt
              </h2>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">Iniva AS</p>
                <p>Færder, Norge</p>
                <p>
                  E-post:{' '}
                  <a
                    href="mailto:hello@iniva.no"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    hello@iniva.no
                  </a>
                </p>
                <p>Telefon: +47 457 86 435</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
