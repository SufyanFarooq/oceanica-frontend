'use client'

import Link from 'next/link'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import { useI18n } from '@/app/i18n/context'

export default function CTASection() {
  const { t, locale } = useI18n()

  return (
    <section className="py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-white/10 rounded-full animate-float-medium"></div>
      <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-white/10 rounded-full animate-float-fast"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-float-gentle"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8 shadow-2xl animate-bounce-in">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-2xl leading-tight animate-fade-in-up stagger-1">
              {locale === 'en' ? 'Ready to Transform Your Farming?' : 'اپنی کاشتکاری کو تبدیل کرنے کے لیے تیار ہیں؟'}
            </h2>
            <p className="text-2xl text-white/90 mb-10 leading-relaxed drop-shadow-lg animate-slide-up stagger-2">
              {t('home.cta.subtitle')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-6 mb-10 animate-fade-in-up stagger-3">
              <div className="flex items-center text-white/90 group hover:text-white transition-colors duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-xl font-semibold">+92 300 1234567</span>
              </div>
              <div className="flex items-center text-white/90 group hover:text-white transition-colors duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xl font-semibold">info@oceanica.com</span>
              </div>
              <div className="flex items-center text-white/90 group hover:text-white transition-colors duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-xl font-semibold">
                  {locale === 'en' ? 'Lahore, Pakistan' : 'لاہور، پاکستان'}
                </span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 animate-bounce-in">
              <Link 
                href="/contact-us" 
                className="bg-gradient-to-r from-white to-gray-100 text-blue-600 hover:from-gray-100 hover:to-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-3xl inline-flex items-center justify-center shadow-2xl"
              >
                {locale === 'en' ? 'Get Started Today' : 'آج شروع کریں'}
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                href="/products/search/crop-protection" 
                className="bg-transparent border-3 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-3xl inline-flex items-center justify-center backdrop-blur-sm"
              >
                {locale === 'en' ? 'Browse Products' : 'پروڈکٹس دیکھیں'}
              </Link>
            </div>
          </div>
          
          {/* Right Side - Stats */}
          <div className="animate-fade-in-right">
            <div className="bg-white/15 backdrop-blur-md rounded-3xl p-10 border border-white/30 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {locale === 'en' ? 'Our Impact' : 'ہمارا اثر'}
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-white to-transparent mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl font-bold text-white mb-3 drop-shadow-lg">500+</div>
                  <div className="text-white/90 font-semibold text-lg">
                    {locale === 'en' ? 'Happy Farmers' : 'خوش کسان'}
                  </div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl font-bold text-white mb-3 drop-shadow-lg">50+</div>
                  <div className="text-white/90 font-semibold text-lg">
                    {locale === 'en' ? 'Products' : 'پروڈکٹس'}
                  </div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl font-bold text-white mb-3 drop-shadow-lg">10+</div>
                  <div className="text-white/90 font-semibold text-lg">
                    {locale === 'en' ? 'Years Experience' : 'سال کا تجربہ'}
                  </div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl font-bold text-white mb-3 drop-shadow-lg">95%</div>
                  <div className="text-white/90 font-semibold text-lg">
                    {locale === 'en' ? 'Success Rate' : 'کامیابی کی شرح'}
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <p className="text-white/90 text-lg leading-relaxed">
                    {locale === 'en' ? 'Join thousands of farmers who trust Oceanica for their agricultural needs' : 'ہزاروں کسانوں میں شامل ہوں جو اپنی زرعی ضروریات کے لیے اوشینیکا پر بھروسہ کرتے ہیں'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
