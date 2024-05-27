import { Waypoint } from '@/components/waypoint-display'
import { getActiveSessionUser } from '@/lib/auth/auth.repo'
import { getQueryClient } from '@/lib/client'
import { meQueries, waypointQueries } from '@/lib/queries'
import { cn } from '@/lib/utils'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

export default async function Dashboard() {
  const queryClient = getQueryClient()
  const me = await getActiveSessionUser()

  const agent = await queryClient.fetchQuery(meQueries.agent())
  const splitUp = agent.data.headquarters.split('-')

  await queryClient.prefetchQuery(
    waypointQueries.detail({
      systemSymbol: `${splitUp[0]}-${splitUp[1]}`,
      waypointSymbol: agent.data.headquarters,
    }),
  )

  return (
    <main className={cn('container space-y-2')}>
      <h1 className={cn('text-3xl')}>Hello, {me.user.username}</h1>
      <div>
        <p>Active Agent</p>
        <p>
          [{agent.data.startingFaction}] {agent.data.symbol}
        </p>
        <p>HQ: {agent.data.headquarters}</p>
        <p>{agent.data.credits} Credits</p>
        <p>{agent.data.shipCount} Ships</p>
      </div>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <Waypoint symbol={agent.data.headquarters} />
      </HydrationBoundary>
    </main>
  )
}
