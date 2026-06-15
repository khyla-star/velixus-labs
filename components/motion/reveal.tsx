import { m, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        <div className="h-full">{children}</div>
      </div>
    )
  }

  return (
    <div ref={ref} className={className}>
      <m.div
        className="h-full"
        initial={false}
        animate={visible ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.4, delay, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </m.div>
    </div>
  )
}
