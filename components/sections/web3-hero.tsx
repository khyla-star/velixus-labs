import { ButtonLink } from '@/components/ui/button'
import { HeroTeamButton } from '@/components/sections/hero-team-button'
import { PageHeroShell } from '@/components/sections/page-hero-shell'
import { Reveal } from '@/components/motion/reveal'

type Web3HeroProps = {
  eyebrow: string
  title: string
  lead: string
  description: string
  chips: readonly string[]
  primaryCta: { readonly label: string; readonly href: string }
  secondaryCta: { readonly label: string; readonly href: string }
}

export function Web3Hero({
  eyebrow,
  title,
  lead,
  description,
  chips,
  primaryCta,
  secondaryCta,
}: Web3HeroProps) {
  return (
    <PageHeroShell>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="max-w-3xl text-left">
            <p className="velix-hero-eyebrow">{eyebrow}</p>
            <h1 className="velix-hero-title">{title}</h1>
            {lead ? <p className="velix-hero-lead">{lead}</p> : null}
            {description ? <p className="velix-hero-description">{description}</p> : null}

            {chips.length > 0 ? (
              <div className="mt-8 flex flex-wrap items-center gap-2">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[#2a2a2e] bg-[#0e0e10]/80 px-4 py-1.5 text-xs font-medium text-foreground/90 backdrop-blur-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            ) : null}

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
