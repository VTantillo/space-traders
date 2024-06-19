import { shipQueries } from '@/lib/queries'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

export function Ship() {
  const { shipSymbol } = useParams()

  const shipQuery = useQuery(
    shipQueries.detail(shipSymbol ? { shipSymbol } : undefined),
  )

  if (shipQuery.status !== 'success') {
    return 'Loading...'
  }

  const ship = shipQuery.data.data

  console.log(ship)
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">
          {ship.registration.name}
        </h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">Coming Soon</h3>
          <p className="text-sm text-muted-foreground">
            Show detailed information about the ship. Should also be able to
            navigate the ship around here.
          </p>
        </div>
      </div>
    </main>
  )
}
