'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Locale = 'en' | 'ur'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  isRTL: boolean
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')
  const [translations, setTranslations] = useState<Record<string, any>>({})
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Mark as client-side
    setIsClient(true)
    
    // Load saved language preference from localStorage
    const savedLocale = localStorage.getItem('locale') as Locale
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'ur')) {
      setLocale(savedLocale)
    }
  }, [])

  useEffect(() => {
    // Only run on client-side
    if (!isClient) return
    
    // Save language preference to localStorage
    localStorage.setItem('locale', locale)
    
    // Update document direction for RTL support
    document.documentElement.dir = locale === 'ur' ? 'rtl' : 'ltr'
    document.documentElement.lang = locale

    // Set translations based on locale
    const translations = {
      nav: {
        crops: locale === 'en' ? "Crops" : "فصلیں",
        products: locale === 'en' ? "Products" : "مصنوعات", 
        sustainability: locale === 'en' ? "Sustainability" : "پائیداری",
        aboutUs: locale === 'en' ? "About Us" : "ہمارے بارے میں",
        contactUs: locale === 'en' ? "Contact Us" : "رابطہ",
        nayaSavera: locale === 'en' ? "Naya Savera" : "نیا سویرا",
        careers: locale === 'en' ? "Careers" : "کیریئر"
      },
      footer: {
        description: locale === 'en' 
          ? "Empowering farmers with innovative agricultural solutions for sustainable farming and maximum crop yield."
          : "پائیدار کاشتکاری اور زیادہ سے زیادہ فصل کی پیداوار کے لیے کسانوں کو جدید زرعی حل فراہم کرنا۔",
        cropSolutions: locale === 'en' ? "Crop Solutions" : "فصل کے حل",
        products: locale === 'en' ? "Products" : "مصنوعات",
        company: locale === 'en' ? "Company" : "کمپنی"
      },
      home: {
        hero: {
          title: "Leading Agricultural Solutions",
          titleHighlight: "for Sustainable Farming",
          subtitle: "Empowering farmers with innovative crop protection and nutrition solutions for maximum yield and environmental sustainability.",
          exploreCrops: "Explore Crops",
          viewProducts: "View Products"
        },
        features: {
          subtitle: "Why Choose Oceanica Crop Science",
          innovation: {
            title: "Innovation & Technology",
            description: "Cutting-edge agricultural solutions powered by advanced research and technology."
          },
          quality: {
            title: "Premium Quality",
            description: "Rigorous quality control ensures every product meets the highest standards."
          },
          results: {
            title: "Proven Results",
            description: "Trusted by farmers worldwide for consistent, superior crop yields."
          },
          support: {
            title: "Expert Support",
            description: "Dedicated agricultural experts providing guidance and support."
          }
        },
        cta: {
          subtitle: "Ready to transform your agricultural practices? Contact our experts today for personalized solutions."
        },
        crops: {
          title: "Crop Solutions",
          subtitle: "Specialized nutrition and protection for every crop type"
        }
      }
    }
    setTranslations(translations)
  }, [locale, isClient])

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  const isRTL = locale === 'ur'

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, isRTL }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
