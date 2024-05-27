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
import { waypointQueries } from '@/lib/queries'
import { cn } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { CircleCheckBig, MoreHorizontal } from 'lucide-react'
import { Badge } from './ui/badge'

type Props = {
  symbol: string
}
export function SystemWaypoints({ symbol }: Props) {
  const page = 1
  const limit = 20

  const query = useQuery(
    waypointQueries.list({
      page,
      limit,
      systemSymbol: symbol,
    }),
  )

  if (query.status !== 'success' && !query.data) {
    return null
  }

  const waypoints = query.data.data
  const meta = query.data.meta

  return (
    <Card>
      <CardHeader>
        <CardTitle>System Waypoints</CardTitle>
        <CardDescription>Waypoints in the current system</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Symbol</TableHead>
              <TableHead>Coords</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Traits</TableHead>
              <TableHead>Faction</TableHead>
              <TableHead>Under Construction</TableHead>
              <TableHead>Orbitals</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {waypoints.map((w) => (
              <TableRow key={w.symbol}>
                <TableCell>{w.symbol}</TableCell>
                <TableCell>
                  ({w.x}, {w.y})
                </TableCell>
                <TableCell>{w.type}</TableCell>
                <TableCell>
                  <div className={cn('flex flex-wrap gap-1')}>
                    {w.traits.map((t) => (
                      <Badge key={t.symbol}>{t.name}</Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>{w.faction?.symbol}</TableCell>
                <TableCell>
                  {w.isUnderConstruction && <CircleCheckBig />}
                </TableCell>
                <TableCell>
                  {w.orbitals.map((o) => (
                    <Badge key={o.symbol}>{o.symbol}</Badge>
                  ))}
                </TableCell>
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
          <strong>{meta.total}</strong> total waypoints)
        </div>
      </CardFooter>
    </Card>
  )
}
