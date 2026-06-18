import { Header } from '@/components/header'
import { FilterPills } from '@/components/filter-pills'
import { ProductCard } from '@/components/product-card'

const products = [
  {
    id: 1,
    crop: 'Tomatoes',
    cooperative: 'Minna Cooperative',
    location: 'Minna, Niger State',
    price: 15500,
    quantity: 20,
    unit: 'basket',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400',
    badge: { type: 'verified' as const, text: 'Cooperative Verified' },
  },
  {
    id: 2,
    crop: 'Maize',
    cooperative: 'Suleja Farmers Co-op',
    location: 'Suleja, Niger State',
    price: 8200,
    quantity: 50,
    unit: 'bag',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400',
  },
  {
    id: 3,
    crop: 'Potato',
    cooperative: 'Bida Agricultural Co-op',
    location: 'Bida, Niger State',
    price: 12000,
    quantity: 15,
    unit: 'bag',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400',
  },
  {
    id: 4,
    crop: 'Spinach',
    cooperative: 'Lapai Growers Co-op',
    location: 'Lapai, Niger State',
    price: 3500,
    quantity: 40,
    unit: 'bundle',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400',
  },
  {
    id: 5,
    crop: 'Onions',
    cooperative: 'Kontagora Co-op',
    location: 'Kontagora, Niger State',
    price: 9800,
    quantity: 30,
    unit: 'bag',
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400',
  },
  {
    id: 6,
    crop: 'Tomatoes',
    cooperative: 'Agaie Farmers Co-op',
    location: 'Agaie, Niger State',
    price: 14800,
    quantity: 8,
    unit: 'basket',
    image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400',
    badge: { type: 'low-stock' as const, text: 'Low Stock' },
  },
  {
    id: 7,
    crop: 'Pepper',
    cooperative: 'Chanchaga Farmers Co-op',
    location: 'Chanchaga, Niger State',
    price: 6500,
    quantity: 25,
    unit: 'bag',
    image: 'https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?w=400',
    badge: { type: 'verified' as const, text: 'Cooperative Verified' },
  },
  {
    id: 8,
    crop: 'Cassava',
    cooperative: 'Mokwa Agricultural Co-op',
    location: 'Mokwa, Niger State',
    price: 4200,
    quantity: 60,
    unit: 'bag',
    image: 'https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?w=400',
  },
  {
    id: 9,
    crop: 'Groundnut',
    cooperative: 'Borgu Farmers Co-op',
    location: 'Borgu, Niger State',
    price: 11000,
    quantity: 18,
    unit: 'bag',
    image: 'https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?w=400',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <FilterPills />

      {/* Hero Banner */}
      <div className="bg-green-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-green-900">Fresh From Nigerian Farms</h2>
            <p className="text-sm text-green-700 mt-1">Direct from verified cooperatives across Niger State — no middlemen, fair prices.</p>
          </div>
          <div className="flex gap-3">
            <a href="/login" className="px-5 py-2 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors text-sm">Sign In</a>
            <a href="/register" className="px-5 py-2 border-2 border-green-700 text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors text-sm">Register</a>
          </div>
        </div>
      </div>

      {/* Market Price Ticker */}
      <div className="bg-green-700 text-white text-sm py-2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex gap-8 items-center">
          <span className="font-semibold whitespace-nowrap">📈 Today's Prices:</span>
          <span>Maize ₦8,200/bag</span>
          <span>·</span>
          <span>Tomatoes ₦15,500/basket</span>
          <span>·</span>
          <span>Yam ₦12,000/crate</span>
          <span>·</span>
          <span>Onions ₦9,800/bag</span>
          <span>·</span>
          <span>Pepper ₦6,500/bag</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">Available Produce <span className="text-gray-400 font-normal text-base">({products.length} listings)</span></h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          <p className="font-bold text-gray-700 text-base mb-1">Okave</p>
          <p>Connecting Nigerian farmers with buyers · Verified Cooperatives · Fair Prices</p>
          <div className="flex justify-center gap-6 mt-4 text-green-700 font-medium">
            <a href="/login">Agent Portal</a>
            <a href="/login">Admin Dashboard</a>
            <a href="/register">Join as Buyer</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
