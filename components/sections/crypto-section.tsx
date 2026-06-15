import { cn } from '@/lib/utils'

type CryptoSectionProps = {
  children: React.ReactNode
  variant?: 'default' | 'panel'
  className?: string
}

export function CryptoSection({
  children,
  variant = 'default',
  className,
}: CryptoSectionProps) {
  return (
    <section
      className={cn(
        'py-20 md:py-28',
        variant === 'panel' && 'bg-[#080808]',
        variant === 'default' && 'bg-[#050505]',
        className,
      )}
    >
      <div className="velix-container min-w-0">{children}</div>
    </section>
  )
}

type CryptoSectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function CryptoSectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: CryptoSectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'mx-auto max-w-2xl text-center',
        align === 'left' && 'max-w-2xl',
        className,
      )}
    >
      <div
        className={cn(
          'mb-4 flex items-center gap-3',
          align === 'center' && 'justify-center',
        )}
      >
        <span className="h-px w-8 bg-accent/50" aria-hidden />
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
        <span className="h-px w-8 bg-accent/50" aria-hidden />
      </div>

      <h2 className="velix-section-title break-words font-semibold tracking-tight text-foreground">{title}</h2>

      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{description}</p>
      )}

    </div>
  )
}
