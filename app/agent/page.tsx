'use client'

import { useState } from 'react'
import Link from 'next/link'

const initialFarmers = [
  { id: 1, name: 'Musa Abubakar', phone: '+234 803 111 2222', location: 'Minna', crops: 'Tomatoes, Maize', status: 'Active' },
  { id: 2, name: 'Fatima Bello', phone: '+234 805 333 4444', location: 'Bida', crops: 'Yam, Cassava', status: 'Active' },
  { id: 3, name: 'Emeka Okafor', phone: '+234 807 555 6666', location: 'Suleja', crops: 'Onions, Pepper', status: 'Pending' },
]

const initialListings = [
  { id: 1, crop: 'Tomatoes', farmer: 'Musa Abubakar', qty: 20, unit: 'basket', price: 15500, status: 'Active' },
  { id: 2, crop: 'Yam', farmer: 'Fatima Bello', qty: 15, unit: 'crate', price: 12000, status: 'Active' },
  { id: 3, crop: 'Onions', farmer: 'Emeka Okafor', qty: 30, unit: 'bag', price: 9800, status: 'Pending' },
]

const marketPrices: Record<string, number> = {
  Tomatoes: 15500, Maize: 8200, Yam: 12000, Onions: 9800,
  Pepper: 6500, Spinach: 3500, Cassava: 4200, Groundnut: 11000,
}

