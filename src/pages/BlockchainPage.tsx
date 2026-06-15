import { Section, SectionHeader } from '@/components/ui/section'
import { BlockchainFundamentals } from '@/components/sections/blockchain-fundamentals'
import { BlockchainHero } from '@/components/sections/blockchain-hero'
import { BlockchainLedgerServices } from '@/components/sections/blockchain-ledger-services'
import { PageCta } from '@/components/sections/page-cta'
import {
  BLOCKCHAIN_CTA,
  BLOCKCHAIN_HERO,
  BLOCKCHAIN_SECTIONS,
  BLOCKCHAIN_SERVICES,
  BLOCKCHAIN_VALUES,
} from '@/lib/content'
import { usePageTitle } from '@/lib/use-page-title'

export function BlockchainPage() {
  usePageTitle(
    'Blockchain',
    'Enterprise blockchain systems, smart contracts, tokenization, and identity infrastructure.',
  )

  return (
    <>
      <BlockchainHero
        eyebrow={BLOCKCHAIN_HERO.eyebrow}
        title={BLOCKCHAIN_HERO.title}
        lead={BLOCKCHAIN_HERO.lead}
        description={BLOCKCHAIN_HERO.description}
        primaryCta={BLOCKCHAIN_HERO.primaryCta}
        secondaryCta={BLOCKCHAIN_HERO.secondaryCta}
      />

      <Section className="bg-bg">
        <SectionHeader
          eyebrow={BLOCKCHAIN_SECTIONS.fundamentals.eyebrow}
          title={BLOCKCHAIN_SECTIONS.fundamentals.title}
          description={BLOCKCHAIN_SECTIONS.fundamentals.description}
        />
        <BlockchainFundamentals fundamentals={BLOCKCHAIN_VALUES} />
      </Section>

      <Section>
        <SectionHeader
          eyebrow={BLOCKCHAIN_SECTIONS.services.eyebrow}
          title={BLOCKCHAIN_SECTIONS.services.title}
          description={BLOCKCHAIN_SECTIONS.services.description}
        />
        <BlockchainLedgerServices services={BLOCKCHAIN_SERVICES} />
      </Section>

      <Section>
        <PageCta
          eyebrow={BLOCKCHAIN_CTA.eyebrow}
          title={BLOCKCHAIN_CTA.title}
          description={BLOCKCHAIN_CTA.description}
          cta={BLOCKCHAIN_CTA.cta}
        />
      </Section>
    </>
  )
}
