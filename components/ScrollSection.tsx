'use client'

import React, { useRef, useEffect, useMemo } from "react";
import { useI18n } from '../app/i18n/context'
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Crop = {
  name: string
  nameEn: string
  href: string
  image: string
  color: string
  description: string
}

function ScrollSection() {
  const { t, locale } = useI18n()

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

  console.log('ScrollSection: crops.length =', crops.length);
  console.log('ScrollSection: crops data =', crops);

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/landing/crops/crops.jpg"
        alt="Crops Background"
        fill
        className="object-cover opacity-10"
        priority
      />
      
      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          {locale === 'en' ? 'Crop Solutions' : 'فصل کی حل'}
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          {locale === 'en' ? 'Comprehensive solutions for Pakistan\'s major crops, from seed to harvest' : 'پاکستان کی اہم فصلوں کے لیے جامع حل، بیج سے لے کر کٹائی تک'}
        </p>
      </div>

      {/* Simple Grid Layout for Testing */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crops.map((crop, index) => (
            <div key={`${crop.nameEn}-${index}`} className="bg-white shadow-2xl overflow-hidden rounded-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-100" >
              <div className="relative h-64 w-full p-4">
                <div className="relative h-full w-full rounded-xl overflow-hidden">
                  <Image
                    src={crop.image}
                    alt={crop.nameEn}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
              </div>
              <div className="p-6 pt-2">
                <span className={`inline-block bg-gradient-to-r ${crop.color} px-4 py-2 rounded-full font-bold text-sm text-white shadow-lg mb-4`}>
                  {crop.name}
                </span>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{crop.name}</h3>
                <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                  {crop.description}
                </p>
                <Link
                  href={crop.href}
                  className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  {locale === 'en' ? 'Learn More' : 'مزید جانیں'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-16 text-center">
        <Link
          href="/crop-solutions"
          className="btn-primary text-lg px-8 py-4"
        >
          {locale === 'en' ? 'View All Crop Solutions' : 'تمام فصل کی حل دیکھیں'}
        </Link>
      </div>
    </section>
  );
}

export default ScrollSection; 