import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PartnerContact } from '@/components/PartnerContact'
import { partners } from '@/data/partners'
import type { Metadata } from 'next'

interface PartnerPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return partners.map((partner) => ({
    slug: partner.slug,
  }))
}

export async function generateMetadata({
  params,
}: PartnerPageProps): Promise<Metadata> {
  const { slug } = await params
  const partner = partners.find((p) => p.slug === slug)

  if (!partner) {
    return {
      title: 'Partner ikke funnet',
    }
  }

  return {
    title: `${partner.title} - PCKasse for WooCommerce Partner`,
    description: partner.description,
  }
}

export default async function PartnerPage({ params }: PartnerPageProps) {
  const { slug } = await params
  const partner = partners.find((p) => p.slug === slug)

  if (!partner) {
    notFound()
  }

  // Helper to parse bold text in a string
  const parseBoldText = (text: string): React.ReactNode => {
    const parts = text.split(/(\*\*.*?\*\*)/)
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={idx} className="font-semibold">
            {part.slice(2, -2)}
          </strong>
        )
      }
      return part
    })
  }

  // Parse markdown-style content (simple implementation)
  const renderContent = (content: string) => {
    const lines = content.split('\n')
    const elements: React.ReactElement[] = []
    let key = 0

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      if (line.startsWith('## ')) {
        elements.push(
          <h2
            key={key++}
            className="mt-8 font-display text-3xl tracking-tight text-[var(--color-text-primary)] first:mt-0"
          >
            {line.replace('## ', '')}
          </h2>,
        )
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3
            key={key++}
            className="mt-6 font-display text-xl text-[var(--color-text-primary)]"
          >
            {line.replace('### ', '')}
          </h3>,
        )
      } else if (line.startsWith('- ')) {
        // Collect list items
        const listItems: string[] = []
        while (i < lines.length && lines[i].startsWith('- ')) {
          listItems.push(lines[i].replace('- ', ''))
          i++
        }
        i-- // Step back one since the loop will increment

        elements.push(
          <ul key={key++} className="mt-4 list-disc space-y-2 pl-6">
            {listItems.map((item, idx) => (
              <li key={idx} className="text-[var(--color-text-secondary)]">
                {parseBoldText(item)}
              </li>
            ))}
          </ul>,
        )
      } else if (line.trim() === '') {
        // Skip empty lines
        continue
      } else {
        elements.push(
          <p key={key++} className="mt-4 text-[var(--color-text-secondary)]">
            {parseBoldText(line)}
          </p>,
        )
      }
    }

    return elements
  }

  return (
    <>
      <Header />
      <div>
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
          {/* Mobile Back Link */}
          <div className="mb-6 sm:hidden">
            <Link
              href="/partnere"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-brand-hover)]"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Tilbake til partnere
            </Link>
          </div>

          {/* Breadcrumb */}
        <nav className="mb-8 hidden sm:flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-[var(--color-text-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-text-primary)]">
                Hjem
              </Link>
            </li>
            <li>
              <svg
                className="h-5 w-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li>
              <Link href="/partnere" className="hover:text-[var(--color-text-primary)]">
                Partnere
              </Link>
            </li>
            <li>
              <svg
                className="h-5 w-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="font-medium text-[var(--color-text-primary)]">{partner.title}</li>
          </ol>
        </nav>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Logo & Name Header */}
            <div className="mb-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <Image
                src={partner.logo}
                alt={`${partner.title} logo`}
                width={96}
                height={96}
                className="h-24 w-24 rounded-lg bg-[var(--color-brand-light)] object-contain p-2"
              />
              <div>
                <h1 className="font-display text-4xl tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
                  {partner.title}
                </h1>
                <p className="mt-2 text-lg text-[var(--color-text-secondary)]">
                  <svg
                    className="mr-1 inline-block h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  {partner.location}
                </p>
              </div>
            </div>

            {/* Services Tags */}
            <div className="mb-8">
              <h2 className="mb-3 text-sm font-medium uppercase tracking-wide text-[var(--color-text-muted)]">
                Tjenester
              </h2>
              <div className="flex flex-wrap gap-2">
                {partner.services.map((service) => (
                  <span
                    key={service}
                    className="inline-flex items-center rounded-full bg-[var(--color-brand-light)] px-3 py-1 text-sm font-medium text-[var(--color-text-primary)] ring-1 ring-inset ring-[var(--color-border)]"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Partner Description */}
            <div className="max-w-none">
              {renderContent(partner.fullDescription)}
            </div>
          </div>

          {/* Right Column - Sidebar (Sticky) */}
          <div className="lg:col-span-1">
            <PartnerContact
              profileImage={partner.profileImage}
              title={partner.title}
              website={partner.website}
              email={partner.email}
              phone={partner.phone}
              location={partner.location}
            />
          </div>
        </div>

        {/* Back to Partners Link */}
        <div className="mt-16">
          <Link
            href="/partnere"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-brand-hover)]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Tilbake til partnere
          </Link>
        </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
