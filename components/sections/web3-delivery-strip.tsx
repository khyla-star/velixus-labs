import { m, useReducedMotion } from 'framer-motion'
import { MOTION_DURATION, MOTION_EASE, MOTION_STAGGER } from '@/components/motion/tokens'
import { cn } from '@/lib/utils'

type DeliveryMetric = {
  readonly metric: string
  readonly label: string
}

type Web3DeliveryStripProps = {
  metrics: readonly DeliveryMetric[]
  highlightTone?: 'accent' | 'amber'
}

const HIGHLIGHT_TONE_CLASS = {
  accent: 'text-accent',
  amber: 'text-[#FBBF24]',
} as const

const CIRCLE_LAYOUT = [
  {
    size: 'h-[11rem] w-[11rem] md:h-[13rem] md:w-[13rem] lg:h-[14.5rem] lg:w-[14.5rem]',
    offset: 'translate-y-3 md:translate-y-4',
    zIndex: 'z-[1]',
    overlap: '',
    bg: 'bg-[#1e1e22]',
    metricClass: 'text-[clamp(1.75rem,3vw,2.5rem)]',
    labelClass: 'text-xs md:text-sm',
    highlight: false,
  },
  {
    size: 'h-[13rem] w-[13rem] md:h-[15.5rem] md:w-[15.5rem] lg:h-[17rem] lg:w-[17rem]',
    offset: 'translate-y-8 md:translate-y-10',
    zIndex: 'z-[2]',
    overlap: '-ml-3 md:-ml-4',
    bg: 'bg-[#0e0e10]',
    metricClass: 'text-[clamp(2rem,3.5vw,3rem)]',
    labelClass: 'text-xs md:text-sm',
    highlight: false,
  },
  {
    size: 'h-[11rem] w-[11rem] md:h-[13.5rem] md:w-[13.5rem] lg:h-[15rem] lg:w-[15rem]',
    offset: '-translate-y-12 md:-translate-y-16 lg:-translate-y-[4.25rem]',
    zIndex: 'z-[1]',
    overlap: '-ml-3 md:-ml-4',
    bg: 'bg-[#1e1e22]',
    metricClass: 'text-[clamp(1.75rem,3vw,2.5rem)]',
    labelClass: 'text-xs md:text-sm',
    highlight: false,
  },
  {
    size: 'h-[12.5rem] w-[12.5rem] md:h-[15rem] md:w-[15rem] lg:h-[16.5rem] lg:w-[16.5rem]',
    offset: 'translate-y-7 md:translate-y-10 -translate-x-3 md:-translate-x-5',
    zIndex: 'z-[3]',
    overlap: '-ml-6 md:-ml-8',
    bg: 'bg-[#0e0e10]',
    metricClass: 'text-[clamp(2rem,3.5vw,3rem)]',
    labelClass: 'text-xs md:text-sm',
    highlight: true,
  },
] as const

export function Web3DeliveryStrip({ metrics, highlightTone = 'accent' }: Web3DeliveryStripProps) {
  const reduced = useReducedMotion()
  const highlightClass = HIGHLIGHT_TONE_CLASS[highlightTone]

  return (
    <div className="overflow-x-auto pb-2">
      <div className="mx-auto flex w-max min-h-[18rem] items-center justify-center gap-0 px-6 py-6 md:min-h-[21rem] md:px-10 lg:min-h-[23rem]">
        {metrics.map((item, i) => {
          const layout = CIRCLE_LAYOUT[i] ?? CIRCLE_LAYOUT[0]

          return (
            <m.div
              key={item.label}
              className={cn(
                'relative flex shrink-0 flex-col items-center justify-center rounded-full border border-foreground/20 px-4 text-center',
                layout.size,
                layout.offset,
                layout.zIndex,
                layout.overlap,
                layout.bg,
              )}
              initial={reduced ? false : { opacity: 0, scale: 0.92 }}
              whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{
                duration: MOTION_DURATION,
                ease: MOTION_EASE,
                delay: i * MOTION_STAGGER,
              }}
            >
              <p
                className={cn(
                  'font-semibold leading-none tracking-[-0.03em]',
                  layout.metricClass,
                  layout.highlight ? highlightClass : 'text-foreground',
                )}
              >
                {item.metric}
              </p>
              <p
                className={cn(
                  'mt-2 max-w-[85%] leading-snug text-muted',
                  layout.labelClass,
                )}
              >
                {item.label}
              </p>
            </m.div>
          )
        })}
      </div>
    </div>
  )
}
