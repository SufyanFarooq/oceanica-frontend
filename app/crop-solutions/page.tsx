'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Leaf, TrendingUp, Shield, Star, Award, Users, Globe, CheckCircle, Zap, Heart, Target, ChevronLeft, ChevronRight } from 'lucide-react'
import { useI18n } from '../i18n/context'
import { useEffect, useRef, useState } from 'react'
import ProductCard from '../../components/products/ProductCard'
import { getRelatedProducts, getAllProducts } from '../utils/productUtils'

export default function CropSolutions() {
  const { locale, isRTL } = useI18n()
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())
  const [cropsCarouselIndex, setCropsCarouselIndex] = useState(0)
  const [productsCarouselIndex, setProductsCarouselIndex] = useState(0)
  const [isCropsAutoPlaying, setIsCropsAutoPlaying] = useState(true)
  const [isProductsAutoPlaying, setIsProductsAutoPlaying] = useState(true)

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-animate-id')
            if (elementId) {
              setVisibleElements(prev => new Set(Array.from(prev).concat(elementId)))
            }
          }
        })
      },
      { threshold: 0.1 }
    )
    
    const elementsToObserve = document.querySelectorAll('[data-animate-id]')
    elementsToObserve.forEach(el => observer.observe(el))
    
    return () => observer.disconnect()
  }, [])

  // Auto-play for crops carousel
  useEffect(() => {
    if (!isCropsAutoPlaying) return

    const interval = setInterval(() => {
      setCropsCarouselIndex(prev => 
        prev >= Math.ceil(6 / 3) - 1 ? 0 : prev + 1 // 6 crops total, 3 per slide
      )
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isCropsAutoPlaying])

  // Auto-play for products carousel
  useEffect(() => {
    if (!isProductsAutoPlaying) return

    const interval = setInterval(() => {
      setProductsCarouselIndex(prev => 
        prev >= Math.ceil(8 / 4) - 1 ? 0 : prev + 1 // 8 products total, 4 per slide
      )
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isProductsAutoPlaying])
  const crops = [
    {
      name: locale === 'en' ? 'Corn' : 'مکئی',
      href: '/crop-solutions/corn',
      description: locale === 'en' 
        ? 'Advanced corn solutions for maximum yield and quality. Our comprehensive range includes seed treatment, growth enhancers, and protection against common pests and diseases.'
        : 'زیادہ سے زیادہ پیداوار اور معیار کے لیے جدید مکئی کے حل۔ ہماری جامع رینج میں بیج کا علاج، نشوونما بڑھانے والے، اور عام کیڑوں اور بیماریوں سے حفاظت شامل ہے۔',
      color: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
      icon: '🌽',
      image: '/assets/crops/corn/corn-plant.jpg',
      benefits: locale === 'en' 
        ? ['Increased yield by 25%', 'Disease resistance', 'Better grain quality']
        : ['25% زیادہ پیداوار', 'بیماریوں سے مزاحمت', 'بہتر دانے کا معیار']
    },
    {
      name: locale === 'en' ? 'Wheat' : 'گندم',
      href: '/crop-solutions/wheat',
      description: locale === 'en'
        ? 'Complete wheat farming solutions from seed to harvest. Our products ensure healthy crop development, protection against rust and other diseases, and optimal grain filling.'
        : 'بیج سے فصل تک مکمل گندم کی کاشتکاری کے حل۔ ہماری مصنوعات صحت مند فصل کی نشوونما، زنگ اور دیگر بیماریوں سے حفاظت، اور بہترین دانے بھرنے کو یقینی بناتی ہیں۔',
      color: 'bg-gradient-to-br from-amber-50 to-amber-100',
      icon: '🌾',
      image: '/assets/crops/wheat/wheat-field.jpg',
      benefits: locale === 'en'
        ? ['Rust protection', 'Enhanced protein content', 'Improved tillering']
        : ['زنگ سے حفاظت', 'بڑھا ہوا پروٹین مواد', 'بہتر کھیتی']
    },
    {
      name: locale === 'en' ? 'Rice' : 'چاول',
      href: '/crop-solutions/rice',
      description: locale === 'en'
        ? 'Specialized rice cultivation solutions for Pakistani conditions. Our products help manage water stress, control weeds, and protect against blast and bacterial diseases.'
        : 'پاکستانی حالات کے لیے خصوصی چاول کی کاشت کے حل۔ ہماری مصنوعات پانی کے دباؤ کو منظم کرنے، جڑی بوٹیوں کو کنٹرول کرنے، اور دھماکے اور بیکٹیریل بیماریوں سے حفاظت میں مدد کرتی ہیں۔',
      color: 'bg-gradient-to-br from-green-50 to-green-100',
      icon: '🍚',
      image: '/assets/crops/rice/rice-field.jpg',
      benefits: locale === 'en'
        ? ['Water stress tolerance', 'Blast disease control', 'Higher milling recovery']
        : ['پانی کے دباؤ کی برداشت', 'دھماکے کی بیماری کا کنٹرول', 'زیادہ پیسنے کی بازیابی']
    },
    {
      name: locale === 'en' ? 'Sugarcane' : 'گنا',
      href: '/crop-solutions/sugarcane',
      description: locale === 'en'
        ? 'Premium sugarcane solutions for maximum sucrose content and yield. Our products enhance cane growth, control pests, and improve sugar recovery rates.'
        : 'زیادہ سے زیادہ سوکروز مواد اور پیداوار کے لیے پریمیم گنے کے حل۔ ہماری مصنوعات گنے کی نشوونما کو بہتر بناتی ہیں، کیڑوں کو کنٹرول کرتی ہیں، اور چینی کی بازیابی کی شرح کو بہتر بناتی ہیں۔',
      color: 'bg-gradient-to-br from-red-50 to-red-100',
      icon: '🎋',
      image: '/assets/crops/sugarcane/sugarcane-field.jpg',
      benefits: locale === 'en'
        ? ['Higher sucrose content', 'Pest resistance', 'Improved ratoon crops']
        : ['زیادہ سوکروز مواد', 'کیڑوں سے مزاحمت', 'بہتر رٹون فصل']
    },
    {
      name: locale === 'en' ? 'Potato' : 'آلو',
      href: '/crop-solutions/potato',
      description: locale === 'en'
        ? 'Complete potato crop management solutions. Our products ensure healthy tuber development, protect against late blight and other diseases, and improve storage quality.'
        : 'مکمل آلو کی فصل کی انتظامیہ کے حل۔ ہماری مصنوعات صحت مند کھانے کی نشوونما کو یقینی بناتی ہیں، دیر سے بلائٹ اور دیگر بیماریوں سے حفاظت کرتی ہیں، اور ذخیرہ کرنے کے معیار کو بہتر بناتی ہیں۔',
      color: 'bg-gradient-to-br from-purple-50 to-purple-100',
      icon: '🥔',
      image: '/assets/crops/potato/potato-field.jpg',
      benefits: locale === 'en'
        ? ['Late blight control', 'Better tuber size', 'Extended storage life']
        : ['دیر سے بلائٹ کا کنٹرول', 'بہتر کھانے کا سائز', 'بڑھی ہوئی ذخیرہ زندگی']
    },
    {
      name: locale === 'en' ? 'Cotton' : 'کپاس',
      href: '/crop-solutions/cotton',
      description: locale === 'en'
        ? 'Advanced cotton solutions for premium fiber quality. Our products enhance boll development, control bollworms and other pests, and improve fiber strength and length.'
        : 'پریمیم فائبر معیار کے لیے جدید کپاس کے حل۔ ہماری مصنوعات گولے کی نشوونما کو بہتر بناتی ہیں، گولے کے کیڑوں اور دیگر کیڑوں کو کنٹرول کرتی ہیں، اور فائبر کی طاقت اور لمبائی کو بہتر بناتی ہیں۔',
      color: 'bg-gradient-to-br from-blue-50 to-blue-100',
      icon: '🧵',
      image: '/assets/crops/cotton/cotton-field.jpg',
      benefits: locale === 'en'
        ? ['Bollworm control', 'Premium fiber quality', 'Higher lint yield']
        : ['گولے کے کیڑے کا کنٹرول', 'پریمیم فائبر معیار', 'زیادہ لنٹ پیداوار']
    }
  ]

  const companyStats = [
    {
      number: '15+',
      label: locale === 'en' ? 'Years Experience' : 'سال کا تجربہ',
      icon: Award
    },
    {
      number: '50000+',
      label: locale === 'en' ? 'Farmers Served' : 'کسانوں کی خدمت',
      icon: Users
    },
    {
      number: '25+',
      label: locale === 'en' ? 'Countries' : 'ممالک',
      icon: Globe
    },
    {
      number: '150+',
      label: locale === 'en' ? 'Products' : 'مصنوعات',
      icon: Star
    }
  ]

  // Get real products data
  const bioFertilizers = getAllProducts('bioFertilizers').slice(0, 4)
  const specialityFertilizers = getAllProducts('specialityFertilizers').slice(0, 4)
  
  const relatedProducts = [
    ...bioFertilizers.map((product, index) => ({
      id: product.id,
      name: locale === 'en' ? product.name : product.nameUr,
      category: locale === 'en' ? 'BIO FERTILIZERS' : 'بائیو کھادیں',
      logo: '🌱',
      details: locale === 'en' ? product.description : product.descriptionUr,
      form: locale === 'en' ? 'Bio Fertilizer' : 'بائیو کھاد',
      color: ['green', 'blue', 'emerald', 'cyan'][index % 4],
      href: `/products/search/crop-protection/bio-fertilizers/${product.id}`,
      image: product.image
    })),
    ...specialityFertilizers.map((product, index) => ({
      id: product.id,
      name: locale === 'en' ? product.name : product.nameUr,
      category: locale === 'en' ? 'SPECIALITY FERTILIZERS' : 'خصوصی کھادیں',
      logo: '🌾',
      details: locale === 'en' ? product.description : product.descriptionUr,
      form: locale === 'en' ? 'Speciality Fertilizer' : 'خصوصی کھاد',
      color: ['red', 'orange', 'purple', 'yellow'][index % 4],
      href: `/products/search/crop-protection/speciality-fertilizers/${product.id}`,
      image: product.image
    }))
  ].slice(0, 8) // Limit to 8 products for better display

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 py-32 m-2 overflow-hidden rounded-2xl" data-animate-id="hero">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/crops/crop-solutions-banner.jpg"
            alt="Agricultural Crops"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-emerald-900/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className={`mb-6 md:mb-8 transition-all duration-1000 ${visibleElements.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <Leaf className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-sm transition-all duration-1000 delay-200 ${visibleElements.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {locale === 'en' ? 'Crop Solutions' : 'فصل کے حل'}
          </h1>
          <p className={`text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed transition-all duration-1000 delay-400 ${visibleElements.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {locale === 'en' 
              ? 'Comprehensive agricultural solutions tailored for Pakistan\'s major crops. From seed treatment to harvest protection, we\'ve got you covered.'
              : 'پاکستان کی اہم فصلوں کے لیے تیار کردہ جامع زرعی حل۔ بیج کے علاج سے لے کر فصل کی حفاظت تک، ہم آپ کے ساتھ ہیں۔'
            }
          </p>
          <div className={`flex items-center justify-center space-x-2 text-white bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full inline-flex shadow-lg transition-all duration-1000 delay-600 ${visibleElements.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Leaf className="w-5 h-5 md:w-6 md:h-6" />
            <span className="font-semibold text-sm md:text-base">Oceanica Crop Science</span>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden" data-animate-id="stats">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleElements.has('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              {locale === 'en' ? 'Our Impact' : 'ہمارا اثر'}
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              {locale === 'en' ? 'Trusted by Farmers Worldwide' : 'دنیا بھر کے کسانوں کی طرف سے قابل اعتماد'}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {locale === 'en' 
                ? 'Leading agricultural solutions provider with proven track record of success'
                : 'کامیابی کے ثابت شدہ ریکارڈ کے ساتھ معروف زرعی حل فراہم کنندہ'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`group text-center p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/15 hover:bg-white/20 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl ${
                  visibleElements.has('stats') 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-12 scale-95'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">{stat.number}</div>
                <div className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">{stat.label}</div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-emerald-400/50 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crops Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white" data-animate-id="crops">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleElements.has('crops') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
              <Target className="w-4 h-4 mr-2" />
              {locale === 'en' ? 'Our Crop Solutions' : 'ہمارے فصل کے حل'}
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {locale === 'en' ? 'Specialized Solutions for Every Crop' : 'ہر فصل کے لیے خصوصی حل'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {locale === 'en' 
                ? 'From seed to harvest, we provide comprehensive solutions tailored to Pakistan\'s major crops'
                : 'بیج سے فصل تک، ہم پاکستان کی اہم فصلوں کے لیے تیار کردہ جامع حل فراہم کرتے ہیں'
              }
            </p>
          </div>
          
          {/* Crops Carousel */}
          <div 
            className="relative"
            onMouseEnter={() => setIsCropsAutoPlaying(false)}
            onMouseLeave={() => setIsCropsAutoPlaying(true)}
          >
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${cropsCarouselIndex * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(crops.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {crops.slice(slideIndex * 3, (slideIndex + 1) * 3).map((crop, index) => (
                        <Link
                          key={crop.name}
                          href={crop.href}
                          className={`group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:scale-105 ${
                            visibleElements.has('crops') 
                              ? 'opacity-100 translate-y-0 scale-100' 
                              : 'opacity-0 translate-y-16 scale-95'
                          }`}
                          style={{ 
                            transitionDelay: `${index * 200}ms`,
                            zIndex: crops.length - index
                          }}
                        >
                          {/* Image Container */}
                          <div className="relative h-64 w-full overflow-hidden">
                            <Image 
                              src={crop.image} 
                              alt={crop.name} 
                              fill 
                              className="object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Icon Overlay */}
                            <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <span className="text-2xl">{crop.icon}</span>
                            </div>
                            
                            {/* Crop Name Overlay */}
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                                {crop.name}
                              </h3>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="p-6">
                            <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                              {crop.description}
                            </p>
                            
                            <div className="space-y-2 mb-6">
                              {crop.benefits.map((benefit, benefitIndex) => (
                                <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </div>
                              ))}
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
                              <span className="text-emerald-600 font-semibold text-sm group-hover:text-emerald-700 transition-colors duration-300">
                                {locale === 'en' ? 'Learn More' : 'مزید جانیں'}
                              </span>
                              <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </div>
                          
                          {/* Stack Effect Border */}
                          <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-emerald-400/30 transition-all duration-500"></div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <button
              onClick={() => setCropsCarouselIndex(Math.max(0, cropsCarouselIndex - 1))}
              disabled={cropsCarouselIndex === 0}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={() => setCropsCarouselIndex(Math.min(Math.ceil(crops.length / 3) - 1, cropsCarouselIndex + 1))}
              disabled={cropsCarouselIndex >= Math.ceil(crops.length / 3) - 1}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(crops.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCropsCarouselIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === cropsCarouselIndex ? 'bg-emerald-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white" data-animate-id="products">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleElements.has('products') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
              <Zap className="w-4 h-4 mr-2" />
              {locale === 'en' ? 'Related Products' : 'متعلقہ مصنوعات'}
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {locale === 'en' ? 'Complete Agricultural Solutions' : 'مکمل زرعی حل'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {locale === 'en' 
                ? 'Explore our comprehensive range of agricultural products designed to maximize your crop yield'
                : 'اپنی فصل کی پیداوار کو زیادہ سے زیادہ بنانے کے لیے ڈیزائن کردہ زرعی مصنوعات کی ہماری جامع رینج کو دریافت کریں'
              }
            </p>
          </div>
          
          {/* Products Carousel */}
          <div 
            className="relative"
            onMouseEnter={() => setIsProductsAutoPlaying(false)}
            onMouseLeave={() => setIsProductsAutoPlaying(true)}
          >
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${productsCarouselIndex * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(relatedProducts.length / 4) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                      {relatedProducts.slice(slideIndex * 4, (slideIndex + 1) * 4).map((product, index) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          index={index}
                          isVisible={visibleElements.has('products')}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <button
              onClick={() => setProductsCarouselIndex(Math.max(0, productsCarouselIndex - 1))}
              disabled={productsCarouselIndex === 0}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={() => setProductsCarouselIndex(Math.min(Math.ceil(relatedProducts.length / 4) - 1, productsCarouselIndex + 1))}
              disabled={productsCarouselIndex >= Math.ceil(relatedProducts.length / 4) - 1}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(relatedProducts.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setProductsCarouselIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === productsCarouselIndex ? 'bg-emerald-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" data-animate-id="features">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleElements.has('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
              <Heart className="w-4 h-4 mr-2" />
              {locale === 'en' ? 'Why Choose Us' : 'ہمیں کیوں منتخب کریں'}
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {locale === 'en' ? 'Why Choose Our Crop Solutions?' : 'ہمارے فصل کے حل کیوں منتخب کریں؟'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {locale === 'en' 
                ? 'We provide science-backed solutions that deliver real results for Pakistani farmers'
                : 'ہم سائنس پر مبنی حل فراہم کرتے ہیں جو پاکستانی کسانوں کے لیے حقیقی نتائج دیتے ہیں'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`text-center p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
              visibleElements.has('features') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '0ms' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{locale === 'en' ? 'Increased Yields' : 'زیادہ پیداوار'}</h3>
              <p className="text-gray-600 leading-relaxed">{locale === 'en' ? 'Proven solutions that boost crop productivity and quality' : 'ثابت شدہ حل جو فصل کی پیداواری صلاحیت اور معیار کو بڑھاتے ہیں'}</p>
            </div>
            
            <div className={`text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
              visibleElements.has('features') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{locale === 'en' ? 'Crop Protection' : 'فصل کی حفاظت'}</h3>
              <p className="text-gray-600 leading-relaxed">{locale === 'en' ? 'Comprehensive protection against pests, diseases, and weeds' : 'کیڑوں، بیماریوں اور جڑی بوٹیوں کے خلاف جامع حفاظت'}</p>
            </div>
            
            <div className={`text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
              visibleElements.has('features') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Leaf className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{locale === 'en' ? 'Sustainable Farming' : 'پائیدار کاشتکاری'}</h3>
              <p className="text-gray-600 leading-relaxed">{locale === 'en' ? 'Environmentally responsible solutions for long-term success' : 'طویل مدتی کامیابی کے لیے ماحول دوست ذمہ دار حل'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800" data-animate-id="cta">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${visibleElements.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl font-bold text-white mb-4">
              {locale === 'en' ? 'Need Expert Advice?' : 'ماہر مشورہ چاہیے؟'}
          </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              {locale === 'en' 
                ? 'Our agricultural experts are here to help you choose the right solutions for your specific crop and growing conditions.'
                : 'ہمارے زرعی ماہرین آپ کی مخصوص فصل اور کاشتکاری کی حالتوں کے لیے صحیح حل منتخب کرنے میں آپ کی مدد کے لیے یہاں ہیں۔'
              }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {locale === 'en' ? 'Get Expert Advice' : 'ماہر مشورہ حاصل کریں'}
            </Link>
              <Link href="/products/search/crop-protection" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {locale === 'en' ? 'View Products' : 'مصنوعات دیکھیں'}
            </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
