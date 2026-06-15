import { useEffect, useRef, useState } from 'react'
import { m, useReducedMotion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/home-content'
import { SITE } from '@/lib/content'
import { cn } from '@/lib/utils'

const easeOut = [0.25, 0.1, 0.25, 1] as const
const MAX_KEY_INDEX_OFFSET = 2

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden>
      <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.9l-4.94 2.81.94-5.5-4-3.9 5.53-.8L10 1.5z" />
    </svg>
  )
}

function StarRow({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-1" aria-hidden>
      {Array.from({ length: 5 }).map((_, index) => {
        const fillLevel = Math.min(1, Math.max(0, rating - index))
        const filled = fillLevel >= 1
        const partial = fillLevel > 0 && fillLevel < 1

        return (
          <span key={index} className="relative h-[18px] w-[18px]">
            <StarIcon className="absolute inset-0 h-full w-full fill-white/15" />
            {filled ? (
              <StarIcon className="absolute inset-0 h-full w-full fill-accent" />
            ) : null}
            {partial ? (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fillLevel * 100}%` }}>
                <StarIcon className="h-[18px] w-[18px] fill-accent" />
              </span>
            ) : null}
          </span>
        )
      })}
    </div>
  )
}

function TestimonialCard({
  rating,
  quote,
  name,
  role,
  highlighted,
}: {
  rating: number
  quote: string
  name: string
  role: string
  highlighted?: boolean
}) {
  return (
    <article
      className={cn(
        'flex h-full min-h-[280px] flex-col rounded-[20px] bg-gradient-to-b from-[#23252b] to-[#1a1c22] p-8 transition-shadow duration-300 md:min-h-[300px] md:p-10',
        highlighted && 'ring-1 ring-accent/25',
      )}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {rating.toFixed(1)}
        </span>
        <StarRow rating={rating} />
      </div>

      <p className="mt-6 flex-1 text-sm leading-relaxed text-foreground md:mt-7 md:text-base">
        {quote}
      </p>

      <div className="mt-8 md:mt-10">
        <p className="text-base font-bold text-foreground md:text-lg">{name}</p>
        <p className="mt-1 text-sm text-muted">{role}</p>
      </div>
    </article>
  )
}

export function TestimonialsSection() {
  const reduced = useReducedMotion()
  const { overallRating, reviewCount, titlePrefix, titleAccent, items } = TESTIMONIALS
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const [slideStep, setSlideStep] = useState(0)

  const maxKeyIndex = items.length - MAX_KEY_INDEX_OFFSET
  const canGoPrev = activeIndex > 0
  const canGoNext = activeIndex < maxKeyIndex

  useEffect(() => {
    const updateSlideStep = () => {
      if (!trackRef.current) return
      const gap = window.matchMedia('(min-width: 768px)').matches ? 24 : 20
      setSlideStep((trackRef.current.offsetWidth + gap) / 2)
    }

    updateSlideStep()
    window.addEventListener('resize', updateSlideStep)
    return () => window.removeEventListener('resize', updateSlideStep)
  }, [])

  const selectReview = (index: number) => {
    if (index === activeIndex) return
    if (index === activeIndex + 1) return

    const targetIndex = Math.min(index, maxKeyIndex)
    if (targetIndex === activeIndex) return

    setActiveIndex(targetIndex)
  }

  const goPrev = () => {
    if (!canGoPrev) return
    setActiveIndex((current) => current - 1)
  }

  const goNext = () => {
    if (!canGoNext) return
    setActiveIndex((current) => current + 1)
  }

  const isBarDisabled = (index: number) =>
    index === activeIndex || index === activeIndex + 1

  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      className="relative bg-bg py-20 md:py-28 lg:py-32"
    >
      <div className="velix-container relative">
        <m.div
          className="relative mb-12 px-2 sm:mb-14 sm:px-4 md:mb-16"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.65, ease: easeOut }}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="relative inline-block min-w-0 pr-16 sm:pr-20 md:pr-24 lg:pr-28">
              <span
                className="pointer-events-none absolute right-[-2.5rem] top-1/2 z-0 flex h-[7rem] w-[7rem] -translate-y-1/2 items-center justify-center rounded-full border border-foreground/35 bg-bg text-3xl font-semibold text-foreground sm:right-[-2rem] sm:h-[8rem] sm:w-[8rem] sm:text-4xl md:right-[-1.75rem] md:h-[9rem] md:w-[9rem] md:text-5xl lg:right-[-1.25rem] lg:h-[10.5rem] lg:w-[10.5rem] lg:text-[4.25rem]"
                aria-hidden
              >
                {overallRating.toFixed(1)}
              </span>

              <h2 className="velix-section-title-xl relative z-10 whitespace-nowrap font-bold uppercase leading-[0.9] tracking-tight">
                <span className="bg-gradient-to-r from-white from-45% via-[#e8ffd0] to-accent bg-clip-text text-transparent">
                  {titlePrefix}
                  {titleAccent}
                </span>
              </h2>

              <span className="sr-only">{`Overall rating ${overallRating} out of 5`}</span>
            </div>

            <div className="flex shrink-0 flex-col items-start gap-2 lg:items-end lg:pt-3">
              <StarRow rating={overallRating} />
              <p className="text-sm text-foreground md:text-base">
                {reviewCount}{' '}
                <span className="text-muted">(Review)</span>
              </p>
            </div>
          </div>
        </m.div>

        <div ref={trackRef} className="testimonials-track overflow-hidden" aria-live="polite" aria-atomic="true">
          <m.div
            className="flex gap-5 md:gap-6"
            animate={reduced ? undefined : { x: -activeIndex * slideStep }}
            transition={{ duration: 0.45, ease: easeOut }}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                className="w-[calc(50%-0.625rem)] shrink-0 md:w-[calc(50%-0.75rem)]"
              >
                <TestimonialCard
                  rating={item.rating}
                  quote={item.quote}
                  name={item.name}
                  role={item.role}
                  highlighted={index === activeIndex}
                />
              </div>
            ))}
          </m.div>
        </div>

        <div className="mt-12 flex items-center justify-between gap-4 md:mt-14 md:gap-6">
          <button
            type="button"
            onClick={goPrev}
            disabled={!canGoPrev}
            aria-label="Previous review"
            className={cn(
              'flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-lg text-foreground transition-colors',
              canGoPrev
                ? 'hover:border-foreground/30 hover:bg-surface/80'
                : 'cursor-not-allowed opacity-35',
            )}
          >
            ‹
          </button>

          <div className="flex flex-1 items-center gap-1.5 md:gap-2">
            {items.map((item, index) => {
              const isActive = activeIndex === index
              const isRightPreview = activeIndex + 1 === index
              const isDisabled = isBarDisabled(index)

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => selectReview(index)}
                  disabled={isDisabled}
                  aria-label={`Show ${SITE.name} review ${index + 1} from ${item.name}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-300',
                    isActive && 'flex-[2] bg-accent',
                    isRightPreview && !isActive && 'flex-1 bg-accent/45',
                    !isActive && !isRightPreview && 'flex-1 bg-border hover:bg-border/80',
                    isDisabled && 'cursor-not-allowed',
                  )}
                />
              )
            })}
          </div>

          <button
            type="button"
            onClick={goNext}
            disabled={!canGoNext}
            aria-label="Next review"
            className={cn(
              'flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-lg text-foreground transition-colors',
              canGoNext
                ? 'hover:border-foreground/30 hover:bg-surface/80'
                : 'cursor-not-allowed opacity-35',
            )}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
