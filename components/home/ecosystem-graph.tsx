import { m, useReducedMotion } from 'framer-motion'
import { SYSTEM_NODES, ECOSYSTEM_HEADING } from '@/lib/home-content'
import { EcosystemBackground } from '@/components/home/ecosystem-background'

const easeOut = [0.25, 0.1, 0.25, 1] as const

type SystemNode = (typeof SYSTEM_NODES)[number]

function SystemCard({
  node,
  index,
  reduced,
}: {
  node: SystemNode
  index: number
  reduced: boolean | null
}) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <m.article
      className="group relative isolate flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-[1.25rem] border border-white/[0.12] bg-[#0a0a0a] px-5 py-5 transition-colors duration-300 md:rounded-[1.5rem] md:px-6 md:py-6 lg:px-7 lg:py-7"
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{ duration: 0.55, ease: easeOut, delay: index * 0.1 }}
      whileHover={reduced ? undefined : { y: -4, borderColor: 'rgba(255,255,255,0.22)' }}
    >
      <div className="relative z-10 flex min-h-0 flex-1 gap-4 md:gap-5">
        <m.div
          className="flex shrink-0 items-start pt-0.5"
          initial={reduced ? false : { opacity: 0, scale: 0.9 }}
          whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-6% 0px' }}
          transition={{ duration: 0.45, ease: easeOut, delay: index * 0.1 + 0.08 }}
        >
          <img
            src={node.logoSrc}
            alt={node.logoAlt}
            className="h-8 w-8 object-contain opacity-95 transition-transform duration-300 group-hover:scale-105 md:h-9 md:w-9"
            loading="lazy"
            decoding="async"
          />
        </m.div>

        <div className="flex min-w-0 flex-1 flex-col text-left">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground md:text-sm">
            {node.label}
          </p>
          <div className="mt-2 h-px w-full bg-white/30 transition-colors duration-300 group-hover:bg-white/45" />
          <h3 className="mt-3 text-sm font-bold leading-[1.25] tracking-tight text-foreground md:mt-4 md:text-base lg:text-lg">
            {node.headline}
          </h3>
          <p className="mt-2 text-xs font-normal leading-relaxed text-muted md:mt-3 md:text-sm">
            {node.summary}
          </p>
        </div>
      </div>

      <m.div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex items-end justify-center pb-1 md:pb-1.5"
        aria-hidden
        initial={reduced ? false : { opacity: 0 }}
        whileInView={reduced ? undefined : { opacity: 1 }}
        viewport={{ once: true, margin: '-6% 0px' }}
        transition={{ duration: 0.6, ease: easeOut, delay: index * 0.1 + 0.12 }}
      >
        <span className="block whitespace-nowrap font-sans text-[2rem] font-black leading-none tracking-tighter text-white/[0.07] md:text-[2.25rem] lg:text-[2.5rem]">
          {number}
        </span>
      </m.div>
    </m.article>
  )
}

function SystemCardWindow({ reduced }: { reduced: boolean | null }) {
  return (
    <div className="grid h-full min-h-0 w-full grid-cols-2 grid-rows-2 gap-3 md:gap-4">
      {SYSTEM_NODES.map((node, index) => (
        <SystemCard key={node.id} node={node} index={index} reduced={reduced} />
      ))}
    </div>
  )
}

function EcosystemLeftPanel({ reduced }: { reduced: boolean | null }) {
  return (
    <m.aside
      className="flex min-w-0 flex-col justify-center md:pr-6 lg:pr-10"
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.65, ease: easeOut }}
    >
      <div className="flex flex-col">
        <span className="inline-flex w-fit items-center rounded-full border border-white/30 px-4 py-1.5 text-base font-medium uppercase tracking-[0.2em] text-foreground">
          {ECOSYSTEM_HEADING.badge}
        </span>

        <h2 className="velix-section-title-sm mt-6 flex flex-col gap-2 text-left font-semibold tracking-tight text-foreground sm:gap-2.5 md:mt-8 lg:mt-10">
          {ECOSYSTEM_HEADING.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
      </div>
    </m.aside>
  )
}

export function EcosystemGraph() {
  const reduced = useReducedMotion()

  return (
    <section
      id="ecosystem"
      aria-label="Velixus Labs core systems"
      className="relative min-h-svh w-full bg-bg"
    >
      <div className="absolute inset-0 z-0">
        <EcosystemBackground animate={!reduced} />
      </div>

      <div className="relative z-10 pt-16 md:pt-20">
        <div className="velix-container w-full">
          <div className="grid min-h-[calc(100svh-4rem)] w-full grid-cols-1 items-center gap-10 py-10 md:grid-cols-[38%_62%] md:gap-12 lg:gap-16">
            <EcosystemLeftPanel reduced={reduced} />

            <div className="relative flex h-[min(72vh,640px)] w-full min-w-0 md:h-[min(78vh,700px)]">
              <SystemCardWindow reduced={reduced} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
