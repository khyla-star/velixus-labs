import { Section, SectionHeader } from '@/components/ui/section'
import { PageCta } from '@/components/sections/page-cta'
import { Web3Capabilities } from '@/components/sections/web3-capabilities'
import { Web3CapabilitiesLights } from '@/components/sections/web3-capabilities-lights'
import { Web3DeliveryStrip } from '@/components/sections/web3-delivery-strip'
import { Web3Hero } from '@/components/sections/web3-hero'
import { Web3ProductShowcase } from '@/components/sections/web3-product-showcase'
import { Web3StoriesList } from '@/components/sections/web3-stories-list'
import {
  WEB3_CTA,
  WEB3_DELIVERY,
  WEB3_FRICTION,
  WEB3_HERO,
  WEB3_SECTIONS,
  WEB3_SERVICES,
  WEB3_STACK,
} from '@/lib/content'
import { usePageTitle } from '@/lib/use-page-title'

export function Web3Page() {
  usePageTitle(
    'Web3',
    'dApps, wallet integration, Web3 authentication, and DAO systems for production teams.',
  )

  return (
    <>
      <Web3Hero
        eyebrow={WEB3_HERO.eyebrow}
        title={WEB3_HERO.title}
        lead={WEB3_HERO.lead}
        description={WEB3_HERO.description}
        chips={WEB3_HERO.chips}
        primaryCta={WEB3_HERO.primaryCta}
        secondaryCta={WEB3_HERO.secondaryCta}
      />

      <Section className="bg-bg">
        <SectionHeader
          eyebrow={WEB3_SECTIONS.showcase.eyebrow}
          title={WEB3_SECTIONS.showcase.title}
          description={WEB3_SECTIONS.showcase.description}
        />
        <Web3ProductShowcase
          layers={WEB3_STACK}
          connectionImage={WEB3_SECTIONS.showcase.connectionImage}
          connectionImageAlt={WEB3_SECTIONS.showcase.connectionImageAlt}
        />
      </Section>

      <Section className="bg-[#080808]">
        <SectionHeader
          eyebrow={WEB3_SECTIONS.friction.eyebrow}
          title={WEB3_SECTIONS.friction.title}
          description={WEB3_SECTIONS.friction.description}
        />
        <Web3StoriesList items={WEB3_FRICTION} />
      </Section>

      <Section className="relative overflow-hidden">
        <Web3CapabilitiesLights />
        <div className="relative z-10">
          <SectionHeader
            eyebrow={WEB3_SECTIONS.capabilities.eyebrow}
            title={WEB3_SECTIONS.capabilities.title}
            description={WEB3_SECTIONS.capabilities.description}
          />
          <Web3Capabilities services={WEB3_SERVICES} />
        </div>
      </Section>

      <Section variant="surface">
        <SectionHeader
          eyebrow={WEB3_SECTIONS.delivery.eyebrow}
          title={WEB3_SECTIONS.delivery.title}
          description={WEB3_SECTIONS.delivery.description}
          align="center"
          className="max-w-2xl"
        />
        <Web3DeliveryStrip metrics={WEB3_DELIVERY} />
      </Section>

      <Section>
        <PageCta
          eyebrow={WEB3_CTA.eyebrow}
          title={WEB3_CTA.title}
          description={WEB3_CTA.description}
          cta={WEB3_CTA.cta}
        />
      </Section>
    </>
  )
}
