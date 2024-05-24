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
import { registerAgentAction } from '@/lib/agent/agent.actions'
import { RegisterAgentInputSchema } from '@/lib/agent/agent.types'
import { FactionSymbolSchema } from '@/lib/faction/faction.types'
import { cn } from '@/lib/utils'
import { useZorm } from 'react-zorm'

export function RegisterAgentForm() {
  const zo = useZorm('register-agent', RegisterAgentInputSchema, {
    onValidSubmit: async (e) => {
      e.preventDefault()
      const agent = await registerAgentAction(e.data)
      console.log('returned agent', agent)
    },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Register an Agent</CardTitle>
        <CardDescription>
          Choose a name and faction for your new agent
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form ref={zo.ref} className={cn('grid gap-4')}>
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

          <Button type="submit" className="w-full">
            Register Agent
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
