'use client'

import Image from 'next/image'
import { ShoppingCart, Plus, CheckCircle } from 'lucide-react'
import { useState } from 'react'

interface Badge {
  type: 'verified' | 'low-stock'
  text: string
}

interface ProductCardProps {
  id: number
  crop: string
  cooperative: string
  location: string
  price: number
  quantity: number
  unit: string
  image: string
  badge?: Badge
}

export function ProductCard({
  crop,
  cooperative,
  location,
  price,
  quantity,
  unit,
  image,
  badge,
}: ProductCardProps) {
  const [added, setAdded] = useState(false)
  const [planned, setPlanned] = useState(false)
  const [imgError, setImgError] = useState(false)

  const handleOrder = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleWeekly = () => {
    setPlanned(true)
    setTimeout(() => setPlanned(false), 2000)
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
      {/* Image Container */}
      <div className="relative w-full h-56 bg-gray-100">
        {!imgError ? (
          <Image
            src={image}
            alt={crop}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-green-50 text-green-700 text-5xl">
            🌿
          </div>
        )}

        {/* Badge */}
        {badge && (
          <div
            className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white shadow ${
              badge.type === 'verified' ? 'bg-green-600' : 'bg-orange-500'
            }`}
          >
            {badge.text}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{crop}</h3>
        <p className="text-sm text-green-700 font-medium mb-1">{cooperative}</p>
        <p className="text-xs text-gray-500 mb-4 flex items-center gap-1">
          <span>📍</span> {location}
        </p>

        {/* Price and Availability */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-2xl font-bold text-green-700">
              ₦{price.toLocaleString('en-NG')}
            </p>
            <p className="text-xs text-gray-500">per {unit}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-900">
              {quantity} {unit}{quantity > 1 ? 's' : ''}
            </p>
            <p className="text-xs text-gray-500">available</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleOrder}
            className={`flex-1 font-semibold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 text-sm ${
              added
                ? 'bg-green-100 text-green-700 border-2 border-green-500'
                : 'bg-green-700 text-white hover:bg-green-800 active:scale-95'
            }`}
          >
            {added ? <CheckCircle size={16} /> : <ShoppingCart size={16} />}
            {added ? 'Added!' : 'Order Now'}
          </button>
          <button
            onClick={handleWeekly}
            className={`flex-1 font-semibold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 text-sm border-2 ${
              planned
                ? 'bg-green-100 text-green-700 border-green-500'
                : 'border-green-700 text-green-700 hover:bg-green-50 active:scale-95'
            }`}
          >
            <Plus size={16} />
            {planned ? 'Planned!' : 'Weekly Plan'}
          </button>
        </div>
      </div>
    </div>
  )
}
