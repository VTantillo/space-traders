import { Fleet } from '@/components/fleet'
import { SystemWaypoints } from '@/components/system-waypoints'
import { meQueries } from '@/lib/queries'
import { cn } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'

export function Home() {
  const query = useQuery(meQueries.agent())

  if (query.status !== 'success' && !query.data) {
    return null
  }

  const agent = query.data.data

  const hq = agent.headquarters
  const parts = hq.split('-')

  return (
    <main className={cn('container space-y-2')}>
      <Fleet />
      <SystemWaypoints symbol={`${parts[0]}-${parts[1]}`} />
      {/**/}
      {/* <Shipyard symbol="X1-SD16-H55" ships={shipyard.data.ships ?? []} /> */}
      {/**/}
      {/*   <Contracts /> */}
    </main>
  )
}
