import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'

const LABEL = 'TO OUR TEAM'

const BORDER_GRADIENT =
  'linear-gradient(135deg, rgba(184,255,44,0.55), rgba(42,42,46,0.9), rgba(142,197,255,0.45))'

const BORDER_GRADIENT_HOVER =
  'linear-gradient(135deg, rgba(184,255,44,0.9), rgba(58,58,64,0.95), rgba(201,160,255,0.65))'

function gradientRingStyle(gradient: string): CSSProperties {
  return {
    padding: 2,
    background: gradient,
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    maskComposite: 'exclude',
  }
}

type HeroTeamButtonProps = {
  href?: string
}

export function HeroTeamButton({ href = '/careers' }: HeroTeamButtonProps) {
  return (
    <div className="group relative mx-auto block w-fit max-w-full lg:ml-auto lg:mr-0">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 group-hover:opacity-0"
        style={gradientRingStyle(BORDER_GRADIENT)}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={gradientRingStyle(BORDER_GRADIENT_HOVER)}
      />

      <Link
        to={href}
        className="relative block rounded-2xl bg-transparent px-4 py-3 text-center transition-colors duration-300 sm:text-left md:px-5 md:py-4 lg:px-6 lg:py-5"
      >
        <span className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-lg font-bold uppercase tracking-[0.1em] text-transparent transition-all duration-300 group-hover:from-[#B8FF2C] group-hover:via-[#e8ffd0] group-hover:to-[#7dd3fc] sm:text-xl sm:tracking-[0.12em] md:text-2xl lg:text-3xl">
          {LABEL}
        </span>
      </Link>
    </div>
  )
}
