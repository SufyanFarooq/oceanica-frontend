'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '../app/i18n/context'
import LanguageSwitcher from './LanguageSwitcher'

export default function Footer() {
  const { t, locale, isRTL } = useI18n()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 bg-accent-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary-400 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src={locale === 'en' ? '/logo-en.png' : '/logo-ur.png'}
                alt={locale === 'en' ? 'Oceanica Logo' : 'اوشینیکا لوگو'}
                width={200}
                height={60}
                className="rounded-lg shadow-lg bg-transparent mix-blend-multiply dark:mix-blend-normal"
              />
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex items-center space-x-2 text-accent-300 mb-6">
              <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
              <p className="text-sm font-medium">{locale === 'en' ? 'Pakistan' : 'پاکستان'}</p>
            </div>

            {/* Social Media Links */}
            <div className="space-y-3">
              <h5 className="text-sm font-semibold text-white uppercase tracking-wide">
                {locale === 'en' ? 'Follow Us' : 'ہمیں فالو کریں'}
              </h5>
              <div className="flex space-x-4">
                {/* Facebook */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center hover:from-pink-400 hover:via-red-400 hover:to-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Language Switcher */}
            <div className="mt-6">
              <LanguageSwitcher variant="dark" />
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white border-b-2 border-accent-500 pb-2 inline-block">
              {t('footer.cropSolutions')}
            </h4>
            <ul className="space-y-3">
              <li><Link href="/crop-solutions/corn" className="text-gray-200 hover:text-accent-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                {locale === 'en' ? 'Corn' : 'مکئی'}
              </Link></li>
              <li><Link href="/crop-solutions/wheat" className="text-gray-200 hover:text-accent-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                {locale === 'en' ? 'Wheat' : 'گندم'}
              </Link></li>
              <li><Link href="/crop-solutions/rice" className="text-gray-200 hover:text-accent-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                {locale === 'en' ? 'Rice' : 'چاول'}
              </Link></li>
              <li><Link href="/crop-solutions/sugarcane" className="text-gray-200 hover:text-accent-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                {locale === 'en' ? 'Sugarcane' : 'گنا'}
              </Link></li>
              <li><Link href="/crop-solutions/potato" className="text-gray-200 hover:text-accent-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                {locale === 'en' ? 'Potato' : 'آلو'}
              </Link></li>
              <li><Link href="/crop-solutions/cotton" className="text-gray-200 hover:text-accent-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                {locale === 'en' ? 'Cotton' : 'کپاس'}
              </Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white border-b-2 border-secondary-500 pb-2 inline-block">
              {t('footer.products')}
            </h4>
            <ul className="space-y-3">
              <li><Link href="/products/search/crop-protection/type/herbicide-1156" className="text-gray-200 hover:text-secondary-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-secondary-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                {locale === 'en' ? 'Herbicide' : 'جڑی بوٹی مار'}
              </Link></li>
              <li><Link href="/products/search/crop-protection/type/insecticide-1166" className="text-gray-200 hover:text-secondary-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-secondary-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                {locale === 'en' ? 'Insecticide' : 'کیڑے مار'}
              </Link></li>
              <li><Link href="/products/search/crop-protection/type/fungicide-1161" className="text-gray-200 hover:text-secondary-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-secondary-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                {locale === 'en' ? 'Fungicide' : 'فنگس مار'}
              </Link></li>
              <li><Link href="/products/search/crop-protection/type/seedcare-1176" className="text-gray-200 hover:text-secondary-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-secondary-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                {locale === 'en' ? 'Seedcare' : 'بیج کی دیکھ بھال'}
              </Link></li>
              <li><Link href="/products/search/crop-protection" className="text-gray-200 hover:text-secondary-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-secondary-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                {locale === 'en' ? 'Crop Enhancement' : 'فصلوں کی بہتری'}
              </Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white border-b-2 border-primary-500 pb-2 inline-block">
              {t('footer.company')}
            </h4>
            <ul className="space-y-3">
              <li><Link href="/about-us" className="text-gray-200 hover:text-primary-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                {t('nav.aboutUs')}
              </Link></li>
              <li><Link href="/naya-savera" className="text-gray-200 hover:text-primary-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                {t('nav.nayaSavera')}
              </Link></li>
              <li><Link href="/stewardship" className="text-gray-200 hover:text-primary-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                {t('nav.sustainability')}
              </Link></li>
              <li><Link href="/contact-us" className="text-gray-200 hover:text-primary-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                {t('nav.contactUs')}
              </Link></li>
              <li><Link href="/careers" className="text-gray-200 hover:text-primary-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                {t('nav.careers')}
              </Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-gray-300 text-sm">
                © {new Date().getFullYear() - 3} Oceanica Crop Science. {locale === 'en' ? 'All rights reserved.' : 'تمام حقوق محفوظ ہیں۔'}
              </p>

              {/* Legal Links */}
              <div className="flex items-center gap-4 text-sm">
                <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors duration-300">
                  {locale === 'en' ? 'Terms and Conditions' : 'شرائط و ضوابط'}
                </Link>
                <span className="text-gray-500">|</span>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300">
                  {locale === 'en' ? 'Privacy Policy' : 'پرائیویسی پالیسی'}
                </Link>
                <span className="text-gray-500">|</span>
                <Link href="/company-profile" className="text-gray-400 hover:text-white transition-colors duration-300">
                  {locale === 'en' ? 'Company Profile' : 'کمپنی پروفائل'}
                </Link>
              </div>
            </div>

            {/* Decorative Colored Shapes */}
            <div className="flex items-end space-x-3 opacity-100">
              <div className="w-12 h-12 bg-blue-500 rounded-xl shadow-lg"></div>
              <div className="w-12 h-16 bg-orange-500 rounded-xl shadow-lg"></div>
              <div className="w-12 h-20 bg-green-500 rounded-xl shadow-lg"></div>
            </div>

            <p className="text-gray-400 text-sm">
              {locale === 'en' ? 'Powered by' : 'طاقت فراہم کی گئی'}
              <a
                href="https://codebridge.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-emerald-400 hover:text-emerald-300 transition-colors duration-300 font-semibold"
              >
                Codebridge Tech Solution
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
