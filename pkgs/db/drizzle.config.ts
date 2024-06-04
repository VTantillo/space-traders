import type { Config } from 'drizzle-kit'
import 'dotenv/config'

export default {
  dialect: 'postgresql',
  schema: './schema.ts',
  out: './drizzle',
  dbCredentials: {
    url: process.env.DB_URL!,
  },
} satisfies Config
