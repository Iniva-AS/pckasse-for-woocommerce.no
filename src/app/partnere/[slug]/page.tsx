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
            className="mt-8 text-3xl font-semibold tracking-tight text-gray-900 first:mt-0"
          >
            {line.replace('## ', '')}
          </h2>,
        )
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3
            key={key++}
            className="mt-6 text-xl font-semibold text-gray-900"
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
              <li key={idx} className="text-gray-600">
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
          <p key={key++} className="mt-4 text-gray-600">
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
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
          {/* Breadcrumb */}
        <nav className="mb-8 flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-gray-700">
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
              <Link href="/partnere" className="hover:text-gray-700">
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
            <li className="font-medium text-gray-900">{partner.title}</li>
          </ol>
        </nav>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Logo & Name Header */}
            <div className="mb-8 flex items-center gap-x-6">
              <Image
                src={partner.logo}
                alt={`${partner.title} logo`}
                width={96}
                height={96}
                className="h-24 w-24 rounded-lg bg-gray-50 object-contain p-2"
              />
              <div>
                <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {partner.title}
                </h1>
                <p className="mt-2 text-lg text-gray-600">
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
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Tjenester
              </h2>
              <div className="flex flex-wrap gap-2">
                {partner.services.map((service) => (
                  <span
                    key={service}
                    className="inline-flex items-center rounded-md bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Partner Description */}
            <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-3xl prose-h3:text-xl prose-p:text-gray-600 prose-ul:text-gray-600">
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-500"
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
