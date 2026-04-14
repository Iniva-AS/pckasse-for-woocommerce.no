'use client'

import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { trackCTAClick } from '@/lib/tracking'

function CheckIcon({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-6 w-6 flex-none fill-current stroke-current',
        className,
      )}
      {...props}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  href,
  features,
  featured = false,
}: {
  name: string
  price: string
  description: string
  href: string
  features: Array<string>
  featured?: boolean
}) {
  return (
    <section
      className={clsx(
        'flex flex-col rounded-2xl border px-6 py-8 sm:px-8',
        featured
          ? 'order-first border-[var(--color-brand)] bg-white lg:order-0'
          : 'border-[var(--color-border)] bg-white',
      )}
    >
      <h3 className="mt-5 font-display text-lg text-[var(--color-text-primary)]">
        {name}
      </h3>
      <p className="mt-2 text-base text-[var(--color-text-secondary)]">
        {description}
      </p>
      <p className="order-first font-display text-5xl font-light tracking-tight text-[var(--color-text-primary)]">
        {price}
      </p>
      <ul
        role="list"
        className="order-last mt-10 flex flex-col gap-y-3 text-sm text-[var(--color-text-secondary)]"
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon className="text-[var(--color-brand)]" />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        href={href}
        variant={featured ? 'solid' : 'outline'}
        color="slate"
        className="mt-8"
        aria-label={`Start gratis prøveperiode med ${name}-planen for ${price}`}
        onClick={() =>
          trackCTAClick('pricing', `Start gratis prøveperiode - ${name}`, {
            plan: name,
            price,
          })
        }
      >
        Start gratis prøveperiode
      </Button>
    </section>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Priser"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Enkle og forutsigbare priser.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Vi begrenser kun antall ordre og supportnivå. Ubegrenset produkter,
            kunder og brukere på alle planer.
          </p>
          <p className="mt-4 text-sm text-[var(--color-text-muted)]">
            <svg
              className="mr-1.5 inline-block h-4 w-4 text-[var(--color-brand)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            14 dagers gratis prøveperiode for din første integrasjon
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          <Plan
            name="Start"
            price="750 kr/mnd"
            description="Perfekt for nyetablerte og mindre bedrifter."
            href="https://app.pckasse-for-woocommerce.no"
            features={[
              'Opptil 200 ordre per måned',
              'Ca. 2,70 kr per ordre',
              'E-post support',
              'Ubegrenset produkter',
              'Ubegrenset kunder',
              'Full integrasjon med PCKasse',
              'Spar 1 800 kr med årlig betaling',
            ]}
          />
          <Plan
            featured
            name="Vekst"
            price="1 950 kr/mnd"
            description="For voksende bedrifter med stabil ordreflyt."
            href="https://app.pckasse-for-woocommerce.no"
            features={[
              'Opptil 2 000 ordre per måned',
              'Under 1 kr per ordre',
              'E-post support',
              'Ubegrenset produkter',
              'Ubegrenset kunder',
              'Full integrasjon med PCKasse',
              'Avansert ordre-synkronisering',
              'Spar 4 680 kr med årlig betaling',
            ]}
          />
          <Plan
            name="Skala"
            price="4 950 kr/mnd"
            description="For etablerte bedrifter med høyt ordrevolum."
            href="https://app.pckasse-for-woocommerce.no"
            features={[
              'Ubegrenset antall ordre',
              'Beste pris for høyt volum',
              'E-post- og telefonsupport',
              'Ubegrenset produkter',
              'Ubegrenset kunder',
              'Full integrasjon med PCKasse',
              'Dedikert kontaktperson',
              'Spar 11 880 kr med årlig betaling',
            ]}
          />
        </div>
        <p className="mt-8 text-center text-sm text-[var(--color-text-muted)]">
          Alle priser er eks. mva
        </p>
      </Container>
    </section>
  )
}
