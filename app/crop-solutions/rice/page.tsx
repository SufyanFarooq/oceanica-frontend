'use client'

import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Leaf, Shield, TrendingUp, Clock, Users, Play, Download, ChevronLeft, ChevronRight, Globe } from 'lucide-react'

export default function RicePage() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0)
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

  const relatedProducts = [
    {
      id: 'ever-amino-l',
      name: 'Ever Amino L',
      category: 'BIO FERTILIZERS',
      logo: '🌱',
      details: 'Amino Acid Based Liquid Fertilizer',
      form: 'Liquid Formulation',
      color: 'green'
    },
    {
      id: 'ever-boron',
      name: 'Ever Boron',
      category: 'BIO FERTILIZERS',
      logo: '🌿',
      details: 'Boron Enriched Bio Fertilizer',
      form: 'Liquid Formulation',
      color: 'blue'
    },
    {
      id: 'ever-iron',
      name: 'Ever Iron',
      category: 'BIO FERTILIZERS',
      logo: '🛡️',
      details: 'Iron Fortified Bio Solution',
      form: 'Liquid Formulation',
      color: 'green'
    },
    {
      id: 'ever-super-root',
      name: 'Ever Super Root',
      category: 'BIO FERTILIZERS',
      logo: '💧',
      details: 'Root Development Enhancer',
      form: 'Liquid Formulation',
      color: 'blue'
    }
  ]

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % relatedProducts.length)
  }

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + relatedProducts.length) % relatedProducts.length)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Product Promotion Banner */}
      <section className="relative py-32 overflow-hidden m-2" style={{borderRadius:"20px"}}>
        {/* Background Image */}
        <Image
          src="/assets/crops/rice/hero-banner.jpg"
          alt="Rice Field Background"
          fill
          className="object-cover"
          priority
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <Link href="/crop-solutions" className="inline-flex items-center text-white hover:text-gray-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Crop Solutions
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-white">
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Rice Gold Better Program
              </h1>
              <p className="text-3xl font-bold text-green-300 mb-8">
                Practical Solution for Grain Quality!
              </p>
              <p className="text-xl text-white/90 mb-8">
                Comprehensive rice solutions for sustainable farming and premium grain production
              </p>
              <div className="flex items-center space-x-2 text-white/90">
                <Leaf className="w-6 h-6" />
                <span className="font-semibold text-lg">Oceanica Crop Science</span>
              </div>
            </div>
            
            {/* Right Side - Product Display */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Oceanica Crop Science</h3>
                <p className="text-white/90 text-lg mb-6">
                  Buy all products from Oceanica online from home
                </p>
                <Link href="/products/search/crop-protection" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center">
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
                  src="/assets/crops/rice/fresh-rice-grain.jpg"
                  alt="Fresh Rice Grains"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Second Row - 2 Smaller Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-40 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/crops/rice/rice-plant.jpg"
                    alt="Rice Plant"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/crops/rice/rice-field.jpg"
                    alt="Rice Field"
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Rice Crop Program</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oceanica Crop Program for Rice Productivity
            </p>
          </div>
          
          {/* Crop Program Image */}
          <div className="flex justify-center">
            <div className="relative max-w-6xl">
              <Image
                src="/assets/crops/corn/Corn-crop-program.png"
                alt="Rice Crop Program Guide"
                width={1200}
                height={800}
                className="rounded-2xl shadow-2xl border-2 border-green-200"
                priority
              />
              <div className="absolute bottom-4 right-4">
                <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg border border-green-200">
                  <Download className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">Download Program Guide</span>
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
          <div className="relative">
            {/* Mobile: Single column, Desktop: Grid */}
            <div className="block lg:hidden">
              {/* Mobile Single Product View */}
              <div className="max-w-sm mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{relatedProducts[currentProductIndex].logo}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{relatedProducts[currentProductIndex].name}</h3>
                    <p className="text-sm text-gray-600 uppercase tracking-wide">{relatedProducts[currentProductIndex].category}</p>
                  </div>
                  <div className="text-center mb-4">
                    <p className="text-sm font-semibold text-gray-900">{relatedProducts[currentProductIndex].name}</p>
                  </div>
                  <div className="text-xs text-gray-600 mb-4 text-center">
                    <p>{relatedProducts[currentProductIndex].details}</p>
                    <p>{relatedProducts[currentProductIndex].form}</p>
                  </div>
                  <div className="text-center">
                    <Link href={`/products/search/crop-protection/bio-fertilizers/${relatedProducts[currentProductIndex].id}`} className="text-gray-700 hover:text-primary-600 font-medium text-sm">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Mobile Navigation */}
              <div className="flex justify-center items-center mt-6 space-x-4">
                <button
                  onClick={prevProduct}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                
                {/* Mobile Progress Dots */}
                <div className="flex space-x-2">
                  {relatedProducts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProductIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentProductIndex ? 'bg-primary-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextProduct}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
            
            {/* Desktop Grid View */}
            <div className="hidden lg:flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
                {relatedProducts.map((product, index) => (
                  <div key={product.id} className={`bg-white rounded-xl p-6 shadow-lg border-l-4 border-${product.color}-500 hover:shadow-xl transition-shadow duration-300 ${index === currentProductIndex ? 'ring-2 ring-primary-500' : ''}`}>
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-3">{product.logo}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-600 uppercase tracking-wide">{product.category}</p>
                    </div>
                    <div className="text-center mb-4">
                      <p className="text-sm font-semibold text-gray-900">{product.name}</p>
                    </div>
                    <div className="text-xs text-gray-600 mb-4 text-center">
                      <p>{product.details}</p>
                      <p>{product.form}</p>
                    </div>
                    <div className="text-center">
                      <Link href={`/products/search/crop-protection/bio-fertilizers/${product.id}`} className="text-gray-700 hover:text-primary-600 font-medium text-sm">
                        Learn more →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Desktop Navigation Arrows */}
            <div className="hidden lg:block">
              <button
                onClick={prevProduct}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextProduct}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          
          {/* Desktop Progress Bar */}
          <div className="hidden lg:flex justify-center mt-8">
            <div className="w-64 h-1 bg-gray-200 rounded-full">
              <div 
                className="h-1 bg-primary-500 rounded-full transition-all duration-300"
                style={{ width: `${((currentProductIndex + 1) / relatedProducts.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-12 text-center shadow-2xl">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Leaf className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Boost Your Rice Quality with Oceanica
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive range of rice protection products designed specifically for Pakistani growing conditions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products/search/crop-protection" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
                Explore Products
              </Link>
              <Link href="/contact-us" className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200">
                Get Expert Advice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video and PDF Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Related Videos */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Videos</h3>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64 bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-10 h-10 text-primary-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                    Oceanica
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Oceanica Pakistan - Rice Solutions
                  </h4>
                  <p className="text-gray-600">Learn about our comprehensive rice protection solutions</p>
                </div>
              </div>
            </div>
            
            {/* Links and Downloads */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Links and Downloads</h3>
              <div className="bg-green-50 rounded-xl p-8 border border-green-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Download Resources</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <Download className="w-5 h-5 text-gray-600" />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Rice Crop Program</p>
                      <p className="text-sm text-gray-600">(2.7 MB)</p>
                    </div>
                    <Download className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <Download className="w-5 h-5 text-gray-600" />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Rice Growing Guide</p>
                      <p className="text-sm text-gray-600">(2.0 MB)</p>
                    </div>
                    <Download className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Rice Production?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Contact our rice specialists today for personalized recommendations 
            and expert guidance on maximizing your rice production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get Expert Advice
            </Link>
            <Link href="/products/search/crop-protection" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
              View Rice Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
