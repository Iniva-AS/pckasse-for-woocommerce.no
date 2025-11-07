import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

interface PartnerCardProps {
  title: string
  slug: string
  logo: string
  description: string
  location: string
  services: string[]
}

export function PartnerCard({
  title,
  slug,
  logo,
  description,
  location,
  services,
}: PartnerCardProps) {
  return (
    <Link
      href={`/partnere/${slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition hover:shadow-md"
    >
      {/* Logo Section */}
      <div className="flex h-48 items-center justify-center bg-gray-50 p-8">
        <Image
          src={logo}
          alt={`${title} logo`}
          width={200}
          height={80}
          className="h-auto w-full max-w-[200px] object-contain transition group-hover:opacity-75"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-1 flex-col p-6">
        {/* Name & Location */}
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="mb-4 line-clamp-3 text-sm text-gray-600">
          {description}
        </p>

        {/* Services Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {services.slice(0, 3).map((service) => (
            <span
              key={service}
              className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
            >
              {service}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-auto">
          <div className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-600 transition group-hover:bg-indigo-50">
            <span>Les mer</span>
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
