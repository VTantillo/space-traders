import { AspectRatio } from '@/components/ui/aspect-ratio'
import { cn } from '@/lib/utils'
import { db } from 'db/client'
import { dbSystem } from 'db/schema'
import { SystemType } from 'st-ts-client'
import { SystemTooltip } from './system-tooltip'

type SystemDisplay = {
  color: string
  size: number
}

const systemDisplayMap: Record<SystemType, SystemDisplay> = {
  NEUTRON_STAR: { color: '#aaa', size: 2 },
  RED_STAR: { color: '#E54D2E', size: 2 },
  ORANGE_STAR: { color: '#F76B15', size: 2 },
  BLUE_STAR: { color: '#3B9EFF', size: 2 },
  YOUNG_STAR: { color: '#FFD60A', size: 2 },
  WHITE_DWARF: { color: '#fff', size: 1 },
  BLACK_HOLE: { color: '#2A2A2A', size: 3 },
  HYPERGIANT: { color: '#EE518A', size: 4 },
  NEBULA: { color: '#6E6ADE', size: 5 },
  UNSTABLE: { color: '#B0B4BA', size: 3 },
}
export default async function GalacticMap() {
  const systems = await db
    .select({
      x: dbSystem.x,
      y: dbSystem.y,
      symbol: dbSystem.symbol,
      systemType: dbSystem.type,
    })
    .from(dbSystem)

  const factor = 1300
  const scale = factor / 160_000

  return (
    <main>
      <div className={cn('size-[1300px]')}>
        <AspectRatio ratio={1 / 1}>
          <svg width="100%" height="100%" viewBox="0 0 1300 1300">
            {/* <rect width="100%" height="100%" fill="#eee" /> */}
            <g>
              {systems.map((s) => (
                <circle
                  cx={(s.x + 80_000) * scale}
                  cy={(s.y + 80_000) * scale}
                  r={systemDisplayMap[s.systemType].size}
                  fill={systemDisplayMap[s.systemType].color}
                  key={s.symbol}
                />
              ))}
            </g>
          </svg>
        </AspectRatio>
      </div>
    </main>
  )
}
