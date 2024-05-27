'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  dockShipAction,
  extractAction,
  navigateToWaypoint,
  orbitShipAction,
  refuelShipAction,
} from '@/lib/ship/ship.actions'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import { useState } from 'react'
import { Ship } from 'st-ts-client'
import { Input } from './ui/input'

type Props = {
  ships: Ship[]
}
export function FleetTable({ ships }: Props) {
  const [waypoint, setWaypoint] = useState('')

  console.log(ships)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Nav Status</TableHead>
          <TableHead>Flight Mode</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Fuel</TableHead>
          <TableHead>Cooldown</TableHead>
          <TableHead>Cargo Capacity</TableHead>
          <TableHead># of Modules</TableHead>
          <TableHead># of Mounts</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {ships.map((s) => (
          <TableRow key={s.symbol}>
            <TableCell>{s.registration.name}</TableCell>
            <TableCell>{s.registration.role}</TableCell>
            <TableCell>{s.frame.name}</TableCell>
            <TableCell>{s.nav.status}</TableCell>
            <TableCell>{s.nav.flightMode}</TableCell>
            <TableCell>{s.nav.waypointSymbol}</TableCell>
            <TableCell>
              {s.fuel.current} of {s.fuel.capacity}
            </TableCell>
            <TableCell>
              {s.cooldown.remainingSeconds} of {s.cooldown.totalSeconds}
            </TableCell>
            <TableCell>
              {s.cargo.units} of {s.cargo.capacity}
            </TableCell>
            <TableCell>{s.modules.length}</TableCell>
            <TableCell>{s.mounts.length}</TableCell>
            <TableCell>
              <div className={cn('flex gap-2')}>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Nav Ship</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className={cn('grid gap-2')}>
                      {' '}
                      <Input
                        placeholder="Waypoint"
                        value={waypoint}
                        onChange={(e) => setWaypoint(e.target.value)}
                      />
                      <Button
                        onClick={() => navigateToWaypoint(s.symbol, waypoint)}
                      >
                        Navigate!
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="size-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => orbitShipAction(s.symbol)}>
                      Orbit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => dockShipAction(s.symbol)}>
                      Dock
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => refuelShipAction(s.symbol)}
                    >
                      Refuel
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => extractAction(s.symbol)}>
                      Extract Resources
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
