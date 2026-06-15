import { HomeExperience } from '@/components/home/home-experience'
import { usePageTitle } from '@/lib/use-page-title'

export function HomePage() {
  usePageTitle(
    '',
    'Engineering the intelligence layer for modern enterprises — AI, blockchain, Web3, and crypto infrastructure systems.',
  )

  return <HomeExperience />
}
