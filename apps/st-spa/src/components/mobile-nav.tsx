import { cn } from '@/lib/utils'
import * as Dialog from '@radix-ui/react-dialog'
import { MenuIcon, XIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Button } from './ui/button'

export function MobileNav() {
  const location = useLocation()

  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className={cn(' h-min rounded-lg p-1 outline-none')}>
          <MenuIcon />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Content
          className={cn('absolute inset-0 bg-background text-foreground')}
        >
          <div className={cn('flex items-center justify-between px-4 py-2')}>
            <h1 className={cn('text-3xl')}>Playground App</h1>

            <Dialog.Close asChild>
              <Button variant={'outline'}>
                <XIcon />
              </Button>
            </Dialog.Close>
          </div>

          <div>
            <div className={cn('flex flex-col gap-6 px-8 py-4 text-xl')}>
              <NavLink
                to="/"
                className={({ isActive }) => cn(isActive && 'underline')}
              >
                Home
              </NavLink>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
