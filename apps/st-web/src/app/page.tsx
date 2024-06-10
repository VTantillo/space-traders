import { cn } from '@/lib/utils'
import { getStatus } from 'st-ts-client'

export default async function Dashboard() {
  const status = await getStatus()

  return (
    <main className={cn('container space-y-2')}>
      <h1 className={cn('text-3xl')}>Space Traders status</h1>

      <p>{status.status}</p>
      <p>{status.description}</p>
      <p>{status.version}</p>
      <div>
        <p>Leaderboards</p>

        <div>
          <p>Credit Leaderboard</p>
          <ul>
            {status.leaderboards.mostCredits.map((a, idx) => (
              <li key={a.agentSymbol}>
                {idx + 1}) {a.agentSymbol} - {a.credits}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p>Chart Leaderboard</p>
          <ul>
            {status.leaderboards.mostSubmittedCharts.map((a, idx) => (
              <li key={a.agentSymbol}>
                {idx + 1}) {a.agentSymbol} - {a.chartCount}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p>Stats</p>
        <div>
          <p>Agents: {status.stats.agents}</p>
          <p>Waypoints: {status.stats.waypoints}</p>
          <p>Systems : {status.stats.systems}</p>
          <p>Ships: {status.stats.ships}</p>
        </div>
      </div>

      <p>Last Server reset: {status.resetDate}</p>
      <p>Next Server reset: {status.serverResets.next}</p>
    </main>
  )
}
