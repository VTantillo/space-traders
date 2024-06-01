import { integer, pgEnum, pgTable, text } from 'drizzle-orm/pg-core'
import { customJsonb } from './custom-cols'

export const systemTypeEnum = pgEnum('system_type', [
  'NEUTRON_STAR',
  'RED_STAR',
  'ORANGE_STAR',
  'BLUE_STAR',
  'YOUNG_STAR',
  'WHITE_DWARF',
  'BLACK_HOLE',
  'HYPERGIANT',
  'NEBULA',
  'UNSTABLE',
])

export const waypointTypeEnum = pgEnum('waypoint_type', [
  'PLANET',
  'GAS_GIANT',
  'MOON',
  'ORBITAL_STATION',
  'JUMP_GATE',
  'ASTEROID_FIELD',
  'ASTEROID',
  'ENGINEERED_ASTEROID',
  'ASTEROID_BASE',
  'NEBULA',
  'DEBRIS_FIELD',
  'GRAVITY_WELL',
  'ARTIFICIAL_GRAVITY_WELL',
  'FUEL_STATION',
])

type SystemWaypoint = {
  symbol: string
  type: string
  x: number
  y: number
  orbital: Array<{ symbol: string }>
  orbits?: string
}
export const dbSystem = pgTable('system', {
  symbol: text('symbol').primaryKey().notNull(),
  type: systemTypeEnum('type').notNull(),
  sector: text('sector').notNull(),
  x: integer('x').notNull(),
  y: integer('y').notNull(),
  waypoints: customJsonb('wayponts').$type<SystemWaypoint[]>(),
  factions: customJsonb('wayponts').$type<Array<{ symbol: string }>>(),
})
export type System = typeof dbSystem.$inferSelect
export type NewSystem = typeof dbSystem.$inferInsert
