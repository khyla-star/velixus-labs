import { m, useReducedMotion } from 'framer-motion'

export function Web3CapabilitiesLights() {
  const reduced = useReducedMotion()

  const lights = [
    {
      className: 'left-[8%] top-[12%] h-56 w-56 md:h-72 md:w-72',
      color: 'rgba(184,255,44,0.14)',
      delay: 0,
    },
    {
      className: 'right-[5%] top-[28%] h-48 w-48 md:h-64 md:w-64',
      color: 'rgba(142,197,255,0.1)',
      delay: 1.2,
    },
    {
      className: 'left-[35%] bottom-[8%] h-52 w-52 md:h-60 md:w-60',
      color: 'rgba(184,255,44,0.09)',
      delay: 2.4,
    },
    {
      className: 'right-[28%] bottom-[18%] h-40 w-40 md:h-52 md:w-52',
      color: 'rgba(201,160,255,0.08)',
      delay: 0.8,
    },
  ] as const

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {lights.map((light) => (
        <m.div
          key={light.className}
          className={`absolute rounded-full blur-3xl ${light.className}`}
          style={{ background: `radial-gradient(circle, ${light.color} 0%, transparent 70%)` }}
          animate={
            reduced
              ? undefined
              : { opacity: [0.55, 0.9, 0.55], scale: [1, 1.08, 1] }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: light.delay,
          }}
        />
      ))}

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(184,255,44,0.06) 0%, transparent 55%)',
        }}
      />
    </div>
  )
}
