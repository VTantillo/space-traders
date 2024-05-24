'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { loginAction } from '@/lib/auth/auth.actions'
import { LoginFormSchema } from '@/lib/auth/auth.types'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useZorm } from 'react-zorm'

export function LoginForm() {
  const zo = useZorm('loginForm', LoginFormSchema, {
    onValidSubmit: async (e) => {
      e.preventDefault()
      // TODO: Show error message if login wasn't successful
      await loginAction(e.data)
      e.target.reset()
    },
  })

  const disabled = zo.validation?.success === false

  // TODO: Recover account

  return (
    <Card className={cn('mx-auto max-w-sm')}>
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form ref={zo.ref} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor={zo.fields.username()}>Username</Label>
            <Input
              type={'text'}
              name={zo.fields.username()}
              placeholder={'Username'}
            />
            {zo.errors.username((e) => (
              <span>{e.message}</span>
            ))}
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor={zo.fields.password()}>Password</Label>
            </div>
            <Input
              type={'password'}
              name={zo.fields.password()}
              placeholder={'Password'}
              required
            />
            {zo.errors.password((e) => (
              <span>{e.message}</span>
            ))}
          </div>

          <Button type="submit" className="w-full" disabled={disabled}>
            Login
          </Button>
        </form>

        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
