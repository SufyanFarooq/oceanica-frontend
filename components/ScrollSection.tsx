'use client'

import React, { useRef, useEffect, useMemo, useState } from "react";
import { useI18n } from '../app/i18n/context'
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
  images: string[]
}

function ScrollSection() {
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
      description: locale === 'en' ? 'High-yield corn varieties for optimal production' : 'زیادہ پیداوار والی مکئی کی اقسام',
      images: [
        '/assets/crops/corn/banner.jpg',
        '/assets/crops/corn/Corn-crop-program.png',
        '/assets/crops/corn/1920x858-24-july-2025.jpg',
        '/assets/crops/corn/Corn-page-banner.png'
      ]
    },
    { 
      name: locale === 'en' ? 'Wheat' : 'گندم',
      nameEn: 'Wheat',
      href: '/crop-solutions/wheat',
      image: '/assets/landing/crops/wheat.jpg',
      color: 'from-amber-400 to-yellow-500',
      description: locale === 'en' ? 'Premium wheat solutions for better harvests' : 'بہتر فصل کے لیے اعلیٰ معیار کی گندم',
      images: [
        '/assets/crops/wheat/wheat-field.jpg',
        '/assets/crops/wheat/wheat-plant.jpg',
        '/assets/crops/wheat/fresh-wheat-grains.jpg',
        '/assets/crops/wheat/hero-banner.jpg'
      ]
    },
    { 
      name: locale === 'en' ? 'Rice' : 'چاول',
      nameEn: 'Rice',
      href: '/crop-solutions/rice',
      image: '/assets/landing/crops/rice.jpg',
      color: 'from-green-400 to-emerald-500',
      description: locale === 'en' ? 'Advanced rice cultivation techniques' : 'جدید چاول کی کاشت کی تکنیک',
      images: [
        '/assets/crops/rice/rice-field.jpg',
        '/assets/crops/rice/rice-plant.jpg',
        '/assets/crops/rice/fresh-rice-grain.jpg',
        '/assets/crops/rice/hero-banner.jpg'
      ]
    },
    { 
      name: locale === 'en' ? 'Sugarcane' : 'گنا',
      nameEn: 'Sugarcane',
      href: '/crop-solutions/sugarcane',
      image: '/assets/landing/crops/sugarcane.jpg',
      color: 'from-red-400 to-pink-500',
      description: locale === 'en' ? 'Sweet success with sugarcane solutions' : 'گنا کی کامیاب کاشت',
      images: [
        '/assets/crops/sugarcane/sugarcane-field.jpg',
        '/assets/crops/sugarcane/sugarcane-plant.jpg',
        '/assets/crops/sugarcane/fresh-sugarcane-stalks.jpg',
        '/assets/crops/sugarcane/hero-banner.jpg'
      ]
    },
    { 
      name: locale === 'en' ? 'Potato' : 'آلو',
      nameEn: 'Potato',
      href: '/crop-solutions/potato',
      image: '/assets/landing/crops/potato.jpg',
      color: 'from-purple-400 to-indigo-500',
      description: locale === 'en' ? 'Quality potato varieties for better yields' : 'بہتر پیداوار کے لیے معیاری آلو',
      images: [
        '/assets/crops/potato/potato-field.jpg',
        '/assets/crops/potato/potato-plant.jpg',
        '/assets/crops/potato/fresh-potato-tubers.jpg',
        '/assets/crops/potato/hero-banner.jpg'
      ]
    },
    { 
      name: locale === 'en' ? 'Cotton' : 'کپاس',
      nameEn: 'Cotton',
      href: '/crop-solutions/cotton',
      image: '/assets/landing/crops/cotton.jpg',
      color: 'from-blue-400 to-cyan-500',
      description: locale === 'en' ? 'Premium cotton for textile excellence' : 'ٹیکسٹائل کی عمدگی کے لیے اعلیٰ معیار کی کپاس',
      images: [
        '/assets/crops/cotton/cotton-field.jpg',
        '/assets/crops/cotton/cotton-plant.jpg',
        '/assets/crops/cotton/fresh-cotton-bolls.jpg',
        '/assets/crops/cotton/hero-banner.jpg'
      ]
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

  console.log('ScrollSection: crops.length =', crops.length);
  console.log('ScrollSection: crops data =', crops);

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/landing/crops/crops.jpg"
        alt="Crops Background"
        fill
        className="object-cover opacity-40"
        priority
      />
      
      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          {locale === 'en' ? 'Crop Solutions' : 'فصل کی حل'}
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          {locale === 'en' ? 'Comprehensive solutions for Pakistan\'s major crops, from seed to harvest' : 'پاکستان کی اہم فصلوں کے لیے جامع حل، بیج سے لے کر کٹائی تک'}
        </p>
      </div>

      {/* Desktop Carousel - 4 Cards at a time */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 hidden lg:block">
        <div className="relative overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 25}%)` }}
          >
            {crops.map((crop, index) => (
              <div key={`${crop.nameEn}-${index}`} className="w-1/4 flex-shrink-0 px-2">
                <CropCard crop={crop} locale={locale} />
              </div>
            ))}
            {/* Add first 3 cards at the end to fill empty space */}
            {crops.slice(0, 3).map((crop, index) => (
              <div key={`${crop.nameEn}-end-${index}`} className="w-1/4 flex-shrink-0 px-2">
                <CropCard crop={crop} locale={locale} />
              </div>
            ))}
          </div>
          
          {/* Carousel Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {crops.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile/Tablet Carousel */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:hidden">
        <div className="relative overflow-hidden rounded-2xl">
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
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {crops.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-16 text-center">
        <Link
          href="/crop-solutions"
          className="btn-primary text-lg px-8 py-4"
        >
          {locale === 'en' ? 'View All Crop Solutions' : 'تمام فصل کی حل دیکھیں'}
        </Link>
      </div>
    </section>
  );
}

// Enhanced Crop Card Component - Image Focused
function CropCard({ crop, locale }: { crop: Crop; locale: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % crop.images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [crop.images.length])

  return (
    <Link href={crop.href} className="block">
      <div className="  overflow-hidden rounded-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2  group cursor-pointer">
        {/* Animated Image Gallery - Full Card */}
        <div className="relative h-96 w-full">
          <div className="relative h-full w-full overflow-hidden">
            {crop.images.map((image, index) => (
              <Image
                key={image}
                src={image}
                alt={`${crop.nameEn} ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className={`object-cover transition-all duration-2000 ease-in-out ${
                  index === currentImageIndex 
                    ? 'opacity-100 scale-105' 
                    : 'opacity-0 scale-110'
                }`}
              />
            ))}
            
            {/* Semi-transparent Overlay at Bottom */}
            <div className="absolute bottom-10 left-0 right-0 bg-white/50 backdrop-blur-sm m-2">
              <div className="flex items-center justify-between p-2">
                <span className="text-gray-800 font-semibold text-lg">
                  {crop.name}
                </span>
                <ArrowRight className="w-5 h-5 text-gray-800 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ScrollSection; 