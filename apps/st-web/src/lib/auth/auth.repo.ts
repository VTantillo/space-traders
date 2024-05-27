import { db } from 'db/client'
import { dbSession, dbUser, dbUserAgent } from 'db/schema'
import { and, eq, isNull } from 'drizzle-orm'
import { redirect } from 'next/navigation'
import { OpenAPI } from 'st-ts-client'
import { getSessionToken } from './auth.helpers'

export async function revokeSessionToken(token: string) {
  await db
    .update(dbSession)
    .set({ revokedAt: new Date() })
    .where(eq(dbSession.sessionToken, token))
}

export async function getActiveSessionUser() {
  const token = getSessionToken()

  const results = await db
    .select({
      user: dbUser,
      agent: dbUserAgent,
    })
    .from(dbUser)
    .innerJoin(dbUserAgent, eq(dbUserAgent.userId, dbUser.id))
    .innerJoin(dbSession, eq(dbSession.userId, dbUser.id))
    .where(
      and(
        eq(dbSession.sessionToken, token ?? ''),
        isNull(dbSession.revokedAt),
        eq(dbUserAgent.isActive, true),
      ),
    )

  if (results.length === 0) {
    redirect('/api/auth/reset')
  }

  OpenAPI.TOKEN = results[0].agent.token

  return results[0]
}
