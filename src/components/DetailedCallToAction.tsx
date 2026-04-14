import Image from 'next/image'

import dashboardScreenshot from '@/images/screenshots/real-time-dashboard.png'

export function DetailedCallToAction() {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-[var(--color-brand)] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="font-display text-3xl tracking-tight text-balance text-white sm:text-4xl">
              Kom i gang på 5 minutter
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-white/70">
              Koble PCKasse til WooCommerce og få automatisk synkronisering av
              produkter, ordre, varelager og kunder. Alt styres fra ett
              dashboard – enkelt, raskt og effektivt.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="https://app.pckasse-for-woocommerce.no"
                className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[var(--color-brand)] shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start gratis prøveperiode
              </a>
              <a
                href="/kontakt"
                className="text-sm/6 font-semibold text-white hover:text-white/80"
              >
                Kontakt oss
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              width={1824}
              height={1080}
              src={dashboardScreenshot}
              alt="PCKasse dashboard screenshot"
              className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
