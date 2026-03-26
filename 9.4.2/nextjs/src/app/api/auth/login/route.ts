import { NextRequest, NextResponse } from 'next/server'
import { createSession } from '@/lib/session'
import { abpApi } from '@/lib/abp'

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json()

    const { data } = await abpApi.post('/api/TokenAuth/Authenticate', {
      userNameOrEmailAddress: username,
      password,
      rememberClient: false,
    })

    await createSession(data.result.userId, data.result.accessToken)

    return NextResponse.json({ success: true })
  } catch (err: any) {
    const message = err?.response?.data?.error?.message || 'Invalid username or password.'
    const status = err?.response?.status === 401 ? 401 : 500
    return NextResponse.json({ message }, { status })
  }
}
