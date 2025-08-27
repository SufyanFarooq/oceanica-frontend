'use client'

import { useEffect, useMemo, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '../app/i18n/context'

type Crop = {
  name: string
  nameEn: string
  href: string
  image: string
  color: string
  description: string
}

export default function CropsSection() {
  const { t, locale } = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

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

  // ----- GSAP SCROLLTRIGGER SETUP -----
  useEffect(() => {
    let gsap: any, ScrollTrigger: any
    let scrollTween: any

    const initGSAP = async () => {
      try {
        // Dynamically import GSAP
        const gsapModule = await import('gsap')
        gsap = gsapModule.default
        
        const scrollTriggerModule = await import('gsap/ScrollTrigger')
        ScrollTrigger = scrollTriggerModule.ScrollTrigger
        
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger)

        const container = containerRef.current
        const track = trackRef.current
        
        if (!container || !track) return

        // Ensure track width equals sum of panel widths
        const setTrackWidth = () => {
          const panels = track.children
          let total = 0
          for (let i = 0; i < panels.length; i++) {
            const panel = panels[i] as HTMLElement
            // Force panel to be visible for width calculation
            panel.style.opacity = '1'
            panel.style.transform = 'none'
            panel.style.display = 'block'
            
            const width = panel.getBoundingClientRect().width
            total += width
            console.log(`Panel ${i} width:`, width, 'Panel element:', panel)
          }
          
                  // Calculate track width based on device type
        const isMobile = window.innerWidth < 768
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024
        
        let trackWidth: number
        
        // All devices: panels directly connected (no gaps)
        trackWidth = panels.length * window.innerWidth
        
        track.style.width = trackWidth + 'px'
        console.log('Track width set to:', trackWidth, 'Panels count:', panels.length, 'Mobile:', isMobile, 'Tablet:', isTablet)
        return trackWidth
        }

        const init = () => {
          const totalWidth = setTrackWidth()
          const distance = Math.max(0, totalWidth - window.innerWidth)

          // Move the TRACK, not the panels. This avoids edge cases where scrolling locks.
          scrollTween = gsap.to(track, {
            x: () => -distance,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              pin: true,
              scrub: 0.1,
              anticipatePin: 1,
              end: () => '+=' + (distance + window.innerHeight * 0.1), // small buffer so it never sticks
            }
          })

                  // Set initial visibility and positioning for all panels
        crops.forEach((crop, index) => {
          const panel = track.children[index] as HTMLElement
          if (!panel) return
          
          // Position each panel horizontally based on device type
          let xPosition: number
          
          // All devices: panels directly connected (no gaps)
          xPosition = index * window.innerWidth
          
          gsap.set(panel, { 
            opacity: 1, 
            scale: 1,
            x: xPosition
          })
          console.log(`Panel ${index} positioned at x:`, xPosition, 'Device width:', window.innerWidth)
          
          // Also set CSS directly as backup
          panel.style.opacity = '1'
          panel.style.transform = `translateX(${xPosition}px)`
          panel.style.display = 'block'
        })
        }

        init()

        // Refresh on resize
        const handleResize = () => {
          ScrollTrigger.refresh()
        }
        window.addEventListener('resize', handleResize)

        return () => {
          window.removeEventListener('resize', handleResize)
          if (scrollTween) {
            scrollTween.kill()
          }
        }

      } catch (error) {
        console.error('GSAP ScrollTrigger failed to load:', error)
        
        // Fallback: ensure content is visible
        if (trackRef.current) {
          const panels = trackRef.current.children
          for (let i = 0; i < panels.length; i++) {
            const panel = panels[i] as HTMLElement
            panel.style.opacity = '1'
            panel.style.transform = 'scale(1)'
          }
        }
      }
    }

    initGSAP()
    
    // Fallback: ensure content is visible after a short delay
    const fallbackTimer = setTimeout(() => {
      if (trackRef.current) {
        const panels = trackRef.current.children
        for (let i = 0; i < panels.length; i++) {
          const panel = panels[i] as HTMLElement
          panel.style.opacity = '1'
          panel.style.transform = 'scale(1)'
          panel.style.display = 'block'
        }
      }
    }, 1000)
    
    return () => {
      clearTimeout(fallbackTimer)
    }
  }, [crops.length])

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden py-16 h-full">
      {/* Decorative background elements */}
      {/* <div className="pointer-events-none absolute top-0 right-0 w-32 h-32 bg-accent-200 rounded-full opacity-20 translate-x-16 -translate-y-16 animate-pulse" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-24 h-24 bg-primary-200 rounded-full opacity-20 -translate-x-12 translate-y-12 animate-bounce" /> */}

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">
            {t('home.crops.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('home.crops.subtitle')}
          </p>
        </div>
      </div>

      {/* Pinned container */}
      <div 
        ref={containerRef} 
        className="w-full h-screen md:h-screen relative overflow-hidden"
        style={{ marginTop: '0px' }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/landing/crops/crops.jpg"
            alt="Crop Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          {/* Subtle overlay for better readability */}
          <div className="absolute inset-0 bg-white/30"></div>
        </div>
        {/* Moving track */}
        <div 
          ref={trackRef}
          className="absolute inset-0 flex flex-nowrap h-full will-change-transform"
        >
          {crops.map((crop, index) => (
            <div 
              key={`${crop.nameEn}-${index}`}
              className="flex-none w-screen h-screen flex items-center justify-center p-6"
              style={{ 
                // background: index % 2 === 0 ? '#f8fafc' : '#ffffff',
                // minWidth: '100vw',
                // minHeight: '100vh',
                // position: 'relative'
              }}
            >
                             <div className="max-w-5xl mx-auto text-center ">
                 <div className="relative h-[95vh] md:h-[50vh] lg:h-[95vh] xl:h-[100vh] w-full rounded-2xl shadow-2xl overflow-hidden">
                  <Image
                    src={crop.image}
                    alt={crop.nameEn}
                    fill
                    sizes="100vw"
                    priority={index === 0}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-white">
                    <span className={`inline-block bg-gradient-to-r ${crop.color} px-3 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg shadow-lg mb-2 sm:mb-4`}>
                      {crop.name}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-3 drop-shadow-lg">{crop.name}</h3>
                    <p className="text-sm sm:text-xl text-white/90 mb-4 sm:mb-6 max-w-xs sm:max-w-3xl mx-auto drop-shadow-lg">
                      {crop.description}
                    </p>
                    <Link
                      href={crop.href}
                      className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 sm:px-7 sm:py-3.5 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 text-sm sm:text-base"
                      aria-label={`${locale === 'en' ? 'Learn more about' : 'مزید جانیں'} ${crop.nameEn}`}
                    >
                      {locale === 'en' ? 'Learn More' : 'مزید جانیں'}
                      <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="max-w-7xl mx-auto px-4 pt-8 text-center">
        <Link 
          href="/crop-solutions" 
          className="btn-primary text-base px-6 py-3"
        >
          {t('home.crops.viewAll')}
        </Link>
      </div>
    </section>
  )
}
