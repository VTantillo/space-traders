'use client'

import { getQueryClient } from '@/lib/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'jotai'
import { ThemeProvider } from './theme-provider'

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
