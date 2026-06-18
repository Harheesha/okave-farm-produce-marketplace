'use client'

import { ShoppingCart, Search, MapPin, User, Menu } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export function Header() {
  const [cartCount, setCartCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <h1 className="text-2xl font-bold text-green-700">Okave</h1>
          </div>

          {/* Search Bar */}
          <div className="hidden sm:flex flex-1 max-w-md items-center gap-2 bg-gray-100 rounded-lg px-4 py-2">
            <Search size={18} className="text-gray-400" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search produce, cooperatives..."
              className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1 text-gray-600">
              <MapPin size={16} className="text-green-700" />
              <span className="text-sm font-medium">Niger State</span>
            </div>

            <Link
              href="/login"
              className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 bg-green-700 text-white text-sm font-semibold rounded-lg hover:bg-green-800 transition-colors"
            >
              <User size={15} />
              Sign In
            </Link>

            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart size={22} className="text-green-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-xs font-bold text-white rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="sm:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              <Menu size={22} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="sm:hidden mt-3 flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2">
          <Search size={18} className="text-gray-400" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search produce..."
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden mt-3 border-t pt-3 flex flex-col gap-2">
            <Link href="/login" className="flex items-center gap-2 px-3 py-2 bg-green-700 text-white rounded-lg font-semibold text-sm justify-center">
              <User size={15} /> Sign In / Register
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
