import { ButtonLink } from '@/components/ui/button'
import { HeroTeamButton } from '@/components/sections/hero-team-button'
import { PageHeroShell } from '@/components/sections/page-hero-shell'
import { Reveal } from '@/components/motion/reveal'

type BlockchainHeroProps = {
  eyebrow: string
  title: string
  lead: string
  description: string
  primaryCta: { readonly label: string; readonly href: string }
  secondaryCta: { readonly label: string; readonly href: string }
}

export function BlockchainHero({
  eyebrow,
  title,
  lead,
  description,
  primaryCta,
  secondaryCta,
}: BlockchainHeroProps) {
  return (
    <PageHeroShell>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="min-w-0">
            <p className="velix-hero-eyebrow">{eyebrow}</p>
            <h1 className="velix-hero-title">{title}</h1>
            {lead ? <p className="velix-hero-lead">{lead}</p> : null}
            {description ? <p className="velix-hero-description">{description}</p> : null}
            <div className="velix-hero-actions">
              <ButtonLink href={primaryCta.href} size="lg" className="w-full sm:w-auto">
                {primaryCta.label}
              </ButtonLink>
              <ButtonLink href={secondaryCta.href} variant="secondary" size="lg" className="w-full sm:w-auto">
                {secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex justify-center lg:justify-end">
          <HeroTeamButton />
        </Reveal>
      </div>
    </PageHeroShell>
  )
}
