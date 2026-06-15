import type { CSSProperties } from 'react'
import { Reveal } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'

const LINE = {
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/** Real-world stair: each step narrower and indented further right (desktop only) */
const STAIR_STEP = 5.5
const STAIR_INDENT_REM = 2.25

const PADDING_SCALE = [
  'p-5 sm:p-6 md:p-8',
  'p-5 sm:p-6 md:p-7',
  'p-4 sm:p-5 md:p-6',
  'p-4 sm:p-5 md:p-6',
  'p-4 sm:p-5 md:p-5',
  'p-4 sm:p-5 md:p-5',
  'p-4 md:p-4',
  'p-4 md:p-4',
] as const

const TITLE_SCALE = [
  'text-base sm:text-lg',
  'text-base',
  'text-sm sm:text-base',
  'text-sm sm:text-base',
  'text-sm',
  'text-sm',
  'text-xs sm:text-sm',
  'text-xs sm:text-sm',
] as const

const DESC_SCALE = [
  'text-sm sm:text-base',
  'text-sm',
  'text-sm',
  'text-xs sm:text-sm',
  'text-xs sm:text-sm',
  'text-xs sm:text-sm',
  'text-xs',
  'text-xs',
] as const

function ContractIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path d="M12 8h16a2 2 0 0 1 2 2v20l-10-4-10 4V10a2 2 0 0 1 2-2Z" {...LINE} />
      <path d="M16 14h12M16 19h8M16 24h10" {...LINE} strokeWidth="1.25" />
    </svg>
  )
}

function NetworkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <circle cx="20" cy="12" r="4" {...LINE} />
      <circle cx="10" cy="28" r="4" {...LINE} />
      <circle cx="30" cy="28" r="4" {...LINE} />
      <path d="M17 15 12 25M23 15 28 25M14 28h12" {...LINE} strokeWidth="1.25" opacity="0.45" />
    </svg>
  )
}

function TokenIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <circle cx="20" cy="20" r="12" {...LINE} />
      <path d="M20 14v12M16 18h6a3 3 0 0 1 0 6h-4" {...LINE} strokeWidth="1.25" />
    </svg>
  )
}

function IdentityIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <rect x="10" y="12" width="20" height="16" rx="2" {...LINE} />
      <circle cx="20" cy="19" r="3" {...LINE} strokeWidth="1.25" />
      <path d="M14 26c1.5-2.5 11.5-2.5 12 0" {...LINE} strokeWidth="1.25" />
    </svg>
  )
}

function ProvenanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <rect x="8" y="14" width="10" height="10" rx="1.5" {...LINE} />
      <rect x="22" y="14" width="10" height="10" rx="1.5" {...LINE} />
      <rect x="15" y="26" width="10" height="8" rx="1.5" {...LINE} />
      <path d="M18 19h4M26 19h-2M20 24v2" {...LINE} strokeWidth="1.25" />
    </svg>
  )
}

function BridgeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path d="M6 26h28" {...LINE} />
      <path d="M10 26V18l10-6 10 6v8" {...LINE} strokeWidth="1.25" />
      <path d="M14 22h12M18 18h4" {...LINE} strokeWidth="1.25" opacity="0.45" />
    </svg>
  )
}

function AuditIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path d="M20 8 30 12v10c0 6-4.5 9.5-10 12-5.5-2.5-10-6-10-12V12l10-4Z" {...LINE} />
      <path d="M16 20l3 3 6-7" {...LINE} strokeWidth="1.75" />
    </svg>
  )
}

function ConsultIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <rect x="9" y="10" width="22" height="16" rx="2" {...LINE} />
      <path d="M14 18h12M14 22h8" {...LINE} strokeWidth="1.25" />
      <path d="M16 30h8" {...LINE} strokeWidth="1.75" />
    </svg>
  )
}

const MODULE_ICONS = [
  ContractIcon,
  NetworkIcon,
  TokenIcon,
  IdentityIcon,
  ProvenanceIcon,
  BridgeIcon,
  AuditIcon,
  ConsultIcon,
] as const

type Service = {
  readonly title: string
  readonly description: string
}

type BlockchainLedgerServicesProps = {
  services: readonly Service[]
}

function stairWidth(index: number) {
  return `${Math.max(52, 100 - index * STAIR_STEP)}%`
}

function stairIndent(index: number) {
  return `${index * STAIR_INDENT_REM}rem`
}

function stairStyle(index: number): CSSProperties {
  return {
    '--stair-indent': stairIndent(index),
    '--stair-width': stairWidth(index),
  } as CSSProperties
}

type ServiceCardProps = {
  service: Service
  index: number
  Icon: (typeof MODULE_ICONS)[number]
  compact?: boolean
}

function ServiceCard({ service, index, Icon, compact = false }: ServiceCardProps) {
  return (
    <article
      className={cn(
        'group flex w-full min-w-0 items-start gap-3 border border-[#2a2a2e] bg-[#1e1e22] transition-colors duration-300 hover:border-accent/35 sm:gap-4',
        compact
          ? 'p-5 sm:p-6'
          : (PADDING_SCALE[index] ?? PADDING_SCALE[PADDING_SCALE.length - 1]),
      )}
    >
      <span className="shrink-0 font-mono text-xs text-accent sm:text-sm">
        {String(index).padStart(2, '0')}
      </span>

      <Icon className="h-7 w-7 shrink-0 text-foreground/90 transition-colors duration-300 group-hover:text-accent sm:h-8 sm:w-8" />

      <div className="min-w-0 flex-1">
        <h3
          className={cn(
            'font-semibold text-foreground',
            compact ? 'text-base sm:text-lg' : (TITLE_SCALE[index] ?? TITLE_SCALE[TITLE_SCALE.length - 1]),
          )}
        >
          {service.title}
        </h3>
        <p
          className={cn(
            'mt-1.5 leading-relaxed text-muted',
            compact ? 'text-sm sm:text-base' : (DESC_SCALE[index] ?? DESC_SCALE[DESC_SCALE.length - 1]),
          )}
        >
          {service.description}
        </p>
      </div>
    </article>
  )
}

export function BlockchainLedgerServices({ services }: BlockchainLedgerServicesProps) {
  return (
    <div className="relative w-full max-w-5xl">
      {/* Mobile / tablet portrait: full-width stack — no stair indent */}
      <div className="flex flex-col gap-3 lg:hidden" role="list">
        {services.map((service, i) => {
          const Icon = MODULE_ICONS[i] ?? MODULE_ICONS[MODULE_ICONS.length - 1]

          return (
            <Reveal key={service.title} delay={i * 0.05} className="w-full min-w-0">
              <div role="listitem" className="w-full min-w-0">
                <ServiceCard service={service} index={i} Icon={Icon} compact />
              </div>
            </Reveal>
          )
        })}
      </div>

      {/* Desktop: stair-step layout */}
      <div className="hidden flex-col gap-0 lg:flex" role="list">
        {services.map((service, i) => {
          const Icon = MODULE_ICONS[i] ?? MODULE_ICONS[MODULE_ICONS.length - 1]
          const isFirst = i === 0

          return (
            <Reveal key={service.title} delay={i * 0.05}>
              <div role="listitem">
                {!isFirst && (
                  <div
                    className="ml-[var(--stair-indent)] h-4 w-5 border-l border-[#2a2a2e] bg-[#141416]"
                    style={stairStyle(i - 1)}
                    aria-hidden
                  />
                )}

                <div
                  className="ml-[var(--stair-indent)] w-[var(--stair-width)] max-w-full"
                  style={stairStyle(i)}
                >
                  <ServiceCard service={service} index={i} Icon={Icon} />
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
