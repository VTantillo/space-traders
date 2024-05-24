'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'jotai'
import { ThemeProvider } from './theme-provider'

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
  if (typeof window === 'undefined') {
    return makeQueryClient()
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}

type Props = {
  children: React.ReactNode
}
export function Providers({ children }: Props) {
  const queryClient = getQueryClient()

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <ReactQueryDevtools position={'bottom'} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  )
}
