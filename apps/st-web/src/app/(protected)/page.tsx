import { getActiveSessionUser } from '@/lib/auth/auth.repo'
import { cn } from '@/lib/utils'

export default async function Dashboard() {
  const me = await getActiveSessionUser()

  return (
    <main className={cn('container space-y-2')}>
      <h1 className={cn('text-3xl')}>Hello, {me.username}</h1>
      <p>Minimal set up with auth and sqlite</p>
    </main>
  )
}
