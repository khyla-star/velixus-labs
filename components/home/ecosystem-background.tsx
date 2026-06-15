import { m } from 'framer-motion'
import { GridBackground } from '@/components/motion/grid-background'
import { ECOSYSTEM_BACKGROUND } from '@/lib/home-content'

const easeOut = [0.25, 0.1, 0.25, 1] as const

export function EcosystemBackground({ animate = true }: { animate?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-bg" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_30%,#0c1018_0%,#050505_55%,#030303_100%)]" />

      <m.div
        className="absolute inset-[-4%]"
        animate={animate ? { scale: [1, 1.02, 1] } : undefined}
        transition={{ duration: 50, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src={ECOSYSTEM_BACKGROUND.src}
          alt=""
          className="h-full w-full object-cover object-center opacity-[0.12] saturate-[0.4] brightness-[0.8]"
          loading="lazy"
          decoding="async"
        />
      </m.div>

      <div className="absolute inset-0 bg-bg/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/85 via-transparent to-bg/90" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(100,140,220,0.04),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#050505_95%)]" />

      <GridBackground className="opacity-[0.04]" />

      {animate && (
        <m.div
          className="absolute left-1/2 top-[35%] h-72 w-[min(90%,720px)] -translate-x-1/2 -translate-y-1/2 opacity-30"
          animate={{ opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: easeOut }}
        >
          <svg viewBox="0 0 720 200" className="h-full w-full" aria-hidden>
            <line x1="60" y1="100" x2="660" y2="100" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
            <line x1="360" y1="30" x2="360" y2="170" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
            {[
              [120, 60],
              [280, 60],
              [440, 60],
              [600, 60],
              [120, 140],
              [280, 140],
              [440, 140],
              [600, 140],
            ].map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="2"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </m.div>
      )}

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </div>
  )
}
