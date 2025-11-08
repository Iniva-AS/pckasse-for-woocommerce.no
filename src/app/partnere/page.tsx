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
      <div className="bg-white">
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold text-indigo-600">
            Få profesjonell hjelp til oppsett
          </p>
          <h1 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Våre partnere
          </h1>
          <p className="mt-6 text-lg text-gray-600">
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
            <p className="text-center text-gray-600">
              Vi legger til partnere fortløpende. Sjekk tilbake snart!
            </p>
          )}
        </div>

        {/* CTA Section - Become a Partner */}
        <div className="relative isolate mt-32 overflow-hidden rounded-3xl bg-gray-900 px-6 py-24 shadow-2xl sm:px-24 xl:py-32">
          {/* Decorative background gradient */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#gradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                id="gradient"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#4f46e5" />
                <stop offset={1} stopColor="#ec4899" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Bli implementeringspartner
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300">
              Er du utvikler eller byrå som jobber med WooCommerce og
              ERP-integrasjoner? Bli en offisiell PCKasse for
              WooCommerce-partner og få tilgang til teknisk støtte, salgsmateriale
              og provisjonsordninger.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="mailto:hello@iniva.no?subject=Partnerskap - PCKasse for WooCommerce"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-100"
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
