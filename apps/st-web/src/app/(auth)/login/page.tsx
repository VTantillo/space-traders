import { cn } from '@/lib/utils'
import { LoginForm } from './login-form'

export default function Login() {
  return (
    <main className={cn('grid min-h-full place-content-center gap-4')}>
      <LoginForm />
    </main>
  )
}
