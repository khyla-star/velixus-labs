import { m, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

const easeOut = [0.25, 0.1, 0.25, 1] as const

const CASCADE_OFFSET = [
  'xl:mt-0',
  'xl:mt-8',
  'xl:mt-16',
  'xl:mt-8',
  'xl:mt-0',
] as const

const LINE = {
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

function KnowledgeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path d="M10 9h20a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2Z" {...LINE} />
      <path d="M14 15h16M14 20h12M14 25h14" {...LINE} strokeWidth="1.25" />
    </svg>
  )
}

function ProductionIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path d="M8 28V14l12-5 12 5v14H8Z" {...LINE} />
      <path d="M12 26h16M12 20h10M20 12l6 3" {...LINE} strokeWidth="1.25" />
    </svg>
  )
}

function WorkflowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <rect x="12" y="11" width="16" height="6" rx="1.5" {...LINE} />
      <rect x="12" y="23" width="10" height="6" rx="1.5" {...LINE} />
      <rect x="26" y="23" width="4" height="6" rx="1" {...LINE} />
      <path d="M22 17v6M18 26h4" {...LINE} strokeWidth="1.25" />
    </svg>
  )
}

function VectorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="4" {...LINE} />
      <circle cx="28" cy="12" r="4" {...LINE} />
      <circle cx="20" cy="28" r="4" {...LINE} />
      <path d="M15.5 15 24.5 15M17 24 23 15" {...LINE} strokeWidth="1.25" opacity="0.45" />
    </svg>
  )
}

function AgentIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <circle cx="20" cy="20" r="12" {...LINE} />
      <circle cx="20" cy="20" r="7" {...LINE} strokeWidth="1.25" opacity="0.45" />
      <path d="M20 16v5M20 25v2" {...LINE} strokeWidth="1.75" />
    </svg>
  )
}

const PROBLEM_ICONS = [
  KnowledgeIcon,
  ProductionIcon,
  WorkflowIcon,
  VectorIcon,
  AgentIcon,
] as const

type AIProblem = {
  readonly title: string
  readonly description: string
}

type AIProblemsCascadeProps = {
  problems: readonly AIProblem[]
}

function ProblemCard({
  problem,
  index,
  reduced,
}: {
  problem: AIProblem
  index: number
  reduced: boolean | null
}) {
  const number = String(index + 1).padStart(2, '0')
  const Icon = PROBLEM_ICONS[index] ?? PROBLEM_ICONS[PROBLEM_ICONS.length - 1]

  return (
    <m.article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#2a2a2e] bg-[#1e1e22] p-6 transition-colors duration-300 hover:border-accent/35 md:p-7',
        CASCADE_OFFSET[index],
      )}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{ duration: 0.5, ease: easeOut, delay: index * 0.08 }}
      whileHover={reduced ? undefined : { y: -3 }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent/70 via-accent/20 to-transparent"
        aria-hidden
      />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#2a2a2e] bg-[#141416] text-foreground/90 transition-colors duration-300 group-hover:border-accent/30 group-hover:text-accent md:h-11 md:w-11">
          <Icon className="h-5 w-5 md:h-[1.35rem] md:w-[1.35rem]" />
        </div>
        <span className="font-mono text-xs tracking-[0.16em] text-accent/80">{number}</span>
      </div>

      <h3 className="relative mt-5 text-base font-semibold tracking-tight text-foreground md:mt-6 md:text-lg">
        {problem.title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-muted md:text-[0.9375rem]">
        {problem.description}
      </p>
    </m.article>
  )
}

export function AIProblemsCascade({ problems }: AIProblemsCascadeProps) {
  const reduced = useReducedMotion()

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-5">
      {problems.map((problem, i) => (
        <ProblemCard key={problem.title} problem={problem} index={i} reduced={reduced} />
      ))}
    </div>
  )
}
