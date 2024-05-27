import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
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
import { cn } from '@/lib/utils'
import { CircleCheckBig, MoreHorizontal } from 'lucide-react'
import { getMyShips } from 'st-ts-client'
import { Badge } from './ui/badge'

export async function MyShips() {
  const page = 1
  const limit = 20
  const req = await getMyShips({ page, limit })
  const ships = req.data
  const meta = req.meta

  console.log(ships)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fleet</CardTitle>
        <CardDescription>Ships currently in your fleet</CardDescription>
      </CardHeader>
      <CardContent>
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
                      <DropdownMenuItem>Accept</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing page <strong>{page}</strong> of{' '}
          <strong>{Math.ceil(meta.total / limit)}</strong> (
          <strong>{meta.total}</strong> total ships)
        </div>
      </CardFooter>
    </Card>
  )
}
