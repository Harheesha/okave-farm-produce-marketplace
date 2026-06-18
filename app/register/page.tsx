'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function RegisterPage() {
  const [role, setRole] = useState<'buyer' | 'agent'>('buyer')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' })

  const handle = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-green-700 mb-2">Account Created!</h2>
          <p className="text-gray-600 mb-6">Welcome, <strong>{form.name}</strong>! You're registered as a <strong>{role}</strong>.</p>
          <Link href="/login" className="block w-full py-3 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition-colors">
            Sign In Now →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="text-3xl">🌿</span>
            <span className="text-3xl font-bold text-green-700">Okave</span>
          </Link>
          <p className="text-gray-500 text-sm mt-2">Create your account</p>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-6">
          {(['buyer', 'agent'] as const).map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`py-2.5 rounded-lg text-sm font-semibold capitalize border-2 transition-all ${
                role === r ? 'bg-green-700 text-white border-green-700' : 'border-gray-200 text-gray-600 hover:border-green-400'
              }`}
            >
              {r === 'buyer' ? '🛒 Buyer' : '👨‍🌾 Agent'}
            </button>
          ))}
        </div>

        <form onSubmit={handle} className="space-y-4">
          {['name', 'email', 'phone', 'password'].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">{field}</label>
              <input
                type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
                value={form[field as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                placeholder={field === 'phone' ? '+234...' : ''}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          ))}
          <button type="submit" className="w-full py-3 bg-green-700 text-white font-bold rounded-xl hover:bg-green-800 transition-colors">
            Create Account →
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{' '}
          <Link href="/login" className="text-green-700 font-semibold hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
