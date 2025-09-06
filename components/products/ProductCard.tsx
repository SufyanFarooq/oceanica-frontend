'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '../../app/i18n/context'
import { getAllProducts } from '../../app/utils/productUtils'

interface ProductCardProps {
  product?: {
    id: string
    name: string
    category: string
    logo: string
    details: string
    form: string
    color: string
    href: string
    image?: string
  }
  index?: number
  isVisible?: boolean
  productType?: 'bioFertilizers' | 'specialityFertilizers'
  productId?: string
}

export default function ProductCard({ 
  product, 
  index = 0, 
  isVisible = true, 
  productType, 
  productId 
}: ProductCardProps) {
  const { locale } = useI18n()

  // Generate product data if not provided
  const productData = product || (() => {
    if (!productType) return null
    
    const products = getAllProducts(productType)
    const targetProduct = products.find(p => p.id === productId) || products[index % products.length]
    
    if (!targetProduct) return null
    
    const colors = productType === 'bioFertilizers' 
      ? ['green', 'blue', 'emerald', 'cyan']
      : ['red', 'orange', 'purple', 'yellow']
    
    return {
      id: targetProduct.id,
      name: locale === 'en' ? targetProduct.name : targetProduct.nameUr,
      category: productType === 'bioFertilizers' 
        ? (locale === 'en' ? 'BIO FERTILIZERS' : 'بائیو کھادیں')
        : (locale === 'en' ? 'SPECIALITY FERTILIZERS' : 'خصوصی کھادیں'),
      logo: productType === 'bioFertilizers' ? '🌱' : '🌾',
      details: locale === 'en' ? targetProduct.description : targetProduct.descriptionUr,
      form: productType === 'bioFertilizers' 
        ? (locale === 'en' ? 'Bio Fertilizer' : 'بائیو کھاد')
        : (locale === 'en' ? 'Speciality Fertilizer' : 'خصوصی کھاد'),
      color: colors[index % colors.length],
      href: `/products/search/crop-protection/${productType}/${targetProduct.id}`,
      image: targetProduct.image
    }
  })()

  if (!productData) return null

  const getGradientColors = (color: string) => {
    const gradientMap: Record<string, string> = {
      green: 'from-green-400 to-green-600',
      blue: 'from-blue-400 to-blue-600', 
      emerald: 'from-emerald-400 to-emerald-600',
      cyan: 'from-cyan-400 to-cyan-600',
      red: 'from-red-400 to-red-600',
      orange: 'from-orange-400 to-orange-600',
      purple: 'from-purple-400 to-purple-600',
      yellow: 'from-yellow-400 to-yellow-600'
    }
    return gradientMap[color] || 'from-gray-400 to-gray-600'
  }

  return (
    <Link
      href={productData.href}
      className={`group relative overflow-hidden rounded-3xl bg-[#1b233d] shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 hover:scale-105 ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-12 scale-95'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Product Image Section */}
      <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-3xl overflow-hidden">
        {/* Product Image */}
        {productData.image ? (
          <div className="relative w-full h-full">
            <Image
              src={productData.image}
              alt={productData.name}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-110"
            />
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-6xl opacity-30">{productData.logo}</div>
          </div>
        )}
        
        {/* Skewed Border Effect */}
        {/* <div className="absolute top-0 right-0 w-32 h-8 bg-[#1b233d] transform skew-x-[-40deg] origin-top-right">
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#1b233d] rounded-full"></div>
        </div> */}
        
        {/* Corner Cut */}
        <div className="absolute top-8 left-0 w-4 h-4 bg-[#1b233d] rounded-full"></div>
        
        {/* Stats Tags */}
        <div className="absolute top-1 right-3 flex gap-2">
          <div className="px-3 py-1 bg-white backdrop-blur-sm rounded-full text-[#1b233d]/90 text-xs font-semibold shadow-lg">
            100%
          </div>
          <div className="px-3 py-1 bg-white backdrop-blur-sm rounded-full text-[#1b233d]/90 text-xs font-semibold shadow-lg">
            Premium
          </div>
          <div className="px-3 py-1 bg-white backdrop-blur-sm rounded-full text-[#1b233d]/90 text-xs font-semibold shadow-lg">
            Fast
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-white text-lg font-bold text-center mb-4 tracking-wider">
          {productData.name.toUpperCase()}
        </h3>
        
        {/* Product Details */}
        <div className="bg-emerald-500/20 backdrop-blur-sm rounded-lg p-3 mb-4 border border-emerald-500/30">
          <p className="text-white text-sm font-semibold mb-1">{productData.name}</p>
          <p className="text-emerald-200 text-xs leading-relaxed">{productData.details}</p>
          <p className="text-emerald-300 text-xs mt-1 font-medium">{productData.form}</p>
        </div>
        
        {/* Learn More Button */}
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
            <span className="text-white font-semibold text-sm">
              {locale === 'en' ? 'Learn More' : 'مزید جانیں'}
            </span>
            <svg className="w-4 h-4 ml-2 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
