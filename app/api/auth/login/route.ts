import { verifyPassword, setSession } from '@/lib/auth'
import { z } from 'zod'

const LoginSchema = z.object({ password: z.string() })

export async function POST(req: Request) {
  const body = await req.json()
  const parsed = LoginSchema.safeParse(body)
  if (!parsed.success) {
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }
  if (!verifyPassword(parsed.data.password)) {
    return Response.json({ error: 'Invalid password' }, { status: 401 })
  }
  await setSession()
  return Response.json({ ok: true })
}