export default function AgentPage() {
  const [tab, setTab] = useState<'overview' | 'farmers' | 'listings' | 'register'>('overview')
  const [farmers, setFarmers] = useState(initialFarmers)
  const [listings, setListings] = useState(initialListings)
  const [newFarmer, setNewFarmer] = useState({ name: '', phone: '', location: '', crops: '' })
  const [newListing, setNewListing] = useState({ crop: '', farmer: '', qty: '', unit: 'bag', price: '' })
  const [toast, setToast] = useState('')

  const showToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(''), 2500)
  }

  const handleRegisterFarmer = (e: React.FormEvent) => {
    e.preventDefault()
    setFarmers([...farmers, { id: farmers.length + 1, ...newFarmer, status: 'Active' }])
    setNewFarmer({ name: '', phone: '', location: '', crops: '' })
    showToast('✅ Farmer registered successfully!')
    setTab('farmers')
  }

  const handleCreateListing = (e: React.FormEvent) => {
    e.preventDefault()
    setListings([...listings, { id: listings.length + 1, ...newListing, qty: Number(newListing.qty), price: Number(newListing.price), status: 'Active' }])
    setNewListing({ crop: '', farmer: '', qty: '', unit: 'bag', price: '' })
    showToast('✅ Listing created successfully!')
    setTab('listings')
  }

  const priceHint = marketPrices[newListing.crop]

  const tabs = [
    { id: 'overview', label: '📊 Overview' },
    { id: 'farmers', label: '👨‍🌾 Farmers' },
    { id: 'listings', label: '📦 Listings' },
    { id: 'register', label: '➕ Add New' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-700 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-white font-bold text-xl">🌿 Okave</Link>
          <span className="text-green-200 text-sm">/ Agent Portal</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-green-100">👨‍🌾 Field Agent</span>
          <Link href="/" className="text-sm bg-white text-green-700 px-3 py-1 rounded-lg font-semibold hover:bg-green-50">Marketplace</Link>
        </div>
      </header>

      {/* Toast */}
      {toast && (
        <div className="fixed top-4 right-4 bg-green-700 text-white px-5 py-3 rounded-xl shadow-lg z-50 font-medium">
          {toast}
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as any)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                tab === t.id ? 'bg-green-700 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-green-400'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {tab === 'overview' && (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Farmers Registered', value: farmers.length, icon: '👨‍🌾', color: 'green' },
                { label: 'Active Listings', value: listings.filter(l => l.status === 'Active').length, icon: '📦', color: 'blue' },
                { label: 'Pending Approval', value: listings.filter(l => l.status === 'Pending').length, icon: '⏳', color: 'orange' },
                { label: 'Total Orders', value: 12, icon: '🛒', color: 'purple' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-3">Recent Listings</h3>
              <div className="space-y-2">
                {listings.slice(0, 3).map(l => (
                  <div key={l.id} className="flex justify-between items-center py-2 border-b last:border-0">
                    <span className="font-medium text-gray-800">{l.crop} — {l.farmer}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-green-700 font-semibold">₦{l.price.toLocaleString()}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${l.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-600'}`}>{l.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Farmers Table */}
        {tab === 'farmers' && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-bold text-gray-900">Registered Farmers ({farmers.length})</h3>
              <button onClick={() => setTab('register')} className="text-sm bg-green-700 text-white px-3 py-1.5 rounded-lg font-semibold">+ Register Farmer</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                  <tr>
                    {['Name', 'Phone', 'Location', 'Crops', 'Status'].map(h => <th key={h} className="px-4 py-3 text-left">{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {farmers.map(f => (
                    <tr key={f.id} className="border-t hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{f.name}</td>
                      <td className="px-4 py-3 text-gray-500">{f.phone}</td>
                      <td className="px-4 py-3">{f.location}</td>
                      <td className="px-4 py-3 text-gray-600">{f.crops}</td>
                      <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${f.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-600'}`}>{f.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Listings Table */}
        {tab === 'listings' && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-bold text-gray-900">Produce Listings ({listings.length})</h3>
              <button onClick={() => setTab('register')} className="text-sm bg-green-700 text-white px-3 py-1.5 rounded-lg font-semibold">+ Create Listing</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                  <tr>
                    {['Crop', 'Farmer', 'Quantity', 'Price', 'Status'].map(h => <th key={h} className="px-4 py-3 text-left">{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {listings.map(l => (
                    <tr key={l.id} className="border-t hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{l.crop}</td>
                      <td className="px-4 py-3 text-gray-600">{l.farmer}</td>
                      <td className="px-4 py-3">{l.qty} {l.unit}s</td>
                      <td className="px-4 py-3 font-semibold text-green-700">₦{l.price.toLocaleString()}</td>
                      <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${l.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-600'}`}>{l.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Register / Create */}
        {tab === 'register' && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Register Farmer */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-4">👨‍🌾 Register New Farmer</h3>
              <form onSubmit={handleRegisterFarmer} className="space-y-3">
                {[
                  { key: 'name', label: 'Full Name', placeholder: 'Musa Abubakar' },
                  { key: 'phone', label: 'Phone', placeholder: '+234 800 000 0000' },
                  { key: 'location', label: 'Location', placeholder: 'Minna, Niger State' },
                  { key: 'crops', label: 'Crops Grown', placeholder: 'Tomatoes, Maize' },
                ].map(f => (
                  <div key={f.key}>
                    <label className="block text-xs font-medium text-gray-600 mb-1">{f.label}</label>
                    <input
                      value={newFarmer[f.key as keyof typeof newFarmer]}
                      onChange={e => setNewFarmer({ ...newFarmer, [f.key]: e.target.value })}
                      placeholder={f.placeholder}
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                ))}
                <button type="submit" className="w-full py-2.5 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition-colors text-sm">
                  Register Farmer
                </button>
              </form>
            </div>

            {/* Create Listing */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-4">📦 Create New Listing</h3>
              <form onSubmit={handleCreateListing} className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Crop Type</label>
                  <select
                    value={newListing.crop}
                    onChange={e => {
                      const crop = e.target.value
                      setNewListing({ ...newListing, crop, price: marketPrices[crop]?.toString() || '' })
                    }}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select crop...</option>
                    {Object.keys(marketPrices).map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                {priceHint && (
                  <div className="bg-green-50 border border-green-200 text-green-700 text-xs px-3 py-2 rounded-lg">
                    💡 Market price for {newListing.crop}: <strong>₦{priceHint.toLocaleString()}</strong>
                  </div>
                )}
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Farmer</label>
                  <select
                    value={newListing.farmer}
                    onChange={e => setNewListing({ ...newListing, farmer: e.target.value })}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select farmer...</option>
                    {farmers.map(f => <option key={f.id}>{f.name}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Quantity</label>
                    <input type="number" value={newListing.qty} onChange={e => setNewListing({ ...newListing, qty: e.target.value })} required placeholder="50" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Unit</label>
                    <select value={newListing.unit} onChange={e => setNewListing({ ...newListing, unit: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500">
                      {['bag', 'basket', 'crate', 'bundle', 'tuber'].map(u => <option key={u}>{u}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Price per unit (₦)</label>
                  <input type="number" value={newListing.price} onChange={e => setNewListing({ ...newListing, price: e.target.value })} required placeholder="15000" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <button type="submit" className="w-full py-2.5 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition-colors text-sm">
                  Create Listing
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
