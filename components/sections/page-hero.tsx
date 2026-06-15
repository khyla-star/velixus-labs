import { Reveal } from '@/components/motion/reveal'
import { HeroTeamButton } from '@/components/sections/hero-team-button'
import { PageHeroShell } from '@/components/sections/page-hero-shell'

type PageHeroProps = {
  children: React.ReactNode
  aside?: React.ReactNode
  showTeamButton?: boolean
  className?: string
  backgroundImage?: string
  showBackground?: boolean
}

export function PageHero({
  children,
  aside,
  showTeamButton = false,
  className,
  backgroundImage,
  showBackground,
}: PageHeroProps) {
  const rightContent = aside ?? (showTeamButton ? <HeroTeamButton /> : null)

  return (
    <PageHeroShell
      className={className}
      backgroundImage={backgroundImage}
      showBackground={showBackground}
    >
      {rightContent ? (
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>{children}</Reveal>
          <Reveal delay={0.1}>{rightContent}</Reveal>
        </div>
      ) : (
        <Reveal>{children}</Reveal>
      )}
    </PageHeroShell>
  )
}
