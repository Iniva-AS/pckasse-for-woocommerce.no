import Image from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="flex items-center gap-x-3" {...props}>
      <a
        href="https://iniva.no"
        className="-m-1.5 p-1.5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/iniva-logo.png"
          alt="Iniva"
          width={86}
          height={32}
          className="h-8 w-auto"
        />
      </a>
      <span className="text-gray-400">/</span>
      <a href="/" className="-m-1.5 p-1.5">
        <span className="text-xl font-bold text-gray-900">PCKasse for WooCommerce</span>
      </a>
    </div>
  )
}
