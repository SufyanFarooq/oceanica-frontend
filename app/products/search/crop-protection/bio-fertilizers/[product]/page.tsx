

'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '../../../../../../components/Navbar'
import Footer from '../../../../../../components/Footer'
import {
  Phone,
  Download,
  Package,
  CheckCircle,
  Sprout,
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Minus,
  Plus,
  Truck,
  Shield,
  RotateCcw
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProductBySlug, getRelatedProducts } from '../../../../../../app/utils/productUtils'
import ProductCard from '../../../../../../components/ProductCard'
import AddToCartSection from '../../../../../../components/AddToCartSection'
import MobileCTA from '../../../../../../components/MobileCTA'

// Load translations
async function getTranslations(locale: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/i18n/${locale}.json`, { cache: 'no-store' })
    return res.json()
  } catch (e) {
    console.error('Failed to load translations', e)
    return {}
  }
}

export default function ProductDetail({ params }: { params: Promise<{ product: string }> }) {
  // For now, default to English. In a real app, you'd get this from headers or cookies
  const locale: 'en' | 'ur' = 'en'
  const isRTL = false // Since we're defaulting to English for now

  // Mock e-commerce data for bio-fertilizers - using fixed values to prevent hydration mismatch
  const mockPrice = 1200; // Fixed price instead of random
  const mockRating = 4.7; // Fixed rating
  const mockReviews = 35; // Fixed reviews count
  const mockInStock = true; // Fixed stock status
  const mockDiscount = 0; // Fixed discount

  const [resolvedParams, setResolvedParams] = useState<{ product: string } | null>(null)
  const [product, setProduct] = useState<any>(null)

  useEffect(() => {
    const resolveParams = async () => {
      const resolved = await params
      setResolvedParams(resolved)
      const productData = getProductBySlug('bioFertilizers', resolved.product)
      setProduct(productData)
    }
    resolveParams()
  }, [params])

  if (!product) {
    return <div className="min-h-screen bg-[#F7FAF8] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading product...</p>
      </div>
    </div>
  }

  const relatedProducts = getRelatedProducts('bioFertilizers', product.id, true).slice(0, 3)
  const name = locale === 'en' ? product.name : product.nameUr
  const desc = locale === 'en' ? product.description : product.descriptionUr
  const features: string[] = (locale === 'en' ? product.features : product.featuresUr) || []
  const applications: string[] = (locale === 'en' ? product.applications : product.applicationsUr) || []
  const packaging: string[] = (locale === 'en' ? product.packaging : product.packagingUr) || []
  const comp = product.nutrientComposition || {}

  return (
    <div className="min-h-screen bg-[#F7FAF8]" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />

      {/* HERO */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 mb-2">
          <nav className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-emerald-700">{locale === 'en' ? 'Home' : 'ہوم'}</Link>
            <span>/</span>
            <Link href="/products/search/crop-protection/bio-fertilizers" className="hover:text-emerald-700">
              {locale === 'en' ? 'Bio Fertilizers' : 'بائیو کھادیں'}
            </Link>
            <span>/</span>
            <span className="font-medium text-emerald-700">{name}</span>
          </nav>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 lg:grid-cols-12">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-50">
                <Image
                  src={product.image}
                  alt={name}
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-contain"
                  priority={true}
                />
                {/* top-left small badge */}
                <div className="absolute left-3 top-3">
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                    {locale === 'en' ? 'Bio Fertilizer' : 'بائیو کھاد'}
                  </span>
                </div>
                {/* weight chip */}
                {product.weight && (
                  <div className="absolute right-3 top-3">
                    <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-semibold text-white">
                      {product.weight}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Info (sticky) */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-6">
              {/* Product Title & Rating */}
              <div className="mb-4">
                <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">{name}</h1>
                <p className="mt-2 text-emerald-700/90 text-lg font-semibold">{desc}</p>
                
                {/* Rating */}
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(mockRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {mockRating} ({mockReviews} {locale === 'en' ? 'reviews' : 'ریویوز'})
                  </span>
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6 rounded-xl bg-emerald-50 p-4">
                <div className="flex items-center gap-3">
                  {mockDiscount > 0 && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      -{mockDiscount}%
                    </span>
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-emerald-600">
                        PKR {mockPrice.toLocaleString()}
                      </span>
                      {mockDiscount > 0 && (
                        <span className="text-lg text-gray-500 line-through">
                          PKR {Math.round(mockPrice / (1 - mockDiscount / 100)).toLocaleString()}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      / {product.weight || "20L"}
                    </div>
                  </div>
                </div>
                
                {/* Stock Status */}
                <div className="mt-2">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                    mockInStock 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      mockInStock ? 'bg-green-500' : 'bg-red-500'
                    }`}></div>
                    {mockInStock 
                      ? (locale === 'en' ? 'In Stock' : 'اسٹاک میں')
                      : (locale === 'en' ? 'Out of Stock' : 'اسٹاک ختم')
                    }
                  </span>
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <AddToCartSection 
                product={{
                  id: product.id,
                  name: product.name,
                  nameUr: product.nameUr,
                  price: mockPrice,
                  weight: product.weight || "20L",
                  image: product.image,
                  category: 'bioFertilizers'
                }}
                mockInStock={mockInStock}
                locale={locale}
              />

              {/* Action Buttons */}
              <div className="mb-6 flex gap-3">
                <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                  <Heart className="h-4 w-4" />
                  {locale === 'en' ? 'Wishlist' : 'خواہشات'}
                </button>
                <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                  <Share2 className="h-4 w-4" />
                  {locale === 'en' ? 'Share' : 'شیئر کریں'}
                </button>
                <Link
                  href="/contact-us"
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {locale === 'en' ? 'Contact Sales' : 'سیلز سے رابطہ'}
                </Link>
              </div>

              {/* Quick pills */}
              <div className="mb-6 flex flex-wrap gap-2 text-xs text-slate-600">
                {product.weight && (
                  <span className="rounded-full bg-white px-3 py-1 border border-gray-200">
                    {product.weight}
                  </span>
                )}
                <span className="rounded-full bg-white px-3 py-1 border border-gray-200">
                  {locale === 'en' ? 'Organic • Biodegradable' : 'نامیاتی • قابلِ تحلیل'}
                </span>
                <span className="rounded-full bg-white px-3 py-1 border border-gray-200">
                  {locale === 'en' ? 'All Crops' : 'تمام فصلیں'}
                </span>
              </div>

              {/* Shipping & Guarantee Info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Truck className="h-5 w-5 text-emerald-600" />
                  <span>{locale === 'en' ? 'Free shipping on orders over PKR 3,000' : '3,000 روپے سے زیادہ کے آرڈر پر مفت شپنگ'}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  <span>{locale === 'en' ? '30-day money-back guarantee' : '30 دن کی رقم واپسی کی گارنٹی'}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <RotateCcw className="h-5 w-5 text-emerald-600" />
                  <span>{locale === 'en' ? 'Easy returns & exchanges' : 'آسان واپسی اور تبادلہ'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-12">
          {/* LEFT */}
          <div className="lg:col-span-7">
            {/* Description */}
            <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="mb-3 text-xl font-semibold text-slate-900">
                {locale === 'en' ? 'Product Description' : 'پروڈکٹ کی تفصیل'}
              </h2>
              <p className="text-slate-700">
                {locale === 'en'
                  ? `${product.name} is a natural bio-fertilizer rich in amino acids and organic compounds. It enhances plant growth, improves stress tolerance, and increases nutrient absorption efficiency while remaining safe for the environment.`
                  : `${product.nameUr} امینو ایسڈز اور نامیاتی مرکبات سے بھرپور ایک قدرتی بائیو کھاد ہے جو پودوں کی نشوونما، تناؤ برداشت کرنے کی صلاحیت اور غذائی اجزاء کے جذب کو بہتر بناتی ہے۔`}
              </p>
            </div>

            {/* Features */}
            <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="mb-3 text-xl font-semibold text-slate-900">
                {locale === 'en' ? 'Features' : 'خصوصیات'}
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-600" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications (accordion) */}
            <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="mb-3 text-xl font-semibold text-slate-900">
                {locale === 'en' ? 'Applications' : 'استعمال'}
              </h2>
              <details className="group rounded-xl border border-slate-200 bg-white p-4 open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium text-slate-900">
                    {locale === 'en' ? 'Recommended Uses & Rates' : 'سفارش کردہ استعمال اور مقدار'}
                  </span>
                  <span className="text-slate-500 group-open:hidden">{locale === 'en' ? 'Show' : 'دیکھیں'}</span>
                  <span className="hidden text-slate-500 group-open:block">{locale === 'en' ? 'Hide' : 'چھپائیں'}</span>
                </summary>
                <ul className="mt-3 space-y-2 text-slate-700">
                  {applications.map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </details>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5">
            {/* Composition */}
            <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">
                  {locale === 'en' ? 'Composition' : 'ترکیب'}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(comp).map(([k, v]) => (
                  <div key={k} className="rounded-xl bg-emerald-50 p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-600">{String(v)}</div>
                    <div className="text-xs font-medium text-emerald-700">{k}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Packaging */}
            <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">
                  {locale === 'en' ? 'Packaging' : 'پیکنگ'}
                </h3>
              </div>
              <ul className="space-y-2 text-slate-700">
                {packaging.map((p, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-slate-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center text-2xl font-bold text-slate-900 md:text-3xl">
              {locale === 'en' ? 'Related Products' : 'متعلقہ پروڈکٹس'}
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rp) => (
                <ProductCard
                  key={rp.id}
                  title={locale === 'en' ? rp.name : rp.nameUr}
                  imgSrc={rp.image}
                  badge={locale === 'en' ? 'Bio Organic' : 'بائیو نامیاتی'}
                  weight={rp.weight || "20L"}
                  href={`/products/search/crop-protection/bio-fertilizers/${rp.id}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 p-10">
            <div className="absolute inset-0 opacity-15 [background:radial-gradient(600px_circle_at_0%_0%,#34d399_0,transparent_40%),radial-gradient(600px_circle_at_100%_100%,#10b981_0,transparent_40%)]" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                {locale === 'en' ? 'Ready to Go Organic?' : 'نامیاتی بننے کے لیے تیار ہیں؟'}
              </h2>
              <Link
                href="/contact-us"
                className="mt-6 inline-block rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:from-emerald-600 hover:to-emerald-700"
              >
                {locale === 'en' ? 'Contact Sales Team' : 'سیلز ٹیم سے رابطہ کریں'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile fixed CTA bar */}
      <MobileCTA 
        product={{
          id: product.id,
          name: product.name,
          nameUr: product.nameUr,
          price: mockPrice,
          weight: product.weight || "20L",
          image: product.image,
          category: 'bioFertilizers'
        }}
        mockInStock={mockInStock}
        locale={locale}
      />

      <Footer />
    </div>
  )
}
