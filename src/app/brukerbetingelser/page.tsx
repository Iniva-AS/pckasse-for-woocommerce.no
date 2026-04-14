import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brukerbetingelser',
  description:
    'Les vilkårene som regulerer din bruk av PCKasse for WooCommerce. Informasjon om tjenesten, betaling, personvern og dine rettigheter som bruker.',
}

export default function Brukerbetingelser() {
  return (
    <>
      <Header />
      <main>
        <div className="px-6 py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-base/7 text-[var(--color-text-secondary)]">
            <p className="text-base/7 font-semibold text-[var(--color-text-secondary)]">
              Juridisk
            </p>
            <h1 className="mt-2 text-4xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)] sm:text-5xl">
              Brukerbetingelser
            </h1>
            <p className="mt-6 text-xl/8">
              Disse vilkårene regulerer din bruk av PCKasse for WooCommerce,
              levert av Iniva AS (org.nr. 935765641).
            </p>
            <div className="mt-10 max-w-2xl text-[var(--color-text-secondary)]">
              <p>
                Ved å opprette konto eller bruke tjenesten, aksepterer du disse
                vilkårene.
              </p>

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                1. Tjenesten
              </h2>
              <p className="mt-6">
                PCKasse for WooCommerce tilbyr synkronisering av blandt annet
                produkter, kunder, ordre og lager mellom WooCommerce og PCK. Du
                konfigurerer integrasjonen selv via dashboardet.
              </p>

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                2. Abonnement
              </h2>
              <p className="mt-6">
                Tjenesten tilbys som abonnement (månedlig/årlig). Første
                integrasjon har 14 dagers gratis prøve. Pris og plan fremgår på
                nettsiden. Endringer varsles 30 dager før ikrafttredelse.
              </p>

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                3. Betaling
              </h2>
              <p className="mt-6">
                Betaling skjer via Stripe eller faktura. Ved manglende betaling
                kan kontoen suspenderes. Forsinkelsesrente påløper etter lov.
              </p>

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                4. Angrerett og oppsigelse
              </h2>
              <p className="mt-6">
                Forbrukere har 14 dagers angrerett. Abonnement kan sies opp når
                som helst og løper ut perioden. Ingen refusjon for ubrukt tid.
              </p>

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                5. Brukeransvar
              </h2>
              <p className="mt-6">Du skal:</p>
              <ul role="list" className="mt-6 max-w-xl space-y-2 text-[var(--color-text-secondary)]">
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>Oppgi korrekte opplysninger</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>Sikre gyldige API-nøkler til tilknyttede systemer</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>Overholde GDPR i egen butikk</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>
                    Ikke misbruke tjenesten eller forsøke uautorisert tilgang
                  </span>
                </li>
              </ul>

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                6. Immaterielle rettigheter
              </h2>
              <p className="mt-6">
                Programvaren og innholdet eies av Iniva AS. Du får en begrenset
                lisens til bruk. Dine data forblir dine.
              </p>

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                7. Support og tilgjengelighet
              </h2>
              <p className="mt-6">
                Support gis via e-post. Vi streber etter høy oppetid, men
                garanterer ikke uavbrutt drift.
              </p>

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                8. Ansvarsbegrensning
              </h2>
              <p className="mt-6">
                Tjenesten leveres «som den er». Vårt ansvar er begrenset til det
                du har betalt siste 12 måneder. Vi er ikke ansvarlig for
                indirekte tap, tapt fortjeneste eller tredjepartsfeil.
              </p>

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                9. Oppsigelse og sletting
              </h2>
              <p className="mt-6">
                Ved avslutning slettes kontoen etter 6 måneder (soft delete).
                Logger beholdes inntil 12 måneder for revisjon. Dataeksport kan
                fås ved forespørsel.
              </p>

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                10. Endringer
              </h2>
              <p className="mt-6">
                Endringer i vilkår varsles 30 dager før de trer i kraft.
                Fortsatt bruk betyr aksept.
              </p>

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                11. Personvern og roller
              </h2>
              <ul role="list" className="mt-6 max-w-xl space-y-3 text-[var(--color-text-secondary)]">
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>
                    <strong>Du</strong> er behandlingsansvarlig for dine
                    kundedata.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1">•</span>
                  <span>
                    <strong>Vi</strong> er databehandler. Se{' '}
                    <a
                      href="/databehandleravtale"
                      className="font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-brand-hover)]"
                    >
                      databehandleravtalen
                    </a>{' '}
                    for detaljer.
                  </span>
                </li>
              </ul>
              <p className="mt-6">
                For kontodata, fakturering og drift er{' '}
                <strong>Iniva AS behandlingsansvarlig</strong>.
              </p>

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                12. Lovvalg
              </h2>
              <p className="mt-6">
                Norsk lov gjelder. Tvister avgjøres i Vestfold tingrett.
              </p>

              <h2 className="mt-16 text-3xl font-display font-semibold tracking-tight text-pretty text-[var(--color-text-primary)]">
                13. Kontakt
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
