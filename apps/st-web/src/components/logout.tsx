'use client'

import { cn } from '@/lib/utils'
import { LogOut } from 'lucide-react'
import { Button } from './ui/button'

export function Logout() {
  return (
    <Button variant="outline" size="icon">
      <LogOut className={cn('size-[1.2rem] ')} />
    </Button>
  )
}
