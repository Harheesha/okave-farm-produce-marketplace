'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [role, setRole] = useState<'buyer' | 'agent' | 'admin'>('buyer')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const demoCredentials = {
    buyer: { email: 'buyer@okave.com', password: 'password123' },
    agent: { email: 'agent@okave.com', password: 'password123' },
    admin: { email: 'admin@okave.com', password: 'password123' },
  }

  const fillDemo = (r: 'buyer' | 'agent' | 'admin') => {
    setRole(r)
    setEmail(demoCredentials[r].email)
    setPassword(demoCredentials[r].password)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 1200)
  }

  if (success) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-green-700 mb-2">Welcome back!</h2>
          <p className="text-gray-600 mb-6">Signed in as <strong>{email}</strong> ({role})</p>
          <Link href="/" className="block w-full py-3 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition-colors">
            Go to Marketplace →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="text-3xl">🌿</span>
            <span className="text-3xl font-bold text-green-700">Okave</span>
          </Link>
          <p className="text-gray-500 text-sm mt-2">Sign in to your account</p>
        </div>

        {/* Role Selector */}
        <div className="mb-6">
          <p className="text-xs text-gray-500 font-medium mb-2 uppercase tracking-wide">Demo — choose your role:</p>
          <div className="grid grid-cols-3 gap-2">
            {(['buyer', 'agent', 'admin'] as const).map((r) => (
              <button
                key={r}
                onClick={() => fillDemo(r)}
                className={`py-2 rounded-lg text-sm font-semibold capitalize transition-all border-2 ${
                  role === r
                    ? 'bg-green-700 text-white border-green-700'
                    : 'border-gray-200 text-gray-600 hover:border-green-400'
                }`}
              >
                {r === 'buyer' ? '🛒' : r === 'agent' ? '👨‍🌾' : '⚙️'} {r}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-green-700 text-white font-bold rounded-xl hover:bg-green-800 transition-colors disabled:opacity-60 text-sm"
          >
            {loading ? 'Signing in...' : 'Sign In →'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          No account?{' '}
          <Link href="/register" className="text-green-700 font-semibold hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  )
}
