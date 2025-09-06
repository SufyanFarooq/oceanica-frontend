'use client'

import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../../../../../components/Navbar'
import Footer from '../../../../../components/Footer'
import { useI18n } from '../../../../../app/i18n/context'
import { ArrowRight, Leaf, Zap, Droplets, Flame, Filter, Grid, List, Star, ShoppingCart, Heart, Search, SlidersHorizontal } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getCategoriesByType } from '../../../../../app/utils/productUtils'
import ProductCard from '../../../../../components/ProductCard'

export default function SpecialityFertilizers() {
  const { t, locale, isRTL } = useI18n()
  const [activeCategory, setActiveCategory] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Scroll detection for active category
  useEffect(() => {
    const handleScroll = () => {
      const categories = productCategories.map((_, index) => 
        document.getElementById(`category-${index}`)
      ).filter(Boolean);
      
      if (categories.length === 0) return;
      
      const scrollPosition = window.scrollY + 200; // Offset for better detection
      
      for (let i = categories.length - 1; i >= 0; i--) {
        const category = categories[i];
        if (category && category.offsetTop <= scrollPosition) {
          setActiveCategory(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productCategories = getCategoriesByType('specialityFertilizers')

  // Initialize selected categories with all categories
  useEffect(() => {
    if (productCategories.length > 0 && selectedCategories.length === 0) {
      setSelectedCategories(productCategories.map(cat => cat.name));
    }
  }, [productCategories, selectedCategories.length]);

  // Get all products for e-commerce view
  const allProducts = productCategories.flatMap(category => 
    category.products.map((product, index) => ({
      ...product,
      category: category.name,
      categoryUr: category.nameUr,
      price: 2500 + (index * 200), // Fixed price based on index
      rating: 4.5, // Fixed rating
      reviews: 25 + (index * 5), // Fixed reviews based on index
      inStock: true, // Fixed stock status
    }))
  );

  // Filter and sort products
  const filteredProducts = allProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.nameUr.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesCategory = selectedCategories.includes(product.category);
      return matchesSearch && matchesPrice && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <>
      <Head>
        <title>{locale === 'en' ? 'Speciality Fertilizers & Premium Crop Solutions - Oceanica Crop Science Pakistan' : 'خصوصی کھادیں اور اعلیٰ معیار کی فصل کے حل - اوشینیکا کراپ سائنس پاکستان'}</title>
        <meta name="description" content={locale === 'en' ? 'Premium speciality fertilizer solutions for enhanced crop productivity' : 'بہتر فصل کی پیداواری صلاحیت کے لیے اعلیٰ معیار کی خصوصی کھاد کے حل'} />
      </Head>
      <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
        <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-32 overflow-hidden m-2" style={{borderRadius:"20px"}}>
        {/* Background Image */}
        <Image
          src="/assets/products/Speciality Fertilizers/hero-banner.jpg"
          alt="Speciality Fertilizers Banner"
          fill
          className="object-cover"
          priority
        />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <Leaf className="w-20 h-20 mx-auto text-accent-400 mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {locale === 'en' ? 'Speciality Fertilizers' : 'خصوصی کھادیں'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              {locale === 'en' 
                ? 'Advanced nutrient solutions for optimal crop growth and maximum yield potential'
                : 'بہترین فصل کی نشوونما اور زیادہ سے زیادہ پیداوار کے لیے جدید غذائی اجزاء کے حل'
              }
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">
                {locale === 'en' ? 'High Efficiency' : 'اعلیٰ کارکردگی'}
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">
                {locale === 'en' ? 'Balanced Nutrition' : 'متوازن غذائیت'}
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">
                {locale === 'en' ? 'Sustainable Farming' : 'پائیدار کاشتکاری'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Product Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {locale === 'en' ? 'Shop Speciality Fertilizers' : 'خصوصی کھادیں خریدیں'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {locale === 'en'
                ? 'Browse our comprehensive range of premium speciality fertilizers for optimal crop growth'
                : 'بہترین فصل کی نشوونما کے لیے ہماری اعلیٰ معیار کی خصوصی کھادوں کی جامع رینج دیکھیں'
              }
            </p>
          </div>

          {/* Search and Controls */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder={locale === 'en' ? 'Search products...' : 'پروڈکٹس تلاش کریں...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="name">{locale === 'en' ? 'Sort by Name' : 'نام کے حساب سے'}</option>
                  <option value="price-low">{locale === 'en' ? 'Price: Low to High' : 'قیمت: کم سے زیادہ'}</option>
                  <option value="price-high">{locale === 'en' ? 'Price: High to Low' : 'قیمت: زیادہ سے کم'}</option>
                  <option value="rating">{locale === 'en' ? 'Highest Rated' : 'زیادہ ریٹڈ'}</option>
                </select>

                {/* View Toggle */}
                <div className="flex border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 ${viewMode === 'grid' ? 'bg-emerald-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                  >
                    <Grid className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 ${viewMode === 'list' ? 'bg-emerald-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>

                {/* Filter Button */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <SlidersHorizontal className="h-5 w-5" />
                  {locale === 'en' ? 'Filters' : 'فلٹرز'}
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-600">
              {locale === 'en' 
                ? `Showing ${filteredProducts.length} of ${allProducts.length} products`
                : `${allProducts.length} میں سے ${filteredProducts.length} پروڈکٹس دکھائے جا رہے ہیں`
              }
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            {showFilters && (
              <div className="lg:w-80 flex-shrink-0">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                    {locale === 'en' ? 'Filters' : 'فلٹرز'}
                  </h3>
                  
                  {/* Price Range */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      {locale === 'en' ? 'Price Range' : 'قیمت کی رینج'}
                    </h4>
                    <div className="space-y-2">
                      <input
                        type="range"
                        min="0"
                        max="10000"
                        step="100"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>PKR {priceRange[0]}</span>
                        <span>PKR {priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      {locale === 'en' ? 'Categories' : 'کیٹیگریز'}
                    </h4>
                    <div className="space-y-2">
                      {productCategories.map((category, index) => (
                        <label key={index} className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                            checked={selectedCategories.includes(category.name)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedCategories([...selectedCategories, category.name]);
                              } else {
                                setSelectedCategories(selectedCategories.filter(cat => cat !== category.name));
                              }
                            }}
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            {locale === 'en' ? category.name : category.nameUr}
                          </span>
                          <span className="ml-auto text-xs text-gray-500">
                            ({category.products.length})
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Products Grid/List */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <div className={viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-4'
                }>
                  {filteredProducts.map((product, index) => (
                    <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}>
                      {/* Product Image */}
                      <div className={`relative ${viewMode === 'list' ? 'w-48 h-48' : 'aspect-[4/5]'} overflow-hidden`}>
                        <Image
                          src={product.image}
                          alt={locale === 'en' ? product.name : product.nameUr}
                          fill
                          className="object-contain transition duration-300 hover:scale-105"
                        />
                        
                        {/* Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            {locale === 'en' ? 'Premium' : 'اعلیٰ معیار'}
                          </span>
                        </div>

                        {/* Stock Status */}
                        <div className="absolute top-3 right-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            product.inStock 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {product.inStock 
                              ? (locale === 'en' ? 'In Stock' : 'اسٹاک میں')
                              : (locale === 'en' ? 'Out of Stock' : 'اسٹاک ختم')
                            }
                          </span>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                        <div className="mb-2">
                          <span className="text-sm text-emerald-600 font-medium">
                            {locale === 'en' ? product.category : product.categoryUr}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {locale === 'en' ? product.name : product.nameUr}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">
                            ({product.reviews} {locale === 'en' ? 'reviews' : 'ریویوز'})
                          </span>
                        </div>

                        {/* Price */}
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-emerald-600">
                            PKR {product.price.toLocaleString()}
                          </span>
                          <span className="text-sm text-gray-500 ml-2">
                            / {product.weight || '25Kg'}
                          </span>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3">
                          <Link
                            href={`/products/search/crop-protection/speciality-fertilizers/${product.id}`}
                            className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-xl font-semibold text-center hover:bg-emerald-700 transition-colors"
                          >
                            {locale === 'en' ? 'View Details' : 'تفصیلات دیکھیں'}
                          </Link>
                          <button className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                            <Heart className="h-5 w-5 text-gray-600" />
                          </button>
                          <button className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                            <ShoppingCart className="h-5 w-5 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {locale === 'en' ? 'No Products Found' : 'کوئی پروڈکٹ نہیں ملا'}
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    {locale === 'en' 
                      ? 'Try adjusting your search or filter criteria.'
                      : 'اپنے سرچ یا فلٹر معیار کو ایڈجسٹ کرنے کی کوشش کریں۔'
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-accent-900 via-accent-800 to-accent-900 rounded-3xl p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-16 h-16 border-2 border-accent-400 rounded-full"></div>
              <div className="absolute top-12 left-12 w-12 h-12 border-2 border-accent-400 rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-20 h-20 border-2 border-accent-400 rounded-full"></div>
              <div className="absolute bottom-16 right-16 w-14 h-14 border-2 border-accent-400 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                {locale === 'en' ? 'Need to know more about Oceanica?' : 'اوشینیکا کے بارے میں مزید جاننے کی ضرورت ہے؟'}
              </h2>
              <Link 
                href="/contact-us"
                className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-4 rounded-2xl font-semibold text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {locale === 'en' ? 'Contact us now!' : 'اب ہم سے رابطہ کریں!'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  )
}
