import { m, useReducedMotion } from 'framer-motion'
import { OUR_PROCESS } from '@/lib/home-content'
import { cn } from '@/lib/utils'

const easeOut = [0.25, 0.1, 0.25, 1] as const

const LINE = {
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

function ResearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect x="10" y="11" width="17" height="23" rx="2.5" {...LINE} />
      <path d="M14 16H23M14 20H20M14 24H22M14 28H18" {...LINE} strokeWidth="1.25" />
      <path d="M15.5 31.5L18 29L20.5 30.5L24 27" {...LINE} strokeWidth="1.25" />
      <circle cx="31" cy="30" r="6.5" {...LINE} />
      <path d="M35.5 34.5L40 39" {...LINE} strokeWidth="2" />
      <circle cx="31" cy="30" r="2.25" {...LINE} strokeWidth="1.25" />
    </svg>
  )
}

function ConceptIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M24 9C17.4 9 12 14.1 12 20.5c0 3.8 1.8 7.1 4.5 9.2L15 36.5h18l-1.5-6.8c2.7-2.1 4.5-5.4 4.5-9.2C36 14.1 30.6 9 24 9Z"
        {...LINE}
      />
      <path d="M19 36.5H29M20.5 39.5H27.5" {...LINE} strokeWidth="1.25" />
      <path d="M24 13.5V19M20.5 16.25H27.5" {...LINE} />
      <path d="M18.5 23.5C19.8 20.6 21.7 18.5 24 18.5s4.2 2.1 5.5 5" {...LINE} strokeWidth="1.25" />
      <path
        d="M10 25H8M40 25H38M24 6V8M14.5 11.5L13 10M33.5 11.5L35 10"
        {...LINE}
        strokeWidth="1.25"
        opacity="0.55"
      />
    </svg>
  )
}

function ImplementIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect x="9" y="11" width="28" height="20" rx="2.5" {...LINE} />
      <path d="M9 16.5H37" {...LINE} strokeWidth="1.25" />
      <circle cx="13.5" cy="13.75" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="17.25" cy="13.75" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="21" cy="13.75" r="0.9" fill="currentColor" stroke="none" />
      <path d="M13 20.5H19M13 24H23.5M13 27.5H20" {...LINE} strokeWidth="1.25" />
      <path d="M27.5 20.5L31 24L27.5 27.5" {...LINE} strokeWidth="1.25" />
      <circle cx="34.5" cy="33" r="6.5" {...LINE} />
      <circle cx="34.5" cy="33" r="3.25" {...LINE} strokeWidth="1.25" />
      <path d="M34.5 30.25V33L36.75 35" {...LINE} strokeWidth="1.25" />
    </svg>
  )
}

function AdvantageIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path d="M10 35V23.5L24 11l14 12.5V35H10Z" {...LINE} />
      <path d="M10 35H38M24 11V35M10 35L24 23.5L38 35" {...LINE} strokeWidth="1.25" opacity="0.45" />
      <path d="M15 30V35M22.5 25V35M30 20V35" {...LINE} strokeWidth="1.75" />
      <path d="M15 30H30" {...LINE} strokeWidth="1.25" />
      <path d="M15 30L22.5 25L30 20" {...LINE} strokeWidth="1.25" />
      <path
        d="M31.5 13.5L33.5 15.5L37.5 11.5"
        {...LINE}
        strokeWidth="1.75"
      />
      <circle cx="34.5" cy="13.5" r="6" {...LINE} strokeWidth="1.25" />
    </svg>
  )
}

const PROCESS_ICONS = [ResearchIcon, ConceptIcon, ImplementIcon, AdvantageIcon] as const

const BORDER_STROKE = '#3d3d3d'
const BORDER_R = 16
const OUTER_LEFT_START = 75
const OUTER_RIGHT_END = 25

