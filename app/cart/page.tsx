'use client'

import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useCart } from '../contexts/CartContext'
import { useI18n } from '../i18n/context'
import { ShoppingCart, Minus, Plus, Trash2, ArrowLeft, CreditCard } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart()
  const { locale, isRTL } = useI18n()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
        <Navbar />
        
        <div className="max-w-4xl mx-auto px-4 py-32">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShoppingCart className="w-16 h-16 text-gray-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {locale === 'en' ? 'Your Cart is Empty' : 'آپ کا کارٹ خالی ہے'}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {locale === 'en' 
                ? 'Looks like you haven\'t added any items to your cart yet.'
                : 'لگتا ہے آپ نے ابھی تک اپنے کارٹ میں کوئی چیز شامل نہیں کی۔'
              }
            </p>
            <Link
              href="/products/search/crop-protection/speciality-fertilizers"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              {locale === 'en' ? 'Continue Shopping' : 'خریداری جاری رکھیں'}
            </Link>
          </div>
        </div>
        
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-32">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {locale === 'en' ? 'Shopping Cart' : 'خریداری کا کارٹ'}
          </h1>
          <p className="text-gray-600">
            {locale === 'en' 
              ? `${items.length} ${items.length === 1 ? 'item' : 'items'} in your cart`
              : `آپ کے کارٹ میں ${items.length} ${items.length === 1 ? 'چیز' : 'چیزیں'}`
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {locale === 'en' ? 'Cart Items' : 'کارٹ کی چیزیں'}
                </h2>
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1"
                >
                  <Trash2 className="w-4 h-4" />
                  {locale === 'en' ? 'Clear All' : 'سب صاف کریں'}
                </button>
              </div>

              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl">
                    {/* Product Image */}
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={locale === 'en' ? item.name : item.nameUr}
                        width={80}
                        height={80}
                        className="object-contain w-full h-full"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 truncate">
                        {locale === 'en' ? item.name : item.nameUr}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.weight} • {locale === 'en' ? item.category : (item.category === 'specialityFertilizers' ? 'خصوصی کھادیں' : 'بائیو کھادیں')}
                      </p>
                      <p className="text-lg font-bold text-emerald-600">
                        PKR {item.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 bg-gray-100 rounded-lg font-semibold min-w-[3rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {locale === 'en' ? 'Order Summary' : 'آرڈر کا خلاصہ'}
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {locale === 'en' ? 'Subtotal' : 'ذیلی کل'}
                  </span>
                  <span className="font-semibold">
                    PKR {getTotalPrice().toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {locale === 'en' ? 'Shipping' : 'شپنگ'}
                  </span>
                  <span className="font-semibold text-green-600">
                    {locale === 'en' ? 'Free' : 'مفت'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {locale === 'en' ? 'Tax' : 'ٹیکس'}
                  </span>
                  <span className="font-semibold">
                    PKR {(getTotalPrice() * 0.15).toLocaleString()}
                  </span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-lg font-bold">
                  <span>
                    {locale === 'en' ? 'Total' : 'کل'}
                  </span>
                  <span className="text-emerald-600">
                    PKR {(getTotalPrice() * 1.15).toLocaleString()}
                  </span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full bg-emerald-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 mb-4"
              >
                <CreditCard className="w-5 h-5" />
                {locale === 'en' ? 'Proceed to Checkout' : 'چیک آؤٹ پر جائیں'}
              </Link>

              <Link
                href="/products/search/crop-protection/speciality-fertilizers"
                className="w-full text-center text-gray-600 hover:text-gray-800 py-2 block transition-colors"
              >
                {locale === 'en' ? 'Continue Shopping' : 'خریداری جاری رکھیں'}
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
