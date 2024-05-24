import { createClient } from '@hey-api/client-fetch'

export const stClient = createClient({
  baseUrl: 'https://api.spacetraders.io/v2',
})
