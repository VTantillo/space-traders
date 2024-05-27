import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Agent } from 'st-ts-client'

type Props = {
  agent: Agent
}
export function ActiveAgent({ agent }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          [{agent.startingFaction}] {agent.symbol}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>HQ: {agent.headquarters}</p>
        <p>{agent.credits} Credits</p>
        <p>{agent.shipCount} Ships</p>
      </CardContent>
    </Card>
  )
}
