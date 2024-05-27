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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { orbitShipAction } from '@/lib/ship/ship.actions'
import { MoreHorizontal } from 'lucide-react'
import { Ship } from 'st-ts-client'

type Props = {
  ships: Ship[]
}
export function FleetTable({ ships }: Props) {
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
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
