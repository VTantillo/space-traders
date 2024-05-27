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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { registerAction } from '@/lib/auth/auth.actions'
import { RegistrationFormSchema } from '@/lib/auth/auth.types'
import { FactionSymbolSchema } from '@/lib/faction/faction.types'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useState } from 'react'
import { useZorm } from 'react-zorm'

export function RegistrationForm() {
  const [registrationSuccess, setRegistrationSuccess] = useState(false)

  const zo = useZorm('registrationForm', RegistrationFormSchema, {
    onValidSubmit: async (e) => {
      e.preventDefault()

      const res = await registerAction(e.data)

      if (res.success) {
        setRegistrationSuccess(res.success)
      }

      // TODO: Handle the error state if registration wasn't successful

      e.target.reset()
    },
  })

  const disabled = zo.validation?.success === false

  // TODO: Add a registration success state then take them to the login page
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
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
            <Label htmlFor={zo.fields.password()}>Password</Label>
            <Input
              type={'password'}
              name={zo.fields.password()}
              placeholder={'Password'}
            />
            {zo.errors.password((e) => (
              <span>{e.message}</span>
            ))}
          </div>

          <div className="grid gap-2">
            <Label htmlFor={zo.fields.confirmPassword()}>
              Confirm Password
            </Label>
            <Input
              type={'password'}
              name={zo.fields.confirmPassword()}
              placeholder={'Confirm Password'}
            />
            {zo.errors.confirmPassword((e) => (
              <span>{e.message}</span>
            ))}
          </div>

          <div className={cn('grid gap-6')}>
            <div>
              <CardTitle className="text-xl">Register an Agent</CardTitle>
              <CardDescription>
                Choose a name and faction for your new agent
              </CardDescription>
            </div>

            <div className={cn('grid gap-2')}>
              <div className="grid gap-2">
                <div className={cn('flex items-center justify-between')}>
                  <Label htmlFor={zo.fields.symbol()}>Agent Symbol</Label>
                  {zo.errors.symbol((e) => (
                    <span className={cn('text-sm text-destructive')}>
                      {e.message}
                    </span>
                  ))}
                </div>
                <Input
                  type={'text'}
                  name={zo.fields.symbol()}
                  placeholder={'Agent Symbol'}
                />
              </div>

              <div className="grid gap-2">
                <div className={cn('flex items-center justify-between')}>
                  <Label htmlFor={zo.fields.symbol()}>Faciton</Label>
                  {zo.errors.faction((e) => (
                    <span className={cn('text-sm text-destructive')}>
                      {e.message}
                    </span>
                  ))}
                </div>
                <Select name={zo.fields.faction()}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a faction" />
                  </SelectTrigger>
                  <SelectContent>
                    {FactionSymbolSchema.options.map((value) => (
                      <SelectItem key={value} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Create an account
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link href="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
