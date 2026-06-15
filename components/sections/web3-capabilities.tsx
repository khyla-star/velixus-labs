import type { CSSProperties } from 'react'
import { m, useReducedMotion } from 'framer-motion'
import { MOTION_DURATION, MOTION_EASE } from '@/components/motion/tokens'
import { cn } from '@/lib/utils'

const LAYER_COLORS: Record<string, string> = {
  Frontend: 'text-foreground',
  Wallet: 'text-accent',
  Auth: 'text-[#8ec5ff]',
  Data: 'text-[#ffb86c]',
  Governance: 'text-[#c9a0ff]',
}

const BORDER_GRADIENT =
  'linear-gradient(135deg, rgba(184,255,44,0.55), rgba(42,42,46,0.9), rgba(142,197,255,0.45))'

const BORDER_GRADIENT_HOVER =
  'linear-gradient(135deg, rgba(184,255,44,0.85), rgba(58,58,64,0.95), rgba(201,160,255,0.55))'

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

type Service = {
  readonly title: string
  readonly description: string
  readonly layer: string
}

type Web3CapabilitiesProps = {
  services: readonly Service[]
}

function CapabilityCard({
  service,
  index,
  featured = false,
}: {
  service: Service
  index: number
  featured?: boolean
}) {
  const reduced = useReducedMotion()
  const layerColor = LAYER_COLORS[service.layer] ?? 'text-foreground'

  return (
    <m.div
      className="group relative h-full"
      initial={reduced ? false : { opacity: 0, y: 14 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{ duration: MOTION_DURATION, ease: MOTION_EASE, delay: index * 0.06 }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
        style={gradientRingStyle(BORDER_GRADIENT)}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={gradientRingStyle(BORDER_GRADIENT_HOVER)}
      />
      <article
        className={cn(
          'relative flex h-full flex-col bg-transparent p-5 md:p-6',
          featured && 'lg:p-8',
        )}
      >
        <div className="relative flex items-center justify-between gap-2">
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-muted">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={cn('font-mono text-[0.58rem] uppercase tracking-[0.14em]', layerColor)}>
            {service.layer}
          </span>
        </div>

        <h3
          className={cn(
            'relative mt-4 font-semibold tracking-[-0.01em] text-foreground',
            featured ? 'text-xl md:text-2xl' : 'text-sm md:text-base',
          )}
        >
          {service.title}
        </h3>
        <p
          className={cn(
            'relative mt-2 flex-1 leading-relaxed text-muted',
            featured ? 'text-sm md:text-base' : 'text-sm',
          )}
        >
          {service.description}
        </p>
      </article>
    </m.div>
  )
}

export function Web3Capabilities({ services }: Web3CapabilitiesProps) {
  const [featured, ...rest] = services
  const sideStack = rest.slice(0, 2)
  const bottomRow = rest.slice(2)

  if (!featured) return null

  return (
    <div className="space-y-4 md:space-y-5">
      <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
        <div className="lg:col-span-7">
          <CapabilityCard service={featured} index={0} featured />
        </div>
        <div className="flex flex-col gap-4 lg:col-span-5 lg:gap-5">
          {sideStack.map((service, i) => (
            <CapabilityCard key={service.title} service={service} index={i + 1} />
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {bottomRow.map((service, i) => (
          <CapabilityCard key={service.title} service={service} index={i + 3} />
        ))}
      </div>
    </div>
  )
}
