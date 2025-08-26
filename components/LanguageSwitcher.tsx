'use client'

import { useI18n } from '../app/i18n/context'
import Image from 'next/image'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const { locale, setLocale, isRTL } = useI18n()

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ur' : 'en')
  }

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-gray-600" />
      <button
        onClick={toggleLanguage}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
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
          <span className="text-sm font-medium text-gray-700">
            {locale === 'en' ? 'اردو' : 'English'}
          </span>
        </div>
      </button>
    </div>
  )
}
