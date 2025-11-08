'use client'

import Image from 'next/image'
import { trackPartnerClick } from '@/lib/tracking'

interface PartnerContactProps {
  profileImage?: string
  title: string
  website: string
  email: string
  phone: string
  location: string
}

export function PartnerContact({
  profileImage,
  title,
  website,
  email,
  phone,
  location,
}: PartnerContactProps) {
  return (
    <div className="sticky top-8 rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200">
      <h3 className="text-lg font-semibold text-gray-900">Kontakt</h3>

      {profileImage && (
        <div className="mt-4">
          <Image
            src={profileImage}
            alt={`Kontaktperson hos ${title}`}
            width={400}
            height={400}
            className="h-auto w-full rounded-lg"
          />
        </div>
      )}

      <div className="mt-6 space-y-3">
        {/* Website Button */}
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
          onClick={() => trackPartnerClick(title, 'website', website)}
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
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
          Besøk nettside
        </a>

        {/* Email Button */}
        <a
          href={`mailto:${email}`}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition hover:bg-gray-50"
          onClick={() => trackPartnerClick(title, 'email', email)}
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
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Send e-post
        </a>

        {/* Phone Button */}
        <a
          href={`tel:${phone}`}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition hover:bg-gray-50"
          onClick={() => trackPartnerClick(title, 'phone', phone)}
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
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Ring oss
        </a>
      </div>

      {/* Contact Details */}
      <div className="mt-6 space-y-2 border-t border-gray-200 pt-6 text-sm">
        <div>
          <dt className="font-medium text-gray-900">E-post</dt>
          <dd className="mt-1 break-words text-gray-600">{email}</dd>
        </div>
        <div>
          <dt className="font-medium text-gray-900">Telefon</dt>
          <dd className="mt-1 text-gray-600">{phone}</dd>
        </div>
        <div>
          <dt className="font-medium text-gray-900">Lokasjon</dt>
          <dd className="mt-1 text-gray-600">{location}</dd>
        </div>
      </div>
    </div>
  )
}
