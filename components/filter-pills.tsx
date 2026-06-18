'use client'

import { useState } from 'react'

const filters = ['All', 'Tomatoes', 'Maize', 'Yam', 'Vegetables', 'Onions', 'Pepper', 'Cassava']

export function FilterPills() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <div className="w-full bg-white border-b border-gray-100 sticky top-[73px] z-40">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full font-medium text-sm transition-all ${
                activeFilter === filter
                  ? 'bg-green-700 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
