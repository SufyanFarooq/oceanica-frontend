'use client'

import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useCart } from '../contexts/CartContext'
import { useI18n } from '../i18n/context'
import { ArrowLeft, CreditCard, Smartphone, User, Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function CheckoutPage() {
  const { items, getTotalPrice } = useCart()
  const { locale, isRTL } = useI18n()
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card'>('cod')
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate order placement
    setIsOrderPlaced(true)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center mt-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {locale === 'en' ? 'No Items to Checkout' : 'چیک آؤٹ کے لیے کوئی چیز نہیں'}
          </h1>
          <Link
            href="/products/search/crop-protection/speciality-fertilizers"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {locale === 'en' ? 'Continue Shopping' : 'خریداری جاری رکھیں'}
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  if (isOrderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-32 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {locale === 'en' ? 'Order Placed Successfully!' : 'آرڈر کامیابی سے رکھا گیا!'}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {locale === 'en' 
                ? 'Thank you for your order. We will contact you soon for delivery details.'
                : 'آپ کے آرڈر کا شکریہ۔ ہم جلد ہی ڈیلیوری کی تفصیلات کے لیے آپ سے رابطہ کریں گے۔'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products/search/crop-protection/speciality-fertilizers"
                className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
              >
                {locale === 'en' ? 'Continue Shopping' : 'خریداری جاری رکھیں'}
              </Link>
              <Link
                href="/"
                className="bg-gray-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors"
              >
                {locale === 'en' ? 'Go to Home' : 'ہوم پر جائیں'}
              </Link>
            </div>
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
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            {locale === 'en' ? 'Back to Cart' : 'کارٹ پر واپس جائیں'}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {locale === 'en' ? 'Checkout' : 'چیک آؤٹ'}
          </h1>
          <p className="text-gray-600">
            {locale === 'en' 
              ? `Complete your order for ${items.length} ${items.length === 1 ? 'item' : 'items'}`
              : `${items.length} ${items.length === 1 ? 'چیز' : 'چیزیں'} کے لیے اپنا آرڈر مکمل کریں`
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  {locale === 'en' ? 'Personal Information' : 'ذاتی معلومات'}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {locale === 'en' ? 'First Name' : 'پہلا نام'} *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {locale === 'en' ? 'Last Name' : 'آخری نام'} *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {locale === 'en' ? 'Email' : 'ای میل'} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {locale === 'en' ? 'Phone Number' : 'فون نمبر'} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {locale === 'en' ? 'Delivery Address' : 'ڈیلیوری کا پتہ'}
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {locale === 'en' ? 'Complete Address' : 'مکمل پتہ'} *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {locale === 'en' ? 'City' : 'شہر'} *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {locale === 'en' ? 'Postal Code' : 'پوسٹل کوڈ'} *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  {locale === 'en' ? 'Payment Method' : 'ادائیگی کا طریقہ'}
                </h2>
                
                <div className="space-y-4">
                  <div 
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                      paymentMethod === 'cod' 
                        ? 'border-emerald-500 bg-emerald-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setPaymentMethod('cod')}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        paymentMethod === 'cod' 
                          ? 'border-emerald-500 bg-emerald-500' 
                          : 'border-gray-300'
                      }`}>
                        {paymentMethod === 'cod' && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                      <Smartphone className="w-6 h-6 text-gray-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {locale === 'en' ? 'Cash on Delivery (COD)' : 'ڈیلیوری پر نقد (COD)'}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {locale === 'en' 
                            ? 'Pay when your order is delivered'
                            : 'جب آپ کا آرڈر ڈیلیور ہو تو ادائیگی کریں'
                          }
                        </p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                      paymentMethod === 'card' 
                        ? 'border-emerald-500 bg-emerald-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        paymentMethod === 'card' 
                          ? 'border-emerald-500 bg-emerald-500' 
                          : 'border-gray-300'
                      }`}>
                        {paymentMethod === 'card' && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                      <CreditCard className="w-6 h-6 text-gray-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {locale === 'en' ? 'Credit/Debit Card' : 'کریڈٹ/ڈیبٹ کارڈ'}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {locale === 'en' 
                            ? 'Pay securely with your card'
                            : 'اپنے کارڈ سے محفوظ طریقے سے ادائیگی کریں'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Notes */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  {locale === 'en' ? 'Order Notes (Optional)' : 'آرڈر نوٹس (اختیاری)'}
                </h2>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder={locale === 'en' 
                    ? 'Any special instructions for delivery...' 
                    : 'ڈیلیوری کے لیے کوئی خاص ہدایات...'
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {locale === 'en' ? 'Order Summary' : 'آرڈر کا خلاصہ'}
              </h2>

              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={locale === 'en' ? item.name : item.nameUr}
                        width={48}
                        height={48}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm truncate">
                        {locale === 'en' ? item.name : item.nameUr}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {item.weight} • Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="font-semibold text-emerald-600">
                      PKR {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
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

              <button
                onClick={handleSubmit}
                className="w-full bg-emerald-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                {locale === 'en' ? 'Place Order' : 'آرڈر رکھیں'}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
