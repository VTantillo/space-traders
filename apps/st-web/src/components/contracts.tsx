'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { acceptContractAction } from '@/lib/contract/contract.actions'
import { meQueries } from '@/lib/queries'
import { useQuery } from '@tanstack/react-query'
import { CircleCheckBig, CircleSlash, MoreHorizontal } from 'lucide-react'
import { z } from 'zod'

const dateStringSchema = z.coerce.date().transform((d) => d.toDateString())

export function Contracts() {
  const query = useQuery(meQueries.contracts({}))

  if (query.status !== 'success' && !query.data) {
    return null
  }

  const contracts = query.data.data

  const meta = query.data.meta

  console.log(contracts)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contracts</CardTitle>
        <CardDescription>
          Contracts currently available to your agent
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Faction</TableHead>
              <TableHead>Accepted</TableHead>
              <TableHead>Fulfilled</TableHead>
              <TableHead>Accept Deadline</TableHead>
              <TableHead>Delivery Deadline</TableHead>
              <TableHead>Payment on accept</TableHead>
              <TableHead>Payment on fulfilment</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {contracts.map((c) => (
              <TableRow key={c.id}>
                <TableCell>{c.type}</TableCell>
                <TableCell>{c.factionSymbol}</TableCell>
                <TableCell>
                  {c.accepted ? <CircleCheckBig /> : <CircleSlash />}
                </TableCell>
                <TableCell>
                  {c.fulfilled ? <CircleCheckBig /> : <CircleSlash />}
                </TableCell>
                <TableCell>
                  {dateStringSchema.parse(c.deadlineToAccept)}
                </TableCell>
                <TableCell>
                  {dateStringSchema.parse(c.terms.deadline)}
                </TableCell>
                <TableCell>{c.terms.payment.onAccepted}</TableCell>
                <TableCell>{c.terms.payment.onFulfilled}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="size-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem
                        onClick={() => acceptContractAction(c.id)}
                      >
                        Accept
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>{contracts.length}</strong> of{' '}
          <strong>{meta.total}</strong> contracts
        </div>
      </CardFooter>
    </Card>
  )
}
