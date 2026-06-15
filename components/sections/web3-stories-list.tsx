import { m, useReducedMotion } from 'framer-motion'
import { MOTION_DURATION, MOTION_EASE, MOTION_STAGGER } from '@/components/motion/tokens'

type Story = {
  readonly title: string
  readonly description: string
}

type Web3StoriesListProps = {
  items: readonly Story[]
}

export function Web3StoriesList({ items }: Web3StoriesListProps) {
  const reduced = useReducedMotion()

  return (
    <div className="divide-y divide-[#2a2a2e]/80 border-y border-[#2a2a2e]/80">
      {items.map((item, i) => (
        <m.article
          key={item.title}
          className="group grid gap-3 rounded-sm bg-bg/40 py-6 backdrop-blur-[2px] transition-colors duration-300 hover:bg-bg/55 md:grid-cols-[1fr_1.2fr_auto] md:items-center md:gap-8 md:py-7 md:pl-4 md:pr-4"
          initial={reduced ? false : { opacity: 0, y: 10 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-6% 0px' }}
          transition={{ duration: MOTION_DURATION, ease: MOTION_EASE, delay: i * MOTION_STAGGER }}
        >
          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted">
              Friction · {String(i + 1).padStart(2, '0')}
            </p>
            <h3 className="mt-1.5 text-base font-semibold tracking-[-0.01em] text-foreground md:text-lg">
              {item.title}
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-muted">{item.description}</p>
          <span
            className="hidden font-mono text-sm text-accent/0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent md:inline"
            aria-hidden
          >
            →
          </span>
        </m.article>
      ))}
    </div>
  )
}
