import { m, useReducedMotion } from 'framer-motion'
import { ButtonLink } from '@/components/ui/button'
import { HeroTeamButton } from '@/components/sections/hero-team-button'
import { PageHeroShell } from '@/components/sections/page-hero-shell'
import { Reveal } from '@/components/motion/reveal'

type CryptoFinanceHeroProps = {
  eyebrow: string
  title: string
  lead: string
  description: string
  primaryCta: { readonly label: string; readonly href: string }
  secondaryCta: { readonly label: string; readonly href: string }
  services: readonly string[]
}

function ServicesMarquee({ items }: { items: readonly string[] }) {
  const reduced = useReducedMotion()
  const doubled = [...items, ...items]

  return (
    <div className="border-b border-[#2a2a2e] bg-[#0a0a0a]/90">
      <div className="overflow-hidden py-1.5">
        <m.div
          className="flex w-max gap-6 px-4 font-mono text-[0.58rem] uppercase tracking-[0.14em] md:gap-8 md:px-6"
          animate={reduced ? undefined : { x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((item, i) => (
            <span key={`${item}-${i}`} className="flex shrink-0 items-center gap-2 text-muted">
              <span className="text-[0.45rem] text-accent">◆</span>
              <span className="text-foreground/80">{item}</span>
            </span>
          ))}
        </m.div>
      </div>
    </div>
  )
}

export function CryptoFinanceHero({
  eyebrow,
  title,
  lead,
  description,
  primaryCta,
  secondaryCta,
  services,
}: CryptoFinanceHeroProps) {
  return (
    <PageHeroShell
      topSlot={
        <div className="absolute inset-x-0 top-0 z-20">
          <ServicesMarquee items={services} />
        </div>
      }
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="max-w-3xl text-left">
            <p className="velix-hero-eyebrow">{eyebrow}</p>
            <h1 className="velix-hero-title">{title}</h1>
            {lead ? <p className="velix-hero-lead">{lead}</p> : null}
            {description ? <p className="velix-hero-description">{description}</p> : null}

            <div className="velix-hero-actions">
              <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
              <ButtonLink href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <HeroTeamButton />
        </Reveal>
      </div>
    </PageHeroShell>
  )
}
