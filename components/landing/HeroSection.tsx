'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf } from 'lucide-react'
import { useI18n } from '@/app/i18n/context'

export default function HeroSection() {
  const { t, locale } = useI18n()
  const [currentSlide, setCurrentSlide] = useState(1)

  // Slideshow functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev % 3) + 1)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [])

  // Function to show specific slide
  const showSlide = (slideNumber: number) => {
    setCurrentSlide(slideNumber)
  }

  return (
    <section className="relative py-12 md:py-20 overflow-hidden min-h-screen md:min-h-[70vh] m-2" style={{borderRadius:"20px"}}>
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/assets/landing/hero-farming.jpg"
            alt="Farming Hero Background"
            fill
            className={`object-cover object-center transition-opacity duration-1000 ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'}`}
            priority
            unoptimized
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            id="slide-1"
          />
          <Image
            src="/assets/landing/hero-gardening.jpg"
            alt="Gardening Hero Background"
            fill
            className={`object-cover object-center transition-opacity duration-1000 ${currentSlide === 2 ? 'opacity-100' : 'opacity-0'}`}
            priority
            unoptimized
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            id="slide-2"
          />
          <Image
            src="/assets/landing/hero-seedings.jpg"
            alt="Seedings Hero Background"
            fill
            className={`object-cover object-center transition-opacity duration-1000 ${currentSlide === 3 ? 'opacity-100' : 'opacity-0'}`}
            priority
            unoptimized
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            id="slide-3"
          />
        </div>
      </div>
      
      {/* Slideshow Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        <button 
          className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === 1 ? 'bg-white/80' : 'bg-white/40'} hover:bg-white`}
          onClick={() => showSlide(1)}
        ></button>
        <button 
          className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === 2 ? 'bg-white/80' : 'bg-white/40'} hover:bg-white`}
          onClick={() => showSlide(2)}
        ></button>
        <button 
          className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === 3 ? 'bg-white/80' : 'bg-white/40'} hover:bg-white`}
          onClick={() => showSlide(3)}
        ></button>
      </div>
      
              {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg leading-tight animate-fade-in-down stagger-1">
                {t('home.hero.title')}{' '}
                <span className="text-secondary-400 bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent animate-scale-in stagger-2">
                  {t('home.hero.titleHighlight')}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 drop-shadow-lg animate-slide-up stagger-3">
                {t('home.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-bounce-in stagger-4">
                <Link href="/crop-solutions" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center animate-pulse-glow">
                  {t('home.hero.exploreCrops')}
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 animate-float-gentle" />
                </Link>
                <Link href="/products/search/crop-protection" className="bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center animate-pulse-glow">
                  {t('home.hero.viewProducts')}
                </Link>
              </div>
            </div>
            
            {/* Right Side Card with Evergrow style */}
            <div className="relative animate-fade-in-right mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 border border-white/20 animate-float-gentle">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg animate-bounce-in stagger-5">
                    <Leaf className="w-8 h-8 md:w-12 md:h-12 text-white animate-rotate-slow" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3 drop-shadow-lg animate-fade-in-up stagger-6">Oceanica Crop Science</h3>
                  <p className="text-white/90 drop-shadow-lg text-base md:text-lg animate-slide-up stagger-6">
                    {t('home.hero.subtitle').split('.')[0]}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
