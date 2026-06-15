import { CryptoComplianceStrip } from '@/components/sections/crypto-compliance-strip'
import { CryptoCoreServices } from '@/components/sections/crypto-core-services'
import { CryptoFinanceHero } from '@/components/sections/crypto-finance-hero'
import { PageCta } from '@/components/sections/page-cta'
import { CryptoSection, CryptoSectionHeader } from '@/components/sections/crypto-section'
import {
  CRYPTO_CORE_SERVICES,
  CRYPTO_CTA,
  CRYPTO_DELIVERABLES,
  CRYPTO_HERO,
  CRYPTO_SECTIONS,
} from '@/lib/content'
import { usePageTitle } from '@/lib/use-page-title'

export function CryptoPage() {
  usePageTitle(
    'Crypto Development',
    'Velixus Labs develops Token, Wallet, and Payment Gateway systems — plus custody, exchange, and treasury infrastructure.',
  )

  return (
    <>
      <CryptoFinanceHero
        eyebrow={CRYPTO_HERO.eyebrow}
        title={CRYPTO_HERO.title}
        lead={CRYPTO_HERO.lead}
        description={CRYPTO_HERO.description}
        primaryCta={CRYPTO_HERO.primaryCta}
        secondaryCta={CRYPTO_HERO.secondaryCta}
        services={CRYPTO_HERO.services}
      />

      <CryptoSection variant="panel">
        <CryptoSectionHeader
          eyebrow={CRYPTO_SECTIONS.services.eyebrow}
          title={CRYPTO_SECTIONS.services.title}
          description={CRYPTO_SECTIONS.services.description}
        />
        <CryptoCoreServices services={CRYPTO_CORE_SERVICES} />
      </CryptoSection>

      <CryptoSection variant="panel">
        <CryptoSectionHeader
          eyebrow={CRYPTO_SECTIONS.deliverables.eyebrow}
          title={CRYPTO_SECTIONS.deliverables.title}
          description={CRYPTO_SECTIONS.deliverables.description}
        />
        <CryptoComplianceStrip controls={CRYPTO_DELIVERABLES} />
      </CryptoSection>

      <CryptoSection variant="default">
        <PageCta
          eyebrow={CRYPTO_CTA.eyebrow}
          title={CRYPTO_CTA.title}
          description={CRYPTO_CTA.description}
          cta={CRYPTO_CTA.cta}
        />
      </CryptoSection>
    </>
  )
}
