'use server'

import { db } from 'db/client'
import { dbUserAgent, NewUserAgent } from 'db/schema'
import { ApiError, register } from 'st-ts-client'
import { getActiveSessionUser } from '../auth/auth.repo'
import { RegisterAgentInput } from './agent.types'

export async function registerAgentAction(input: RegisterAgentInput) {
  try {
    const user = await getActiveSessionUser()

    const res = await register({ requestBody: input })

    await db.transaction(async (tx) => {
      const newAgent = {
        token: res.data.token,
        userId: user.user.id,
        accountId: res.data.agent.accountId!,
        symbol: res.data.agent.symbol,
        startingFaction: res.data.agent.startingFaction,
      } satisfies NewUserAgent
      await tx.insert(dbUserAgent).values(newAgent)
    })

    return res.data
  } catch (e) {
    const err = e as ApiError
    console.error(err)
  }
}
