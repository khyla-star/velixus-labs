import { Link } from 'react-router-dom'
import { SITE } from '@/lib/content'
import { cn } from '@/lib/utils'

type VelixLogoProps = {
  className?: string
  imageClassName?: string
}

export function VelixLogo({ className, imageClassName }: VelixLogoProps) {
  return (
    <Link
      to="/"
      className={cn(
        'inline-flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-90',
        className,
      )}
      aria-label={`${SITE.name} home`}
    >
      <img
        src={SITE.logo}
        alt=""
        aria-hidden
        className={cn(
          'h-10 w-10 shrink-0 object-contain object-left drop-shadow-[0_0_12px_rgba(184,255,44,0.18)] md:h-11 md:w-11',
          imageClassName,
        )}
      />
      <span className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
        <span className="text-foreground">Velixus</span>
        <span className="text-accent"> Labs</span>
      </span>
    </Link>
  )
}
