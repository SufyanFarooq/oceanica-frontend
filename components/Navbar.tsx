"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Globe, Search, ShoppingCart, ChevronDown, Menu, X } from "lucide-react";
import { useI18n } from "../app/i18n/context";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";

export default function Navbar() {
  const { t, locale, isRTL } = useI18n();
  const [cropsOpen, setCropsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [sustainabilityOpen, setSustainabilityOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const crops = [
    { name: locale === "en" ? "Corn" : "مکئی", href: "/crop-solutions/corn" },
    {
      name: locale === "en" ? "Potato" : "آلو",
      href: "/crop-solutions/potato",
    },
    {
      name: locale === "en" ? "Cotton" : "کپاس",
      href: "/crop-solutions/cotton",
    },
    { name: locale === "en" ? "Rice" : "چاول", href: "/crop-solutions/rice" },
    {
      name: locale === "en" ? "Sugarcane" : "گنا",
      href: "/crop-solutions/sugarcane",
    },
    { name: locale === "en" ? "Wheat" : "گندم", href: "/crop-solutions/wheat" },
  ];

  const products = [
    {
      name: locale === "en" ? "Speciality Fertilizers" : "خصوصی کھادیں",
      href: "/products/search/crop-protection/speciality-fertilizers",
    },
    {
      name: locale === "en" ? "Bio Fertilizers" : "بائیو کھادیں",
      href: "/products/search/crop-protection/bio-fertilizers",
    },
    // {
    //   name: locale === "en" ? "Herbicide" : "جڑی بوٹی مار",
    //   href: "/products/search/crop-protection/type/herbicide-1156",
    // },
    // {
    //   name: locale === "en" ? "Insecticide" : "کیڑے مار",
    //   href: "/products/search/crop-protection/type/insecticide-1166",
    // },
    // {
    //   name: locale === "en" ? "Fungicide" : "فنگس مار",
    //   href: "/products/search/crop-protection/type/fungicide-1161",
    // },
    // {
    //   name: locale === "en" ? "Seedcare" : "بیج کی دیکھ بھال",
    //   href: "/products/search/crop-protection/type/seedcare-1176",
    // },
    // {
    //   name: locale === "en" ? "Crop Enhancement" : "فصلوں کی بہتری",
    //   href: "/products/search/crop-protection",
    // },
  ];

  const sustainability = [
    { name: locale === "en" ? "Stewardship" : "نگرانی", href: "/stewardship" },
    {
      name: locale === "en" ? "Good Growth Plan" : "اچھی ترقی کا منصوبہ",
      href: "/growth-plan",
    },
  ];

  return (
    <div className="bg-white shadow-sm" dir={isRTL ? "rtl" : "ltr"}>
      {/* Top Section - Large Logo and Details (Scrolls away) */}
      <div className="bg-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Search className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
              <span className="text-xs sm:text-sm text-gray-700">
                {locale === "en"
                  ? "WHAT ARE YOU LOOKING FOR?"
                  : "آپ کیا تلاش کر رہے ہیں؟"}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <span className="text-xs sm:text-sm text-gray-700">
              {locale === "en" ? "SHOP NOW" : "ابھی خریدیں"}
            </span>
            <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Bottom Section - Main Navigation (Sticky) */}
      <nav
        className="z-50 bg-white shadow-lg border-b border-gray-200 w-full"
        style={{
          top: isScrolled ? "50" : "0",
          position: isScrolled ? "fixed" : "sticky",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Desktop Navigation - Hidden on Mobile */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link href="/" className="nav-link">
                <Home className="w-5 h-5" />
              </Link>

              <div className="relative">
                <button
                  className="nav-link flex items-center"
                  onMouseEnter={() => setCropsOpen(true)}
                  onMouseLeave={() => setCropsOpen(false)}
                >
                  <span>{t("nav.crops")}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {cropsOpen && (
                  <div
                    className="absolute top-full left-0 bg-white shadow-lg border rounded-lg py-4 px-6 z-50 min-w-[400px]"
                    onMouseEnter={() => setCropsOpen(true)}
                    onMouseLeave={() => setCropsOpen(false)}
                  >
                    <div className="grid grid-cols-3 gap-4">
                      {crops.map((crop) => (
                        <Link
                          key={crop.name}
                          href={crop.href}
                          className="text-sm text-gray-800 font-semibold hover:text-primary-600 transition-colors duration-200"
                        >
                          {crop.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  className="nav-link flex items-center"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <span>{t("nav.products")}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {productsOpen && (
                  <div
                    className="absolute top-full left-0 bg-white shadow-lg border rounded-lg py-4 px-6 z-50 min-w-[400px]"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="text-sm text-gray-800 font-semibold hover:text-primary-600 transition-colors duration-200"
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/naya-savera" className="nav-link">
                {t("nav.nayaSavera")}
              </Link>

              <div className="relative">
                <button
                  className="nav-link flex items-center"
                  onMouseEnter={() => setSustainabilityOpen(true)}
                  onMouseLeave={() => setSustainabilityOpen(false)}
                >
                  <span>{t("nav.sustainability")}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {sustainabilityOpen && (
                  <div
                    className="absolute top-full left-0 bg-white shadow-lg border rounded-lg py-4 px-6 z-50 min-w-[200px]"
                    onMouseEnter={() => setSustainabilityOpen(true)}
                    onMouseLeave={() => setSustainabilityOpen(false)}
                  >
                    <div className="space-y-2">
                      {sustainability.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block text-sm text-gray-800 font-semibold hover:text-primary-600 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about-us" className="nav-link">
                {t("nav.aboutUs")}
              </Link>

              <Link href="/contact-us" className="nav-link">
                {t("nav.contactUs")}
              </Link>

              <Link href="/careers" className="nav-link">
                {t("nav.careers")}
              </Link>
            </div>

            {/* Logo - Centered on Mobile */}
            <div className="flex items-center justify-center lg:justify-end flex-1">
              <Image
                src={locale === "en" ? "/logo-en.png" : "/logo-ur.png"}
                alt={locale === "en" ? "Oceanica Logo" : "اوشینیکا لوگو"}
                width={isScrolled ? 120 : 150}
                height={isScrolled ? 120 : 150}
                className="rounded"
              />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="space-y-4">
                <Link href="/" className="block nav-link">
                  <Home className="w-5 h-5 inline mr-2" />
                  {locale === "en" ? "Home" : "ہوم"}
                </Link>

                {/* Crops Dropdown */}
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900 mb-2">
                    {t("nav.crops")}
                  </div>
                  <div className="pl-4 space-y-2">
                    {crops.map((crop) => (
                      <Link
                        key={crop.name}
                        href={crop.href}
                        className="block text-sm text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        {crop.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Products Dropdown */}
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900 mb-2">
                    {t("nav.products")}
                  </div>
                  <div className="pl-4 space-y-2">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="block text-sm text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link href="/naya-savera" className="block nav-link">
                  {t("nav.nayaSavera")}
                </Link>

                {/* Sustainability Dropdown */}
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900 mb-2">
                    {t("nav.sustainability")}
                  </div>
                  <div className="pl-4 space-y-2">
                    {sustainability.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link href="/about-us" className="block nav-link">
                  {t("nav.aboutUs")}
                </Link>

                <Link href="/contact-us" className="block nav-link">
                  {t("nav.contactUs")}
                </Link>

                <Link href="/careers" className="block nav-link">
                  {t("nav.careers")}
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
