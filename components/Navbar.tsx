'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Home, Globe, Search, ShoppingCart, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [cropsOpen, setCropsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [sustainabilityOpen, setSustainabilityOpen] = useState(false)

  const crops = [
    { name: 'Corn', href: '/crop-solutions/corn' },
    { name: 'Potato', href: '/crop-solutions/potato' },
    { name: 'Cotton', href: '/crop-solutions/cotton' },
    { name: 'Rice', href: '/crop-solutions/rice' },
    { name: 'Sugarcane', href: '/crop-solutions/sugarcane' },
    { name: 'Wheat', href: '/crop-solutions/wheat' },
  ]

  const products = [
    { name: 'Herbicide', href: '/products/search/crop-protection/type/herbicide-1156' },
    { name: 'Insecticide', href: '/products/search/crop-protection/type/insecticide-1166' },
    { name: 'Fungicide', href: '/products/search/crop-protection/type/fungicide-1161' },
    { name: 'Seedcare', href: '/products/search/crop-protection/type/seedcare-1176' },
    { name: 'Crop Enhancement', href: '/products/search/crop-protection' },
  ]

  const sustainability = [
    { name: 'Stewardship', href: '/stewardship' },
    { name: 'Good Growth Plan', href: '/growth-plan' },
  ]

  return (
    <div className="bg-white shadow-sm">
      {/* Top Header Bar */}
      <div className="bg-gray-100 py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700 font-medium">OCEANICA GLOBAL</span>
            </div>
            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">WHAT ARE YOU LOOKING FOR?</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">SHOP NOW</span>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-secondary-700">oceanica.</div>
              <div className="text-xs text-gray-500">Pakistan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-8 py-4">
          <Link href="/" className="nav-link">
            <Home className="w-5 h-5" />
          </Link>
          
          <div className="relative">
            <button
              className="nav-link flex items-center space-x-1"
              onMouseEnter={() => setCropsOpen(true)}
              onMouseLeave={() => setCropsOpen(false)}
            >
              <span>Crops</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {cropsOpen && (
              <div
                className="absolute top-full left-0 bg-white shadow-lg border rounded-lg py-4 px-6 z-50 min-w-[400px]"
                onMouseEnter={() => setCropsOpen(true)}
                onMouseLeave={() => setCropsOpen(false)}
              >
                <div className="grid grid-cols-3 gap-4">
                  {crops.map((crop) => (
                    <Link
                      key={crop.name}
                      href={crop.href}
                      className="text-gray-800 font-semibold hover:text-primary-600 transition-colors duration-200"
                    >
                      {crop.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="nav-link flex items-center space-x-1"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <span>Products</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {productsOpen && (
              <div
                className="absolute top-full left-0 bg-white shadow-lg border rounded-lg py-4 px-6 z-50 min-w-[400px]"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <div className="grid grid-cols-2 gap-4">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="text-gray-800 font-semibold hover:text-primary-600 transition-colors duration-200"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/naya-savera" className="nav-link">
            Naya Savera
          </Link>

          <div className="relative">
            <button
              className="nav-link flex items-center space-x-1"
              onMouseEnter={() => setSustainabilityOpen(true)}
              onMouseLeave={() => setSustainabilityOpen(false)}
            >
              <span>Sustainability</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {sustainabilityOpen && (
              <div
                className="absolute top-full left-0 bg-white shadow-lg border rounded-lg py-4 px-6 z-50 min-w-[200px]"
                onMouseEnter={() => setSustainabilityOpen(true)}
                onMouseLeave={() => setSustainabilityOpen(false)}
              >
                <div className="space-y-2">
                  {sustainability.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-gray-800 font-semibold hover:text-primary-600 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/about-us" className="nav-link">
            About US
          </Link>

          <Link href="/contact-us" className="nav-link">
            Contact US
          </Link>

          <Link href="/careers" className="nav-link">
            Careers
          </Link>
        </div>
      </nav>
    </div>
  )
}
