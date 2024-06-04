import { boolean, integer, pgEnum, pgTable, text } from 'drizzle-orm/pg-core'
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

type Symbol = {
  symbol: string
}

type SystemWaypoint = {
  symbol: string
  type: string
  x: number
  y: number
  orbital: Array<Symbol>
  orbits?: string
}
export const dbSystem = pgTable('system', {
  symbol: text('symbol').primaryKey().notNull(),
  type: systemTypeEnum('type').notNull(),
  sector: text('sector').notNull(),
  x: integer('x').notNull(),
  y: integer('y').notNull(),
  waypoints: customJsonb('waypoints').$type<SystemWaypoint[]>(),
  factions: customJsonb('factions').$type<Array<Symbol>>(),
})
export type System = typeof dbSystem.$inferSelect
export type NewSystem = typeof dbSystem.$inferInsert

type WaypointTrait = {
  symbol: string
  name: string
  description: string
}

type WaypointChart = {
  submittedBy: string
  submittedOn: string
  waypointSymbol?: string
}

export const dbWaypoint = pgTable('waypoint', {
  symbol: text('symbol').primaryKey().notNull(),
  systemSymbol: text('system_symbol')
    .references(() => dbSystem.symbol)
    .notNull(),
  type: waypointTypeEnum('type').notNull(),
  x: integer('x').notNull(),
  y: integer('y').notNull(),
  orbitals: customJsonb('orbitals').$type<Array<Symbol>>(),
  traits: customJsonb('traits').$type<Array<WaypointTrait>>(),
  modifiers: customJsonb('modifiers'),
  chart: customJsonb('chart').$type<WaypointChart>(),
  faction: customJsonb('faction').$type<Symbol>(),
  isUnderConstruction: boolean('is_under_construction').notNull(),
})
export type Waypoint = typeof dbWaypoint.$inferSelect
export type NewWaypoint = typeof dbWaypoint.$inferInsert
