import { useMutation, useQueryClient } from '@tanstack/react-query'
import { register } from 'st-ts-client'
import { RegisterAgentInput } from './agent.types'

export function useRegisterAgentMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (input: RegisterAgentInput) => {
      const res = await register({ requestBody: input })
      return res.data
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['agents', data.token], data.agent)
      queryClient.setQueryData(['contracts', data.contract.id], data.contract)
      queryClient.setQueryData(['factions', data.faction.symbol], data.faction)
      queryClient.setQueryData(['fleet', 'ships', data.ship.symbol], data.ship)
    },
  })
}
