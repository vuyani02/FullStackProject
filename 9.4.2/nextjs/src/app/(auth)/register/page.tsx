'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Alert, Button, Card, Col, Form, Input, Row, Typography } from 'antd'
import { useStyles } from './style'

type RegisterValues = {
  name: string
  surname: string
  userName: string
  emailAddress: string
  password: string
}

export default function RegisterPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const { styles } = useStyles()

  async function onFinish(values: RegisterValues) {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.message)
        return
      }
      router.push('/login?registered=true')
    } catch {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.page}>
      <Card
        className={styles.card}
        title={<Typography.Title level={3} className={styles.cardTitle}>Create Account</Typography.Title>}
      >
        {error && (
          <Alert type="error" title={error} showIcon className={styles.alert} />
        )}

        <Form layout="vertical" requiredMark={false} onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="First Name"
                name="name"
                rules={[{ required: true, message: 'First name is required' }]}
              >
                <Input size="large" placeholder="John" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Last Name"
                name="surname"
                rules={[{ required: true, message: 'Last name is required' }]}
              >
                <Input size="large" placeholder="Doe" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="Username"
            name="userName"
            rules={[
              { required: true, message: 'Username is required' },
              { min: 2, message: 'Must be at least 2 characters' },
              {
                validator: (_, value) =>
                  value?.includes('@')
                    ? Promise.reject(new Error('Username cannot be an email address'))
                    : Promise.resolve(),
              },
            ]}
          >
            <Input size="large" placeholder="johndoe" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="emailAddress"
            rules={[
              { required: true, message: 'Email is required' },
              { type: 'email', message: 'Invalid email address' },
            ]}
          >
            <Input size="large" placeholder="john@example.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Password is required' },
              { min: 8, message: 'Must be at least 8 characters' },
              {
                pattern: /[A-Z]/,
                message: 'Must contain at least one uppercase letter',
              },
              {
                pattern: /\d/,
                message: 'Must contain at least one number',
              },
            ]}
          >
            <Input.Password size="large" placeholder="Min 8 chars, uppercase, number" />
          </Form.Item>

          <Form.Item className={styles.submitItem}>
            <Button type="primary" htmlType="submit" size="large" loading={loading} block>
              Create Account
            </Button>
          </Form.Item>
        </Form>

        <div className={styles.footer}>
          <Typography.Text>Already have an account? </Typography.Text>
          <Link href="/login">Sign In</Link>
        </div>
      </Card>
    </div>
  )
}
