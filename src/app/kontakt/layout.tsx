import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt oss',
  description:
    'Har du spørsmål om PCKasse for WooCommerce? Ta kontakt med oss, så hjelper vi deg videre. Send oss en melding eller ring oss.',
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
