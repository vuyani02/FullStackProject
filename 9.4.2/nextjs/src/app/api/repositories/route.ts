import { NextRequest, NextResponse } from 'next/server'
import { abpApiWithToken } from '@/lib/abp'
import { verifySession } from '@/lib/dal'

export async function GET() {
  const { accessToken } = await verifySession()
  const { data } = await abpApiWithToken(accessToken).get(
    '/api/services/app/RepoGuardian/GetRepositories'
  )
  return NextResponse.json(data.result)
}

export async function POST(req: NextRequest) {
  const { accessToken } = await verifySession()
  const body = await req.json()
  const { data } = await abpApiWithToken(accessToken).post(
    '/api/services/app/RepoGuardian/AddRepository',
    { githubUrl: body.githubUrl }
  )
  return NextResponse.json(data.result)
}
