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
  Sprout, Droplets, Zap, Heart
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

  // Animated counting effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start counting animation
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
            
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )
    
    if (statsRef.current) {
      observer.observe(statsRef.current)
    }
    
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
      image: '/assets/products/Crop Protection/hero-banner.jpg',
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
      <section className="relative overflow-hidden m-2 rounded-2xl py-32 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/about-us/agricultural-field.jpg"
            alt="Agricultural Field"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-emerald-900/60"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            {locale === 'en' ? 'About Oceanica Crop Science' : 'اوشینیکا کراپ سائنس کے بارے میں'}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-emerald-50">
            {locale === 'en' 
              ? 'Empowering farmers with innovative agricultural solutions for sustainable farming and maximum crop yield.'
              : 'پائیدار کاشتکاری اور زیادہ سے زیادہ فصل کی پیداوار کے لیے کسانوں کو جدید زرعی حل فراہم کرنا۔'
            }
          </p>
        </div>
      </section>

      {/* OVERVIEW + STATS */}
      <section className="py-12" ref={statsRef}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold">
              {locale === 'en' ? 'About Oceanica Crop Science' : 'اوشینیکا کراپ سائنس کے بارے میں'}
            </h2>
            <p className="mt-3 text-slate-600">
              {locale === 'en' 
                ? 'Oceanica Crop Science is a leading agricultural solutions provider, specializing in bio-fertilizers, speciality fertilizers, and crop protection products. We are committed to sustainable farming practices and helping farmers achieve maximum yield.'
                : 'اوشینیکا کراپ سائنس ایک معروف زرعی حل فراہم کنندہ ہے، جو بائیو کھادوں، خصوصی کھادوں اور فصل کی حفاظت کی مصنوعات میں مہارت رکھتا ہے۔ ہم پائیدار کاشتکاری کے طریقوں کے لیے پرعزم ہیں اور کسانوں کو زیادہ سے زیادہ پیداوار حاصل کرنے میں مدد کرتے ہیں۔'
              }
            </p>
            <p className="mt-3 text-slate-600">
              {locale === 'en'
                ? 'With over 15 years of experience in the agricultural industry, we have built a reputation for quality, innovation, and farmer support. Our products are designed to enhance soil health, improve crop yield, and promote sustainable agricultural practices.'
                : 'زرعی صنعت میں 15 سال سے زیادہ کے تجربے کے ساتھ، ہم نے معیار، جدت اور کسانوں کی مدد کے لیے ایک شہرت قائم کی ہے۔ ہماری مصنوعات مٹی کی صحت کو بہتر بنانے، فصل کی پیداوار کو بہتر بنانے اور پائیدار زرعی طریقوں کو فروغ دینے کے لیے ڈیزائن کی گئی ہیں۔'
              }
            </p>
            <p className="mt-3 text-slate-600">
              {locale === 'en'
                ? 'We serve farmers across Pakistan and export our products to over 25 countries, making us a trusted partner in global agriculture.'
                : 'ہم پاکستان بھر کے کسانوں کی خدمت کرتے ہیں اور اپنی مصنوعات کو 25 سے زیادہ ممالک میں برآمد کرتے ہیں، جو ہمیں عالمی زراعت میں ایک قابل اعتماد پارٹنر بناتا ہے۔'
              }
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="mb-4 text-center text-lg font-semibold">
                {locale === 'en' ? 'Oceanica at a Glance' : 'اوشینیکا ایک نظر میں'}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ number, label, icon: Icon, suffix }) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                      <Icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900">
                      {number}{suffix}
                    </div>
                    <div className="text-sm text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-center text-sm font-semibold text-emerald-700">
                {locale === 'en' 
                  ? 'Leading Agricultural Solutions Provider • Trusted by Farmers Worldwide'
                  : 'معروف زرعی حل فراہم کنندہ • دنیا بھر کے کسانوں کی طرف سے قابل اعتماد'
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIAL COMPLEXES */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Our Industrial Complexes</h2>
            <p className="mt-1 text-slate-600">State-of-the-art facilities across Pakistan</p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {[
              '/assets/about-us/company-overview-1.png',
              '/assets/about-us/abu-rawah-3.jpg',
            ].map((src) => (
              <div key={src} className="relative h-72 overflow-hidden rounded-2xl shadow">
                <Image src={src} alt="Industrial Complex" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDATION */}
      <section className="py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Our Foundation | Promoting Excellence in Agriculture</h2>
            <p className="mt-3 text-slate-600">
              Oceanica began in 2008 with a vision to create high-quality Bio Fertilizers, Specialty Fertilizers, and Crop
              Protection products that make a real difference to farm output.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700">
              {['High quality Bio Fertilizers', 'Speciality Fertilizers', 'Crop Protection Products'].map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary-600" />
                  {x}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-slate-600">
              In a short time we became known for pushing boundaries and setting new standards, paving the way for
              significant advancements in agricultural practices.
            </p>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl shadow">
            <Image src="/assets/about-us/sadat-company-overview1.jpg" alt="Production Facilities" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* JOURNEY — timeline */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Our Journey</h2>
            <p className="mt-1 text-slate-600">From vision to market leadership</p>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {journey.map((item) => (
              <div key={item.year} className="relative pl-8">
                <div className="absolute left-3 top-0 flex h-full flex-col items-center">
                  <span className="h-3 w-3 rounded-full border-2 border-primary-600 bg-white" />
                  <span className="mt-1 h-full w-px bg-slate-200" />
                </div>
                <h3 className="text-lg font-semibold">
                  {item.year} — {item.title}
                </h3>
                <p className="mt-1 text-slate-600">{item.description}</p>
                <ul className="mt-2 space-y-1 text-slate-700">
                  {item.achievements.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-primary-600" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold">What we offer | Innovative Agricultural Solutions</h2>
            <p className="mt-1 text-slate-600">Committed to developing and supporting agriculture to achieve food security.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {solutions.map((s) => (
              <article key={s.title} className={`overflow-hidden rounded-2xl ${s.color} shadow-sm transition hover:shadow-md`}>
                <div className="relative h-44 w-full">
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-slate-600">{s.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL SOLUTIONS */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Additional Solutions</h2>
            <p className="mt-1 text-slate-600">Comprehensive agricultural solutions for modern farming</p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-white shadow">
              <div className="relative h-60 w-full">
                <Image src="/assets/about-us/powder-feed-additives-1.jpg" alt="Powder Feed Additives" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Powder Feed Additives</h3>
                <p className="mt-1 text-slate-600">
                  Essential feed additives for livestock, poultry, and aquaculture—manufactured with pure inputs and
                  heavy-metal levels below international thresholds.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="mb-4 text-center text-xl font-semibold">Our Production Facilities</h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-primary-50 p-4 text-center">
                  <div className="font-semibold">Lahore Industrial Complex</div>
                  <p className="text-sm text-slate-600">Opened 2008 • Focus on Bio fertilizers</p>
                </div>
                <div className="rounded-lg bg-blue-50 p-4 text-center">
                  <div className="font-semibold">Faisalabad Industrial Complex</div>
                  <p className="text-sm text-slate-600">Launched 2012 • Expanding capacity</p>
                </div>
                <div className="rounded-lg bg-teal-50 p-4 text-center">
                  <div className="font-semibold">Karachi Industrial Complex</div>
                  <p className="text-sm text-slate-600">Opened 2020 • Export-oriented production</p>
                </div>
              </div>
            </div>
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
