import { NextRequest, NextResponse } from 'next/server'
import { abpApi } from '@/lib/abp'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    await abpApi.post('/api/services/app/Account/Register', body)

    return NextResponse.json({ success: true })
  } catch (err: any) {
    const message = err?.response?.data?.error?.message || 'Registration failed. Please try again.'
    return NextResponse.json({ message }, { status: 400 })
  }
}
