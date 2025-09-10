'use client'

import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import Link from 'next/link'
import { ArrowLeft, Leaf, Shield, TrendingUp, Clock, Users, Search } from 'lucide-react'
import ProductCard from '../../../../components/products/ProductCard'
import { getAllProducts } from '../../../utils/productUtils'
import { useI18n } from '../../../i18n/context'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function CropProtectionProducts() {
  const { locale } = useI18n()
  const [productsCarouselIndex, setProductsCarouselIndex] = useState(0)
  const [isProductsAutoPlaying, setIsProductsAutoPlaying] = useState(true)
  const [heroImageIndex, setHeroImageIndex] = useState(0)

  // Removed hero images carousel - using static image

  // Auto-play for products carousel
  useEffect(() => {
    if (!isProductsAutoPlaying) return

    const interval = setInterval(() => {
      setProductsCarouselIndex((prev) => (prev + 1) % 2) // 2 slides (4 products each)
    }, 4000)

    return () => clearInterval(interval)
  }, [isProductsAutoPlaying])

  const nextProducts = () => {
    setProductsCarouselIndex((prev) => (prev + 1) % 2)
  }

  const prevProducts = () => {
    setProductsCarouselIndex((prev) => (prev - 1 + 2) % 2)
  }

  // Static hero image
  const heroImage = '/assets/products/promotion/oceanica_4.jpg'

  // Get real products data
  const bioFertilizers = getAllProducts('bioFertilizers').slice(0, 4)
  const specialityFertilizers = getAllProducts('specialityFertilizers').slice(0, 4)

  // Product data for carousel - 2 slides of 4 products each
  const productSlides = [
    // Slide 1: 4 Bio Fertilizers
    [
      { type: 'bioFertilizers', index: 0 },
      { type: 'bioFertilizers', index: 1 },
      { type: 'bioFertilizers', index: 2 },
      { type: 'bioFertilizers', index: 3 }
    ],
    // Slide 2: 4 Speciality Fertilizers
    [
      { type: 'specialityFertilizers', index: 0 },
      { type: 'specialityFertilizers', index: 1 },
      { type: 'specialityFertilizers', index: 2 },
      { type: 'specialityFertilizers', index: 3 }
    ]
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-white h-[100vh] m-2 overflow-hidden rounded-2xl mt-20">
        {/* Blurred Crop Background */}
        <div className="absolute inset-0 top-0">
          <Image
            src="/assets/landing/hero-farming.jpg"
            alt="Crop Background"
            fill
            className="object-cover blur-sm opacity-30"
            priority
            quality={80}
          />
        </div>

        {/* Main Static Background Image */}
        <div className="absolute inset-0 top-0 flex items-center justify-center">
          <Image
            src={heroImage}
            alt="Oceanica Crop Science Background"
            width={1100}
            height={800}
            className="object-cover mx-auto block relative z-10"
            priority
            quality={100}
          />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="mb-6 md:mb-8">
              {/* <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 shadow-lg">
                <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div> */}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 drop-shadow-sm">
              {/* {locale === 'en' ? 'Crop Protection Products' : 'فصل کی حفاظت کی مصنوعات'} */}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed">
              {/* {locale === 'en'
                ? 'Premium agricultural solutions designed for Pakistani farmers. Protect your crops with our proven product range.'
                : 'پاکستانی کسانوں کے لیے ڈیزائن کیے گئے پریمیم زرعی حل۔ ہماری ثابت شدہ مصنوعات کی رینج کے ساتھ اپنی فصلوں کی حفاظت کریں۔'
              } */}
            </p>
            {/* <div className="flex items-center justify-center space-x-2 text-primary-600 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full inline-flex shadow-lg">
              <Shield className="w-5 h-5 md:w-6 md:h-6" />
              <span className="font-semibold text-sm md:text-base">Oceanica Crop Science</span>
            </div> */}
          </div>
        </div>

        {/* Removed image indicators - using static image */}
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full mb-6 shadow-lg">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {locale === 'en' ? 'Product Categories' : 'مصنوعات کی اقسام'}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {locale === 'en'
                ? 'Explore our comprehensive range of crop protection solutions designed for every stage of crop development.'
                : 'فصل کی ترقی کے ہر مرحلے کے لیے ڈیزائن کیے گئے فصل کی حفاظت کے حل کی ہماری جامع رینج کو دریافت کریں۔'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              href="/products/search/crop-protection/bio-fertilizers"
              className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-green-100 hover:border-green-300 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
              </div>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🌱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {locale === 'en' ? 'Bio Fertilizers' : 'بائیو کھادیں'}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {locale === 'en'
                    ? 'Natural and organic fertilizer solutions for sustainable farming'
                    : 'پائیدار کاشتکاری کے لیے قدرتی اور نامیاتی کھاد کے حل'
                  }
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{locale === 'en' ? 'Natural ingredients' : 'قدرتی اجزاء'}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{locale === 'en' ? 'Soil health improvement' : 'مٹی کی صحت میں بہتری'}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{locale === 'en' ? 'Sustainable farming' : 'پائیدار کاشتکاری'}</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/products/search/crop-protection/speciality-fertilizers"
              className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-blue-100 hover:border-blue-300 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232563eb' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
              </div>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🌾</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {locale === 'en' ? 'Speciality Fertilizers' : 'خصوصی کھادیں'}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {locale === 'en'
                    ? 'Specialized nutrient solutions for specific crops and conditions'
                    : 'مخصوص فصلوں اور حالات کے لیے خصوصی غذائی اجزاء کے حل'
                  }
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{locale === 'en' ? 'Crop-specific formulas' : 'فصل مخصوص فارمولے'}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{locale === 'en' ? 'High efficiency' : 'اعلی کارکردگی'}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{locale === 'en' ? 'Yield optimization' : 'پیداوار کی بہتری'}</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/products/search/crop-protection/herbicides"
              className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-purple-100 hover:border-purple-300 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238b5cf6' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
              </div>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🌿</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {locale === 'en' ? 'Herbicides' : 'جڑی بوٹی مار'}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {locale === 'en'
                    ? 'Effective weed control solutions for clean crop fields'
                    : 'صاف فصل کے کھیتوں کے لیے موثر جڑی بوٹی کنٹرول کے حل'
                  }
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>{locale === 'en' ? 'Broad-spectrum control' : 'وسیع کنٹرول'}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>{locale === 'en' ? 'Crop safety' : 'فصل کی حفاظت'}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>{locale === 'en' ? 'Residual activity' : 'باقی سرگرمی'}</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/products/search/crop-protection/insecticides"
              className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-yellow-100 hover:border-yellow-300 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23eab308' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
              </div>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🦗</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {locale === 'en' ? 'Insecticides' : 'کیڑے مار'}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {locale === 'en'
                    ? 'Targeted pest control solutions for healthy crops'
                    : 'صحت مند فصلوں کے لیے ہدف شدہ کیڑے کنٹرول کے حل'
                  }
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>{locale === 'en' ? 'Pest-specific targeting' : 'کیڑے مخصوص ہدف'}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>{locale === 'en' ? 'Long-lasting protection' : 'دیرپا حفاظت'}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>{locale === 'en' ? 'Minimal resistance risk' : 'کم مزاحمت کا خطرہ'}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {locale === 'en' ? 'Featured Products' : 'نمایاں مصنوعات'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {locale === 'en'
                ? 'Our most popular and effective crop protection solutions trusted by farmers across Pakistan.'
                : 'پاکستان بھر کے کسانوں کی جانب سے قابل اعتماد ہماری سب سے مقبول اور موثر فصل کی حفاظت کے حل۔'
              }
            </p>
          </div>

          {/* Products Carousel */}
          <div
            className="relative overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8"
            onMouseEnter={() => setIsProductsAutoPlaying(false)}
            onMouseLeave={() => setIsProductsAutoPlaying(true)}
          >
            {/* Carousel Container */}
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${productsCarouselIndex * 100}%)` }}>
              {productSlides.map((slide, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
                    {slide.map((product, productIndex) => (
                      <ProductCard
                        key={`${slideIndex}-${productIndex}`}
                        productType={product.type as 'bioFertilizers' | 'specialityFertilizers'}
                        index={product.index}
                        isVisible={true}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevProducts}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextProducts}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <ArrowLeft className="w-6 h-6 rotate-180" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {productSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setProductsCarouselIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === productsCarouselIndex
                    ? 'bg-emerald-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {locale === 'en' ? 'Why Choose Oceanica Products?' : 'اوشینیکا کی مصنوعات کیوں منتخب کریں؟'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {locale === 'en' ? 'Proven Results' : 'ثابت شدہ نتائج'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Field-tested products that consistently deliver results'
                  : 'میدان میں آزمودہ مصنوعات جو مسلسل نتائج فراہم کرتی ہیں'
                }
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {locale === 'en' ? 'Expert Support' : 'ماہرین کی مدد'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Technical support and application guidance'
                  : 'تکنیکی مدد اور استعمال کی رہنمائی'
                }
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {locale === 'en' ? 'Local Expertise' : 'مقامی مہارت'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Understanding of Pakistan\'s farming conditions'
                  : 'پاکستان کی کاشتکاری کی حالتوں کی سمجھ'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            {locale === 'en' ? 'Need Product Recommendations?' : 'مصنوعات کی سفارشات چاہیے؟'}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            {locale === 'en'
              ? 'Our product specialists are here to help you choose the right solutions for your specific crop and growing conditions.'
              : 'ہمارے مصنوعات کے ماہرین آپ کی مخصوص فصل اور کاشتکاری کی حالتوں کے لیے صحیح حل منتخب کرنے میں مدد کے لیے یہاں موجود ہیں۔'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              {locale === 'en' ? 'Get Expert Advice' : 'ماہرین کی مشاورت حاصل کریں'}
            </Link>
            <Link href="/crop-solutions" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
              {locale === 'en' ? 'View Crop Solutions' : 'فصل کے حل دیکھیں'}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
