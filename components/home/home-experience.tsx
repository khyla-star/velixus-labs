import { PartnersSection } from '@/components/sections/PartnersSection'
import { TrustAnchorSection } from '@/components/sections/TrustAnchorSection'
import { HeroSystemCore } from './hero-system-core'
import { EcosystemGraph } from './ecosystem-graph'
import { TestimonialsSection } from './testimonials-section'
import { ProcessSection } from './process-section'
import { ContactCtaSection } from './contact-cta-section'

export function HomeExperience() {
  return (
    <div className="home-page relative bg-bg">
      <HeroSystemCore />
      <TrustAnchorSection />
      <PartnersSection />

      <EcosystemGraph />

      <TestimonialsSection />

      <ProcessSection />
      <ContactCtaSection />
    </div>
  )
}
