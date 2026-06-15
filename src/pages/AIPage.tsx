import { ButtonLink } from '@/components/ui/button'
import { Section, SectionHeader } from '@/components/ui/section'
import { AIBenefitsSection } from '@/components/sections/ai-benefits-section'
import { AICapabilitiesSection } from '@/components/sections/ai-capabilities-section'
import { PageCta } from '@/components/sections/page-cta'
import { AIProblemsCascade } from '@/components/sections/ai-problems-cascade'
import { PageHero } from '@/components/sections/page-hero'
import {
  AI_BENEFITS,
  AI_CTA,
  AI_HERO,
  AI_PROBLEMS,
  AI_SECTIONS,
  AI_SERVICES,
} from '@/lib/content'
import { usePageTitle } from '@/lib/use-page-title'

export function AIPage() {
  usePageTitle(
    'AI Solutions',
    'Enterprise AI engineering — RAG, vector pipelines, agents, and automation for production workloads.',
  )

  return (
    <>
      <PageHero showTeamButton>
        <p className="velix-hero-eyebrow">{AI_HERO.eyebrow}</p>
        <h1 className="velix-hero-title">{AI_HERO.title}</h1>
        {AI_HERO.lead ? <p className="velix-hero-lead">{AI_HERO.lead}</p> : null}
        {AI_HERO.description ? <p className="velix-hero-description">{AI_HERO.description}</p> : null}
        <div className="velix-hero-actions">
          <ButtonLink href={AI_HERO.primaryCta.href}>{AI_HERO.primaryCta.label}</ButtonLink>
          <ButtonLink href={AI_HERO.secondaryCta.href} variant="secondary">
            {AI_HERO.secondaryCta.label}
          </ButtonLink>
        </div>
      </PageHero>

      <Section variant="surface">
        <SectionHeader
          eyebrow={AI_SECTIONS.problems.eyebrow}
          title={AI_SECTIONS.problems.title}
          description={AI_SECTIONS.problems.description}
        />
        <AIProblemsCascade problems={AI_PROBLEMS} />
      </Section>

      <Section>
        <SectionHeader
          eyebrow={AI_SECTIONS.capabilities.eyebrow}
          title={AI_SECTIONS.capabilities.title}
          description={AI_SECTIONS.capabilities.description}
        />
        <AICapabilitiesSection
          capabilities={AI_SERVICES}
          initialVisibleCount={AI_SECTIONS.capabilities.initialVisibleCount}
          learnMoreLabel={AI_SECTIONS.capabilities.learnMoreLabel}
          showLessLabel={AI_SECTIONS.capabilities.showLessLabel}
        />
      </Section>

      <Section variant="surface">
        <SectionHeader
          eyebrow={AI_SECTIONS.benefits.eyebrow}
          title={AI_SECTIONS.benefits.title}
          description={AI_SECTIONS.benefits.description}
          align="center"
          className="max-w-3xl"
          titleClassName="bg-gradient-to-r from-white from-45% via-[#e8ffd0] to-accent bg-clip-text text-transparent"
        />
        <AIBenefitsSection benefits={AI_BENEFITS} />
      </Section>

      <Section>
        <PageCta
          eyebrow={AI_CTA.eyebrow}
          title={AI_CTA.title}
          description={AI_CTA.description}
          cta={AI_CTA.cta}
        />
      </Section>
    </>
  )
}
