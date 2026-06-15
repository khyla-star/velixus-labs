import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  variant?: 'default' | 'surface'
  spacing?: 'default' | 'lg'
  backgroundImage?: string
  backgroundOverlay?: boolean
  backgroundEffect?: 'dark-blue'
}

export function Section({
  children,
  variant = 'default',
  spacing = 'default',
  className,
  backgroundImage,
  backgroundOverlay = true,
  backgroundEffect,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        variant === 'surface' && !backgroundImage && 'bg-surface',
        spacing === 'default' ? 'py-20 md:py-28' : 'py-28 md:py-36',
        backgroundImage && 'relative overflow-hidden',
        className,
      )}
      {...props}
    >
      {backgroundImage && (
        <>
          {backgroundEffect === 'dark-blue' ? (
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, #050d18 0%, #0c2848 22%, #1a4f32 48%, #143e72 74%, #060e16 100%)',
              }}
              aria-hidden
            />
          ) : null}
          <div
            className={cn(
              'pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat',
              backgroundEffect === 'dark-blue' && 'opacity-50',
            )}
            style={{ backgroundImage: `url('${backgroundImage}')` }}
            aria-hidden
          />
          {backgroundOverlay ? (
            <div className="pointer-events-none absolute inset-0 bg-bg/88" aria-hidden />
          ) : null}
          {backgroundEffect === 'dark-blue' ? (
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, rgba(184, 255, 44, 0.18) 0%, rgba(37, 84, 160, 0.22) 50%, rgba(184, 255, 44, 0.16) 100%)',
              }}
              aria-hidden
            />
          ) : null}
        </>
      )}
      <div className={cn('velix-container', backgroundImage && 'relative z-10')}>{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'mx-auto max-w-2xl text-center',
        align === 'left' && 'max-w-2xl',
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-muted">{eyebrow}</p>
      )}
      <h2
        className={cn(
          'velix-section-title font-semibold tracking-tight text-foreground',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{description}</p>
      )}
    </div>
  )
}
