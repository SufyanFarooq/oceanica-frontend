'use client'

import React, { useState } from 'react'
import { ShoppingCart, Minus, Plus } from 'lucide-react'
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

interface AddToCartProps {
  product: ProductInfo
  mockInStock: boolean
  locale: 'en' | 'ur'
}

export default function AddToCartSection({ product, mockInStock, locale }: AddToCartProps) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

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
    <div className="mb-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-gray-200 rounded-xl">
          <button 
            className="p-3 hover:bg-gray-50 transition-colors"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="px-4 py-3 font-semibold">{quantity}</span>
          <button 
            className="p-3 hover:bg-gray-50 transition-colors"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        
        <button 
          className={`flex-1 flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-colors ${
            mockInStock
              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!mockInStock}
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-5 w-5" />
          {locale === 'en' ? 'Add to Cart' : 'کارٹ میں شامل کریں'}
        </button>
      </div>
    </div>
  )
}
