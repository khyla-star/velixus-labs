import type { CSSProperties } from 'react'
import { m, useReducedMotion } from 'framer-motion'
import { MOTION_DURATION, MOTION_EASE } from '@/components/motion/tokens'

const BORDER_GRADIENT =
  'linear-gradient(135deg, rgba(184,255,44,0.5), rgba(30,64,120,0.55), rgba(184,255,44,0.35))'

const BORDER_GRADIENT_HOVER =
  'linear-gradient(135deg, rgba(184,255,44,0.9), rgba(96,165,250,0.65), rgba(184,255,44,0.75))'

function gradientRingStyle(gradient: string): CSSProperties {
  return {
    padding: 1,
    background: gradient,
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    maskComposite: 'exclude',
  }
}

type CultureValueCardProps = {
  title: string
  description: string
  index: number
}

export function CultureValueCard({ title, description, index }: CultureValueCardProps) {
  const reduced = useReducedMotion()

  return (
    <m.article
      className="group relative h-full"
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: MOTION_DURATION, ease: MOTION_EASE, delay: index * 0.08 }}
      whileHover={reduced ? undefined : { y: -4 }}
    >
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

      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.07] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.28)] backdrop-blur-md transition-shadow duration-300 group-hover:shadow-[0_16px_48px_rgba(184,255,44,0.12)] md:p-8">
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/15 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-60"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-[#3b82f6]/20 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-50"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.08] via-transparent to-[#3b82f6]/[0.1] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />

        <span className="relative font-mono text-[0.62rem] uppercase tracking-[0.18em] text-accent">
          {String(index + 1).padStart(2, '0')}
        </span>

        <h3 className="relative mt-4 text-2xl font-semibold tracking-[-0.02em] text-accent md:text-[1.65rem]">
          {title}
        </h3>

        <p className="relative mt-4 flex-1 text-sm leading-relaxed text-accent/85 md:text-base">
          {description}
        </p>
      </div>
    </m.article>
  )
}
