'use client'

import React, { useRef, useEffect, useMemo, useState } from "react";
import { useI18n } from '../../app/i18n/context'
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

type Crop = {
  name: string
  nameEn: string
  href: string
  image: string
  color: string
  description: string
}

function CropsSection() {
  const { t, locale } = useI18n()
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // ----- DATA -----
  const crops: Crop[] = useMemo(() => ([
    { 
      name: locale === 'en' ? 'Corn' : 'مکئی',
      nameEn: 'Corn',
      href: '/crop-solutions/corn',
      image: '/assets/landing/crops/corn.jpg',
      color: 'from-yellow-400 to-orange-500',
      description: locale === 'en' ? 'High-yield corn varieties for optimal production' : 'زیادہ پیداوار والی مکئی کی اقسام'
    },
    { 
      name: locale === 'en' ? 'Wheat' : 'گندم',
      nameEn: 'Wheat',
      href: '/crop-solutions/wheat',
      image: '/assets/landing/crops/wheat.jpg',
      color: 'from-amber-400 to-yellow-500',
      description: locale === 'en' ? 'Premium wheat solutions for better harvests' : 'بہتر فصل کے لیے اعلیٰ معیار کی گندم'
    },
    { 
      name: locale === 'en' ? 'Rice' : 'چاول',
      nameEn: 'Rice',
      href: '/crop-solutions/rice',
      image: '/assets/landing/crops/rice.jpg',
      color: 'from-green-400 to-emerald-500',
      description: locale === 'en' ? 'Advanced rice cultivation techniques' : 'جدید چاول کی کاشت کی تکنیک'
    },
    { 
      name: locale === 'en' ? 'Sugarcane' : 'گنا',
      nameEn: 'Sugarcane',
      href: '/crop-solutions/sugarcane',
      image: '/assets/landing/crops/sugarcane.jpg',
      color: 'from-red-400 to-pink-500',
      description: locale === 'en' ? 'Sweet success with sugarcane solutions' : 'گنا کی کامیاب کاشت'
    },
    { 
      name: locale === 'en' ? 'Potato' : 'آلو',
      nameEn: 'Potato',
      href: '/crop-solutions/potato',
      image: '/assets/landing/crops/potato.jpg',
      color: 'from-purple-400 to-indigo-500',
      description: locale === 'en' ? 'Quality potato varieties for better yields' : 'بہتر پیداوار کے لیے معیاری آلو'
    },
    { 
      name: locale === 'en' ? 'Cotton' : 'کپاس',
      nameEn: 'Cotton',
      href: '/crop-solutions/cotton',
      image: '/assets/landing/crops/cotton.jpg',
      color: 'from-blue-400 to-cyan-500',
      description: locale === 'en' ? 'Premium cotton for textile excellence' : 'ٹیکسٹائل کی عمدگی کے لیے اعلیٰ معیار کی کپاس'
    },
  ]), [locale])

  const nextSlide = () => {
    if (currentSlide >= crops.length - 1) {
      // When reaching the last slide, jump to first slide without animation
      setCurrentSlide(0)
    } else {
      setCurrentSlide((prev) => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide <= 0) {
      // When at first slide, jump to last slide without animation
      setCurrentSlide(crops.length - 1)
    } else {
      setCurrentSlide((prev) => prev - 1)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide])

  console.log('CropsSection: crops.length =', crops.length);
  console.log('CropsSection: crops data =', crops);

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-float-slow"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-secondary-200 rounded-full opacity-20 animate-float-medium"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent-200 rounded-full opacity-20 animate-float-fast"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-down">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-8 shadow-2xl animate-bounce-in">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 animate-fade-in-up stagger-1 leading-tight">
            {locale === 'en' ? 'Crop Solutions' : 'فصل کی حل'}
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-5xl mx-auto animate-slide-up stagger-2 leading-relaxed">
            {locale === 'en' ? 'Comprehensive solutions for Pakistan\'s major crops, from seed to harvest' : 'پاکستان کی اہم فصلوں کے لیے جامع حل، بیج سے لے کر کٹائی تک'}
          </p>
        </div>

      {/* Desktop Carousel - 4 Cards at a time */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 hidden lg:block mb-12">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl animate-fade-in-up stagger-3">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 25}%)` }}
          >
            {crops.map((crop, index) => (
              <div key={`${crop.nameEn}-${index}`} className="w-1/4 flex-shrink-0 px-3">
                <CropCard crop={crop} locale={locale} />
              </div>
            ))}
            {/* Add first 3 cards at the end to fill empty space */}
            {crops.slice(0, 3).map((crop, index) => (
              <div key={`${crop.nameEn}-end-${index}`} className="w-1/4 flex-shrink-0 px-3">
                <CropCard crop={crop} locale={locale} />
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

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-4">
          {crops.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-5 h-5 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-green-500 scale-125 shadow-2xl' 
                  : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile/Tablet Carousel */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:hidden mb-12">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl animate-fade-in-up stagger-3">
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {crops.map((crop, index) => (
              <div key={`${crop.nameEn}-${index}`} className="w-full flex-shrink-0 px-2">
                <CropCard crop={crop} locale={locale} />
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

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {crops.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-green-500 scale-125 shadow-2xl' 
                  : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
              }`}
            />
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <Link
          href="/crop-solutions"
          className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-bounce-in"
        >
          {locale === 'en' ? 'View All Crop Solutions' : 'تمام فصل کی حل دیکھیں'}
          <ArrowRight className="ml-3 w-6 h-6 animate-float-gentle" />
        </Link>
      </div>
    </div>
    </section>
  );
}

// Enhanced Crop Card Component - Single Image
function CropCard({ crop, locale }: { crop: Crop; locale: string }) {
  return (
    <Link href={crop.href} className="block">
      <div className="overflow-hidden rounded-3xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 group cursor-pointer animate-scale-in">
        {/* Single Static Image */}
        <div className="relative h-80 w-full">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={crop.image}
              alt={crop.nameEn}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-all duration-700 group-hover:scale-125"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            
            {/* Crop Name - Always Visible */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="bg-white/20 backdrop-blur-sm rounded-b-3xl p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-lg">
                      {crop.name}
                    </h3>
                  </div>
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full group-hover:scale-110 transition-all duration-300 ml-4 shadow-lg">
                    <ArrowRight className="w-7 h-7 text-white group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Description - Slides up on hover */}
            <div className="absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <div className="bg-white/95 backdrop-blur-md rounded-t-3xl p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                      {crop.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {crop.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full group-hover:scale-110 transition-all duration-300 ml-4 shadow-lg">
                    <ArrowRight className="w-7 h-7 text-white group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CropsSection; 