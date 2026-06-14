'use client'

import Image from 'next/image'
import { ShoppingCart, Plus } from 'lucide-react'

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
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image Container */}
      <div className="relative w-full h-56 bg-gray-200">
        <Image
          src={image}
          alt={crop}
          fill
          className="object-cover"
          crossOrigin="anonymous"
        />
        
        {/* Badge */}
        {badge && (
          <div
            className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white ${
              badge.type === 'verified' ? 'bg-green-600' : 'bg-accent'
            }`}
          >
            {badge.text}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Crop Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-1">{crop}</h3>

        {/* Cooperative */}
        <p className="text-sm text-gray-600 mb-3">{cooperative}</p>

        {/* Location */}
        <p className="text-xs text-gray-500 mb-4">{location}</p>

        {/* Price and Availability */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-2xl font-bold text-primary">
              ₦{price.toLocaleString('en-NG')}
            </p>
            <p className="text-xs text-gray-600">
              per {unit}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-900">
              {quantity} {unit}
              {quantity > 1 ? 's' : ''}
            </p>
            <p className="text-xs text-gray-500">available</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            className="flex-1 bg-primary text-white font-semibold py-2 rounded-lg hover:bg-green-900 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            Order Now
          </button>
          <button
            className="flex-1 border-2 border-primary text-primary font-semibold py-2 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
          >
            <Plus size={18} />
            Weekly Plan
          </button>
        </div>
      </div>
    </div>
  )
}
