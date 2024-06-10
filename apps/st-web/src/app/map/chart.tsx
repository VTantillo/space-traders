'use client'

import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

type Props = {
  systems: {
    x: number
    y: number
    symbol: string
  }[]
}

export function SystemsChart({ systems }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" range={[-80000, 80000]} />
        <YAxis type="number" dataKey="y" range={[-80000, 80000]} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="Systems" data={systems} fill="#82ca9d" />
      </ScatterChart>
    </ResponsiveContainer>
  )
}
