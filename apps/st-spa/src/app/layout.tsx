import { ModeToggle } from '@/components/mode-toggle'
import { cn } from '@/lib/utils'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className={cn('h-full')}>
      <div className={cn('flex justify-end p-4')}>
        <ModeToggle />
      </div>
      <Outlet />
    </div>
  )
}
