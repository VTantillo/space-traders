'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

type Props = {
  cx: number
  cy: number
  // size: number
  // color: string

  x: number
  y: number
  symbol: string
  // systemType: string
}

export function SystemTooltip(p: Props) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <circle cx={p.cx} cy={p.cy} r="2" fill="#aaa" key={p.symbol} />
      </TooltipTrigger>
      <TooltipContent>
        <p>{p.symbol}</p>
        <p>
          ({p.x}, {p.y})
        </p>
      </TooltipContent>
    </Tooltip>
  )
}
