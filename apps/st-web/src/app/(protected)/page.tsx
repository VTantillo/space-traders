import { ActiveAgent } from '@/components/active-agent'
import { Contracts } from '@/components/contracts'
import { Waypoint } from '@/components/waypoint'
import { getActiveSessionUser } from '@/lib/auth/auth.repo'
import { getQueryClient } from '@/lib/client'
import { meQueries, waypointQueries } from '@/lib/queries'
import { cn } from '@/lib/utils'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getMyAgent } from 'st-ts-client'

export default async function Dashboard() {
  const queryClient = getQueryClient()
  const me = await getActiveSessionUser()

  const agent = await getMyAgent()
  const splitUp = agent.data.headquarters.split('-')

  await queryClient.prefetchQuery(
    waypointQueries.detail({
      systemSymbol: `${splitUp[0]}-${splitUp[1]}`,
      waypointSymbol: agent.data.headquarters,
    }),
  )

  await queryClient.prefetchQuery(meQueries.contracts({}))

  return (
    <main className={cn('container space-y-2')}>
      <h1 className={cn('text-3xl')}>Hello, {me.user.username}</h1>

      <ActiveAgent agent={agent.data} />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <Waypoint symbol={agent.data.headquarters} />
        <Contracts />
      </HydrationBoundary>
    </main>
  )
}
