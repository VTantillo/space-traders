import { token } from '@/lib/env'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { OpenAPI } from 'st-ts-client'
import { ThemeProvider } from './theme-provider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
})

OpenAPI.TOKEN = token

type Props = {
  children: React.ReactNode
}
export function Providers({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="command-ui-theme">
        {children}
        <ReactQueryDevtools position={'bottom'} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
