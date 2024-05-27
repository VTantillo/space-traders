'use server'

import { revalidatePath } from 'next/cache'
import { orbitShip, purchaseShip, ShipType } from 'st-ts-client'

type PurchaseShipAction = {
  waypointSymbol: string
  shipType: ShipType
}
export async function purchaseShipAction(data: PurchaseShipAction) {
  console.log('purchasing a ship', data)
  const res = purchaseShip({
    requestBody: data,
  })
  console.log(res)
  revalidatePath('/')
}

export async function orbitShipAction(shipSymbol: string) {
  console.log('orbiting ship', shipSymbol)
  const res = await orbitShip({
    shipSymbol,
  })
  console.log(res)
  revalidatePath('/')
}