function ProcessGroupOutline() {
  const path = [
    `M 0.5 ${OUTER_LEFT_START}`,
    `V ${BORDER_R}`,
    `Q 0.5 0.5 ${BORDER_R} 0.5`,
    `H ${25 - BORDER_R}`,
    `Q 25 0.5 25 ${BORDER_R}`,
    `V ${100 - BORDER_R}`,
    `Q 25 99.5 ${25 + BORDER_R} 99.5`,
    `H ${50 - BORDER_R}`,
    `Q 50 99.5 50 ${100 - BORDER_R}`,
    `V ${BORDER_R}`,
    `Q 50 0.5 ${50 + BORDER_R} 0.5`,
    `H ${75 - BORDER_R}`,
    `Q 75 0.5 75 ${BORDER_R}`,
    `V ${100 - BORDER_R}`,
    `Q 75 99.5 ${75 + BORDER_R} 99.5`,
    `H ${100 - BORDER_R}`,
    `Q 99.5 99.5 99.5 ${100 - BORDER_R}`,
    `V ${OUTER_RIGHT_END}`,
  ].join(' ')

  return (
    <svg
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d={path}
        fill="none"
        stroke={BORDER_STROKE}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

function getProcessCardBorderClasses(index: number) {
  const noBottomBorder = index % 2 === 0

  return cn(
    'relative h-full overflow-visible',
    'max-lg:border max-lg:border-[#3d3d3d] max-lg:border-x',
    noBottomBorder
      ? 'max-lg:border-t max-lg:border-b-0 max-lg:rounded-t-[40px]'
      : 'max-lg:border-b max-lg:border-t-0 max-lg:rounded-b-[40px]',
  )
}

function ProcessCard({
  title,
  description,
  iconIndex,
  iconOnTop,
  index,
  delay,
  reduced,
}: {
  title: string
  description: string
  iconIndex: number
  iconOnTop: boolean
  index: number
  delay: number
  reduced: boolean | null
}) {
  const Icon = PROCESS_ICONS[iconIndex]

  const iconBlock = (
    <div className="relative z-10 flex justify-center">
      <Icon className="h-11 w-11 text-white/90 md:h-12 md:w-12" />
    </div>
  )

  const titleBlock = (
    <h3 className="relative z-10 text-center text-base font-semibold tracking-[-0.01em] text-white">
      {title}
    </h3>
  )

  const descriptionBlock = (
    <p className="relative z-10 text-center text-base leading-[1.65] text-[#8b8b93]">
      {description}
    </p>
  )

  return (
    <m.article
      className={cn(
        'relative flex min-h-[220px] flex-col justify-between px-6 py-8 sm:min-h-[240px] sm:px-7 sm:py-9 lg:min-h-[260px] lg:px-8 lg:py-10',
        getProcessCardBorderClasses(index),
      )}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.5, ease: easeOut, delay }}
    >
        {iconOnTop ? (
          <>
            <div className="flex flex-col items-center gap-5">
              {iconBlock}
              {titleBlock}
            </div>
            <div className="mt-10">{descriptionBlock}</div>
          </>
        ) : (
          <>
            <div>{descriptionBlock}</div>
            <div className="mt-10 flex flex-col items-center gap-5">
              {titleBlock}
              {iconBlock}
            </div>
          </>
        )}
    </m.article>
  )
}

export function ProcessSection() {
  const reduced = useReducedMotion()
  const { badge, title, items } = OUR_PROCESS

  return (
    <section
      id="process"
      aria-label="Our process"
      className="relative bg-[#121212] py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-8 md:px-10 lg:px-12">
        <m.div
          className="mx-auto mb-16 flex max-w-4xl flex-col items-center text-center md:mb-20 lg:mb-24"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.65, ease: easeOut }}
        >
          <span className="inline-flex items-center rounded-full border border-white/20 bg-[#121212] px-7 py-2 text-base font-normal uppercase tracking-[0.22em] text-white/90 md:px-8 md:py-2.5">
            {badge}
          </span>
          <h2 className="velix-section-title mt-8 font-semibold tracking-[-0.03em] text-white md:mt-10">
            {title}
          </h2>
        </m.div>

        <m.div
          className="relative"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.05 }}
        >
          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch lg:gap-0">
            <ProcessGroupOutline />
            {items.map((item, index) => (
              <ProcessCard
                key={item.id}
                title={item.title}
                description={item.description}
                iconIndex={index}
                iconOnTop={index % 2 === 0}
                index={index}
                delay={index * 0.06}
                reduced={reduced}
              />
            ))}
          </div>
        </m.div>
      </div>
    </section>
  )
}
