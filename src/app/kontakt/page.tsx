'use client'

import { useState, useTransition } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { submitContactForm } from './actions'
import { trackContactFormSubmit } from '@/lib/tracking'

export default function Contact() {
  const [isPending, startTransition] = useTransition()
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | null
    text: string
  }>({ type: null, text: '' })

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatusMessage({ type: null, text: '' })

    const form = event.currentTarget
    const formData = new FormData(form)

    startTransition(async () => {
      const result = await submitContactForm(formData)

      if (result.success) {
        setStatusMessage({ type: 'success', text: result.message })
        form.reset()
        // Track successful form submission
        trackContactFormSubmit('success')
      } else {
        setStatusMessage({ type: 'error', text: result.message })
        // Track failed form submission
        trackContactFormSubmit('error', result.message)
      }
    })
  }

  return (
    <>
      <Header />
      <div className="relative isolate">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden border-r border-[var(--color-border)] lg:w-1/2">
              </div>
              <h2 className="font-display text-4xl tracking-tight text-pretty text-[var(--color-text-primary)] sm:text-5xl">
                Kontakt oss
              </h2>
              <p className="mt-6 text-lg/8 text-[var(--color-text-secondary)]">
                Har du spørsmål om PCKasse for WooCommerce? Vi hjelper deg
                gjerne med å komme i gang eller svarer på spørsmål om tjenesten.
              </p>
              <dl className="mt-10 space-y-4 text-base/7 text-[var(--color-text-secondary)]">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Adresse</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      data-slot="icon"
                      aria-hidden="true"
                      className="h-7 w-6 text-[var(--color-text-muted)]"
                    >
                      <path
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </dt>
                  <dd>
                    Iniva AS
                    <br />
                    Færder, Norge
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telefon</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      data-slot="icon"
                      aria-hidden="true"
                      className="h-7 w-6 text-[var(--color-text-muted)]"
                    >
                      <path
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </dt>
                  <dd>
                    <a href="tel:+4745786435" className="hover:text-[var(--color-text-primary)]">
                      +47 457 86 435
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">E-post</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      data-slot="icon"
                      aria-hidden="true"
                      className="h-7 w-6 text-[var(--color-text-muted)]"
                    >
                      <path
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </dt>
                  <dd>
                    <a
                      href="mailto:hello@iniva.no"
                      className="hover:text-[var(--color-text-primary)]"
                    >
                      hello@iniva.no
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              {statusMessage.type && (
                <div
                  className={`mb-6 rounded-md px-4 py-3 ${
                    statusMessage.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  <p className="text-sm font-medium">{statusMessage.text}</p>
                </div>
              )}
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {/* Honeypot field for bot detection - hidden from real users */}
                <div style={{ position: 'absolute', left: '-9999px' }}>
                  <label htmlFor="website">
                    Website (leave this field empty)
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-semibold text-[var(--color-text-primary)]"
                  >
                    Fornavn
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      type="text"
                      name="first-name"
                      autoComplete="given-name"
                      required
                      disabled={isPending}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-[var(--color-text-primary)] outline-1 -outline-offset-1 outline-[var(--color-border)] placeholder:text-[var(--color-text-muted)] focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-brand)] disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-semibold text-[var(--color-text-primary)]"
                  >
                    Etternavn
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      type="text"
                      name="last-name"
                      autoComplete="family-name"
                      required
                      disabled={isPending}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-[var(--color-text-primary)] outline-1 -outline-offset-1 outline-[var(--color-border)] placeholder:text-[var(--color-text-muted)] focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-brand)] disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold text-[var(--color-text-primary)]"
                  >
                    E-post
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      disabled={isPending}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-[var(--color-text-primary)] outline-1 -outline-offset-1 outline-[var(--color-border)] placeholder:text-[var(--color-text-muted)] focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-brand)] disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm/6 font-semibold text-[var(--color-text-primary)]"
                  >
                    Telefonnummer
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="phone-number"
                      type="tel"
                      name="phone-number"
                      autoComplete="tel"
                      disabled={isPending}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-[var(--color-text-primary)] outline-1 -outline-offset-1 outline-[var(--color-border)] placeholder:text-[var(--color-text-muted)] focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-brand)] disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-semibold text-[var(--color-text-primary)]"
                  >
                    Melding
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      disabled={isPending}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-[var(--color-text-primary)] outline-1 -outline-offset-1 outline-[var(--color-border)] placeholder:text-[var(--color-text-muted)] focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-brand)] disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  disabled={isPending}
                  className="rounded-full bg-[var(--color-brand)] px-4 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[var(--color-brand-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPending ? 'Sender...' : 'Send melding'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer showDetailedCTA={true} />
    </>
  )
}
