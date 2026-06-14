'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function AgentPortal() {
  const [formData, setFormData] = useState({
    farmerName: 'Hauwa Abdullahi',
    cropType: 'Tomatoes',
    quantity: '4 baskets / 80kg',
    harvestDate: '14 June 2026',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">Okave Agent Portal</h1>
          <p className="text-sm text-gray-500">Ibrahim Musa — Suleja</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Form Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Farmer Name
            </label>
            <input
              type="text"
              name="farmerName"
              value={formData.farmerName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Crop Type
            </label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                name="cropType"
                value={formData.cropType}
                onChange={handleInputChange}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none"
              />
              <div className="w-12 h-12 relative flex-shrink-0 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=80"
                  alt="Tomatoes"
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Harvest Date
            </label>
            <input
              type="text"
              name="harvestDate"
              value={formData.harvestDate}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Live Market Rates Card */}
        <div className="mt-8 p-6 border-2 border-green-700 bg-green-50 rounded-lg">
          <h2 className="text-lg font-bold text-gray-900 mb-6">
            Live Market Rates — Tomatoes
          </h2>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-start">
              <p className="text-gray-700">Abuja (Garki Market)</p>
              <p className="font-medium text-gray-900">₦16,500 – ₦18,000 per basket</p>
            </div>
            <div className="flex justify-between items-start">
              <p className="text-gray-700">Lagos (Mile 12)</p>
              <p className="font-medium text-gray-900">₦15,000 – ₦17,500 per basket</p>
            </div>
            <div className="flex justify-between items-start">
              <p className="text-gray-700 font-medium">Recommended Price</p>
              <p className="text-lg font-bold text-green-700">₦15,500 per basket</p>
            </div>
          </div>

          <p className="text-xs text-gray-500">
            Source: AFEX commodity data + NBS Farm Gate Price Survey. Updated daily.
          </p>
        </div>

        {/* Warning Bar */}
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
          <span className="text-xl flex-shrink-0">⚠️</span>
          <p className="text-sm text-gray-800">
            <span className="font-medium">Typical middleman offer in your area:</span> ₦6,000 – ₦8,000 per basket
          </p>
        </div>

        {/* Create Listing Button */}
        <button className="w-full mt-8 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg transition-colors">
          Create Listing
        </button>
      </div>
    </main>
  )
}
