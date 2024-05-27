'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { waypointQueries } from '@/lib/queries'
import { cn } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'

type Props = {
  symbol: string
}
export function Waypoint({ symbol }: Props) {
  const splitUp = symbol.split('-')

  const query = useQuery(
    waypointQueries.detail({
      systemSymbol: `${splitUp[0]}-${splitUp[1]}`,
      waypointSymbol: symbol,
    }),
  )

  if (query.status !== 'success' && !query.data) {
    return null
  }

  const waypoint = query.data.data

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          ({waypoint.type}) {waypoint.symbol}
        </CardTitle>

        <CardDescription>
          [{waypoint.faction && waypoint.faction.symbol}] Coords: ({waypoint.x},{' '}
          {waypoint.y})
        </CardDescription>
      </CardHeader>

      <CardContent className={cn('grid gap-3')}>
        <Card>
          <CardHeader>
            <CardTitle>Traits</CardTitle>
          </CardHeader>

          <CardContent>
            <ul className={cn('grid gap-2')}>
              {waypoint.traits.map((t) => (
                <li key={t.symbol} className={cn('grid gap-1')}>
                  <p>{t.name}</p>
                  <p>{t.description}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Orbitals</CardTitle>
          </CardHeader>

          <CardContent>
            <ul>
              {waypoint.orbitals.map((o) => (
                <li key={o.symbol}>
                  <p>{o.symbol}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}
