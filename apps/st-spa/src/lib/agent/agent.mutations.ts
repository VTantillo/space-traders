import { useMutation } from '@tanstack/react-query'
import { register } from 'st-ts-client'
import { RegisterAgentInput } from './agent.types'

export function useRegisterAgentMutation() {
  return useMutation({
    mutationFn: async (input: RegisterAgentInput) => {
      const res = await register({ requestBody: input })
      return res.data
    },
  })
}
