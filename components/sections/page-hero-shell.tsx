import { SITE } from '@/lib/content'
import { cn } from '@/lib/utils'

type PageHeroShellProps = {
  children: React.ReactNode
  className?: string
  topSlot?: React.ReactNode
  backgroundImage?: string
  showBackground?: boolean
}

export function PageHeroShell({
  children,
  className,
  topSlot,
  backgroundImage = SITE.pageHeroImage,
  showBackground = true,
}: PageHeroShellProps) {
  return (
    <section className={cn('velix-page-hero', className)}>
      {showBackground ? (
        <>
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/88 to-bg/25"
            aria-hidden
          />
        </>
      ) : (
        <div className="pointer-events-none absolute inset-0 bg-bg" aria-hidden />
      )}
      {topSlot}
      <div className="velix-container relative z-10">{children}</div>
    </section>
  )
}
