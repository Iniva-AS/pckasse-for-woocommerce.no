import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Informasjonskapsler',
  description:
    'Informasjon om hvordan PCKasse for WooCommerce bruker informasjonskapsler (cookies). Les om nødvendige, funksjonelle og analysekapsler vi benytter.',
}

export default function Informasjonskapsler() {
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
              Informasjonskapsler (Cookies)
            </h1>
            <p className="mt-6 text-xl/8">
              Denne siden forklarer hvordan PCKasse for WooCommerce bruker
              informasjonskapsler.
            </p>

            <div className="mt-10 max-w-2xl text-gray-600">
              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                Hva er cookies?
              </h2>
              <p className="mt-6">
                Små tekstfiler som lagres i nettleseren for å sikre funksjon,
                analyse og brukeropplevelse.
              </p>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                Våre cookies
              </h2>

              <div className="mt-8 overflow-hidden rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                        Navn
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                        Formål
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                        Varighet
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                        Type
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        session_id
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Holder deg innlogget
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Sesjon
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Nødvendig
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        cookie_consent
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Lagrer samtykkevalg
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">1 år</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Nødvendig
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        _ga, _gid
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Google Analytics
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        2 år / 24t
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Analyse
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">_fbp</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Facebook Pixel
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        3 mnd
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Markedsføring
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                Rettslig grunnlag
              </h2>
              <ul role="list" className="mt-6 max-w-xl space-y-2 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>
                    Nødvendige cookies: <strong>kontrakt/berettiget interesse</strong>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>
                    Analyse og markedsføring: <strong>samtykke</strong>
                  </span>
                </li>
              </ul>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                Kontroll og reservasjon
              </h2>
              <p className="mt-6">
                Du kan endre cookie-innstillingene i banneret nederst på siden
                eller via nettleserens innstillinger.
              </p>

              <p className="mt-6">Se også:</p>
              <ul role="list" className="mt-4 max-w-xl space-y-2">
                <li>
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Google Analytics Opt-out
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/help/568137493302217"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Facebook Ad Preferences
                  </a>
                </li>
              </ul>

              <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                Kontakt
              </h2>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">Iniva AS</p>
                <p>
                  E-post:{' '}
                  <a
                    href="mailto:hello@iniva.no"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    hello@iniva.no
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
