import { useEffect, useRef, useState } from 'react'
import { m, useReducedMotion } from 'framer-motion'
import { CTOVisionContent } from './CTOVision'
import { CapabilitiesMetricsPanel } from './CapabilitiesVisual'

const easeOut = [0.25, 0.1, 0.25, 1] as const
const HEIGHT_OFFSET = 80

export function TrustAnchorSection() {
  const reduced = useReducedMotion()
  const metricsRef = useRef<HTMLDivElement>(null)
  const [metricsHeight, setMetricsHeight] = useState(0)

  useEffect(() => {
    const el = metricsRef.current
    if (!el) return

    const update = () => setMetricsHeight(el.offsetHeight)
    update()

    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const viewportHeight = Math.max(
    metricsHeight > 0 ? metricsHeight + HEIGHT_OFFSET : 0,
    480,
  )

  return (
    <section
      id="trust-anchor"
      aria-label="CTO vision and capabilities"
      className="relative border-b border-border/50 bg-bg py-12 md:py-16"
    >
      <div className="velix-container">
        <div className="w-full py-4 md:py-6">
          <CTOVisionContent className="max-w-none px-0" />
        </div>

        <div className="relative mt-8 overflow-visible pb-10 md:mt-10 md:pb-14">
          <div className="relative w-full overflow-visible" style={{ height: viewportHeight }}>
            <m.div
              className="absolute inset-0 overflow-hidden"
              initial={reduced ? false : { opacity: 0 }}
              whileInView={reduced ? undefined : { opacity: 1 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              <m.img
                src="/images/ai-hand-visual.png"
                alt="Robotic hand presenting AI and blockchain infrastructure cubes"
                className="absolute left-0 top-0 block h-full w-[80%] object-cover object-left"
                initial={reduced ? false : { opacity: 0, x: -56, scale: 1.03 }}
                whileInView={reduced ? undefined : { opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.9, ease: easeOut, delay: 0.1 }}
              />
            </m.div>

            <div
              ref={metricsRef}
              className="absolute -bottom-6 right-0 z-10 w-[88%] max-w-md translate-x-3 sm:-bottom-8 sm:max-w-lg sm:translate-x-4 md:-bottom-10 md:w-[52%] md:max-w-xl md:translate-x-5 lg:-bottom-12 lg:translate-x-6"
            >
              <CapabilitiesMetricsPanel className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
