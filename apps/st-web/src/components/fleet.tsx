import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getMyShips } from 'st-ts-client'
import { FleetTable } from './fleet-table'

export async function Fleet() {
  const page = 1
  const limit = 20
  const req = await getMyShips({ page, limit })
  const ships = req.data
  const meta = req.meta

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fleet</CardTitle>
        <CardDescription>Ships currently in your fleet</CardDescription>
      </CardHeader>
      <CardContent>
        <FleetTable ships={ships} />
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
