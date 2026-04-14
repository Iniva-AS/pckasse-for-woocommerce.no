import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personvernerklæring',
  description:
    'Les om hvordan Iniva AS samler inn, bruker og beskytter personopplysninger i forbindelse med PCKasse for WooCommerce. Vi følger GDPR og norsk personopplysningslov.',
}

export default function Personvern() {
  return (
    <>
      <Header />
      <main>
        <div className="px-6 py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-base/7 text-[var(--color-text-secondary)]">
            <p className="text-base/7 font-semibold text-[var(--color-text-secondary)]">
              Personvern
            </p>
            <h1 className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)] sm:text-5xl">
              Personvernerklæring
            </h1>
            <p className="mt-6 text-xl/8">
              Vi tar personvernet ditt på alvor. Denne erklæringen forklarer
              hvordan vi i Iniva AS (org.nr. 935765641) samler inn, bruker og
              beskytter personopplysninger i forbindelse med PCKasse for
              WooCommerce.
            </p>
            <div className="mt-10 max-w-2xl text-[var(--color-text-secondary)]">
              <p>
                Vi følger gjeldende personvernlovgivning (GDPR og norsk
                personopplysningslov) og behandler kun data som er nødvendige
                for å levere og forbedre tjenesten.
              </p>

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                1. Hvilke data vi samler inn
              </h2>
              <ul role="list" className="mt-6 max-w-xl space-y-3 text-[var(--color-text-secondary)]">
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>
                    <strong className="font-semibold text-[var(--color-text-primary)]">
                      Kontodata:
                    </strong>{' '}
                    Navn, e-post, organisasjonsnavn og innloggingsinformasjon.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>
                    <strong className="font-semibold text-[var(--color-text-primary)]">
                      Integrasjonsdata:
                    </strong>{' '}
                    Kundedata, ordrer og produkter som synkroniseres mellom
                    WooCommerce og PCK.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>
                    <strong className="font-semibold text-[var(--color-text-primary)]">
                      Tekniske data:
                    </strong>{' '}
                    IP-adresser, logger og feilmeldinger for drift og sikkerhet.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>
                    <strong className="font-semibold text-[var(--color-text-primary)]">
                      Betalingsdata:
                    </strong>{' '}
                    Håndteres av Stripe (Iniva lagrer ingen kortopplysninger).
                  </span>
                </li>
              </ul>

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                2. Formål og behandlingsgrunnlag
              </h2>
              <p className="mt-6">Vi behandler data for å:</p>
              <ul role="list" className="mt-6 max-w-xl space-y-2 text-[var(--color-text-secondary)]">
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

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                3. Lagringstid
              </h2>
              <p className="mt-6">
                Data lagres så lenge du har konto. Når kontoen slettes:
              </p>
              <ul role="list" className="mt-6 max-w-xl space-y-2 text-[var(--color-text-secondary)]">
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

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                4. Deling og underleverandører
              </h2>
              <p className="mt-6">Vi bruker følgende databehandlere:</p>

              <div className="mt-8 overflow-hidden rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-[var(--color-brand-light)]">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--color-text-secondary)]">
                        Leverandør
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--color-text-secondary)]">
                        Formål
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--color-text-secondary)]">
                        Lokasjon
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-transparent">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-[var(--color-text-primary)]">
                        Hetzner Cloud
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                        Serverhosting
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                        EU/Tyskland
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-[var(--color-text-primary)]">
                        Google Cloud
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                        Backups og medielagring
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">EU</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-[var(--color-text-primary)]">
                        Stripe
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                        Betaling
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                        USA (SCC-avtale)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-[var(--color-text-primary)]">
                        Brevo
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                        E-postutsending
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">EU</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-[var(--color-text-primary)]">
                        Sentry
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                        Feilsporing
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                        USA (SCC-avtale)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6">
                Ingen data selges eller brukes til tredjeparts markedsføring.
              </p>

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                5. Dine rettigheter
              </h2>
              <p className="mt-6">
                Du kan kreve innsyn, retting, sletting og dataportabilitet ved å
                kontakte oss på{' '}
                <a
                  href="mailto:hello@iniva.no"
                  className="font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-brand-hover)]"
                >
                  hello@iniva.no
                </a>
                . Vi svarer innen 30 dager.
              </p>

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                6. Informasjonskapsler
              </h2>
              <p className="mt-6">
                Vi bruker nødvendige cookies for innlogging og valg. Se{' '}
                <a
                  href="/informasjonskapsler"
                  className="font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-brand-hover)]"
                >
                  vår cookie-erklæring
                </a>{' '}
                for detaljer.
              </p>

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                7. Sikkerhet
              </h2>
              <p className="mt-6">
                All kommunikasjon krypteres (TLS/SSL). Sensitiv data lagres
                kryptert (AES‑256‑CBC). Tilgang er begrenset til autorisert
                personell.
              </p>

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                8. Kontakt
              </h2>
              <div className="mt-6">
                <p className="font-semibold text-[var(--color-text-primary)]">Iniva AS</p>
                <p>Færder, Norge</p>
                <p>
                  E-post:{' '}
                  <a
                    href="mailto:hello@iniva.no"
                    className="font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-brand-hover)]"
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
