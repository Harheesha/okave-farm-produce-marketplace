'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavTabs() {
  const pathname = usePathname()

  const tabs = [
    { label: 'Marketplace', href: '/' },
    { label: 'Agent Portal', href: '/agent-portal' },
  ]

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`py-4 px-0 font-medium text-sm border-b-2 transition-colors ${
                  isActive
                    ? 'border-green-700 text-green-700'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
