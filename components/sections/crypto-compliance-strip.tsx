import { m, useReducedMotion } from 'framer-motion'
import { MOTION_DURATION, MOTION_EASE, MOTION_STAGGER } from '@/components/motion/tokens'

type Control = {
  readonly title: string
  readonly description: string
}

const DELIVERABLE_ICONS = ['01', '02', '03', '04'] as const

type CryptoComplianceStripProps = {
  controls: readonly Control[]
}

export function CryptoComplianceStrip({ controls }: CryptoComplianceStripProps) {
  const reduced = useReducedMotion()

  return (
    <div className="grid gap-px overflow-hidden border border-[#2a2a2e] bg-[#2a2a2e] sm:grid-cols-2 lg:grid-cols-4">
      {controls.map((control, i) => (
        <m.article
          key={control.title}
          className="flex flex-col border-t-2 border-t-accent bg-[#0a0a0a] px-5 py-7 md:px-6 md:py-8"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-6% 0px' }}
          transition={{ duration: MOTION_DURATION, ease: MOTION_EASE, delay: i * MOTION_STAGGER }}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded border border-[#2a2a2e] bg-[#141416] font-mono text-[0.6rem] text-accent">
            {DELIVERABLE_ICONS[i] ?? String(i + 1).padStart(2, '0')}
          </span>

          <h3 className="mt-4 text-sm font-semibold text-foreground md:text-base">{control.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{control.description}</p>

          <p className="mt-4 font-mono text-[0.55rem] uppercase tracking-[0.14em] text-accent/60">
            Included in delivery
          </p>
        </m.article>
      ))}
    </div>
  )
}
