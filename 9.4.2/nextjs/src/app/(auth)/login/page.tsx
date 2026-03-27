'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Alert, Button, Card, Form, Input, Typography } from 'antd'
import { useStyles } from './style'

type LoginValues = {
  username: string
  password: string
}

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const justRegistered = searchParams.get('registered') === 'true'
  const { styles } = useStyles()

  async function onFinish(values: LoginValues) {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.message)
        return
      }
      router.push('/dashboard')
    } catch {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.page}>
      <Card className={styles.card} title={<Typography.Title level={3} className={styles.cardTitle}>Sign In</Typography.Title>}>
        {justRegistered && (
          <Alert
            type="success"
            title="Account created successfully. Please sign in."
            showIcon
            className={styles.alert}
          />
        )}
        {error && (
          <Alert type="error" title={error} showIcon className={styles.alert} />
        )}

        <Form layout="vertical" requiredMark={false} onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Username is required' }]}
          >
            <Input size="large" placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Password is required' }]}
          >
            <Input.Password size="large" placeholder="Enter your password" />
          </Form.Item>

          <Form.Item className={styles.submitItem}>
            <Button type="primary" htmlType="submit" size="large" loading={loading} block>
              Sign In
            </Button>
          </Form.Item>
        </Form>

        <div className={styles.footer}>
          <Typography.Text>Don&apos;t have an account? </Typography.Text>
          <Link href="/register">Register</Link>
        </div>
      </Card>
    </div>
  )
}
