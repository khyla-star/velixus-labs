import { m, useReducedMotion } from 'framer-motion'
import { Reveal } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'

const LINE = {
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const BENTO_SPANS = [
  'lg:col-span-7',
  'lg:col-span-5',
  'lg:col-span-5',
  'lg:col-span-7',
] as const

function SpeedIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path d="M12 30h18l-5 8 16-24H18l5-8-16 24Z" {...LINE} />
      <path d="M8 34h6M30 14h6" {...LINE} strokeWidth="1.25" opacity="0.45" />
      <circle cx="36" cy="12" r="1.25" {...LINE} strokeWidth="1.25" opacity="0.55" />
      <circle cx="10" cy="36" r="1.25" {...LINE} strokeWidth="1.25" opacity="0.55" />
    </svg>
  )
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path d="M24 7 11 13v11c0 10 6.8 18.2 13 20.8 6.2-2.6 13-10.8 13-20.8V13L24 7Z" {...LINE} />
      <path d="M24 13v22M17 18h14M17 24h14M17 30h10" {...LINE} strokeWidth="1.25" opacity="0.35" />
      <path d="M18.5 24.5 22 28l8-9" {...LINE} strokeWidth="1.75" />
      <circle cx="24" cy="13" r="1.25" {...LINE} strokeWidth="1.25" />
    </svg>
  )
}

function CostIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect x="10" y="12" width="28" height="24" rx="3" {...LINE} />
      <path d="M10 20h28" {...LINE} strokeWidth="1.25" />
      <path d="M16 28h8M16 32h12" {...LINE} strokeWidth="1.25" />
      <path d="M30 28l4 4M34 28l-4 4" {...LINE} strokeWidth="1.75" />
      <path d="M32 12V9M16 12V9" {...LINE} strokeWidth="1.25" opacity="0.45" />
      <circle cx="32" cy="30" r="6" {...LINE} strokeWidth="1.25" />
    </svg>
  )
}

function ScaleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path d="M10 36h28" {...LINE} />
      <path d="M14 30h20M18 24h12M22 18h4" {...LINE} strokeWidth="1.75" />
      <path d="M24 10v26" {...LINE} strokeWidth="1.25" opacity="0.4" />
      <path d="M30 14l3-3M34 18l3-3" {...LINE} strokeWidth="1.25" />
      <circle cx="24" cy="10" r="1.5" {...LINE} strokeWidth="1.25" />
      <circle cx="36" cy="14" r="1.25" {...LINE} strokeWidth="1.25" opacity="0.7" />
    </svg>
  )
}

const BENEFIT_ICONS = [SpeedIcon, ShieldIcon, CostIcon, ScaleIcon] as const

type AIBenefit = {
  readonly title: string
  readonly description: string
  readonly outcomes: readonly string[]
}

type AIBenefitsSectionProps = {
  benefits: readonly AIBenefit[]
}

export function AIBenefitsSection({ benefits }: AIBenefitsSectionProps) {
  const reduced = useReducedMotion()

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -left-3 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-accent/50 via-border to-transparent lg:block"
        aria-hidden
      />

      <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-12">
        {benefits.map((benefit, i) => {
          const Icon = BENEFIT_ICONS[i] ?? BENEFIT_ICONS[BENEFIT_ICONS.length - 1]
          const index = String(i + 1).padStart(2, '0')

          return (
            <Reveal
              key={benefit.title}
              delay={i * 0.08}
              className={cn('min-w-0', BENTO_SPANS[i] ?? 'lg:col-span-6')}
            >
              <m.article
                className={cn(
                  'group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#2a2a2e] bg-[#1e1e22] p-8 md:p-10 lg:p-12',
                  'transition-colors duration-300 hover:border-accent/35',
                )}
                whileHover={reduced ? undefined : { y: -3 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent/70 via-accent/20 to-transparent"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -right-2 -top-4 select-none font-mono text-7xl font-semibold tracking-tighter text-foreground/[0.04] md:text-8xl"
                  aria-hidden
                >
                  {index}
                </div>
                <div
                  className="pointer-events-none absolute -left-[1.8125rem] top-10 hidden h-2.5 w-2.5 rounded-full border border-accent/50 bg-bg lg:block"
                  aria-hidden
                />

                <div className="relative flex items-start justify-between gap-4">
                  <Icon className="h-11 w-11 shrink-0 text-foreground/90 transition-colors duration-300 group-hover:text-accent md:h-12 md:w-12" />
                  <span className="font-mono text-xs tracking-[0.16em] text-accent/80">{index}</span>
                </div>

                <h3 className="relative mt-8 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  {benefit.title}
                </h3>
                <p className="relative mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                  {benefit.description}
                </p>

                <ul className="relative mt-8 space-y-3 border-t border-border/60 pt-6 md:mt-10 md:pt-7">
                  {benefit.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3 text-sm text-foreground md:text-base">
                      <span
                        className="mt-2 h-1 w-4 shrink-0 rounded-full bg-accent/80"
                        aria-hidden
                      />
                      <span className="leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </m.article>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
