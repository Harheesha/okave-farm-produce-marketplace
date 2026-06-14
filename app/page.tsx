import { Header } from '@/components/header'
import { FilterPills } from '@/components/filter-pills'
import { ProductCard } from '@/components/product-card'
import { NavTabs } from '@/components/nav-tabs'

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
    crop: 'Yam',
    cooperative: 'Bida Agricultural Co-op',
    location: 'Bida, Niger State',
    price: 12000,
    quantity: 15,
    unit: 'tuber crate',
    image: 'https://images.unsplash.com/photo-1630680294418-8a96db932783?w=400',
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
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavTabs />
      <Header />
      <FilterPills />

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
