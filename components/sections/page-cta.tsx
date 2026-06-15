import { Link } from 'react-router-dom'
import { Reveal } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'

export function ApplyNowCircleButton({
  href,
  label,
}: {
  href: string
  label: string
}) {
  const className = cn(
    'group relative inline-flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-black md:h-36 md:w-36',
    'border border-border transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
  )

  const content = (
    <>
      <span
        className="absolute inset-x-0 top-0 h-1/2 origin-top scale-y-0 bg-accent transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:scale-y-100"
        aria-hidden
      />
      <span
        className="absolute inset-x-0 bottom-0 h-1/2 origin-bottom scale-y-0 bg-accent transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:scale-y-100"
        aria-hidden
      />
      <span className="relative z-10 max-w-[6.5rem] text-center text-sm font-semibold uppercase leading-tight tracking-[0.12em] text-white transition-colors duration-300 group-hover:text-bg md:text-base">
        {label}
      </span>
    </>
  )

  if (href.startsWith('#')) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    )
  }

  return (
    <Link to={href} className={className}>
      {content}
    </Link>
  )
}

type PageCtaProps = {
  eyebrow: string
  title: string
  description: string
  cta: { readonly label: string; readonly href: string }
}

export function PageCta({ eyebrow, title, description, cta }: PageCtaProps) {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-xl border border-[#2a2a2e] bg-[#1e1e22] px-6 py-12 text-center md:px-10 md:py-14">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
          aria-hidden
        />
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{eyebrow}</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          {description}
        </p>
        <div className="mt-10 flex justify-center md:mt-12">
          <ApplyNowCircleButton href={cta.href} label={cta.label} />
        </div>
      </div>
    </Reveal>
  )
}
