'use client'

import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Leaf, Shield, Users, Target } from 'lucide-react'
import { useI18n } from './i18n/context'
import CropsSection from '@/components/CropsSection'
import ScrollSection from '../components/ScrollSection'

export default function Home() {
  const { locale, t } = useI18n()
  const [currentFeature, setCurrentFeature] = useState(0)

  return (
    <>
      <Head>
        <title>{locale === 'en' ? 'Oceanica Crop Science - Home' : 'اوشینیکا کراپ سائنس - ہوم'}</title>
        <meta name="description" content={locale === 'en' ? 'Leading agricultural solutions for sustainable farming' : 'پائیدار کاشتکاری کے لیے معروف زرعی حل'} />
      </Head>
      <HomeContent />
    </>
  )
}

function HomeContent() {
  const { t, isRTL, locale } = useI18n()
  const [currentCropIndex, setCurrentCropIndex] = useState(0)

  // Render translation or a skeleton while keys are still loading
  const renderT = (key: string, skeletonClasses: string = 'h-4 w-24') => {
    const value = t(key)
    return value !== key ? (
      value
    ) : (
      <span className={`inline-block rounded bg-gray-200 animate-pulse ${skeletonClasses}`} />
    )
  }

  // Scroll-based crop switching
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const cropsSection = document.querySelector('[data-crops-section]')
      
      if (cropsSection) {
        const rect = cropsSection.getBoundingClientRect()
        const sectionTop = rect.top + window.scrollY
        
        // Calculate which crop should be visible based on scroll position
        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrollProgress = (window.scrollY - sectionTop + windowHeight) / (windowHeight * 2)
          const cropIndex = Math.min(Math.floor(scrollProgress * 6), 5)
          setCurrentCropIndex(Math.max(0, cropIndex))
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden min-m-screen m-2" style={{borderRadius:"20px"}}>
        {/* Background Image */}
        <Image
          src="/assets/landing/hero.gif"
          alt="Oceanica Crop Science Hero Background"
          fill
          className="object-cover object-center"
          priority
          unoptimized
          quality={100}
          sizes="100vw"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                {renderT('home.hero.title','h-8 w-60')}{' '}
                <span className="text-secondary-400 bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
                  {renderT('home.hero.titleHighlight','h-8 w-48')}
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 drop-shadow-lg animate-slide-up stagger-1">
                {renderT('home.hero.subtitle','h-5 w-72')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-2">
                <Link href="/crop-solutions" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center">
                  {renderT('home.hero.exploreCrops','h-5 w-40')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/products/search/crop-protection" className="bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  {renderT('home.hero.viewProducts','h-5 w-40')}
                </Link>
              </div>
            </div>
            
            {/* Right Side Card with Evergrow style */}
            <div className="relative animate-fade-in-right">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-scale-in stagger-3">
                    <Leaf className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">Oceanica Crop Science</h3>
                  <p className="text-white/90 drop-shadow-lg text-lg">
                    {t('home.hero.subtitle').split('.')[0]}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Agriculture-themed animated background elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary-200 rounded-full opacity-20 -translate-x-16 -translate-y-16 animate-pulse"></div>
        <div className="absolute top-20 right-0 w-24 h-24 bg-secondary-200 rounded-full opacity-20 translate-x-12 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-accent-200 rounded-full opacity-20 animate-ping"></div>
        
        {/* Floating Leaves */}
        <div className="absolute top-10 left-1/4 w-8 h-8 text-primary-400 opacity-30 animate-float-slow">
          <Leaf className="w-full h-full" />
        </div>
        <div className="absolute top-32 right-1/3 w-6 h-6 text-secondary-400 opacity-40 animate-float-medium">
          <Leaf className="w-full h-full" />
        </div>
        <div className="absolute bottom-32 left-1/3 w-10 h-10 text-accent-400 opacity-25 animate-float-fast">
          <Leaf className="w-full h-full" />
        </div>
        
        {/* Growing Plants Animation */}
        <div className="absolute top-16 left-16 w-4 h-4 bg-accent-500 rounded-full opacity-60 animate-grow-plant"></div>
        <div className="absolute top-24 right-24 w-3 h-3 bg-primary-500 rounded-full opacity-50 animate-grow-plant-delayed"></div>
        <div className="absolute bottom-24 left-32 w-5 h-5 bg-secondary-500 rounded-full opacity-70 animate-grow-plant-slow"></div>
        
        {/* Floating Seeds */}
        <div className="absolute top-40 left-1/2 w-2 h-2 bg-accent-600 rounded-full opacity-80 animate-float-seed"></div>
        <div className="absolute top-60 right-16 w-3 h-3 bg-primary-600 rounded-full opacity-60 animate-float-seed-delayed"></div>
        <div className="absolute bottom-40 left-1/2 w-2 h-2 bg-secondary-600 rounded-full opacity-70 animate-float-seed-slow"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {locale === 'ur' && <span className="bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent">
                اوشینیکا
              </span>}
              {locale === 'en' ? 'Why Choose ' : ' کو کیوں منتخب کریں؟ '}
              {locale === 'en' &&<span className="bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent">
                Oceanica
              </span>}
              {locale === 'en' ? '?' : ''}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {renderT('home.features.subtitle','h-5 w-80')}
            </p>
          </div>
          
          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - 1 Large Card */}
            <div className="animate-fade-in-left">
              <div className="relative h-full min-h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Background Image */}
                <Image
                  src="/assets/landing/why-chose-us/Innovation.jpg"
                  alt="Innovation Background"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 drop-shadow-lg">{renderT('home.features.innovation.title','h-7 w-52')}</h3>
                  <p className="text-white/90 text-lg leading-relaxed drop-shadow-lg">{renderT('home.features.innovation.description','h-5 w-72')}</p>
                </div>
              </div>
            </div>
            
            {/* Right Column - 3 Cards in Grid */}
            <div className="grid grid-rows-2 gap-6 animate-fade-in-right h-full">
              
              {/* Top Row - 2 Cards */}
              <div className="grid grid-cols-2 gap-6">
                
                {/* Quality Card */}
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-full">
                  <div className="relative h-full min-h-[280px]">
                    <Image
                      src="/assets/landing/why-chose-us/quality.jpg"
                      alt="Quality"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-white drop-shadow-lg">{renderT('home.features.quality.title','h-5 w-36')}</h4>
                    </div>
                  </div>
                </div>
                
                {/* Support Card */}
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-full">
                  <div className="relative h-full min-h-[280px]">
                    <Image
                      src="/assets/landing/why-chose-us/support.jpg"
                      alt="Support"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-white drop-shadow-lg">{renderT('home.features.support.title','h-5 w-40')}</h4>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Row - 1 Card */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-full">
                <div className="relative h-full min-h-[280px]">
                  <Image
                    src="/assets/landing/why-chose-us/results.jpg"
                    alt="Results"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white drop-shadow-lg">{renderT('home.features.results.title','h-5 w-40')}</h4>
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </section>

      {/* Crops Section - Scroll-based Carousel */}
      {/* <CropsSection /> */}
      <ScrollSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            {renderT('home.cta.title','h-7 w-64')}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            {renderT('home.cta.subtitle','h-5 w-80')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              {renderT('home.cta.contactUs','h-5 w-32')}
            </Link>
            <Link href="/about-us" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
              {renderT('home.cta.learnMore','h-5 w-28')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
