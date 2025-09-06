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

    // Set default translations to prevent loading state
    const defaultTranslations = {
      nav: {
        crops: "Crops",
        products: "Products", 
        sustainability: "Sustainability",
        aboutUs: "About Us",
        contactUs: "Contact Us"
      }
    }
    setTranslations(defaultTranslations)
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
