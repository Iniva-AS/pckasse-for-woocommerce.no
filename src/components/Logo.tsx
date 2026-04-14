export function Logo(props: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      {...props}
      className="font-display text-2xl tracking-tight text-[var(--color-text-primary)]"
    >
      PCKasse for WooCommerce
    </span>
  )
}
