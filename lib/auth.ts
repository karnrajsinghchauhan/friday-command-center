import { cookies } from 'next/headers'
import { timingSafeEqual } from 'crypto'

const COOKIE_NAME = 'friday_session'
const SESSION_VALUE = 'authenticated'

export function verifyPassword(input: string): boolean {
  const password = process.env.APP_PASSWORD
  if (!password) return false
  try {
    const a = Buffer.from(input)
    const b = Buffer.from(password)
    if (a.length !== b.length) {
      // Still do the comparison to prevent timing attacks
      timingSafeEqual(Buffer.alloc(b.length), b)
      return false
    }
    return timingSafeEqual(a, b)
  } catch {
    return false
  }
}

export async function getSession(): Promise<boolean> {
  const cookieStore = await cookies()
  const session = cookieStore.get(COOKIE_NAME)
  return session?.value === SESSION_VALUE
}

export async function setSession(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, SESSION_VALUE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
  })
}

export async function clearSession(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
}
