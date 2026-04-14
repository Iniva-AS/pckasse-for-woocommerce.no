'use client'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { trackCTAClick } from '@/lib/tracking'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden border-t border-[var(--color-border)] py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Klar til å komme i gang?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-[var(--color-text-secondary)]">
            Test PCKasse for WooCommerce gratis i 14 dager. <br />
            Kom i gang på 5 minutter.
          </p>
          <Button
            href="https://app.pckasse-for-woocommerce.no"
            className="mt-10"
            onClick={() =>
              trackCTAClick('call-to-action', 'Start gratis prøveperiode')
            }
          >
            Start gratis prøveperiode
          </Button>
        </div>
      </Container>
    </section>
  )
}
