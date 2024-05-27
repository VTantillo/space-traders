import { cn } from '@/lib/utils'
import { MobileNav } from './mobile-nav'

export function Nav() {
  return (
    <header className={cn('flex items-center justify-between px-4 py-2')}>
      <h1 className={cn('text-3xl')}>Bracket</h1>

      <MobileNav />
    </header>
  )
}
