'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useI18n } from '@/app/i18n/context'

export default function CurrentHappeningsSection() {
  const { t, locale } = useI18n()
  const [currentSlide, setCurrentSlide] = useState(0)

  const happenings = [
    {
      id: 1,
      title: locale === 'en' ? 'Global Team Comes To Pakistan' : 'عالمی ٹیم پاکستان آئی',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
      href: '/news/global-team-pakistan',
      date: locale === 'en' ? 'March 15, 2024' : '۱۵ مارچ ۲۰۲۴'
    },
    {
      id: 2,
      title: locale === 'en' ? 'Oceanica Pakistan Welcomes Regional Head for Asia - Mr. Ahmed Hassan' : 'اوشینیکا پاکستان نے ایشیا کے علاقائی سربراہ مسٹر احمد حسن کا استقبال کیا',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      href: '/news/regional-head-visit',
      date: locale === 'en' ? 'March 10, 2024' : '۱۰ مارچ ۲۰۲۴'
    },
    {
      id: 3,
      title: locale === 'en' ? 'Oceanica Pakistan and Engro Fertilizers Ltd Forge Strategic Partnership to Transform Agriculture' : 'اوشینیکا پاکستان اور اینگرو فرٹیلائزرز لمیٹڈ نے زراعت کو تبدیل کرنے کے لیے اسٹریٹجک شراکت داری قائم کی',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
      href: '/news/strategic-partnership',
      date: locale === 'en' ? 'March 5, 2024' : '۵ مارچ ۲۰۲۴'
    },
    {
      id: 4,
      title: locale === 'en' ? 'New Product Launch: Advanced Crop Protection Solutions' : 'نیا پروڈکٹ لانچ: جدید فصل کی حفاظت کے حل',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      href: '/news/product-launch',
      date: locale === 'en' ? 'February 28, 2024' : '۲۸ فروری ۲۰۲۴'
    },
    {
      id: 5,
      title: locale === 'en' ? 'Farmer Training Program Successfully Completed' : 'کسانوں کی تربیتی پروگرام کامیابی سے مکمل',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      href: '/news/farmer-training',
      date: locale === 'en' ? 'February 20, 2024' : '۲۰ فروری ۲۰۲۴'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, happenings.length - 2))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, happenings.length - 2)) % Math.max(1, happenings.length - 2))
  }

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [currentSlide])

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-float-slow"></div>
      <div className="absolute top-40 right-32 w-16 h-16 bg-indigo-200 rounded-full opacity-30 animate-float-medium"></div>
      <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-purple-200 rounded-full opacity-30 animate-float-fast"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 shadow-2xl animate-bounce-in">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 animate-fade-in-up stagger-1 leading-tight">
            {locale === 'en' ? 'CURRENT HAPPENINGS' : 'موجودہ واقعات'}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto animate-slide-up stagger-2 leading-relaxed">
            {locale === 'en' ? 'Stay updated with the latest news, events, and developments from Oceanica Crop Science' : 'اوشینیکا کراپ سائنس کی تازہ ترین خبروں، واقعات اور ترقی سے باخبر رہیں'}
          </p>
        </div>

        {/* Desktop Carousel - 3 Cards at a time */}
        <div className="hidden lg:block mb-10">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl animate-fade-in-up stagger-3">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
            >
              {happenings.map((happening, index) => (
                <div key={happening.id} className="w-1/3 flex-shrink-0 px-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <HappeningCard happening={happening} locale={locale} />
                </div>
              ))}
            </div>
            
            {/* Carousel Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-20 animate-pulse-glow backdrop-blur-sm"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-20 animate-pulse-glow backdrop-blur-sm"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8">
            <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden shadow-lg">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 rounded-full"
                style={{ 
                  width: `${(currentSlide + 1) / Math.max(1, happenings.length - 2) * 100}%` 
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden mb-10">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl animate-fade-in-up stagger-3">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {happenings.map((happening, index) => (
                <div key={happening.id} className="w-full flex-shrink-0 px-3">
                  <HappeningCard happening={happening} locale={locale} />
                </div>
              ))}
            </div>
            
            {/* Carousel Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-20 animate-pulse-glow backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-20 animate-pulse-glow backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-6">
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden shadow-lg">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 rounded-full"
                style={{ 
                  width: `${(currentSlide + 1) / happenings.length * 100}%` 
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-3xl animate-bounce-in shadow-2xl"
          >
            {locale === 'en' ? 'View All News' : 'تمام خبریں دیکھیں'}
            <ChevronRight className="ml-3 w-5 h-5 animate-float-gentle" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// Happening Card Component
function HappeningCard({ happening, locale }: { happening: any; locale: string }) {
  return (
    <Link href={happening.href} className="block">
      <div className="bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden group animate-scale-in">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={happening.image}
            alt={happening.title}
            fill
            className="object-cover group-hover:scale-125 transition-transform duration-700"
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
          
          {/* Date Badge */}
          <div className="absolute top-4 left-4">
            <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-2 rounded-full text-sm font-semibold shadow-lg">
              {happening.date}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-8 h-48 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 line-clamp-3 leading-tight min-h-[4.5rem] animate-slide-up stagger-1">
              {happening.title}
            </h3>
          </div>
          <div className="flex items-center justify-between mt-6">
            <span className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 group-hover:translate-x-1 animate-bounce-in shadow-lg">
              {locale === 'en' ? 'Read more' : 'مزید پڑھیں'}
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 animate-float-gentle" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
