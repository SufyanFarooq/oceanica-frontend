'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Leaf, Shield, Users, Target } from 'lucide-react'
import { useI18n } from './i18n/context'

export default function Home() {
  return (
    <HomeContent />
  )
}

function HomeContent() {
  const { t, isRTL } = useI18n()

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden min-h-screen" style={{borderRadius: '0 0 100px 0'}}>
        {/* Background Image */}
        <Image
          src="/assets/landing/hero.jpg"
          alt="Oceanica Crop Science Hero Background"
          fill
          className="object-cover transition-all duration-[3000ms] ease-in-out animate-ken-burns"
          priority
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                {t('home.hero.title')}{' '}
                <span className="text-secondary-400 bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
                  {t('home.hero.titleHighlight')}
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 drop-shadow-lg animate-slide-up stagger-1">
                {t('home.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-2">
                <Link href="/crop-solutions" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center">
                  {t('home.hero.exploreCrops')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/products/search/crop-protection" className="bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  {t('home.hero.viewProducts')}
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
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary-200 rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
        <div className="absolute top-20 right-0 w-24 h-24 bg-secondary-200 rounded-full opacity-20 translate-x-12"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-accent-200 rounded-full opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {t('home.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.features.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-left stagger-1">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('home.features.innovation.title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('home.features.innovation.description')}</p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-left stagger-2">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('home.features.quality.title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('home.features.quality.description')}</p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-left stagger-3">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('home.features.support.title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('home.features.support.description')}</p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-left stagger-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('home.features.results.title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('home.features.results.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Crops Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('home.crops.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.crops.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: t('nav.crops') === 'Crops' ? 'Corn' : 'مکئی', href: '/crop-solutions/corn', color: 'bg-yellow-100' },
              { name: t('nav.crops') === 'Crops' ? 'Wheat' : 'گندم', href: '/crop-solutions/wheat', color: 'bg-amber-100' },
              { name: t('nav.crops') === 'Crops' ? 'Rice' : 'چاول', href: '/crop-solutions/rice', color: 'bg-green-100' },
              { name: t('nav.crops') === 'Crops' ? 'Sugarcane' : 'گنا', href: '/crop-solutions/sugarcane', color: 'bg-red-100' },
              { name: t('nav.crops') === 'Crops' ? 'Potato' : 'آلو', href: '/crop-solutions/potato', color: 'bg-purple-100' },
              { name: t('nav.crops') === 'Crops' ? 'Cotton' : 'کپاس', href: '/crop-solutions/cotton', color: 'bg-blue-100' },
            ].map((crop) => (
              <Link
                key={crop.name}
                href={crop.href}
                className={`${crop.color} rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-200`}
              >
                <h3 className="text-lg font-semibold text-gray-900">{crop.name}</h3>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/crop-solutions" className="btn-primary">
              {t('home.crops.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              {t('home.cta.contactUs')}
            </Link>
            <Link href="/about-us" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
              {t('home.cta.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
