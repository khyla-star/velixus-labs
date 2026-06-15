import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-bg font-semibold hover:shadow-accent-glow velix-accent-glow border-transparent',
  secondary:
    'bg-transparent text-foreground border-border hover:border-accent/40 hover:text-accent',
  ghost: 'bg-transparent text-muted border-transparent hover:text-foreground',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-10 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md border font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

export function Button({ className, variant = 'primary', size = 'md', ...props }: ButtonProps) {
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
}

interface ButtonLinkProps {
  href: string
  children: React.ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
}: ButtonLinkProps) {
  const isInternalRoute = href.startsWith('/') && !href.startsWith('//')

  if (!isInternalRoute) {
    return (
      <a href={href} className={cn(base, variants[variant], sizes[size], className)}>
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </Link>
  )
}
