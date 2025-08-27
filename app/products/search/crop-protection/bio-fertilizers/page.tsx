'use client'

import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../../../../../components/Navbar'
import Footer from '../../../../../components/Footer'
import { useI18n } from '../../../../../app/i18n/context'
import { ArrowRight, Leaf, Zap, Droplets, Flame, Sprout, Microscope } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function BioFertilizers() {
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
      name: 'Amino Acid Compounds Group',
      nameUr: 'امینو ایسڈ کمپاؤنڈز گروپ',
      products: [
        { name: 'EVER AMINO – S', nameUr: 'ایور امینو – ایس', image: '/assets/products/Bio Fertilizers/ever-amino-s.jpg' },
        { name: 'EVER AMINO – L', nameUr: 'ایور امینو – ایل', image: '/assets/products/Bio Fertilizers/ever-amino-l.jpg' }
      ]
    },
    {
      name: 'Calcium and Boron Fertilizer Compounds Group',
      nameUr: 'کیلشیم اور بورون کھاد کمپاؤنڈز گروپ',
      products: [
        { name: 'EVER BORON 15%', nameUr: 'ایور بورون 15%', image: '/assets/products/Bio Fertilizers/ever-boron.jpg' },
        { name: 'EVER Ca – B', nameUr: 'ایور کیل – بی', image: '/assets/products/Bio Fertilizers/ever-ca-b.jpg' }
      ]
    },
    {
      name: 'Climate Change Adaptation Group',
      nameUr: 'موسمیاتی تبدیلی کے مطابق ڈھلنے کا گروپ',
      products: [
        { name: 'EVER SILICA K', nameUr: 'ایور سلکا کے', image: '/assets/products/Bio Fertilizers/ever-silica-k.jpg' }
      ]
    },
    {
      name: 'Soil Salinity Correctors Group',
      nameUr: 'مٹی کی نمکینی درست کرنے والے گروپ',
      products: [
        { name: 'NEW NEVER SAL', nameUr: 'نیو نیور سال', image: '/assets/products/Bio Fertilizers/new-never-sal.jpg' },
        { name: 'EVER SAL', nameUr: 'ایور سال', image: '/assets/products/Bio Fertilizers/ever-sal.jpg' }
      ]
    },
    {
      name: 'Root Stimulants and Activators Group',
      nameUr: 'جڑ کی محرکات اور فعال کنندگان گروپ',
      products: [
        { name: 'EVER SUPER ROOT', nameUr: 'ایور سپر روٹ', image: '/assets/products/Bio Fertilizers/ever-super-root.jpg' }
      ]
    },
    {
      name: 'Chelated Nutrients Group',
      nameUr: 'کیلٹیڈ غذائی اجزاء گروپ',
      products: [
        { name: 'EVER MICRO GROW', nameUr: 'ایور مائیکرو گرو', image: '/assets/products/Bio Fertilizers/ever-micro-grow.jpg' },
        { name: 'EVER IRON', nameUr: 'ایور آئرن', image: '/assets/products/Bio Fertilizers/ever-iron.jpg' },
        { name: 'EVER ZINC', nameUr: 'ایور زنک', image: '/assets/products/Bio Fertilizers/ever-zinc.jpg' },
        { name: 'EVER MANGANESE', nameUr: 'ایور مینگنیز', image: '/assets/products/Bio Fertilizers/ever-manganese.jpg' }
      ]
    }
  ]

  return (
    <>
      <Head>
        <title>{locale === 'en' ? 'Bio Fertilizers - Oceanica Crop Science' : 'بائیو کھادیں - اوشینیکا کراپ سائنس'}</title>
        <meta name="description" content={locale === 'en' ? 'Natural and organic bio-fertilizer solutions for sustainable agriculture' : 'پائیدار زراعت کے لیے قدرتی اور نامیاتی بائیو کھاد کے حل'} />
      </Head>
      <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
        <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-900 via-accent-800 to-accent-900 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/products/banner.jpg"
          alt="Bio Fertilizers Banner"
          fill
          className="object-cover"
          priority
        />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <Sprout className="w-20 h-20 mx-auto text-accent-400 mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {locale === 'en' ? 'Bio Fertilizers' : 'بائیو کھادیں'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              {locale === 'en' 
                ? 'Natural and organic solutions that enhance soil health and promote sustainable agricultural practices'
                : 'قدرتی اور نامیاتی حل جو مٹی کی صحت کو بہتر بناتے ہیں اور پائیدار زرعی طریقوں کو فروغ دیتے ہیں'
              }
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">
                {locale === 'en' ? '100% Natural' : '100% قدرتی'}
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">
                {locale === 'en' ? 'Soil Health' : 'مٹی کی صحت'}
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-white font-medium">
                {locale === 'en' ? 'Eco-Friendly' : 'ماحول دوست'}
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
                ? 'Innovative bio-fertilizer solutions that work in harmony with nature to improve crop productivity'
                : 'جدید بائیو کھاد کے حل جو فطرت کے ساتھ ہم آہنگی میں کام کرتے ہیں اور فصل کی پیداواری صلاحیت کو بہتر بناتے ہیں'
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
                  <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.products.map((product, productIndex) => (
                    <div key={productIndex} className="group">
                      <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl p-6 h-full transition-all duration-300 hover:shadow-lg hover:scale-105 border border-accent-100">
                        {/* Product Image */}
                        <div className="relative w-full h-48 rounded-lg mb-4 overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        
                        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent-600 transition-colors">
                          {product.name}
                        </h4>
                        
                        <div className="flex flex-col space-y-3">
                          <Link 
                            href={`/products/search/crop-protection/bio-fertilizers/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="group inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg text-sm font-medium text-green-700 shadow-sm hover:from-green-100 hover:to-emerald-100 hover:border-green-300 transition-all duration-200"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 group-hover:scale-110 transition-transform duration-200"></div>
                            {locale === 'en' ? 'Bio Organic' : 'بائیو نامیاتی'}
                          </Link>
                          <Link 
                            href={`/products/search/crop-protection/bio-fertilizers/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {locale === 'en' ? 'Why Choose Bio Fertilizers?' : 'بائیو کھادیں کیوں منتخب کریں؟'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {locale === 'en'
                ? 'Discover the natural advantages of bio-fertilizers for sustainable agriculture'
                : 'پائیدار زراعت کے لیے بائیو کھادوں کے قدرتی فوائد دریافت کریں'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {locale === 'en' ? 'Natural & Safe' : 'قدرتی اور محفوظ'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? '100% natural ingredients that are safe for crops, soil, and environment'
                  : '100% قدرتی اجزاء جو فصلوں، مٹی اور ماحول کے لیے محفوظ ہیں'
                }
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sprout className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {locale === 'en' ? 'Soil Health' : 'مٹی کی صحت'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Improves soil structure and promotes beneficial microbial activity'
                  : 'مٹی کی ساخت کو بہتر بناتا ہے اور مفید مائیکروبیل سرگرمی کو فروغ دیتا ہے'
                }
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {locale === 'en' ? 'Long-term Benefits' : 'طویل مدتی فوائد'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Sustainable solution that provides lasting benefits for future crops'
                  : 'پائیدار حل جو مستقبل کی فصلوں کے لیے دیرپا فوائد فراہم کرتا ہے'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-500 to-primary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {locale === 'en' ? 'Go Natural, Go Organic!' : 'قدرتی بنیں، نامیاتی بنیں!'}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {locale === 'en'
              ? 'Join the sustainable farming revolution with our premium bio-fertilizer solutions'
              : 'ہماری اعلیٰ معیار کی بائیو کھاد کے حل کے ساتھ پائیدار کاشتکاری کی انقلاب میں شامل ہوں'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us"
              className="bg-white text-accent-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              {locale === 'en' ? 'Get Started' : 'شروع کریں'}
            </Link>
            <Link 
              href="/products/search/crop-protection"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-colors border border-white/30"
            >
              {locale === 'en' ? 'Explore Products' : 'پروڈکٹس دریافت کریں'}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  )
}
