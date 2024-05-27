'use server'

import { revalidatePath } from 'next/cache'
import { purchaseShip, ShipType } from 'st-ts-client'

type PurchaseShipAction = {
  waypointSymbol: string
  shipType: ShipType
}
export async function purchaseShipAction(data: PurchaseShipAction) {
  const res = purchaseShip({
    requestBody: data,
  })

  console.log('purchasing a ship', res)
  revalidatePath('/')
}
