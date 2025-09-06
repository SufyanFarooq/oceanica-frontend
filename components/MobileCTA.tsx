'use client'

import React from 'react'
import Link from 'next/link'
import { Heart, ShoppingCart, Phone } from 'lucide-react'
import { useCart } from '../app/contexts/CartContext'

interface ProductInfo {
  id: string
  name: string
  nameUr: string
  price: number
  weight: string
  image: string
  category: 'specialityFertilizers' | 'bioFertilizers'
}

interface MobileCTAProps {
  product: ProductInfo
  mockInStock: boolean
  locale: 'en' | 'ur'
}

export default function MobileCTA({ product, mockInStock, locale }: MobileCTAProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    if (mockInStock) {
      addToCart({
        id: product.id,
        name: product.name,
        nameUr: product.nameUr,
        price: product.price,
        weight: product.weight,
        image: product.image,
        category: product.category
      })
      alert(locale === 'en' ? 'Added to cart!' : 'کارٹ میں شامل کر دیا گیا!')
    }
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-emerald-100 bg-white/95 p-3 backdrop-blur md:hidden">
      <button className="flex items-center justify-center gap-2 rounded-xl border border-emerald-200 px-4 py-3 text-sm font-semibold text-emerald-700">
        <Heart className="h-4 w-4" />
        Wishlist
      </button>
      <button 
        className={`flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
          mockInStock
            ? 'bg-emerald-600 text-white'
            : 'bg-gray-300 text-gray-500'
        }`}
        disabled={!mockInStock}
        onClick={handleAddToCart}
      >
        <ShoppingCart className="h-4 w-4" />
        {locale === 'en' ? 'Add to Cart' : 'کارٹ میں شامل کریں'}
      </button>
      <Link
        href="/contact-us"
        className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white"
      >
        <Phone className="h-4 w-4" />
        {locale === 'en' ? 'Contact' : 'رابطہ'}
      </Link>
    </div>
  )
}
