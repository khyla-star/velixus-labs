import { cn } from '@/lib/utils'

export function GridBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 velix-grid-bg opacity-40',
        className,
      )}
    />
  )
}
