'use client'

import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Leaf, Shield, TrendingUp, Clock, Users, Play, Download, ChevronLeft, ChevronRight, Globe } from 'lucide-react'

export default function WheatPage() {
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
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
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
          <div className="relative">
            <div className="flex justify-center">
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
            
            {/* Navigation Arrows */}
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
          
          {/* Progress Bar */}
          <div className="flex justify-center mt-8">
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
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-center shadow-2xl">
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8">
              <Leaf className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
              Boost Your Wheat Quality with Oceanica
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 max-w-3xl mx-auto">
              Discover our comprehensive range of wheat protection products designed specifically for Pakistani growing conditions
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <Link href="/products/search/crop-protection" className="bg-primary-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 text-sm lg:text-base">
                Explore Products
              </Link>
              <Link href="/contact-us" className="border-2 border-primary-600 text-primary-600 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                Get Expert Advice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video and PDF Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Related Videos */}
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Related Videos</h3>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48 lg:h-64 bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 lg:w-10 lg:h-10 text-primary-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-3 lg:top-4 left-3 lg:left-4 bg-black/70 text-white px-2 lg:px-3 py-1 rounded text-xs lg:text-sm">
                    Oceanica
                  </div>
                </div>
                <div className="p-4 lg:p-6">
                  <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">
                    Oceanica Pakistan - Wheat Solutions
                  </h4>
                  <p className="text-sm lg:text-base text-gray-600">Learn about our comprehensive wheat protection solutions</p>
                </div>
              </div>
            </div>
            
            {/* Links and Downloads */}
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Links and Downloads</h3>
              <div className="bg-amber-50 rounded-xl p-6 lg:p-8 border border-amber-200">
                <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 lg:mb-4">Download Resources</h4>
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-center space-x-3 p-3 lg:p-4 bg-white rounded-lg shadow-sm">
                    <Download className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm lg:text-base">Wheat Crop Program</p>
                      <p className="text-xs lg:text-sm text-gray-600">(3.1 MB)</p>
                    </div>
                    <Download className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                  </div>
                  <div className="flex items-center space-x-3 p-3 lg:p-4 bg-white rounded-lg shadow-sm">
                    <Download className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm lg:text-base">Wheat Growing Guide</p>
                      <p className="text-xs lg:text-sm text-gray-600">(2.4 MB)</p>
                    </div>
                    <Download className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
