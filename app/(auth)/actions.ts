'use server'

import { redirect } from 'next/navigation'
import { verifyPassword, setSession, clearSession } from '@/lib/auth'

export async function signIn(formData: FormData) {
  const password = formData.get('password') as string
  if (!password || !verifyPassword(password)) {
    return { error: 'Invalid password' }
  }
  await setSession()
  redirect('/')
}

export async function signOut() {
  await clearSession()
  redirect('/login')
}
