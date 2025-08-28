'use client'

import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../../../../../components/Navbar'
import Footer from '../../../../../components/Footer'
import { useI18n } from '../../../../../app/i18n/context'
import { ArrowRight, Leaf, Zap, Droplets, Flame, Sprout, Microscope } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getCategoriesByType } from '../../../../../app/utils/productUtils'
import ProductCard from '../../../../../components/ProductCard'

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

  const productCategories = getCategoriesByType('bioFertilizers')

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

          {productCategories.length > 0 ? (
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
                        <span className="font-medium">{locale === 'en' ? category.name : category.nameUr}</span>
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
                      {locale === 'en' ? category.name : category.nameUr}
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.products.map((product, productIndex) => (
                        <ProductCard 
                          key={productIndex}
                          title={locale === 'en' ? product.name : product.nameUr}
                          imgSrc={product.image}
                          badge={locale === 'en' ? 'Bio Organic' : 'بائیو نامیاتی'}
                          weight={product.weight || "20L"}
                          href={`/products/search/crop-protection/bio-fertilizers/${product.id}`}
                        />
                    ))}
                  </div>
                </div>
              ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sprout className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'en' ? 'No Categories Found' : 'کوئی کیٹیگری نہیں ملی'}
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                {locale === 'en' 
                  ? 'We are currently updating our product catalog. Please check back soon.'
                  : 'ہم فی الحال اپنی پروڈکٹ کیٹلاگ کو اپ ڈیٹ کر رہے ہیں۔ براہ کرم جلد واپس چیک کریں۔'
                }
              </p>
            </div>
          )}
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
