import type { ReactNode } from 'react'
import { m, useReducedMotion } from 'framer-motion'
import { MOTION_DURATION, MOTION_EASE, MOTION_STAGGER } from '@/components/motion/tokens'
import { cn } from '@/lib/utils'

type Service = {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly features: readonly string[]
  readonly primary: boolean
  readonly icon: string
}

const ICONS: Record<string, ReactNode> = {
  token: (
    <svg viewBox="0 0 32 32" fill="none" className="h-5 w-5" aria-hidden>
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 10v12M12.5 13.5h5.5a2.5 2.5 0 0 1 0 5h-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  wallet: (
    <svg viewBox="0 0 32 32" fill="none" className="h-5 w-5" aria-hidden>
      <rect x="6" y="10" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 14h20M22 18h3v4h-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  gateway: (
    <svg viewBox="0 0 32 32" fill="none" className="h-5 w-5" aria-hidden>
      <path d="M8 22V10l8-4 8 4v12l-8 4-8-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16 6v20M8 10l8 4 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  custody: (
    <svg viewBox="0 0 32 32" fill="none" className="h-5 w-5" aria-hidden>
      <path d="M16 6 9 9v7c0 5.5 3.5 9.5 7 11 3.5-1.5 7-5.5 7-11V9l-7-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  exchange: (
    <svg viewBox="0 0 32 32" fill="none" className="h-5 w-5" aria-hidden>
      <path d="M10 12h12M20 8l4 4-4 4M22 20H10M12 24l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  treasury: (
    <svg viewBox="0 0 32 32" fill="none" className="h-5 w-5" aria-hidden>
      <path d="M8 24V12l8-5 8 5v12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M13 24v-6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
}

type CryptoCoreServicesProps = {
  services: readonly Service[]
}

function MilestoneCard({
  service,
  index,
  isLast,
}: {
  service: Service
  index: number
  isLast: boolean
}) {
  const reduced = useReducedMotion()
  const step = String(index + 1).padStart(2, '0')

  return (
    <m.div
      className="grid w-full min-w-0 grid-cols-[2.25rem_minmax(0,1fr)] gap-3 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-4 md:grid-cols-[4.5rem_minmax(0,1fr)] md:gap-8"
      initial={reduced ? false : { opacity: 0, y: 12 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{ duration: MOTION_DURATION, ease: MOTION_EASE, delay: index * MOTION_STAGGER }}
    >
      <div className="flex flex-col items-center">
        <div
          className={cn(
            'relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 bg-[#0a0a0a] font-mono text-[0.65rem] font-semibold sm:h-10 sm:w-10 sm:text-xs md:h-12 md:w-12 md:text-sm',
            service.primary ? 'border-accent text-accent' : 'border-[#2a2a2e] text-muted',
          )}
        >
          {step}
        </div>
        {!isLast && <div className="mt-2 w-px flex-1 bg-accent/25" aria-hidden />}
      </div>

      <article
        className={cn(
          'mb-6 min-w-0 w-full border border-[#2a2a2e] bg-[#0a0a0a] p-4 sm:mb-8 sm:p-5 md:mb-10 md:p-6',
          service.primary && 'border-accent/25',
          isLast && 'mb-0',
        )}
      >
        <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-3">
          <div className="flex min-w-0 items-start gap-2.5 sm:items-center sm:gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-[#2a2a2e] bg-[#141416] text-accent sm:h-9 sm:w-9">
              {ICONS[service.icon]}
            </div>
            <h3 className="min-w-0 break-words text-base font-semibold leading-snug tracking-[-0.01em] text-foreground sm:text-lg md:text-xl">
              {service.title}
            </h3>
          </div>
          {service.primary ? (
            <span className="shrink-0 font-mono text-[0.55rem] uppercase tracking-[0.14em] text-accent">
              Core module
            </span>
          ) : null}
        </div>

        <p className="mt-3 break-words text-sm leading-relaxed text-muted md:text-base">
          {service.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2 border-t border-[#2a2a2e] pt-4">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="max-w-full break-words rounded-sm border border-[#2a2a2e] bg-[#111111] px-2.5 py-1 font-mono text-[0.58rem] text-[#d4d4d8]"
            >
              {feature}
            </li>
          ))}
        </ul>
      </article>
    </m.div>
  )
}

export function CryptoCoreServices({ services }: CryptoCoreServicesProps) {
  return (
    <div className="relative w-full min-w-0">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <p
          className="absolute left-1/2 top-1/2 max-w-full -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-bold uppercase leading-none tracking-[-0.04em] text-accent/[0.07]"
          style={{ fontSize: 'clamp(2rem, 9vw, 5rem)' }}
        >
          VELIXUS LABS
        </p>
      </div>

      <div className="relative w-full min-w-0 max-w-4xl">
        {services.map((service, i) => (
          <MilestoneCard
            key={service.id}
            service={service}
            index={i}
            isLast={i === services.length - 1}
          />
        ))}
      </div>
    </div>
  )
}
