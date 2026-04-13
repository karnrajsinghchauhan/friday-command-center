'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const formData = new FormData()
    formData.append('password', password)
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ password }),
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await res.json()
    if (data.ok) {
      router.push('/')
      router.refresh()
    } else {
      setError(data.error || 'Invalid password')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05070A]">
      <div className="w-full max-w-sm mx-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#22D3EE] font-mono tracking-widest">FRIDAY</h1>
          <p className="text-[#E5F2F5]/50 text-sm mt-1">COMMAND CENTER</p>
        </div>
        <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-xs font-mono text-[#E5F2F5]/60 mb-2 uppercase tracking-wider">
                Access Code
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-[#E5F2F5] placeholder:text-[#E5F2F5]/20 focus:outline-none focus:border-[#22D3EE]/50 focus:ring-1 focus:ring-[#22D3EE]/30 font-mono transition"
                required
                autoFocus
              />
            </div>
            {error && (
              <p className="text-[#F43F5E] text-sm font-mono">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#22D3EE]/10 hover:bg-[#22D3EE]/20 border border-[#22D3EE]/30 hover:border-[#22D3EE]/60 text-[#22D3EE] font-mono text-sm uppercase tracking-widest py-3 rounded-lg transition-all duration-200 disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Authenticate'}
            </button>
          </form>
        </div>
        <p className="text-center text-[#E5F2F5]/20 text-xs font-mono mt-4">
          SYSTEM ONLINE — v0.1.0
        </p>
      </div>
    </div>
  )
}
