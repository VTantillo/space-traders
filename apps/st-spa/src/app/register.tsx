import { RegisterAgentForm } from '@/components/register-agent'
import { cn } from '@/lib/utils'

export function Register() {
  return (
    <main className={cn('container space-y-2')}>
      <RegisterAgentForm />
    </main>
  )
}
