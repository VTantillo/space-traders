import { cn } from '@/lib/utils'
import { RegistrationForm } from './registration-form'

export default function Register() {
  return (
    <main className={cn('grid min-h-full place-content-center gap-4')}>
      <RegistrationForm />
    </main>
  )
}
