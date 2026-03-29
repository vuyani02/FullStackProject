'use client'

import { useStyles } from './styles/AppShell.style'

interface Props {
  navbar: React.ReactNode
  footer: React.ReactNode
  children: React.ReactNode
}

const AppShell = ({ navbar, footer, children }: Props) => {
  const { styles } = useStyles()

  return (
    <div className={styles.shell}>
      {navbar}
      <main className={styles.main}>{children}</main>
      {footer}
    </div>
  )
}

export default AppShell
