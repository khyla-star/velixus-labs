import { m, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

const QUOTE_LINES = [
  'Velixus Labs is redefining how the world operates by merging AI, blockchain, crypto, and Web3 into a unified infrastructure layer. We enable industries like finance, logistics, real estate, entertainment, and smart cities to move faster, trust deeper, and automate at scale.',
] as const

const easeOut = [0.25, 0.1, 0.25, 1] as const

export function CTOVisionContent({ className }: { className?: string }) {
  const reduced = useReducedMotion()

  return (
    <m.div
      className={cn(
        'mx-auto flex w-full max-w-[900px] flex-col items-center px-6 text-center md:px-8',
        className,
      )}
      initial={reduced ? false : 'hidden'}
      whileInView={reduced ? undefined : 'visible'}
      viewport={{ once: true, margin: '-10% 0px' }}
    >
      <m.blockquote
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
        }}
        className="mt-6 md:mt-8"
      >
        {QUOTE_LINES.map((line) => (
          <m.p
            key={line}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
            }}
            className="text-[1.5rem] font-medium leading-[1.7] tracking-[-0.02em] text-foreground md:text-[2rem] md:leading-[1.65]"
          >
            {line}
          </m.p>
        ))}
      </m.blockquote>

      {/* <m.div
        variants={{
          hidden: { opacity: 0, scaleX: 0 },
          visible: {
            opacity: 1,
            scaleX: 1,
            transition: { duration: 0.5, ease: easeOut, delay: 0.45 },
          },
        }}
        className="mt-8 h-px w-20 origin-center bg-[rgba(184,255,44,0.25)] md:mt-10"
        aria-hidden
      /> */}
{/* 
      <m.p
        variants={{
          hidden: { opacity: 0, y: 8 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: easeOut, delay: 0.6 },
          },
        }}
        className="mt-6 text-base italic text-muted md:mt-8 md:text-lg"
      >
        — Chief Technology Officer (CTO), Ahmed
      </m.p> */}
    </m.div>
  )
}
