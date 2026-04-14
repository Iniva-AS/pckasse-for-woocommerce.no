import { type Metadata } from 'next'
import { DM_Serif_Display, Funnel_Display } from 'next/font/google'
import Script from 'next/script'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { CookieConsent } from '@/components/CookieConsent'
import { GoogleScripts } from '@/components/GoogleScripts'

export const metadata: Metadata = {
  title: {
    template: '%s - PCKasse for WooCommerce',
    default: 'PCKasse og WooCommerce. Perfekt synkronisert.',
  },
  description:
    'Ta full kontroll over din nettbutikk, og lag den akkurat slik du vil. Vi synkroniserer produkter, ordre, varelager og kunder helt automatisk – så du kan styre alt fra PCKasse.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/favicon-large.png',
  },
}

const funnelDisplay = Funnel_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-funnel-display',
})

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-serif-display',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="no"
      className={clsx(
        'h-full scroll-smooth bg-[var(--color-surface)] antialiased',
        funnelDisplay.variable,
        dmSerifDisplay.variable,
      )}
    >
      <head>
        {/* Plausible Analytics */}
        <Script
          src="https://plausible.io/js/pa-JLfY7cPDKb1HOX1F9eRAa.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
      </head>
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        {/* Google Consent Mode and Tag Manager */}
        <GoogleScripts />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4455R3H"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}

        {/* Cookie Consent Banner */}
        <CookieConsent />
      </body>
    </html>
  )
}
