import { verifySession } from '@/lib/dal'
import RepositoriesContent from './RepositoriesContent'

export default async function RepositoriesPage() {
  await verifySession()
  return <RepositoriesContent />
}
