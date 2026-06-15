import { m, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { CAPABILITIES_METRICS } from '@/lib/home-content'

const easeOut = [0.25, 0.1, 0.25, 1] as const

function MetricRow({
  label,
  value,
  index,
}: {
  label: string
  value: number
  index: number
}) {
  const reduced = useReducedMotion()

  return (
    <m.div
      initial={reduced ? false : { opacity: 0, y: 12 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.5, ease: easeOut, delay: 0.15 + index * 0.08 }}
      className={cn(index > 0 && 'mt-7 md:mt-8')}
    >
      <div className="flex items-start justify-between gap-6">
        <p className="text-sm font-medium leading-snug text-foreground md:text-base">{label}</p>
        <p className="shrink-0 text-sm font-bold tabular-nums text-foreground md:text-base">
          {value}%
        </p>
      </div>
      <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-white/15">
        {reduced ? (
          <div className="h-full rounded-full bg-accent" style={{ width: `${value}%` }} />
        ) : (
          <m.div
            className="h-full rounded-full bg-accent"
            initial={{ width: 0 }}
            whileInView={{ width: `${value}%` }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.35 + index * 0.08 }}
          />
        )}
      </div>
    </m.div>
  )
}

export function CapabilitiesMetricsPanel({ className }: { className?: string }) {
  const reduced = useReducedMotion()

  return (
    <m.aside
      initial={reduced ? false : { opacity: 0, x: 24, y: 16 }}
      whileInView={reduced ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.75, ease: easeOut, delay: 0.15 }}
      className={cn(
        'w-full bg-[#2a2d31] px-7 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] md:px-9 md:py-10',
        className,
      )}
      aria-label="Capability metrics"
    >
      {CAPABILITIES_METRICS.map((metric, index) => (
        <MetricRow
          key={metric.label}
          label={metric.label}
          value={metric.value}
          index={index}
        />
      ))}
    </m.aside>
  )
}
