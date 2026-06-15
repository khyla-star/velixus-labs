import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ButtonLink } from '@/components/ui/button'
import { HERO } from '@/lib/home-content'
import { SITE } from '@/lib/content'

function NeuralLines() {
  const paths = [
    'M 80 200 Q 200 120 320 200',
    'M 60 280 Q 200 180 340 260',
    'M 100 140 Q 200 220 300 160',
    'M 40 220 Q 200 80 360 240',
  ]

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
      preserveAspectRatio="none"
      aria-hidden
    >
      {paths.map((d, i) => (
        <m.path
          key={d}
          d={d}
          fill="none"
          stroke="rgba(184,255,44,0.15)"
          strokeWidth={1}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.2, 0.5, 0.2] }}
          transition={{
            pathLength: { duration: 2.5, delay: i * 0.3 },
            opacity: { duration: 5, repeat: Infinity, delay: i * 0.5 },
          }}
        />
      ))}
    </svg>
  )
}

function Particles({ count = 24 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <m.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-accent/30"
          style={{
            left: `${(i * 17 + 7) % 100}%`,
            top: `${(i * 23 + 11) % 100}%`,
          }}
          animate={{
            y: [0, -30 - (i % 20), 0],
            x: [0, (i % 2 === 0 ? 12 : -12), 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: 8 + (i % 5),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
        />
      ))}
    </>
  )
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

const titleStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.15 } },
}

const titleLine = {
  hidden: { opacity: 0, y: 72 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const dividerReveal = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.7, ease: 'easeOut' as const, delay: 0.55 },
  },
}

export function HeroSystemCore() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.03])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 40])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

  return (
    <section
      ref={ref}
      className="relative flex min-h-[calc(100svh-4rem)] items-start border-b border-border/50 supports-[min-height:100dvh]:min-h-[calc(100dvh-4rem)] lg:min-h-[calc(100vh-4rem)] lg:items-center"
    >
      <div className="hero-bg-layer pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <m.div
          style={reduced ? undefined : { scale: bgScale, y: bgY }}
          className="absolute inset-0 velix-grid-bg"
        />
        <m.div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(184,255,44,0.04) 0%, transparent 70%)',
          }}
          animate={reduced ? undefined : { opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {!reduced && <NeuralLines />}
        {!reduced && <Particles />}
      </div>

      <m.div
        style={reduced ? undefined : { opacity: contentOpacity }}
        className="velix-container relative z-10 flex w-full flex-col justify-center py-10 sm:py-14 lg:py-20 xl:py-24"
      >
        <div className="hero-system-grid">
          <m.div
            variants={stagger}
            initial={false}
            animate={reduced ? undefined : 'visible'}
            className="hero-system-copy"
          >
            <m.p variants={item} className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              {HERO.eyebrow}
            </m.p>
            <m.h1
              variants={titleStagger}
              initial={reduced ? false : 'hidden'}
              animate={reduced ? undefined : 'visible'}
              className="mt-4 text-[clamp(1.65rem,7.5vw+0.5rem,2.5rem)] font-semibold leading-[0.95] tracking-tight text-foreground sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem]"
            >
              {HERO.titleLines.map((line) => (
                <span key={line} className="block overflow-hidden">
                  <m.span variants={titleLine} className="block">
                    {line}
                  </m.span>
                </span>
              ))}
            </m.h1>
            <m.hr
              variants={dividerReveal}
              initial={reduced ? false : 'hidden'}
              animate={reduced ? undefined : 'visible'}
              className="mt-8 w-full max-w-xl origin-left border-0 border-t-[3px] border-accent md:mt-10"
            />
            <m.p variants={item} className="mt-6 max-w-2xl text-sm leading-relaxed text-muted sm:mt-8 sm:text-base md:mt-10 md:text-lg lg:max-w-none">
              {HERO.subtitle}
            </m.p>
            <m.div
              variants={item}
              className="mt-8 flex w-full min-w-0 flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-start"
            >
              <ButtonLink href={HERO.primaryCta.href} size="lg" className="w-full sm:w-auto">
                {HERO.primaryCta.label}
              </ButtonLink>
              <ButtonLink
                href={HERO.secondaryCta.href}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {HERO.secondaryCta.label}
              </ButtonLink>
            </m.div>
          </m.div>

          <div className="hero-system-logo-slot">
            <m.div
              className="w-full"
              animate={reduced ? undefined : { y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <m.img
                src={SITE.headerImage}
                alt=""
                aria-hidden
                className="hero-system-logo"
                initial={reduced ? false : { opacity: 0, y: 24 }}
                animate={reduced ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
              />
            </m.div>
          </div>
        </div>
      </m.div>
    </section>
  )
}
