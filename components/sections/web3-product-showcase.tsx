import { m, useReducedMotion } from 'framer-motion'
import { MOTION_DURATION, MOTION_EASE } from '@/components/motion/tokens'

const FLOW_STEPS = ['Browser', 'Wallet', 'API', 'Chain'] as const

type StackLayer = {
  readonly layer: string
  readonly title: string
  readonly description: string
  readonly tags: readonly string[]
}

type Web3ProductShowcaseProps = {
  layers: readonly StackLayer[]
  connectionImage: string
  connectionImageAlt: string
}

export function Web3ProductShowcase({
  layers,
  connectionImage,
  connectionImageAlt,
}: Web3ProductShowcaseProps) {
  const reduced = useReducedMotion()

  return (
    <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
      <m.div
        className="relative overflow-hidden border border-[#2a2a2e] bg-[#0e0e10] p-6 md:p-8 lg:col-span-7"
        initial={reduced ? false : { opacity: 0, y: 16 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-8% 0px' }}
        transition={{ duration: MOTION_DURATION, ease: MOTION_EASE }}
      >
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
          Connection path
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-foreground md:text-2xl">
          User to chain, step by step
        </h3>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted md:text-base">
          Velixus Labs designs each hop so users know what happens before they connect a wallet or sign a
          transaction.
        </p>

        <div className="mt-6 overflow-hidden border border-[#2a2a2e] bg-[#141416]">
          <img
            src={connectionImage}
            alt={connectionImageAlt}
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 md:mt-8 md:gap-3">
          {FLOW_STEPS.map((step, i) => (
            <div key={step} className="flex items-center gap-2 md:gap-3">
              <m.span
                className="rounded-full border border-[#2a2a2e] bg-[#141416] px-4 py-2 text-xs font-medium text-foreground md:text-sm"
                whileHover={reduced ? undefined : { borderColor: 'rgba(184,255,44,0.4)' }}
              >
                {step}
              </m.span>
              {i < FLOW_STEPS.length - 1 && (
                <span className="font-mono text-xs text-accent/60" aria-hidden>
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(184,255,44,0.15) 0%, transparent 70%)',
          }}
          aria-hidden
        />
      </m.div>

      <div className="flex flex-col gap-3 lg:col-span-5 lg:gap-4">
        {layers.map((layer, i) => (
          <m.article
            key={layer.title}
            className="border border-[#2a2a2e] bg-[#1e1e22] p-4 transition-colors duration-300 hover:border-accent/30 md:p-5"
            initial={reduced ? false : { opacity: 0, x: 12 }}
            whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: MOTION_DURATION, ease: MOTION_EASE, delay: 0.08 + i * 0.07 }}
          >
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-accent">
                Layer {layer.layer}
              </p>
              <p className="font-mono text-[0.58rem] text-muted">{layer.tags[0]}</p>
            </div>
            <h4 className="mt-2 text-sm font-semibold text-foreground md:text-base">{layer.title}</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-muted md:text-sm">{layer.description}</p>
          </m.article>
        ))}
      </div>
    </div>
  )
}
