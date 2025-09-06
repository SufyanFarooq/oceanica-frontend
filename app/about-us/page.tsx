'use client'

import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '../i18n/context'

import {
  Leaf, Factory, Users, Globe, Clock,
  Award, Shield, TestTube, CheckCircle, ArrowLeft,
  Sprout, Droplets, Zap, Heart, TrendingUp, Target, Star
} from 'lucide-react'

export default function AboutUs() {
  const { locale, isRTL } = useI18n()
  const [counts, setCounts] = useState({
    experience: 0,
    countries: 0,
    products: 0,
    farmers: 0
  })
  
  const statsRef = useRef<HTMLElement>(null)
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())
  const [activeJourneyIndex, setActiveJourneyIndex] = useState(0)

  // Scroll animations and counting effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-animate-id')
            if (elementId) {
              setVisibleElements(prev => new Set(Array.from(prev).concat(elementId)))
            }
            
            // Start counting animation for stats
            if (entry.target === statsRef.current) {
              const targetCounts = {
                experience: 15,
                countries: 25,
                products: 150,
                farmers: 50000
              }
              
              Object.keys(targetCounts).forEach((key) => {
                const target = targetCounts[key as keyof typeof targetCounts]
                const duration = 2000 // 2 seconds
                const increment = target / (duration / 16) // 60fps
                let current = 0
                
                const timer = setInterval(() => {
                  current += increment
                  if (current >= target) {
                    current = target
                    clearInterval(timer)
                  }
                  
                  setCounts(prev => ({
                    ...prev,
                    [key]: Math.floor(current)
                  }))
                }, 16)
              })
            }
          }
        })
      },
      { threshold: 0.1 }
    )
    
    // Observe all elements with data-animate-id
    const elementsToObserve = document.querySelectorAll('[data-animate-id]')
    elementsToObserve.forEach(el => observer.observe(el))
    
    if (statsRef.current) {
      observer.observe(statsRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  // Journey scroll animation
  useEffect(() => {
    const journeySection = document.querySelector('[data-animate-id="journey"]')
    if (!journeySection) return

    const journeyCards = journeySection.querySelectorAll('.journey-card')
    if (journeyCards.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-card-index') || '0')
            setActiveJourneyIndex(cardIndex)
          }
        })
      },
      { 
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px'
      }
    )

    journeyCards.forEach(card => observer.observe(card))
    
    return () => observer.disconnect()
  }, [])

  // ---- data (keep/edit as you like) ----
  const stats = [
    { number: counts.experience,  label: locale === 'en' ? 'Years of Experience' : 'سال کا تجربہ',   icon: Clock, suffix: '+' },
    { number: counts.countries,   label: locale === 'en' ? 'Countries Served' : 'خدمت کرنے والے ممالک',   icon: Globe, suffix: '+' },
    { number: counts.products,   label: locale === 'en' ? 'Product Varieties' : 'پروڈکٹ کی اقسام',  icon: Leaf, suffix: '+' },
    { number: counts.farmers,   label: locale === 'en' ? 'Farmers Supported' : 'کسانوں کی مدد',             icon: Users, suffix: '+' },
  ]

  const journey = [
    {
      year: '2008',
      title: locale === 'en' ? 'Foundation and Vision' : 'بنیاد اور وژن',
      description: locale === 'en' 
        ? 'Oceanica Crop Science was established with a vision to revolutionize agricultural practices through innovative crop protection and nutrition solutions.'
        : 'اوشینیکا کراپ سائنس کو جدید فصل کی حفاظت اور غذائیت کے حل کے ذریعے زرعی طریقوں میں انقلاب لانے کے وژن کے ساتھ قائم کیا گیا۔',
      achievements: locale === 'en' 
        ? ['Company established', 'First bio-fertilizer production facility']
        : ['کمپنی قائم', 'پہلی بائیو کھاد کی پیداواری سہولت'],
    },
    {
      year: '2012',
      title: locale === 'en' ? 'Product Innovation' : 'پروڈکٹ انوویشن',
      description: locale === 'en'
        ? 'Launched our first line of speciality fertilizers and expanded our bio-fertilizer range for diverse crop needs.'
        : 'ہماری پہلی خصوصی کھادوں کی لائن لانچ کی اور مختلف فصلوں کی ضروریات کے لیے اپنی بائیو کھادوں کی رینج کو بڑھایا۔',
      achievements: locale === 'en'
        ? ['Speciality fertilizers launched', 'Expanded product portfolio']
        : ['خصوصی کھادیں لانچ', 'پروڈکٹ پورٹ فولیو میں اضافہ'],
    },
    {
      year: '2015–2018',
      title: locale === 'en' ? 'Market Leadership' : 'مارکیٹ لیڈرشپ',
      description: locale === 'en'
        ? 'Became a trusted name in agricultural solutions, serving farmers across Pakistan with premium quality products.'
        : 'زرعی حل میں ایک قابل اعتماد نام بن گئے، پاکستان بھر کے کسانوں کو اعلیٰ معیار کی مصنوعات فراہم کرتے ہیں۔',
      achievements: locale === 'en'
        ? ['Market leadership in Pakistan', '50,000+ farmers served']
        : ['پاکستان میں مارکیٹ لیڈرشپ', '50,000+ کسانوں کی خدمت'],
    },
    {
      year: '2020–Present',
      title: locale === 'en' ? 'Sustainable Future' : 'پائیدار مستقبل',
      description: locale === 'en'
        ? 'Leading the way in sustainable agriculture with eco-friendly solutions and innovative crop protection technologies.'
        : 'ماحول دوست حل اور جدید فصل کی حفاظت کی ٹیکنالوجی کے ساتھ پائیدار زراعت میں راہنمائی کر رہے ہیں۔',
      achievements: locale === 'en'
        ? ['150+ product varieties', '25+ countries served']
        : ['150+ پروڈکٹ اقسام', '25+ ممالک میں خدمات'],
    },
  ]

  const solutions = [
    {
      title: locale === 'en' ? 'Bio Fertilizers' : 'بائیو کھادیں',
      description: locale === 'en'
        ? 'Natural and organic solutions that enhance soil health and promote sustainable agricultural practices.'
        : 'قدرتی اور نامیاتی حل جو مٹی کی صحت کو بہتر بناتے ہیں اور پائیدار زرعی طریقوں کو فروغ دیتے ہیں۔',
      image: '/assets/products/Bio Fertilizers/hero-banner.jpg',
      color: 'bg-green-50',
      icon: Sprout,
    },
    {
      title: locale === 'en' ? 'Speciality Fertilizers' : 'خصوصی کھادیں',
      description: locale === 'en'
        ? 'Advanced nutrient solutions for optimal crop growth and maximum yield potential.'
        : 'بہترین فصل کی نشوونما اور زیادہ سے زیادہ پیداوار کے لیے جدید غذائی اجزاء کے حل۔',
      image: '/assets/products/Speciality Fertilizers/hero-banner.jpg',
      color: 'bg-blue-50',
      icon: Droplets,
    },
    {
      title: locale === 'en' ? 'Crop Protection' : 'فصل کی حفاظت',
      description: locale === 'en'
        ? 'Comprehensive crop protection solutions to safeguard your harvest from pests and diseases.'
        : 'آپ کی فصل کو کیڑوں اور بیماریوں سے بچانے کے لیے جامع فصل کی حفاظت کے حل۔',
      image: '/assets/products/Bio Fertilizers/hero-banner.jpg',
      color: 'bg-violet-50',
      icon: Shield,
    },
  ]

  const certificates = [
    { name: 'ISO 9001',  description: 'Quality Management Systems',                       image: '/assets/about-us/9001.png' },
    { name: 'ISO 14001', description: 'Environmental Management Systems',                image: '/assets/about-us/14001.png' },
    { name: 'ISO 45001', description: 'Occupational Health & Safety',                    image: '/assets/about-us/45001.png' },
    { name: 'ISO 17025', description: 'Laboratory Management Systems',                   image: '/assets/about-us/17025.png' },
    { name: 'GMP+',      description: 'Good Manufacturing Practice & HACCP',             image: '/assets/about-us/gmp.png' },
    { name: 'REACH',     description: 'EU Chemicals Compliance',                          image: '/assets/about-us/reach.png' },
    { name: 'PK Quality Mark', description: 'National quality certification',             image: '/assets/about-us/egyptian-quality-mark.png' },
    { name: 'EU Compliance',    description: 'European Fertilizing Products Regulations', image: '/assets/about-us/compliance-with-european-fertilizing.png' },
  ]

  return (
    <div className="min-h-screen bg-[#F7FAF8] text-slate-900" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />

      {/* HERO — agricultural background */}
      <section className="relative py-32 overflow-hidden m-2 rounded-2xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/about-us/about-banner.jpg"
            alt="Agricultural Field"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-emerald-900/60"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              {locale === 'en' ? 'About Oceanica Crop Science' : 'اوشینیکا کراپ سائنس کے بارے میں'}
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              {locale === 'en' 
                ? 'Empowering farmers with innovative agricultural solutions for sustainable farming and maximum crop yield.'
                : 'پائیدار کاشتکاری اور زیادہ سے زیادہ فصل کی پیداوار کے لیے کسانوں کو جدید زرعی حل فراہم کرنا۔'
              }
            </p>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <Leaf className="w-6 h-6" />
              <span className="font-semibold text-lg">Oceanica Crop Science</span>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW + STATS */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white" ref={statsRef} data-animate-id="overview">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-4 lg:grid-cols-12">
          <div className={`lg:col-span-7 transition-all duration-1000 ${visibleElements.has('overview') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
                <Star className="w-4 h-4 mr-2" />
                {locale === 'en' ? 'About Us' : 'ہمارے بارے میں'}
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {locale === 'en' ? 'About Oceanica Crop Science' : 'اوشینیکا کراپ سائنس کے بارے میں'}
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                {locale === 'en' 
                  ? 'Oceanica Crop Science is a leading agricultural solutions provider, specializing in bio-fertilizers, speciality fertilizers, and crop protection products. We are committed to sustainable farming practices and helping farmers achieve maximum yield.'
                  : 'اوشینیکا کراپ سائنس ایک معروف زرعی حل فراہم کنندہ ہے، جو بائیو کھادوں، خصوصی کھادوں اور فصل کی حفاظت کی مصنوعات میں مہارت رکھتا ہے۔ ہم پائیدار کاشتکاری کے طریقوں کے لیے پرعزم ہیں اور کسانوں کو زیادہ سے زیادہ پیداوار حاصل کرنے میں مدد کرتے ہیں۔'
                }
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {locale === 'en'
                  ? 'With over 15 years of experience in the agricultural industry, we have built a reputation for quality, innovation, and farmer support. Our products are designed to enhance soil health, improve crop yield, and promote sustainable agricultural practices.'
                  : 'زرعی صنعت میں 15 سال سے زیادہ کے تجربے کے ساتھ، ہم نے معیار، جدت اور کسانوں کی مدد کے لیے ایک شہرت قائم کی ہے۔ ہماری مصنوعات مٹی کی صحت کو بہتر بنانے، فصل کی پیداوار کو بہتر بنانے اور پائیدار زرعی طریقوں کو فروغ دینے کے لیے ڈیزائن کی گئی ہیں۔'
                }
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {locale === 'en'
                  ? 'We serve farmers across Pakistan and export our products to over 25 countries, making us a trusted partner in global agriculture.'
                  : 'ہم پاکستان بھر کے کسانوں کی خدمت کرتے ہیں اور اپنی مصنوعات کو 25 سے زیادہ ممالک میں برآمد کرتے ہیں، جو ہمیں عالمی زراعت میں ایک قابل اعتماد پارٹنر بناتا ہے۔'
                }
              </p>
            </div>
          </div>

          <div className={`lg:col-span-5 transition-all duration-1000 delay-300 ${visibleElements.has('overview') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
                {locale === 'en' ? 'Oceanica at a Glance' : 'اوشینیکا ایک نظر میں'}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map(({ number, label, icon: Icon, suffix }, index) => (
                  <div key={label} className={`group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${visibleElements.has('overview') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">
                      {number}{suffix}
                    </div>
                    <div className="text-sm font-medium text-slate-600">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 text-center">
                <p className="text-white font-semibold text-lg">
                  {locale === 'en' 
                    ? 'Leading Agricultural Solutions Provider • Trusted by Farmers Worldwide'
                    : 'معروف زرعی حل فراہم کنندہ • دنیا بھر کے کسانوں کی طرف سے قابل اعتماد'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* JOURNEY — timeline */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden" data-animate-id="journey">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleElements.has('journey') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              {locale === 'en' ? 'Our Journey' : 'ہمارا سفر'}
            </span>
            <h2 className="text-5xl font-bold text-white mb-4">
              {locale === 'en' ? 'From Vision to Leadership' : 'وژن سے لیڈرشپ تک'}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {locale === 'en' 
                ? 'A timeline of innovation, growth, and agricultural excellence'
                : 'جدت، ترقی اور زرعی عمدگی کا وقت کا جدول'
              }
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-500 rounded-full"></div>
            
            <div className="space-y-32">
              {journey.map((item, index) => (
                <div 
                  key={item.year} 
                  className={`journey-card relative flex items-center justify-center transition-all duration-1000 ${
                    activeJourneyIndex === index 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : activeJourneyIndex > index 
                        ? 'opacity-30 scale-95 -translate-y-8' 
                        : 'opacity-30 scale-95 translate-y-8'
                  }`}
                  data-card-index={index}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-slate-900 shadow-lg z-10 transition-all duration-500 ${
                    activeJourneyIndex === index 
                      ? 'bg-gradient-to-br from-emerald-400 to-emerald-600 scale-125' 
                      : 'bg-gradient-to-br from-emerald-600/50 to-emerald-800/50 scale-100'
                  }`}></div>
                  
                  {/* Content Card */}
                  <div className="w-full max-w-4xl">
                    <div className={`group bg-white/10 backdrop-blur-md rounded-3xl p-8 border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                      activeJourneyIndex === index 
                        ? 'bg-white/20 border-white/30 shadow-2xl' 
                        : 'bg-white/5 border-white/10 shadow-lg'
                    }`}>
                      <div className="flex items-center gap-6 mb-6">
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                          activeJourneyIndex === index 
                            ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 scale-110' 
                            : 'bg-gradient-to-br from-emerald-600/70 to-emerald-800/70 scale-100'
                        }`}>
                          <span className="text-white font-bold text-lg leading-tight text-center">{item.year}</span>
                        </div>
                        <div>
                          <h3 className={`text-3xl font-bold mb-2 transition-all duration-500 ${
                            activeJourneyIndex === index ? 'text-white' : 'text-slate-300'
                          }`}>{item.title}</h3>
                        </div>
                      </div>
                      
                      <p className={`leading-relaxed mb-8 text-xl transition-all duration-500 ${
                        activeJourneyIndex === index ? 'text-slate-200' : 'text-slate-400'
                      }`}>
                        {item.description}
                      </p>
                      
                      <div className="space-y-4">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <div 
                            key={achievementIndex} 
                            className={`flex items-center gap-4 transition-all duration-500 group-hover:translate-x-3 ${
                              activeJourneyIndex === index 
                                ? 'opacity-100 translate-x-0' 
                                : 'opacity-60 translate-x-2'
                            }`} 
                            style={{ transitionDelay: `${achievementIndex * 150}ms` }}
                          >
                            <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                              activeJourneyIndex === index 
                                ? 'bg-emerald-400 scale-125' 
                                : 'bg-emerald-500/60 scale-100'
                            }`}></div>
                            <span className={`font-medium text-lg transition-all duration-500 ${
                              activeJourneyIndex === index ? 'text-slate-100' : 'text-slate-300'
                            }`}>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white" data-animate-id="solutions">
        <div className="mx-auto max-w-7xl px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleElements.has('solutions') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
              <Target className="w-4 h-4 mr-2" />
              {locale === 'en' ? 'Our Solutions' : 'ہمارے حل'}
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {locale === 'en' ? 'What We Offer' : 'ہم کیا پیش کرتے ہیں'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {locale === 'en' 
                ? 'Innovative Agricultural Solutions for Sustainable Farming'
                : 'پائیدار کاشتکاری کے لیے جدید زرعی حل'
              }
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {solutions.map((solution, index) => (
              <article 
                key={solution.title} 
                className={`group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${
                  visibleElements.has('solutions') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={solution.image} 
                    alt={solution.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  
                  {/* Learn More Button */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
                    <span className="text-emerald-600 font-semibold text-sm group-hover:text-emerald-700 transition-colors duration-300">
                      {locale === 'en' ? 'Learn More' : 'مزید جانیں'}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY TEAM */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold">
              {locale === 'en' ? 'Our Team' : 'ہماری ٹیم'}
            </h2>
            <p className="mt-1 text-slate-600">
              {locale === 'en' 
                ? 'Meet the experts behind Oceanica Crop Science'
                : 'اوشینیکا کراپ سائنس کے پیچھے ماہرین سے ملیں'
              }
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: locale === 'en' ? 'Dr. Ahmed Hassan' : 'ڈاکٹر احمد حسن',
                position: locale === 'en' ? 'Chief Executive Officer' : 'چیف ایگزیکٹو آفیسر',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
                description: locale === 'en' 
                  ? 'Leading agricultural innovation with 20+ years of experience in crop science and sustainable farming.'
                  : '20+ سال کے تجربے کے ساتھ زرعی جدت کی قیادت کر رہے ہیں۔'
              },
              {
                name: locale === 'en' ? 'Dr. Sarah Khan' : 'ڈاکٹر سارہ خان',
                position: locale === 'en' ? 'Head of Research & Development' : 'ریسرچ اینڈ ڈیولپمنٹ کے سربراہ',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
                description: locale === 'en'
                  ? 'Expert in bio-fertilizer development and soil health optimization.'
                  : 'بائیو کھاد کی ترقی اور مٹی کی صحت کی بہتری میں ماہر۔'
              },
              {
                name: locale === 'en' ? 'Muhammad Ali' : 'محمد علی',
                position: locale === 'en' ? 'Director of Operations' : 'آپریشنز کے ڈائریکٹر',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
                description: locale === 'en'
                  ? 'Overseeing production facilities and ensuring quality standards across all operations.'
                  : 'پیداواری سہولیات کی نگرانی اور تمام آپریشنز میں معیار کو یقینی بنانا۔'
              }
            ].map((member, index) => (
              <div key={index} className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-72 w-full overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform duration-300 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-semibold text-lg mb-4">{member.position}</p>
                  <p className="text-slate-600 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="mt-6 flex items-center justify-center">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Certificates and Recognitions</h2>
            <p className="mt-1 text-slate-600">Our Quality | Compliance Commitment</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {certificates.map((c) => (
              <div key={c.name} className="rounded-2xl bg-slate-50 p-6 text-center shadow-sm transition hover:shadow-md">
                <div className="relative mx-auto h-20 w-20">
                  <Image src={c.image} alt={c.name} fill className="object-contain" />
                </div>
                <div className="mt-3 text-sm font-semibold">{c.name}</div>
                <div className="text-xs text-slate-600">{c.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold md:text-4xl">Join Our Mission</h2>
          <p className="mx-auto mt-2 max-w-2xl text-primary-100">
            Whether you’re a farmer, a partner, or someone passionate about agriculture, we’d love to hear from you.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact-us" className="rounded-xl bg-white px-6 py-3 font-semibold text-primary-700 shadow transition hover:-translate-y-0.5 hover:shadow-md">
              Get in Touch
            </Link>
            <Link href="/crop-solutions" className="rounded-xl border border-white px-6 py-3 font-semibold text-white hover:bg-white/10">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
