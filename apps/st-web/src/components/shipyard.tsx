'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { purchaseShipAction } from '@/lib/ship/ship.actions'
import { MoreHorizontal } from 'lucide-react'
import { ShipyardShip } from 'st-ts-client'

type Props = {
  symbol: string
  ships: ShipyardShip[]
}
export function Shipyard({ symbol, ships }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shipyard</CardTitle>
        <CardDescription>
          Ships available and the designanted ship yard ({symbol})
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Supply</TableHead>
              <TableHead>Activity</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {ships &&
              ships.map((s) => (
                <TableRow key={s.type}>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.description}</TableCell>
                  <TableCell>{s.purchasePrice}</TableCell>
                  <TableCell>{s.supply}</TableCell>
                  <TableCell>{s.activity}</TableCell>
                  <TableCell>{s.frame.name}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="size-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                          onClick={() =>
                            purchaseShipAction({
                              waypointSymbol: symbol,
                              shipType: s.type,
                            })
                          }
                        >
                          Purchase
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
