'use server'

import { revalidatePath } from 'next/cache'
import { acceptContract } from 'st-ts-client'
import { getQueryClient } from '../client'
import { meQueries } from '../queries'

export async function acceptContractAction(contractId: string) {
  const queryClient = getQueryClient()
  try {
    const res = await acceptContract({ contractId })

    console.log(res)

    revalidatePath('/')
    queryClient.invalidateQueries({
      queryKey: meQueries.allContracts(),
    })
  } catch (e) {
    console.error(e)
  }
}
