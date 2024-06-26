import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function Contracts() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Contracts</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no contracts currently
          </h3>
          <p className="text-sm text-muted-foreground">
            Navigate to your faction HQ to negotiate new contracts. I think...
          </p>
          <Button className="mt-4" asChild>
            <Link to={'/fleet'}>View Fleet</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
