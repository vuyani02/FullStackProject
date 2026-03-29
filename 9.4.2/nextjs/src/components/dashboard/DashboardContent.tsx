'use client'

import { Typography } from 'antd'
import { useStyles } from '@/app/(app)/dashboard/style'

const { Title, Text } = Typography

const DashboardContent = () => {
  const { styles } = useStyles()

  return (
    <div className={styles.content}>
      <Title level={2} className={styles.title}>Dashboard</Title>
      <Text className={styles.subtitle}>Welcome to RepoGuardian</Text>
    </div>
  )
}

export default DashboardContent
