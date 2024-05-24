'use server'

import { ApiError, register } from 'st-ts-client'
import { RegisterAgentInput } from './agent.types'

export async function registerAgentAction(input: RegisterAgentInput) {
  try {
    const res = await register({ requestBody: input })
    console.log('server data', res.data)
    return res.data
  } catch (e) {
    const err = e as ApiError
    console.error(err)
  }
}
