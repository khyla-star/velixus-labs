import { cn } from '@/lib/utils'

type PartnerLogoProps = {
  name: string
  slug: string
  className?: string
}

export function PartnerLogo({ name, slug, className }: PartnerLogoProps) {
  return (
    <div
      className={cn(
        'flex h-12 w-28 shrink-0 items-center justify-center px-2 md:h-14 md:w-32',
        className,
      )}
    >
      <img
        src={`https://cdn.simpleicons.org/${slug}/FFFFFF`}
        alt={`${name} logo`}
        width={112}
        height={40}
        loading="lazy"
        decoding="async"
        className="h-7 w-auto max-w-[6.5rem] object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-8 md:max-w-[7.5rem]"
      />
    </div>
  )
}
