import { z } from 'zod'
import { FactionSymbolSchema } from '../st-client-enums'

export const RegisterAgentInputSchema = z.object({
  faction: FactionSymbolSchema,
  symbol: z.string().min(1, 'Must have a name'),
})
export type RegisterAgentInput = z.infer<typeof RegisterAgentInputSchema>
