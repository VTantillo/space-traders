import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { systemQueries } from '@/lib/queries'
import { useQuery } from '@tanstack/react-query'

export function Systems() {
  const page = 1
  const limit = 20

  const query = useQuery(
    systemQueries.list({
      page,
      limit,
    }),
  )

  if (query.status !== 'success' && !query.data) {
    return <div>Loading...</div>
  }

  const systems = query.data.data
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
              <TableHead>Type</TableHead>
              <TableHead>Coords</TableHead>
              <TableHead># Waypoints</TableHead>
              <TableHead># Factions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {systems.map((s) => (
              <TableRow key={s.symbol}>
                <TableCell>{s.symbol}</TableCell>
                <TableCell>{s.type}</TableCell>
                <TableCell>
                  ({s.x}, {s.y})
                </TableCell>
                <TableCell>{s.waypoints.length}</TableCell>
                <TableCell>{s.factions.length}</TableCell>
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
