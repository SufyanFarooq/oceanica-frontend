'use client'

import { useState, useEffect } from 'react'
import { useI18n } from '@/app/i18n/context'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { HeroSection, FeaturesSection, CropsSection, CTASection, ScrollSection, CurrentHappeningsSection } from '@/components/landing'

export default function HomePage() {
  const { isRTL } = useI18n()

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ScrollSection />
      <CurrentHappeningsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
