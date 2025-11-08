import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
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
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
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
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
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

        {/* Plausible Analytics */}
        <Script
          src="https://plausible.io/js/pa-yF2_CzWn08nQwB-SDqAWy.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`
            window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
            plausible.init()
          `}
        </Script>

        {children}

        {/* Cookie Consent Banner */}
        <CookieConsent />
      </body>
    </html>
  )
}
