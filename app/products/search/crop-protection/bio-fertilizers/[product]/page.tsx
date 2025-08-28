'use client'

import React from 'react'
import Navbar from '../../../../../../components/Navbar'
import Footer from '../../../../../../components/Footer'
import { useI18n } from '../../../../../../app/i18n/context'
import {
  Phone,
  Download,
  Package,
  CheckCircle,
  Sprout
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProductBySlug, getRelatedProducts } from '../../../../../../app/utils/productUtils'
import ProductCard from '../../../../../../components/ProductCard'

export default function ProductDetail({ params }: { params: { product: string } }) {
  const { locale, t } = useI18n()
  const isRTL = locale === 'ur'

  const product = getProductBySlug('bioFertilizers', params.product)
  if (!product) {
    // NOTE: notFound() is server-only in App Router; if you hit issues, replace with a client redirect.
    notFound()
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

      {/* Breadcrumbs */}
      <section className="bg-white/80 py-4">
        <div className="mx-auto max-w-7xl px-4">
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
      </section>

      {/* HERO */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-10 md:py-14">
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
                  priority={false}
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
              <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">{name}</h1>
              <p className="mt-2 text-emerald-700/90 text-lg font-semibold">{desc}</p>

              {/* CTAs */}
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700"
                  aria-label="Contact Sales Team"
                >
                  <Phone className="h-4 w-4" />
                  {locale === 'en' ? 'Contact Sales Team' : 'سیلز ٹیم سے رابطہ کریں'}
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                >
                  <Download className="h-4 w-4" />
                  {locale === 'en' ? 'Download TDS' : 'ٹی ڈی ایس ڈاؤنلوڈ کریں'}
                </a>
              </div>

              {/* Quick pills */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                {product.weight && <span className="rounded-full bg-white px-3 py-1">{product.weight}</span>}
                <span className="rounded-full bg-white px-3 py-1">{locale === 'en' ? 'Organic • Biodegradable' : 'نامیاتی • قابلِ تحلیل'}</span>
                <span className="rounded-full bg-white px-3 py-1">{locale === 'en' ? 'All Crops' : 'تمام فصلیں'}</span>
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
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-emerald-100 bg-white/95 p-3 backdrop-blur md:hidden">
        <a
          href="#"
          className="flex-1 rounded-xl border border-emerald-200 px-4 py-3 text-center text-sm font-semibold text-emerald-700"
        >
          TDS
        </a>
        <Link
          href="/contact-us"
          className="flex-1 rounded-xl bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white"
        >
          {locale === 'en' ? 'Contact Sales' : 'سیلز سے رابطہ'}
        </Link>
      </div>

      <Footer />
    </div>
  )
}
