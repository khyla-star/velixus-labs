import { m, useReducedMotion } from 'framer-motion'
import { PARTNERS } from '@/lib/partners-content'
import { PartnerLogo } from './PartnerLogo'

const easeOut = [0.25, 0.1, 0.25, 1] as const
const SLIDE_DURATION = 28

const ROW_ONE = PARTNERS.slice(0, 18)
const ROW_TWO = PARTNERS.slice(18)

type PartnerBrand = (typeof PARTNERS)[number]

function LogoMarquee({
  brands,
  reverse = false,
}: {
  brands: readonly PartnerBrand[]
  reverse?: boolean
}) {
  const reduced = useReducedMotion()
  const track = [...brands, ...brands]

  if (reduced) {
    return (
      <div className="velix-container flex flex-wrap items-center justify-center gap-6 py-4 md:gap-8">
        {brands.map((partner) => (
          <PartnerLogo key={partner.slug} name={partner.name} slug={partner.slug} />
        ))}
      </div>
    )
  }

  return (
    <div className="partners-marquee-clip relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <m.div
        className="flex w-max items-center gap-10 py-4 will-change-transform md:gap-14 md:py-5"
        initial={{ x: reverse ? '-50%' : '0%' }}
        animate={{ x: reverse ? '0%' : '-50%' }}
        transition={{
          duration: SLIDE_DURATION,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {track.map((partner, index) => (
          <PartnerLogo
            key={`${partner.slug}-${index}`}
            name={partner.name}
            slug={partner.slug}
          />
        ))}
      </m.div>
    </div>
  )
}

export function PartnersSection() {
  const reduced = useReducedMotion()

  return (
    <section
      id="partners"
      aria-label="Our partners"
      className="relative bg-bg py-14 md:py-20"
    >
      <div className="velix-container">
        <m.div
          className="mx-auto mb-10 max-w-2xl text-center md:mb-12"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.65, ease: easeOut }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted md:text-sm">
            Trusted worldwide
          </p>
          <h2 className="velix-section-title mt-3 font-semibold tracking-tight text-foreground">
            Clients With Velixus Labs
          </h2>
        </m.div>
      </div>

      <m.div
        className="space-y-1 md:space-y-2"
        initial={reduced ? false : { opacity: 0, y: 24 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-8% 0px' }}
        transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
      >
        <LogoMarquee brands={ROW_ONE} />
        <LogoMarquee brands={ROW_TWO} reverse />
      </m.div>
    </section>
  )
}
