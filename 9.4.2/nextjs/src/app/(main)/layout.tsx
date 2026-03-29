import { verifySession } from '@/lib/dal'
import AppNavbar from '@/components/app/AppNavbar'
import AppFooter from '@/components/app/AppFooter'
import AppShell from '@/components/app/AppShell'
import { RepositoryProvider } from '@/providers/repositories'

const AppLayout = async ({ children }: { children: React.ReactNode }) => {
  await verifySession()

  return (
    <AppShell navbar={<AppNavbar />} footer={<AppFooter />}>
      <RepositoryProvider>
        {children}
      </RepositoryProvider>
    </AppShell>
  )
}

export default AppLayout
