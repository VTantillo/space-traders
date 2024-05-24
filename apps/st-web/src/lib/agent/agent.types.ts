import { z } from 'zod'
import { FactionSymbolSchema } from '../faction/faction.types'

export const RegisterAgentInputSchema = z.object({
  faction: FactionSymbolSchema,
  symbol: z.string().min(1, 'Must have a name'),
})
export type RegisterAgentInput = z.infer<typeof RegisterAgentInputSchema>
