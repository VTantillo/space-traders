import { ActiveAgent } from '@/components/active-agent'
import { Contracts } from '@/components/contracts'
import { MyShips } from '@/components/my-ships'
import { Shipyard } from '@/components/shipyard'
import { SystemWaypoints } from '@/components/system-waypoints'
import { getActiveSessionUser } from '@/lib/auth/auth.repo'
import { getQueryClient } from '@/lib/client'
import { meQueries } from '@/lib/queries'
import { cn } from '@/lib/utils'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getMyAgent, getShipyard } from 'st-ts-client'

export default async function Dashboard() {
  const queryClient = getQueryClient()
  const me = await getActiveSessionUser()

  const agent = await getMyAgent()
  const splitUp = agent.data.headquarters.split('-')
  const systemSymbol = `${splitUp[0]}-${splitUp[1]}`

  await queryClient.prefetchQuery(meQueries.contracts({}))

  const shipyardWaypoint = 'X1-SD16-H55'
  const splitShipyard = shipyardWaypoint.split('-')
  const shipyardSystem = `${splitShipyard[0]}-${splitShipyard[1]}`

  const shipyard = await getShipyard({
    systemSymbol: shipyardSystem,
    waypointSymbol: shipyardWaypoint,
  })

  return (
    <main className={cn('container space-y-2')}>
      <h1 className={cn('text-3xl')}>Hello, {me.user.username}</h1>

      <ActiveAgent agent={agent.data} />
      <MyShips />
      <SystemWaypoints symbol={systemSymbol} />

      <Shipyard symbol="X1-SD16-H55" ships={shipyard.data.ships ?? []} />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <Contracts />
      </HydrationBoundary>
    </main>
  )
}
