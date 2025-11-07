'use client'

import { useId } from 'react'
import Image from 'next/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'

const steps = [
  {
    name: 'PCKasse → WooCommerce',
    description:
      'Produkter, priser og lager synkroniseres automatisk. Jobb fra PCKasse – butikken oppdateres i sanntid.',
    icon: ProductIcon,
  },
  {
    name: 'WooCommerce → PCKasse',
    description:
      'Nye ordre flyter automatisk til PCKasse. Fullfør ordren der, og WooCommerce oppdateres umiddelbart.',
    icon: OrderIcon,
  },
  {
    name: 'Automatisk synkronisering',
    description:
      'Alt skjer i bakgrunnen. Sanntidsoppdateringer og sikkerhetskopi hver 15. minutt.',
    icon: RealtimeIcon,
  },
]

function ProductIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()
  return (
    <>
      <defs>
        <linearGradient
          id={id}
          x1="11.5"
          y1={18}
          x2={36}
          y2="15.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".194" stopColor="#fff" />
          <stop offset={1} stopColor="#6692F1" />
        </linearGradient>
      </defs>
      <path
        d="M3 3h18v18H3V3z"
        stroke={`url(#${id})`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M9 3v18M15 3v18M3 9h18M3 15h18"
        stroke={`url(#${id})`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  )
}

function OrderIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()
  return (
    <>
      <defs>
        <linearGradient
          id={id}
          x1="11.5"
          y1={18}
          x2={36}
          y2="15.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".194" stopColor="#fff" />
          <stop offset={1} stopColor="#6692F1" />
        </linearGradient>
      </defs>
      <path
        d="M9 3L5 7v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-4-4H9z"
        stroke={`url(#${id})`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M9 3v4H15V3"
        stroke={`url(#${id})`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  )
}

function RealtimeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()
  return (
    <>
      <defs>
        <linearGradient
          id={id}
          x1="11.5"
          y1={18}
          x2={36}
          y2="15.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".194" stopColor="#fff" />
          <stop offset={1} stopColor="#6692F1" />
        </linearGradient>
      </defs>
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke={`url(#${id})`}
        strokeWidth={2}
        fill="none"
      />
      <path
        d="M12 6v6l4 2"
        stroke={`url(#${id})`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  )
}

function PCKasseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={id}
          x1="24"
          y1="4"
          x2="24"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      <rect x="6" y="14" width="36" height="26" rx="2" fill={`url(#${id})`} />
      <path
        d="M14 14V10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4"
        stroke={`url(#${id})`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="27" r="3" fill="white" opacity="0.9" />
      <rect x="12" y="32" width="10" height="4" rx="1" fill="white" opacity="0.7" />
      <rect x="26" y="32" width="10" height="4" rx="1" fill="white" opacity="0.7" />
    </svg>
  )
}

function WooCommerceIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={id}
          x1="24"
          y1="8"
          x2="24"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#6D28D9" />
        </linearGradient>
      </defs>
      <path
        d="M8 12l4-4h24l4 4v28l-4 4H12l-4-4V12z"
        fill={`url(#${id})`}
      />
      <circle cx="20" cy="26" r="3" fill="white" opacity="0.9" />
      <circle cx="28" cy="26" r="3" fill="white" opacity="0.9" />
      <path
        d="M12 18h24M16 34h16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  )
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-label="Slik fungerer synkroniseringen"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 opacity-20"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Slik fungerer synkroniseringen
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Jobb fra PCKasse og se butikken oppdatere seg automatisk.
            Fullfør ordre i PCKasse og WooCommerce følger etter.
          </p>
        </div>

        {/* Three step cards */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.name}
                className="flex flex-col rounded-3xl bg-white p-8 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5"
              >
                <dt className="flex flex-col gap-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/50">
                    <svg aria-hidden="true" className="h-10 w-10" fill="none">
                      <step.icon />
                    </svg>
                  </div>
                  <span className="font-display text-xl font-semibold text-slate-900">
                    {step.name}
                  </span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">{step.description}</p>
                  <p className="mt-6">
                    <span className="inline-flex items-center gap-x-2 text-sm font-semibold text-blue-600">
                      Steg {index + 1}
                    </span>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Data flow visualization */}
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24 space-y-8">
          {/* PCKasse to WooCommerce - Products */}
          <div className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5">
            <h3 className="text-center font-display text-xl font-semibold text-slate-900 mb-8">
              Fyll nettbutikken din direkte fra PCKasse
            </h3>
            <div className="flex items-center justify-center gap-6">
              <div className="flex flex-col items-center gap-3 w-32">
                <div className="relative flex h-24 w-24 items-center justify-center">
                  <PCKasseIcon className="h-full w-full drop-shadow-lg" />
                </div>
                <span className="text-sm font-semibold text-slate-900">PCKasse</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1 max-w-md">
                <svg
                  className="h-8 w-full text-blue-600"
                  fill="none"
                  viewBox="0 0 200 32"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="arrow1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 16h192M184 8l8 8-8 8"
                    stroke="url(#arrow1)"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-semibold text-slate-700 bg-blue-50 px-4 py-1.5 rounded-full">
                  Produkter, priser, lager
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 w-32">
                <div className="relative flex h-24 w-24 items-center justify-center">
                  <WooCommerceIcon className="h-full w-full drop-shadow-lg" />
                </div>
                <span className="text-sm font-semibold text-slate-900">WooCommerce</span>
              </div>
            </div>
          </div>

          {/* Bidirectional order flow */}
          <div className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5">
            <h3 className="text-center font-display text-xl font-semibold text-slate-900 mb-8">
              Fullfør alle ordre i PCKasse – WooCommerce følger automatisk
            </h3>
            <div className="flex items-center justify-center gap-6">
              <div className="flex flex-col items-center gap-3 w-32">
                <div className="relative flex h-24 w-24 items-center justify-center">
                  <PCKasseIcon className="h-full w-full drop-shadow-lg" />
                </div>
                <span className="text-sm font-semibold text-slate-900">PCKasse</span>
              </div>
              <div className="flex flex-col items-center gap-4 flex-1 max-w-md">
                {/* New orders to PCKasse */}
                <div className="flex flex-col items-center gap-2 w-full">
                  <svg
                    className="h-8 w-full text-blue-600"
                    fill="none"
                    viewBox="0 0 200 32"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="arrow2" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M200 16H8M16 8l-8 8 8 8"
                      stroke="url(#arrow2)"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-slate-700 bg-blue-50 px-4 py-1.5 rounded-full">
                    Nye ordre
                  </span>
                </div>
                {/* Completed orders to WooCommerce */}
                <div className="flex flex-col items-center gap-2 w-full">
                  <svg
                    className="h-8 w-full text-blue-600"
                    fill="none"
                    viewBox="0 0 200 32"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="arrow3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 16h192M184 8l8 8-8 8"
                      stroke="url(#arrow3)"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-slate-700 bg-blue-50 px-4 py-1.5 rounded-full">
                    Fullførte ordre
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 w-32">
                <div className="relative flex h-24 w-24 items-center justify-center">
                  <WooCommerceIcon className="h-full w-full drop-shadow-lg" />
                </div>
                <span className="text-sm font-semibold text-slate-900">WooCommerce</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
