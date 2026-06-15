import { useId, useRef, useState } from 'react'
import { AICapabilityCard } from '@/components/sections/ai-capability-card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Capability = {
  readonly title: string
  readonly description: string
  readonly image: string
}

type AICapabilitiesSectionProps = {
  capabilities: readonly Capability[]
  initialVisibleCount?: number
  learnMoreLabel?: string
  showLessLabel?: string
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path
        d="m5 8 5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function AICapabilitiesSection({
  capabilities,
  initialVisibleCount = 6,
  learnMoreLabel = 'Learn More',
  showLessLabel = 'Show Less',
}: AICapabilitiesSectionProps) {
  const [expanded, setExpanded] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const controlsId = useId()
  const hasHiddenItems = capabilities.length > initialVisibleCount
  const hiddenCount = capabilities.length - initialVisibleCount
  const visibleCapabilities = expanded
    ? capabilities
    : capabilities.slice(0, initialVisibleCount)

  function handleToggle() {
    const nextExpanded = !expanded
    setExpanded(nextExpanded)

    if (!nextExpanded) {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div ref={sectionRef} className="scroll-mt-24">
      <div className="relative">
        <div id={controlsId} className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCapabilities.map((capability, index) => (
            <AICapabilityCard
              key={capability.title}
              capability={capability}
              delay={(index % initialVisibleCount) * 0.05}
            />
          ))}
        </div>

        {!expanded && hasHiddenItems ? (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bg via-bg/70 to-transparent"
            aria-hidden
          />
        ) : null}
      </div>

      {hasHiddenItems ? (
        <div className="mt-8 flex flex-col items-center gap-2 md:mt-10">
          <Button
            type="button"
            variant="secondary"
            size="lg"
            aria-expanded={expanded}
            aria-controls={controlsId}
            onClick={handleToggle}
            className="min-w-[11rem]"
          >
            {expanded ? showLessLabel : learnMoreLabel}
            <ChevronIcon className={cn('h-4 w-4 transition-transform duration-300', expanded && 'rotate-180')} />
          </Button>
          {!expanded ? (
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              +{hiddenCount} more {hiddenCount === 1 ? 'capability' : 'capabilities'}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
