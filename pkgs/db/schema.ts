import {
  integer,
  sqliteTable,
  text,
  uniqueIndex,
} from 'drizzle-orm/sqlite-core'
import { ulid } from 'ulid'

export const dbUser = sqliteTable(
  'user',
  {
    id: text('id')
      .$defaultFn(() => ulid())
      .primaryKey()
      .notNull(),
    username: text('username').notNull(),
    password: text('password').notNull(),
    isAdmin: integer('is_admin', { mode: 'boolean' }).default(false).notNull(),
  },
  (u) => {
    return {
      usernameIndex: uniqueIndex('username_idx').on(u.username),
    }
  },
)
export type User = typeof dbUser.$inferSelect
export type NewUser = typeof dbUser.$inferInsert

export const dbSession = sqliteTable('session', {
  sessionToken: text('session_token').primaryKey().notNull(),
  userId: text('user_id')
    .references(() => dbUser.id, {
      onDelete: 'cascade',
    })
    .notNull(),
  issuedAt: integer('issued_at', { mode: 'timestamp' })
    .$defaultFn(() => new Date())
    .notNull(),
  revokedAt: integer('revoked_at', { mode: 'timestamp' }),
  expiresAt: integer('expires_at', { mode: 'timestamp' }),
})
export type Session = typeof dbSession.$inferSelect
export type NewSession = typeof dbSession.$inferInsert

export const dbUserAgent = sqliteTable('user_agent', {
  id: text('id')
    .$defaultFn(() => ulid())
    .primaryKey()
    .notNull(),
  userId: text('user_id')
    .references(() => dbUser.id, {
      onDelete: 'cascade',
    })
    .notNull(),
  token: text('token').notNull(),
  accountId: text('account_id').notNull(),
  symbol: text('symbol').notNull(),
  startingFaction: text('starting_faction').notNull(),
})
export type UserAgent = typeof dbUserAgent.$inferSelect
export type NewUserAgent = typeof dbUserAgent.$inferInsert
