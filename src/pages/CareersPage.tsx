import { CultureValueCard } from '@/components/sections/culture-value-card'
import { OpenPositionsSection } from '@/components/sections/open-positions-section'
import { PageHero } from '@/components/sections/page-hero'
import { ButtonLink } from '@/components/ui/button'
import { Section, SectionHeader } from '@/components/ui/section'
import {
  CULTURE_VALUES,
  CAREERS_CULTURE,
  CAREERS_FALLBACK_CTA,
  CAREERS_POSITIONS_SECTION,
  OPEN_POSITIONS,
} from '@/lib/content'
import { usePageTitle } from '@/lib/use-page-title'

function CareersHeroStats() {
  const teams = [...new Set(OPEN_POSITIONS.map((job) => job.team))]
  const count: number = OPEN_POSITIONS.length

  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-[0.14em] text-muted">
      <span className="text-accent">
        {count} open {count === 1 ? 'position' : 'positions'}
      </span>
      <span>{teams.join(' · ')}</span>
      <span>Remote-first · Global</span>
    </div>
  )
}

export function CareersPage() {
  usePageTitle('Careers', 'Join Velixus Labs and build the future of AI and Web3 infrastructure.')

  return (
    <>
      <PageHero className="border-b border-border" showBackground={false}>
        <p className="velix-hero-eyebrow">Careers</p>
        <h1 className="velix-hero-title max-w-none whitespace-nowrap text-[clamp(0.875rem,4vw,2.75rem)]">
          Build the future of AI & Web3 at Velixus Labs
        </h1>
        <p className="velix-hero-description">
          Join a remote-first engineering team solving infrastructure problems at the frontier
          of intelligence and decentralized systems.
        </p>
        <CareersHeroStats />
      </PageHero>

      <Section
        backgroundImage={CAREERS_CULTURE.backgroundImage}
        backgroundOverlay={false}
        backgroundEffect="dark-blue"
      >
        <SectionHeader
          eyebrow="Culture"
          title="How we work"
          titleClassName="bg-gradient-to-r from-[#B8FF2C] via-[#e8ffd0] to-[#7dd3fc] bg-clip-text text-transparent"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-7">
          {CULTURE_VALUES.map((value, i) => (
            <CultureValueCard
              key={value.title}
              title={value.title}
              description={value.description}
              index={i}
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow={CAREERS_POSITIONS_SECTION.eyebrow}
          title={CAREERS_POSITIONS_SECTION.title}
          description={CAREERS_POSITIONS_SECTION.description}
        />
        <OpenPositionsSection positions={OPEN_POSITIONS} />

        <article className="mt-14 rounded-xl border border-border bg-surface px-6 py-8 text-center md:mt-16 md:px-10 md:py-10">
          <h3 className="text-xl font-semibold text-foreground md:text-2xl">
            {CAREERS_FALLBACK_CTA.title}
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
            {CAREERS_FALLBACK_CTA.description}
          </p>
          <ButtonLink href={CAREERS_FALLBACK_CTA.cta.href} size="lg" className="mt-6">
            {CAREERS_FALLBACK_CTA.cta.label}
          </ButtonLink>
        </article>
      </Section>
    </>
  )
}
