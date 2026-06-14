'use client'

import { ShoppingCart, Search, MapPin } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">Okave</h1>
          </div>

          {/* Search Bar */}
          <div className="hidden sm:flex flex-1 max-w-md items-center gap-2 bg-gray-100 rounded-lg px-4 py-2">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search produce..."
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>

          {/* Location and Cart */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-gray-700">
              <MapPin size={18} className="text-primary" />
              <span className="text-sm font-medium">Abuja</span>
            </div>

            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart size={24} className="text-primary" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-accent text-xs font-bold text-accent-foreground rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="sm:hidden mt-4 flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search produce..."
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>
      </div>
    </header>
  )
}
