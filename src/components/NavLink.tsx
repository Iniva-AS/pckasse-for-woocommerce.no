import Link from 'next/link'

export function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-brand-light)] hover:text-[var(--color-text-primary)]"
    >
      {children}
    </Link>
  )
}
