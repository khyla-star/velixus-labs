import { FormEvent, useEffect, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { MOTION_EASE } from '@/components/motion/tokens'

function SendIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const fieldClass =
  'w-full border-0 border-b border-white/20 bg-transparent py-3 text-sm text-foreground placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-0'

const TOAST_DURATION_MS = 5000

export function ContactPanelForm({
  badge,
  title,
  submitLabel,
  submitSuccessTitle,
  submitSuccessMessage,
}: {
  badge: string
  title: string
  submitLabel: string
  submitSuccessTitle: string
  submitSuccessMessage: string
}) {
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (!showSuccess) return

    const timer = window.setTimeout(() => setShowSuccess(false), TOAST_DURATION_MS)
    return () => window.clearTimeout(timer)
  }, [showSuccess])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    event.currentTarget.reset()
    setShowSuccess(true)
  }

  return (
    <>
      <div className="flex h-full flex-col p-8 md:p-10 lg:p-12">
        <span className="inline-flex w-fit items-center rounded-full border border-white/25 px-5 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-foreground/90">
          {badge}
        </span>

        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>

        <form className="mt-10 flex flex-1 flex-col" onSubmit={handleSubmit}>
          <div className="space-y-8">
            <div>
              <label htmlFor="contact-name" className="sr-only">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="Name"
                className={fieldClass}
              />
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email *"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="sr-only">
                  Phone
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="sr-only">
                Tell us about your project
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                placeholder="Tell Us About Project *"
                className={`${fieldClass} resize-none overflow-y-auto`}
              />
            </div>
          </div>

          <div className="mt-10">
            <Button
              type="submit"
              size="lg"
              className="rounded-full px-8 font-semibold uppercase tracking-[0.12em]"
            >
              <SendIcon className="h-4 w-4" />
              {submitLabel}
            </Button>
          </div>
        </form>
      </div>

      <AnimatePresence>
        {showSuccess ? (
          <m.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, x: 24, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: MOTION_EASE }}
            className="fixed bottom-6 right-6 z-50 w-[min(24rem,calc(100vw-2rem))]"
          >
            <div className="flex items-start gap-3 rounded-xl border border-accent/35 bg-[#141416] p-4 shadow-accent-glow-sm md:p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <CheckIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-foreground">{submitSuccessTitle}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{submitSuccessMessage}</p>
              </div>
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="shrink-0 rounded-md p-1 text-muted transition-colors hover:text-foreground"
                aria-label="Dismiss notification"
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                  <path
                    d="M5 5l10 10M15 5 5 15"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
