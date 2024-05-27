'use server'

import { revalidatePath } from 'next/cache'
import {
  dockShip,
  extractResources,
  navigateShip,
  orbitShip,
  purchaseShip,
  refuelShip,
  ShipType,
} from 'st-ts-client'

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

export async function navigateToWaypoint(
  shipSymbol: string,
  waypointSymbol: string,
) {
  console.log('navigating ship', shipSymbol, 'to', waypointSymbol)

  const res = await navigateShip({
    shipSymbol,
    requestBody: {
      waypointSymbol,
    },
  })

  console.log(res)
  revalidatePath('/')
}

export async function dockShipAction(shipSymbol: string) {
  console.log('docking ship', shipSymbol)

  const res = await dockShip({
    shipSymbol,
  })

  console.log(res)
  revalidatePath('/')
}

export async function refuelShipAction(shipSymbol: string) {
  console.log('re-fuel ship', shipSymbol)

  const res = await refuelShip({
    shipSymbol,
    requestBody: {},
  })

  console.log(res)
  revalidatePath('/')
}

export async function extractAction(shipSymbol: string) {
  console.log('extracting ores')

  const res = await extractResources({
    shipSymbol,
    requestBody: {},
  })

  console.log(res)
  revalidatePath('/')
}
