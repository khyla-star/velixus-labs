import { Reveal } from '@/components/motion/reveal'

type AICapability = {
  readonly title: string
  readonly description: string
  readonly image: string
}

type AICapabilityCardProps = {
  capability: AICapability
  delay?: number
}

export function AICapabilityCard({ capability, delay = 0 }: AICapabilityCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="velix-card group flex h-full flex-col overflow-hidden p-0">
        <div className="aspect-[16/10] shrink-0 overflow-hidden border-b border-border bg-[#0a0e14]">
          <img
            src={capability.image}
            alt={capability.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-1 flex-col p-7 md:p-8">
          <h3 className="font-semibold text-foreground">{capability.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted md:text-base">
            {capability.description}
          </p>
        </div>
      </article>
    </Reveal>
  )
}
