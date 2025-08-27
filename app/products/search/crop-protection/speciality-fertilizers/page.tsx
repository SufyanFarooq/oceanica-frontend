'use client'

import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../../../../../components/Navbar'
import Footer from '../../../../../components/Footer'
import { useI18n } from '../../../../../app/i18n/context'
import { ArrowRight, Leaf, Zap, Droplets, Flame } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function SpecialityFertilizers() {
  const { t, locale, isRTL } = useI18n()
  const [activeCategory, setActiveCategory] = useState(0);

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

  const productCategories = [
    {
      name: 'Potassium Sulfate Group',
      nameUr: 'پوٹاشیم سلفیٹ گروپ',
      products: [
        { name: 'EVER SOL', nameUr: 'ایور سول', image: '/assets/products/Speciality Fertilizers/ever-sol-1.jpg' },
        { name: 'EVER GRAN', nameUr: 'ایور گران', image: '/assets/products/Speciality Fertilizers/ever-gran.jpg' },
        { name: 'EVER STAND', nameUr: 'ایور سٹینڈ', image: '/assets/products/Speciality Fertilizers/ever-stand-2.jpg' }
      ]
    },
    {
      name: 'Potassium Sulfo Nitrate Group',
      nameUr: 'پوٹاشیم سلفو نائٹریٹ گروپ',
      products: [
        { name: 'TOP GROW', nameUr: 'ٹاپ گرو', image: '/assets/products/Speciality Fertilizers/top-grow-1.jpg' },
        { name: 'SUPER GROW', nameUr: 'سپر گرو', image: '/assets/products/Speciality Fertilizers/super-grow-1.jpg' },
        { name: 'MORE GROW', nameUr: 'مور گرو', image: '/assets/products/Speciality Fertilizers/more-grow-1.jpg' }
      ]
    },
    {
      name: 'Balanced-NPK Group',
      nameUr: 'متوازن NPK گروپ',
      products: [
        { name: 'POWER GROW', nameUr: 'پاور گرو', image: '/assets/products/Speciality Fertilizers/power-grow.jpg' },
        { name: 'FAST GROW', nameUr: 'فاسٹ گرو', image: '/assets/products/Speciality Fertilizers/fast-grow.jpg' }
      ]
    },
    {
      name: 'Phosphate Fertilizers Group',
      nameUr: 'فاسفیٹ کھاد گروپ',
      products: [
        { name: 'MAP (Mono – Ammonium Phosphate)', nameUr: 'MAP (مونو – امونیم فاسفیٹ)', image: '/assets/products/Speciality Fertilizers/map-mono-ammonium-phospha.jpg' },
        { name: 'UP (Urea Phosphate)', nameUr: 'UP (یوریا فاسفیٹ)', image: '/assets/products/Speciality Fertilizers/up-urea-phosphate.jpg' },
        { name: 'MKP (Mono – Potassium Phosphate)', nameUr: 'MKP (مونو – پوٹاشیم فاسفیٹ)', image: '/assets/products/Speciality Fertilizers/mkp-mono-potassium-phosphate.jpg' }
      ]
    },
    {
      name: 'Calcium Nitrate Group',
      nameUr: 'کیلشیم نائٹریٹ گروپ',
      products: [
        { name: 'NITRO CAL', nameUr: 'نائٹرو کیل', image: '/assets/products/Speciality Fertilizers/nitro-cal-calcium-nitrate.jpg' },
        { name: 'GRANO CAL', nameUr: 'گرانو کیل', image: '/assets/products/Speciality Fertilizers/grano-cal-calcium-nitrate.jpg' }
      ]
    }
  ]

  return (
    <>
      <Head>
        <title>{locale === 'en' ? 'Speciality Fertilizers - Oceanica Crop Science' : 'خصوصی کھادیں - اوشینیکا کراپ سائنس'}</title>
        <meta name="description" content={locale === 'en' ? 'Premium speciality fertilizer solutions for enhanced crop productivity' : 'بہتر فصل کی پیداواری صلاحیت کے لیے اعلیٰ معیار کی خصوصی کھاد کے حل'} />
      </Head>
      <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
        <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/products/banner.jpg"
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

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {locale === 'en' ? 'Product Categories' : 'پروڈکٹ کیٹیگریز'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {locale === 'en'
                ? 'Comprehensive range of speciality fertilizers designed for specific crop needs and soil conditions'
                : 'مخصوص فصل کی ضروریات اور مٹی کی حالتوں کے لیے ڈیزائن کردہ خصوصی کھادوں کی جامع رینج'
              }
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  {locale === 'en' ? 'Categories' : 'کیٹیگریز'}
                </h3>
                <nav className="space-y-3">
                  {productCategories.map((category, index) => (
                    <a
                      key={index}
                      href={`#category-${index}`}
                      className={`block px-4 py-3 rounded-lg transition-all duration-200 border-l-4 ${
                        activeCategory === index
                          ? 'text-accent-600 bg-accent-50 border-accent-500'
                          : 'text-gray-700 hover:text-accent-600 hover:bg-accent-50 border-transparent hover:border-accent-500'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(`category-${index}`);
                        if (element) {
                          element.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }
                      }}
                    >
                      <span className="font-medium">{category.name}</span>
                      <span className="block text-sm text-gray-500 mt-1">
                        {category.products.length} {locale === 'en' ? 'Products' : 'پروڈکٹس'}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-16">
            {productCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} id={`category-${categoryIndex}`} className="bg-white rounded-2xl shadow-xl p-8">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {category.name}
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.products.map((product, productIndex) => (
                    <div key={productIndex} className="group">
                      <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 h-full transition-all duration-300 hover:shadow-lg hover:scale-105">
                        {/* Product Image */}
                        <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent-600 transition-colors">
                          {product.name}
                        </h4>
                        
                        <div className="flex flex-col space-y-3">
                          <Link 
                            href={`/products/search/crop-protection/speciality-fertilizers/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="group inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg text-sm font-medium text-green-700 shadow-sm hover:from-green-100 hover:to-emerald-100 hover:border-green-300 transition-all duration-200"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 group-hover:scale-110 transition-transform duration-200"></div>
                            {locale === 'en' ? 'Premium Quality' : 'اعلیٰ معیار'}
                          </Link>
                          <Link 
                            href={`/products/search/crop-protection/speciality-fertilizers/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="group inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                          >
                            {locale === 'en' ? 'Learn More' : 'مزید جانیں'}
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-500 to-secondary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {locale === 'en' ? 'Ready to Boost Your Crop Yield?' : 'اپنی فصل کی پیداوار بڑھانے کے لیے تیار ہیں؟'}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {locale === 'en'
              ? 'Contact our agricultural experts to get personalized recommendations for your farming needs'
              : 'اپنی کاشتکاری کی ضروریات کے لیے ذاتی سفارشات حاصل کرنے کے لیے ہمارے زرعی ماہرین سے رابطہ کریں'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us"
              className="bg-white text-accent-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              {locale === 'en' ? 'Contact Us' : 'ہم سے رابطہ کریں'}
            </Link>
            <Link 
              href="/products/search/crop-protection"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-colors border border-white/30"
            >
              {locale === 'en' ? 'View All Products' : 'تمام پروڈکٹس دیکھیں'}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  )
}
