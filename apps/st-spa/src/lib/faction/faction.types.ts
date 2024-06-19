import { z } from 'zod'

export const FactionSymbolSchema = z.enum([
  'COSMIC',
  'VOID',
  'GALACTIC',
  'QUANTUM',
  'DOMINION',
  'ASTRO',
  'CORSAIRS',
  'OBSIDIAN',
  'AEGIS',
  'UNITED',
  'SOLITARY',
  'COBALT',
  'OMEGA',
  'ECHO',
  'LORDS',
  'CULT',
  'ANCIENTS',
  'SHADOW',
  'ETHEREAL',
])

export const InitialFactionTypeSchema = z.enum([
  'COSMIC',
  'VOID',
  'GALACTIC',
  'QUANTUM',
  'DOMINION',
])
