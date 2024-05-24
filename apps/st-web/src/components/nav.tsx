import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Logout } from './logout'
import { ThemeToggle } from './theme-toggle'

export function Nav() {
  return (
    <header className={cn('flex items-center justify-between px-4 py-2')}>
      <Link href={'/'} className={cn('text-3xl')}>
        Space Traders
      </Link>

      <div className={cn('flex gap-2')}>
        <Logout />
        <ThemeToggle />
      </div>
    </header>
  )
}
