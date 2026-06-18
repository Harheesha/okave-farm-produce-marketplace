'use client'

import { useState } from 'react'
import Link from 'next/link'

const initialPrices = [
  { id: 1, crop: 'Tomatoes', market: 'Minna Main Market', avg: 15500, min: 14000, max: 17000, date: '2026-06-18' },
  { id: 2, crop: 'Maize', market: 'Suleja Market', avg: 8200, min: 7500, max: 9000, date: '2026-06-18' },
  { id: 3, crop: 'Yam', market: 'Bida Market', avg: 12000, min: 11000, max: 13500, date: '2026-06-18' },
  { id: 4, crop: 'Onions', market: 'Kontagora Market', avg: 9800, min: 8500, max: 11000, date: '2026-06-18' },
  { id: 5, crop: 'Pepper', market: 'Chanchaga Market', avg: 6500, min: 5800, max: 7200, date: '2026-06-17' },
]

const users = [
  { id: 1, name: 'Musa Abubakar', email: 'musa@okave.com', role: 'Agent', status: 'Active', joined: '2026-01-10' },
  { id: 2, name: 'Aisha Mohammed', email: 'aisha@okave.com', role: 'Buyer', status: 'Active', joined: '2026-02-14' },
  { id: 3, name: 'Emeka Okafor', email: 'emeka@okave.com', role: 'Agent', status: 'Pending', joined: '2026-06-01' },
  { id: 4, name: 'Fatima Bello', email: 'fatima@okave.com', role: 'Buyer', status: 'Active', joined: '2026-03-22' },
]

export default function AdminPage() {
  const [tab, setTab] = useState<'overview' | 'prices' | 'users' | 'add-price'>('overview')
  const [prices, setPrices] = useState(initialPrices)
  const [newPrice, setNewPrice] = useState({ crop: '', market: '', avg: '', min: '', max: '' })
  const [toast, setToast] = useState('')

  const showToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(''), 2500)
  }

  const handleAddPrice = (e: React.FormEvent) => {
    e.preventDefault()
    setPrices([...prices, {
      id: prices.length + 1,
      ...newPrice,
      avg: Number(newPrice.avg),
      min: Number(newPrice.min),
      max: Number(newPrice.max),
      date: new Date().toISOString().split('T')[0],
    }])
    setNewPrice({ crop: '', market: '', avg: '', min: '', max: '' })
    showToast('✅ Price snapshot added!')
    setTab('prices')
  }

  const tabs = [
    { id: 'overview', label: '📊 Overview' },
    { id: 'prices', label: '💰 Market Prices' },
    { id: 'users', label: '👥 Users' },
    { id: 'add-price', label: '➕ Add Price' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-white font-bold text-xl">🌿 Okave</Link>
          <span className="text-gray-400 text-sm">/ Admin Dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-300">⚙️ Admin</span>
          <Link href="/" className="text-sm bg-white text-gray-900 px-3 py-1 rounded-lg font-semibold hover:bg-gray-100">Marketplace</Link>
        </div>
      </header>

      {toast && (
        <div className="fixed top-4 right-4 bg-green-700 text-white px-5 py-3 rounded-xl shadow-lg z-50 font-medium">{toast}</div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex gap-2 mb-6 flex-wrap">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id as any)} className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${tab === t.id ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'}`}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'overview' && (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Total Users', value: users.length, icon: '👥' },
                { label: 'Active Agents', value: users.filter(u => u.role === 'Agent' && u.status === 'Active').length, icon: '👨‍🌾' },
                { label: 'Price Entries', value: prices.length, icon: '💰' },
                { label: 'Platform Orders', value: 47, icon: '🛒' },
              ].map(s => (
                <div key={s.label} className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-3">Latest Market Prices</h3>
              <div className="space-y-2">
                {prices.slice(0, 4).map(p => (
                  <div key={p.id} className="flex justify-between items-center py-2 border-b last:border-0 text-sm">
                    <span className="font-medium">{p.crop} — <span className="text-gray-500">{p.market}</span></span>
                    <span className="font-bold text-green-700">₦{p.avg.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'prices' && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-bold text-gray-900">Market Price Data</h3>
              <button onClick={() => setTab('add-price')} className="text-sm bg-gray-900 text-white px-3 py-1.5 rounded-lg font-semibold">+ Add Price</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                  <tr>{['Crop', 'Market', 'Avg Price', 'Min', 'Max', 'Date'].map(h => <th key={h} className="px-4 py-3 text-left">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {prices.map(p => (
                    <tr key={p.id} className="border-t hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{p.crop}</td>
                      <td className="px-4 py-3 text-gray-500">{p.market}</td>
                      <td className="px-4 py-3 font-bold text-green-700">₦{p.avg.toLocaleString()}</td>
                      <td className="px-4 py-3 text-gray-600">₦{p.min.toLocaleString()}</td>
                      <td className="px-4 py-3 text-gray-600">₦{p.max.toLocaleString()}</td>
                      <td className="px-4 py-3 text-gray-400">{p.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === 'users' && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="font-bold text-gray-900">All Users ({users.length})</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                  <tr>{['Name', 'Email', 'Role', 'Status', 'Joined'].map(h => <th key={h} className="px-4 py-3 text-left">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {users.map(u => (
                    <tr key={u.id} className="border-t hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{u.name}</td>
                      <td className="px-4 py-3 text-gray-500">{u.email}</td>
                      <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${u.role === 'Agent' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>{u.role}</span></td>
                      <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${u.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-600'}`}>{u.status}</span></td>
                      <td className="px-4 py-3 text-gray-400">{u.joined}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === 'add-price' && (
          <div className="max-w-md bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4">💰 Add Market Price Snapshot</h3>
            <form onSubmit={handleAddPrice} className="space-y-3">
              {[
                { key: 'crop', label: 'Crop Name', placeholder: 'Tomatoes' },
                { key: 'market', label: 'Market Name', placeholder: 'Minna Main Market' },
                { key: 'avg', label: 'Average Price (₦)', placeholder: '15500' },
                { key: 'min', label: 'Minimum Price (₦)', placeholder: '14000' },
                { key: 'max', label: 'Maximum Price (₦)', placeholder: '17000' },
              ].map(f => (
                <div key={f.key}>
                  <label className="block text-xs font-medium text-gray-600 mb-1">{f.label}</label>
                  <input
                    value={newPrice[f.key as keyof typeof newPrice]}
                    onChange={e => setNewPrice({ ...newPrice, [f.key]: e.target.value })}
                    placeholder={f.placeholder}
                    type={['avg','min','max'].includes(f.key) ? 'number' : 'text'}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              ))}
              <button type="submit" className="w-full py-2.5 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 text-sm">
                Add Price Snapshot
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
