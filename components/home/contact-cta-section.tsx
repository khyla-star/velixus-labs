import { Link } from 'react-router-dom'
import { CONTACT_CTA } from '@/lib/home-content'
import { cn } from '@/lib/utils'

const iconStroke = {
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        {...iconStroke}
      />
    </svg>
  )
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" {...iconStroke} />
      <path d="m3 7 9 6 9-6" {...iconStroke} />
    </svg>
  )
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: 'phone' | 'email'
  label: string
  value: string
  href: string
}) {
  const Icon = icon === 'phone' ? PhoneIcon : EmailIcon

  return (
    <a
      href={href}
      className="group flex items-start gap-4 transition-opacity hover:opacity-90"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-black">
        <Icon className="h-[1.35rem] w-[1.35rem] shrink-0" />
      </span>
      <span className="pt-0.5">
        <span className="block text-base font-semibold text-white">{label}</span>
        <span className="mt-1 block text-base text-white/75 transition-colors group-hover:text-white">
          {value}
        </span>
      </span>
    </a>
  )
}

function ContactCtaContent() {
  const { badge, titleLines, phone, email, joinCta } = CONTACT_CTA

  return (
    <div className="relative z-10 mx-auto w-full max-w-7xl px-8 md:px-10 lg:px-12">
      <div className="w-full max-w-3xl">
        <span className="inline-flex items-center rounded-full border border-white/25 bg-black px-6 py-2 text-base font-normal uppercase tracking-[0.2em] text-white/90 md:px-7 md:py-2.5">
          {badge}
        </span>

        <h2 className="velix-section-title mt-6 font-semibold tracking-[-0.03em] text-white md:mt-8">
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-8 h-px w-full max-w-xl bg-white/15 md:mt-10" aria-hidden />

        <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:gap-16 md:mt-10 lg:gap-20">
          <ContactItem
            icon="phone"
            label={phone.label}
            value={phone.value}
            href={phone.href}
          />
          <ContactItem
            icon="email"
            label={email.label}
            value={email.value}
            href={email.href}
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4 md:mt-12">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
            Or
          </span>
          <Link
            to={joinCta.href}
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold uppercase tracking-[0.14em] text-black transition-opacity hover:opacity-90"
          >
            {joinCta.label}
          </Link>
        </div>
      </div>
    </div>
  )
}

export function ContactCtaPanel({ className }: { className?: string }) {
  return (
    <div className={cn('relative w-full', className)}>
      <ContactCtaContent />
    </div>
  )
}

export function ContactCtaSection() {
  return (
    <section
      id="contact-cta"
      aria-label="Contact us"
      className="relative bg-black py-16 md:py-24"
    >
      <ContactCtaPanel />
    </section>
  )
}
