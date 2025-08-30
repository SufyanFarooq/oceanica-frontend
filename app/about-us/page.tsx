'use client'

import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'

import {
  Leaf, Factory, Users, Globe, Clock,
  Award, Shield, TestTube, CheckCircle, ArrowLeft
} from 'lucide-react'

export default function AboutUs() {
  const [counts, setCounts] = useState({
    experience: 0,
    countries: 0,
    complexes: 0,
    employees: 0
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
              countries: 50,
              complexes: 3,
              employees: 1000
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
    { number: counts.experience,  label: 'Years of Experience',   icon: Clock, suffix: '+' },
    { number: counts.countries,   label: 'Exporting Countries',   icon: Globe, suffix: '+' },
    { number: counts.complexes,   label: 'Industrial Complexes',  icon: Factory, suffix: '' },
    { number: counts.employees,   label: 'Employees',             icon: Users, suffix: '+' },
  ]

  const journey = [
    {
      year: '2008',
      title: 'Foundation and Vision',
      description:
        'Oceanica Crop Science was established to revolutionize the agri-chemical industry and promote sustainable farming.',
      achievements: ['Company established', 'First industrial complex in Lahore'],
    },
    {
      year: '2012',
      title: 'Expansion & Growth',
      description:
        'Second industrial complex launched in Faisalabad; production scaled for local & global demand.',
      achievements: ['Second complex (Faisalabad)', 'Expanded product portfolio'],
    },
    {
      year: '2015–2018',
      title: 'Production Milestones',
      description:
        'Became the largest producer of Bio Fertilizers in Pakistan and expanded to regional markets.',
      achievements: ['#1 Bio Fertilizers in Pakistan', 'Export to 25+ countries'],
    },
    {
      year: '2020–Present',
      title: 'Global Leadership',
      description:
        'Recognized worldwide for innovation; exporting to 50+ countries with 1000+ employees.',
      achievements: ['50+ countries', '1000+ dedicated employees'],
    },
  ]

  const solutions = [
    {
      title: 'Liquid Fertilizers',
      description:
        'Innovative liquid formulations to improve soil fertility, root growth, and yield.',
      image: '/assets/about-us/liquid-fertilizers.jpg',
      color: 'bg-green-50',
    },
    {
      title: 'Powder Speciality Fertilizers',
      description:
        'Macro & microelements with amino acids in powder form for growth and quality.',
      image: '/assets/about-us/powder-speciality-fertilizers.jpg',
      color: 'bg-blue-50',
    },
    {
      title: 'Granular Speciality Fertilizers',
      description:
        'Slow-release granules that feed plants over extended periods.',
      image: '/assets/about-us/granular-speciality-fertilizers.jpg',
      color: 'bg-violet-50',
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
    <div className="min-h-screen bg-[#F7FAF8] text-slate-900">
      <Navbar />

      {/* HERO — video with gradient overlay */}
      <section className="relative overflow-hidden m-2 rounded-2xl">
        {/* Background Video Container */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            className="w-full h-full object-cover" 
            autoPlay 
            muted 
            loop 
            playsInline
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: '1'
            }}
          >
            <source src="/company-overview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30 z-2"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 text-center md:py-24">
          <div className="mb-6 flex justify-center">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-sm font-medium text-primary-700 backdrop-blur hover:bg-white/90 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-sm font-medium text-primary-700 backdrop-blur">
            <Leaf className="h-4 w-4" /> Oceanica Crop Science
          </div>
          <h1 className="text-4xl font-bold text-white md:text-5xl">Overview | Presenting Oceanica</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-primary-50">
            Boosting yields and advancing sustainable agriculture through innovative, high-quality solutions
            in bio and speciality fertilizers.
          </p>
          <div className="mt-8 inline-flex rounded-xl bg-white px-6 py-4 shadow">
            <div>
              <div className="text-xl font-semibold">Sustain the world</div>
              <div className="text-slate-600">Explore more ↓</div>
            </div>
          </div>
          

        </div>
      </section>

      {/* OVERVIEW + STATS */}
      <section className="py-12" ref={statsRef}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold">Overview | Presenting Oceanica</h2>
            <p className="mt-3 text-slate-600">
              Based in Pakistan, Oceanica tackles soil fertility, crop protection, and food security with products that
              maximize productivity and minimize environmental impact.
            </p>
            <p className="mt-3 text-slate-600">
              With global reach and constant innovation, we support a sustainable future for agriculture, benefitting
              communities locally and worldwide.
            </p>
            <p className="mt-3 text-slate-600">
              We are Pakistan&apos;s largest producer of Bio Fertilizers and a leading supplier of speciality fertilizers,
              operating multiple production facilities for both domestic and international markets.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="mb-4 text-center text-lg font-semibold">Oceanica at a Glance</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ number, label, icon: Icon, suffix }) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary-50">
                      <Icon className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900">
                      {number}{suffix}
                    </div>
                    <div className="text-sm text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-primary-50 p-4 text-center text-sm font-semibold text-primary-700">
                #1 Bio Fertilizers Producer in Pakistan • #3 Speciality Fertilizers Producer in Asia
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
