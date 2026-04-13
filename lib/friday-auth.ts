import { timingSafeEqual } from 'crypto'

export function requireFridayToken(req: Request): boolean {
  const authHeader = req.headers.get('authorization')
  if (!authHeader?.startsWith('Bearer ')) return false
  const token = authHeader.slice(7)
  const expected = process.env.FRIDAY_API_TOKEN
  if (!expected || !token) return false
  try {
    const a = Buffer.from(token)
    const b = Buffer.from(expected)
    if (a.length !== b.length) {
      timingSafeEqual(Buffer.alloc(b.length), b)
      return false
    }
    return timingSafeEqual(a, b)
  } catch {
    return false
  }
}
