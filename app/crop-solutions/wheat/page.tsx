'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Leaf, Shield, TrendingUp, Clock, Users, Play, Download, ChevronLeft, ChevronRight, Globe } from 'lucide-react'
import VideosPDF from '@/components/crops/Videos&PDF'
import ProductCard from '../../../components/products/ProductCard'

export default function WheatPage() {
  const [productsCarouselIndex, setProductsCarouselIndex] = useState(0)
  const [isProductsAutoPlaying, setIsProductsAutoPlaying] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    acre: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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

  // Product data for carousel - 2 slides of 4 products each
  const productSlides = [
    // Slide 1: 4 products
    [
      { type: 'bioFertilizers', index: 0 },
      { type: 'bioFertilizers', index: 1 },
      { type: 'bioFertilizers', index: 2 },
      { type: 'bioFertilizers', index: 3 }
    ],
    // Slide 2: 4 products
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
      
      {/* Hero Section - Product Promotion Banner */}
      <section className="relative py-32 overflow-hidden m-2" style={{borderRadius:"20px"}}>
        {/* Background Image */}
        <Image
          src="/assets/crops/wheat/hero-banner.jpg"
          alt="Wheat Field Background"
          fill
          className="object-cover"
          priority
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-white">
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Wheat Gold Better Program
              </h1>
              <p className="text-3xl font-bold text-amber-300 mb-8">
                Practical Solution for Grain Quality!
              </p>
              <p className="text-xl text-white/90 mb-8">
                Comprehensive wheat solutions for sustainable farming and premium grain production
              </p>
              <div className="flex items-center space-x-2 text-white/90">
                <Leaf className="w-6 h-6" />
                <span className="font-semibold text-lg">Oceanica Crop Science</span>
              </div>
            </div>
            
            {/* Right Side - Product Display */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Oceanica Crop Science</h3>
                <p className="text-white/90 text-lg mb-6">
                  Buy all products from Oceanica online from home
                </p>
                <Link href="/products/search/crop-protection" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center">
                  Oceanica Products
                  <span className="ml-2">🛒</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Crop Images in Pixel View */}
            <div className="space-y-6">
              {/* First Row - 1 Large Image */}
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/assets/crops/wheat/fresh-wheat-grains.jpg"
                  alt="Fresh Wheat Grains"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Second Row - 2 Smaller Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-40 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/crops/wheat/wheat-plant.jpg"
                    alt="Wheat Plant"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/crops/wheat/wheat-field.jpg"
                    alt="Wheat Field"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                <p className="text-lg text-gray-600">
                  To know more, fill in the form below:
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="acre" className="block text-sm font-semibold text-gray-700 mb-2">
                    Acre
                  </label>
                  <select
                    id="acre"
                    name="acre"
                    value={formData.acre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  >
                    <option value="">Select your number of acres</option>
                    <option value="1-5">1-5 acres</option>
                    <option value="6-10">6-10 acres</option>
                    <option value="11-20">11-20 acres</option>
                    <option value="20+">20+ acres</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  Submit <span className="ml-2">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Crop Program Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Wheat Crop Program</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Oceanica Crop Program for Wheat Productivity
            </p>
          </div>
          
          {/* Crop Program Image */}
          <div className="flex justify-center">
            <div className="relative max-w-6xl w-full">
              <Image
                src="/assets/crops/corn/Corn-crop-program.png"
                alt="Wheat Crop Program Guide"
                width={1200}
                height={800}
                className="rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl border-2 border-amber-200 w-full h-auto"
                priority
              />
              <div className="absolute bottom-3 lg:bottom-4 right-3 lg:right-4">
                <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 lg:px-6 py-2 lg:py-3 rounded-lg shadow-lg border border-amber-200">
                  <Download className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium text-sm lg:text-base">Download Program Guide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Related Products</h2>
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
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextProducts}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {productSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setProductsCarouselIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === productsCarouselIndex 
                      ? 'bg-emerald-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Product Image */}
              <div className="relative h-96 lg:h-auto bg-gradient-to-br from-green-100 to-blue-100 p-8 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/crops/lavoura-promotion.png"
                    alt="LAVOURA SULPHATE OF POTASH (SOP) Water Soluble Fertilizer"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Right Side - Product Information */}
              <div className="p-8 lg:p-12 bg-gradient-to-br from-green-600 to-green-700 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Boost Your Wheat Yields</h2>
                    <p className="text-lg opacity-90">Discover our comprehensive range of wheat protection products designed specifically for Pakistani growing conditions</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-sm opacity-90">Completely water-soluble, improving water efficiency</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-sm opacity-90">Increases cellulose in plant cells, strengthening cell walls</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-sm opacity-90">Enhances natural resistance against diseases and pests</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-sm opacity-90">Guarantees increase in yield and fruit quality</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                    <div className="text-sm font-semibold mb-2">Dosage per Acre</div>
                    <div className="text-sm opacity-90">Apply 10 to 25 kg of LAVOURA per acre</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/products/search/crop-protection" className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-center">
                      Explore Products
                    </Link>
                    <Link href="/contact-us" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200 text-center">
                      Get Expert Advice
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video and PDF Section */}
    <VideosPDF />

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-3 lg:mb-4">
            Ready to Transform Your Wheat Production?
          </h2>
          <p className="text-lg lg:text-xl text-primary-100 mb-6 lg:mb-8 max-w-3xl mx-auto">
            Contact our wheat specialists today for personalized recommendations 
            and expert guidance on maximizing your wheat production.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
            <Link href="/contact-us" className="bg-white text-primary-600 px-6 lg:px-8 py-2 lg:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-sm lg:text-base">
              Get Expert Advice
            </Link>
            <Link href="/products/search/crop-protection" className="border-2 border-white text-white px-6 lg:px-8 py-2 lg:py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200 text-sm lg:text-base">
              View Wheat Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
