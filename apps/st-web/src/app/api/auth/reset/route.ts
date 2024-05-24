import { deleteSession } from '@/lib/auth/auth.helpers'
import { redirect } from 'next/navigation'

export async function GET() {
  deleteSession()
  redirect('/login')
}
