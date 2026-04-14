'use client'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { trackCTAClick } from '@/lib/tracking'

export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-3xl tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-7xl">
        PCKasse og WooCommerce.{' '}
        <span className="relative whitespace-nowrap">
          <span className="relative">Perfekt synkronisert</span>
        </span>
        .
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-[var(--color-text-secondary)]">
        Bruk PCKasse‑data til å bygge en unik WooCommerce‑butikk. Vi
        synkroniserer produkter, ordre, lager og kunder – automatisk.
      </p>
      <div className="mt-10 flex flex-col items-center gap-y-6">
        <div className="flex justify-center gap-x-6">
          <Button
            href="https://app.pckasse-for-woocommerce.no"
            onClick={() => trackCTAClick('hero', 'Start gratis prøveperiode')}
          >
            Start gratis prøveperiode
          </Button>
          <Button href="/kontakt" variant="outline">
            Kontakt oss
          </Button>
        </div>
        <p className="mt-2 mb-8 text-sm text-[var(--color-text-muted)]">
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
    </Container>
  )
}
