import { getActiveSessionUser } from '@/lib/auth/auth.repo'
import { cn } from '@/lib/utils'
import { RegisterAgentForm } from './register-agent-form'

export default async function Dashboard() {
  const me = await getActiveSessionUser()

  return (
    <main className={cn('container space-y-2')}>
      <h1 className={cn('text-3xl')}>Hello, {me.username}</h1>
      <p>Minimal set up with auth and sqlite</p>
      <RegisterAgentForm />
    </main>
  )
}
