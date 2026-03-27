'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from 'antd'

export default function LogoutButton() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleLogout() {
    setLoading(true)
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
  }

  return (
    <Button danger loading={loading} onClick={handleLogout}>
      Sign Out
    </Button>
  )
}
