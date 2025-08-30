'use client'

import { useI18n } from '../app/i18n/context'
import Image from 'next/image'
import { Globe } from 'lucide-react'
import { useState, useEffect } from 'react'

type Variant = 'light' | 'dark'

export default function LanguageSwitcher({ variant = 'light' }: { variant?: Variant }) {
  const { locale, setLocale, isRTL } = useI18n()

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ur' : 'en')
  }
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const isDark = variant === 'dark'

  return (
    <div className="flex items-center space-x-2">
      <Globe className={`w-4 h-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
      <button
        onClick={toggleLanguage}
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
          isScrolled ? 'hover:bg-white/10 bg-gray-600' : 'hover:bg-gray-100 bg-white'
        }`}
        title={locale === 'en' ? 'اردو میں تبدیل کریں' : 'Switch to English'}
      >
        <div className="flex items-center space-x-2">
          {/* <Image
            src={locale === 'en' ? '/logo-ur.png' : '/logo-en.png'}
            alt={locale === 'en' ? 'Urdu Logo' : 'English Logo'}
            width={24}
            height={24}
            className="rounded"
          /> */}
          <span className={`text-sm font-medium ${isScrolled ? 'text-gray-100' : 'text-gray-700'}`}>
            {locale === 'en' ? 'اردو' : 'English'}
          </span>
        </div>
      </button>
    </div>
  )
}
