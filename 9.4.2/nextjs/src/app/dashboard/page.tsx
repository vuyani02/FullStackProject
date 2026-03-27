import { verifySession } from '@/lib/dal'
import DashboardContent from './DashboardContent'

export default async function DashboardPage() {
  const { userId } = await verifySession()
  return <DashboardContent userId={userId} />
}
