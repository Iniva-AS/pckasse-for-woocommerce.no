import Image from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props}>
      <Image
        src="/PCKasse for WooCommerce logo.svg"
        alt="PCKasse for WooCommerce"
        width={200}
        height={50}
        className="h-10 w-auto"
      />
    </div>
  )
}
