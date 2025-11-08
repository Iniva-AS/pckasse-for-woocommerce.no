import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Databehandleravtale',
  description:
    'Databehandleravtale mellom Iniva AS og deg som behandlingsansvarlig. Informasjon om hvordan vi behandler personopplysninger i PCKasse for WooCommerce.',
}

export default function Databehandleravtale() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-white px-6 py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
            <p className="text-base/7 font-semibold text-indigo-600">
              Juridisk
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Databehandleravtale
            </h1>
            <p className="mt-6 text-xl/8">
              Denne avtalen regulerer hvordan Iniva AS (databehandler) behandler
              personopplysninger på vegne av deg (behandlingsansvarlig) i
              forbindelse med PCKasse for WooCommerce.
            </p>

            <div className="mt-10 max-w-2xl text-gray-600">
              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                1. Formål
              </h2>
              <p className="mt-6">
                Behandling av data som kreves for synkronisering av produkter,
                kunder, lager og ordrer mellom WooCommerce og PCK, samt drift,
                sikkerhet og support.
              </p>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                2. Kategorier av data
              </h2>
              <ul role="list" className="mt-6 max-w-xl space-y-2 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>Kundedata (navn, adresser, e-post, telefon)</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>Ordredata (produktdetaljer, leveringsinfo)</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>Brukerkontodata (innlogging, tokens)</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>Tekniske data (API-nøkler, logger)</span>
                </li>
              </ul>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                3. Registrerte
              </h2>
              <ul role="list" className="mt-6 max-w-xl space-y-2 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>Dine kunder (fra WooCommerce)</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>Brukere i din organisasjon</span>
                </li>
              </ul>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                4. Underleverandører
              </h2>

              <div className="mt-8 overflow-hidden rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-700 uppercase">
                        Leverandør
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-700 uppercase">
                        Formål
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-700 uppercase">
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
                        Infrastruktur
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        EU/Tyskland
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Google Cloud Storage
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Backups
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
                        USA (SCC)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Brevo
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        E-post
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">EU</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6">
                Alle underleverandører tilbyr GDPR-kompatible vilkår. Endringer
                varsles i rimelig tid.
              </p>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                5. Sikkerhet
              </h2>
              <ul role="list" className="mt-6 max-w-xl space-y-3 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>Kryptering (AES‑256‑CBC, TLS/SSL)</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>Tilgangsbegrensning og logging</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>Regelmessige sikkerhetsoppdateringer</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>Taushetsplikt for ansatte og innleide</span>
                </li>
              </ul>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                6. Lagring og sletting
              </h2>
              <ul role="list" className="mt-6 max-w-xl space-y-2 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>
                    Konto og integrasjonsdata slettes (soft delete) ved
                    avslutning
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>
                    Logger beholdes maks 12 måneder for revisjon og feilsøking
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>Permanent sletting kan bestilles ved henvendelse</span>
                </li>
              </ul>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                7. Brudd og varsling
              </h2>
              <p className="mt-6">
                Eventuelle brudd på personvern rapporteres til deg innen 48
                timer etter oppdagelse.
              </p>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                8. Rettigheter og assistanse
              </h2>
              <p className="mt-6">
                Vi bistår deg ved forespørsel om innsyn, sletting eller retting.
                Kontakt{' '}
                <a
                  href="mailto:hello@iniva.no"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  hello@iniva.no
                </a>
                .
              </p>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                9. Revisjon
              </h2>
              <p className="mt-6">
                Du kan gjennomføre revisjon med 30 dagers varsel. Dette skal
                ikke unødig påvirke driften.
              </p>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                10. Varighet
              </h2>
              <p className="mt-6">
                Avtalen gjelder så lenge tjenesten brukes. Opphører ved
                avslutning og sletting av konto.
              </p>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                11. Kontakt
              </h2>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">Iniva AS</p>
                <p>Org.nr. 935765641</p>
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
