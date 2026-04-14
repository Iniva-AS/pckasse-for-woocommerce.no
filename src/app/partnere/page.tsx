import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PartnerCard } from '@/components/PartnerCard'
import { partners } from '@/data/partners'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Våre partnere - PCKasse for WooCommerce',
  description:
    'Våre partnere er erfarne fagfolk som kan hjelpe deg med å komme i gang, sette opp integrasjonen, og gi løpende support.',
}

export default function PartnereListPage() {
  // Sort partners: featured first, then alphabetically
  const sortedPartners = [...partners].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return a.title.localeCompare(b.title, 'no')
  })

  return (
    <>
      <Header />
      <div>
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-medium text-[var(--color-text-secondary)]">
            Få profesjonell hjelp til oppsett
          </p>
          <h1 className="mt-2 font-display text-5xl tracking-tight text-[var(--color-text-primary)] sm:text-7xl">
            Våre partnere
          </h1>
          <p className="mt-6 text-lg text-[var(--color-text-secondary)]">
            Våre partnere er erfarne fagfolk som kan hjelpe deg med å komme i
            gang, sette opp integrasjonen, og gi løpende support.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20">
          {sortedPartners.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {sortedPartners.map((partner) => (
                <PartnerCard
                  key={partner.slug}
                  title={partner.title}
                  slug={partner.slug}
                  logo={partner.logo}
                  description={partner.description}
                  location={partner.location}
                  services={partner.services}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-[var(--color-text-secondary)]">
              Vi legger til partnere fortløpende. Sjekk tilbake snart!
            </p>
          )}
        </div>

        {/* CTA Section - Become a Partner */}
        <div className="relative isolate mt-32 overflow-hidden rounded-2xl bg-[var(--color-brand)] px-6 py-24 sm:px-24 xl:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl tracking-tight text-white sm:text-5xl">
              Bli implementeringspartner
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
              Er du utvikler eller byrå som jobber med WooCommerce og
              ERP-integrasjoner? Bli en offisiell PCKasse for
              WooCommerce-partner og få tilgang til teknisk støtte, salgsmateriale
              og provisjonsordninger.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="mailto:hello@iniva.no?subject=Partnerskap - PCKasse for WooCommerce"
                className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[var(--color-brand)] shadow-sm transition hover:bg-gray-100"
              >
                Søk om partnerskap
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
