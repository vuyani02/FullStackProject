import { NextRequest, NextResponse } from 'next/server'
import { abpApiWithToken } from '@/lib/abp'
import { verifySession } from '@/lib/dal'

export async function POST(req: NextRequest) {
  const { accessToken } = await verifySession()
  const { repositoryId, branch } = await req.json()
  const { data } = await abpApiWithToken(accessToken).post(
    '/api/services/app/RepoGuardian/StartScan',
    { repositoryId, branch: branch ?? null }
  )
  return NextResponse.json(data.result)
}
