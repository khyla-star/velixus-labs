import { ContactPanel } from '@/components/sections/contact-panel'
import { PageHero } from '@/components/sections/page-hero'
import { Section } from '@/components/ui/section'
import { CONTACT_PAGE, FOOTER, SITE } from '@/lib/content'
import { usePageTitle } from '@/lib/use-page-title'

export function ContactPage() {
  usePageTitle('Contact', 'Get in touch with the Velixus Labs team.')

  return (
    <>
      <PageHero>
        <p className="velix-hero-eyebrow">{CONTACT_PAGE.hero.eyebrow}</p>
        <h1 className="velix-hero-title">{CONTACT_PAGE.hero.title}</h1>
        <p className="velix-hero-description">{CONTACT_PAGE.hero.description}</p>
      </PageHero>

      <Section className="relative z-10 -mt-24 pt-0 md:-mt-32 lg:-mt-40">
        <ContactPanel
          phone={SITE.phone}
          phoneHref={SITE.phoneHref}
          email={SITE.email}
          addresses={FOOTER.addresses}
          social={CONTACT_PAGE.social}
          badge={CONTACT_PAGE.panel.badge}
          title={CONTACT_PAGE.panel.title}
          submitLabel={CONTACT_PAGE.panel.submitLabel}
          submitSuccessTitle={CONTACT_PAGE.panel.submitSuccessTitle}
          submitSuccessMessage={CONTACT_PAGE.panel.submitSuccessMessage}
        />
      </Section>
    </>
  )
}
