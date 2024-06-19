import { Card, CardFooter } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { shipQueries } from '@/lib/queries'
import { cn } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

export function Fleet() {
  const page = 1
  const limit = 20

  const query = useQuery(
    shipQueries.list({
      page,
      limit,
    }),
  )

  if (query.status !== 'success' && !query.data) {
    return null
  }

  const ships = query.data.data
  const meta = query.data.meta

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold md:text-2xl">Fleet</h1>
        <p className="text-sm text-muted-foreground">
          Ships currently in your fleet
        </p>
      </div>

      <Card>
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
                <TableCell>
                  <Link to={`/fleet/${s.symbol}`}>{s.registration.name}</Link>
                </TableCell>
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
                    {/* <Popover> */}
                    {/*   <PopoverTrigger asChild> */}
                    {/*     <Button variant="outline">Nav Ship</Button> */}
                    {/*   </PopoverTrigger> */}
                    {/*   <PopoverContent> */}
                    {/*     <div className={cn('grid gap-2')}> */}
                    {/*       {' '} */}
                    {/*       <Input */}
                    {/*         placeholder="Waypoint" */}
                    {/*         value={waypoint} */}
                    {/*         onChange={(e) => setWaypoint(e.target.value)} */}
                    {/*       /> */}
                    {/*       <Button */}
                    {/*         onClick={() => */}
                    {/*           navigateToWaypoint(s.symbol, waypoint) */}
                    {/*         } */}
                    {/*       > */}
                    {/*         Navigate! */}
                    {/*       </Button> */}
                    {/*     </div> */}
                    {/*   </PopoverContent> */}
                    {/* </Popover> */}

                    {/* <DropdownMenu> */}
                    {/*   <DropdownMenuTrigger asChild> */}
                    {/*     <Button */}
                    {/*       aria-haspopup="true" */}
                    {/*       size="icon" */}
                    {/*       variant="ghost" */}
                    {/*     > */}
                    {/*       <MoreHorizontal className="size-4" /> */}
                    {/*       <span className="sr-only">Toggle menu</span> */}
                    {/*     </Button> */}
                    {/*   </DropdownMenuTrigger> */}
                    {/*   <DropdownMenuContent align="end"> */}
                    {/*     <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
                    {/*     <DropdownMenuItem */}
                    {/*       onClick={() => orbitShipAction(s.symbol)} */}
                    {/*     > */}
                    {/*       Orbit */}
                    {/*     </DropdownMenuItem> */}
                    {/*     <DropdownMenuItem */}
                    {/*       onClick={() => dockShipAction(s.symbol)} */}
                    {/*     > */}
                    {/*       Dock */}
                    {/*     </DropdownMenuItem> */}
                    {/*     <DropdownMenuItem */}
                    {/*       onClick={() => refuelShipAction(s.symbol)} */}
                    {/*     > */}
                    {/*       Refuel */}
                    {/*     </DropdownMenuItem> */}
                    {/*     <DropdownMenuItem */}
                    {/*       onClick={() => extractAction(s.symbol)} */}
                    {/*     > */}
                    {/*       Extract Resources */}
                    {/*     </DropdownMenuItem> */}
                    {/*   </DropdownMenuContent> */}
                    {/* </DropdownMenu> */}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing page <strong>{page}</strong> of{' '}
            <strong>{Math.ceil(meta.total / limit)}</strong> (
            <strong>{meta.total}</strong> total ships)
          </div>
        </CardFooter>
      </Card>
    </main>
  )
}
