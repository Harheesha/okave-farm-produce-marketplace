'use client'

import { useState } from 'react'

const filters = ['All', 'Tomatoes', 'Maize', 'Yam', 'Vegetables', 'Onions']

export function FilterPills() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <div className="w-full bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-4 py-2 rounded-full font-medium text-sm transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
