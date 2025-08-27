'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '../app/i18n/context'

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
                width={120}
                height={120}
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
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center hover:from-accent-400 hover:to-accent-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center hover:from-primary-400 hover:to-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center hover:from-secondary-400 hover:to-secondary-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center hover:from-accent-400 hover:to-accent-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
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
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Oceanica Crop Science. {locale === 'en' ? 'All rights reserved.' : 'تمام حقوق محفوظ ہیں۔'}
          </p>
        </div>
      </div>
    </footer>
  )
}
