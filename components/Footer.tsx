'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useI18n } from '../app/i18n/context'

export default function Footer() {
  const { t, locale, isRTL } = useI18n()

  return (
    <footer className="bg-gray-900 text-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src={locale === 'en' ? '/logo-en.png' : '/logo-ur.png'}
                alt={locale === 'en' ? 'Oceanica Logo' : 'اوشینیکا لوگو'}
                width={40}
                height={40}
                className="rounded"
              />
              <h3 className="text-2xl font-bold text-primary-500">oceanica.</h3>
            </div>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="text-sm text-gray-400">
              <p>{locale === 'en' ? 'Pakistan' : 'پاکستان'}</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.cropSolutions')}</h4>
            <ul className="space-y-2">
              <li><Link href="/crop-solutions/corn" className="text-gray-300 hover:text-primary-400">
                {locale === 'en' ? 'Corn' : 'مکئی'}
              </Link></li>
              <li><Link href="/crop-solutions/wheat" className="text-gray-300 hover:text-primary-400">
                {locale === 'en' ? 'Wheat' : 'گندم'}
              </Link></li>
              <li><Link href="/crop-solutions/rice" className="text-gray-300 hover:text-primary-400">
                {locale === 'en' ? 'Rice' : 'چاول'}
              </Link></li>
              <li><Link href="/crop-solutions/sugarcane" className="text-gray-300 hover:text-primary-400">
                {locale === 'en' ? 'Sugarcane' : 'گنا'}
              </Link></li>
              <li><Link href="/crop-solutions/potato" className="text-gray-300 hover:text-primary-400">
                {locale === 'en' ? 'Potato' : 'آلو'}
              </Link></li>
              <li><Link href="/crop-solutions/cotton" className="text-gray-300 hover:text-primary-400">
                {locale === 'en' ? 'Cotton' : 'کپاس'}
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.products')}</h4>
            <ul className="space-y-2">
              <li><Link href="/products/search/crop-protection/type/herbicide-1156" className="text-gray-300 hover:text-primary-400">
                {locale === 'en' ? 'Herbicide' : 'جڑی بوٹی مار'}
              </Link></li>
              <li><Link href="/products/search/crop-protection/type/insecticide-1166" className="text-gray-300 hover:text-primary-400">
                {locale === 'en' ? 'Insecticide' : 'کیڑے مار'}
              </Link></li>
              <li><Link href="/products/search/crop-protection/type/fungicide-1161" className="text-gray-300 hover:text-primary-400">
                {locale === 'en' ? 'Fungicide' : 'فنگس مار'}
              </Link></li>
              <li><Link href="/products/search/crop-protection/type/seedcare-1176" className="text-gray-300 hover:text-primary-400">
                {locale === 'en' ? 'Seedcare' : 'بیج کی دیکھ بھال'}
              </Link></li>
              <li><Link href="/products/search/crop-protection" className="text-gray-300 hover:text-primary-400">
                {locale === 'en' ? 'Crop Enhancement' : 'فصلوں کی بہتری'}
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-gray-300 hover:text-primary-400">
                {t('nav.aboutUs')}
              </Link></li>
              <li><Link href="/naya-savera" className="text-gray-300 hover:text-primary-400">
                {t('nav.nayaSavera')}
              </Link></li>
              <li><Link href="/stewardship" className="text-gray-300 hover:text-primary-400">
                {t('nav.sustainability')}
              </Link></li>
              <li><Link href="/contact-us" className="text-gray-300 hover:text-primary-400">
                {t('nav.contactUs')}
              </Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-primary-400">
                {t('nav.careers')}
              </Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
