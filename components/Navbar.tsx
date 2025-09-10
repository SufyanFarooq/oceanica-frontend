"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Facebook,
  Twitter,
  Instagram,
  Globe,
  Home,
  ShoppingCart,
} from "lucide-react";
import { useI18n } from "../app/i18n/context";
import LanguageSwitcher from "./LanguageSwitcher";
import { useCart } from "../app/contexts/CartContext";

export default function Navbar() {
  const { t, locale, isRTL } = useI18n();
  const { getTotalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [cropsDropdownOpen, setCropsDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [sustainabilityDropdownOpen, setSustainabilityDropdownOpen] =
    useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Searching for:", searchQuery);
  };

  const crops = [
    {
      name: locale === "en" ? "Corn" : "مکئی",
      description:
        locale === "en" ? "Healthy Corn Growth" : "مکئی کی اچھی نشوونما",
      href: "/crop-solutions/corn",
      color: "bg-yellow-100",
      icon: "🌽",
    },
    {
      name: locale === "en" ? "Potato" : "آلو",
      description:
        locale === "en" ? "Potato Crop Success" : "آلو کی فصل کامیاب",
      href: "/crop-solutions/potato",
      color: "bg-gray-100",
      icon: "🥔",
    },
    {
      name: locale === "en" ? "Cotton" : "کپاس",
      description:
        locale === "en" ? "Superior Cotton Fiber" : "بہترین کپاس فائبر",
      href: "/crop-solutions/cotton",
      color: "bg-blue-100",
      icon: "🧵",
    },
    {
      name: locale === "en" ? "Rice" : "چاول",
      description:
        locale === "en" ? "Healthy Rice Harvest" : "چاول کی اچھی فصل",
      href: "/crop-solutions/rice",
      color: "bg-green-100",
      icon: "🍚",
    },
    {
      name: locale === "en" ? "Sugarcane" : "گنا",
      description:
        locale === "en" ? "Sweet Cane Solutions" : "گنے کی بہترین دیکھ بھال",
      href: "/crop-solutions/sugarcane",
      color: "bg-red-100",
      icon: "🎋",
    },
    {
      name: locale === "en" ? "Wheat" : "گندم",
      description:
        locale === "en" ? "Golden Wheat Fields" : "سنہری گندم کی فصل",
      href: "/crop-solutions/wheat",
      color: "bg-amber-100",
      icon: "🌾",
    },
  ];

  const products = [
    {
      name: locale === "en" ? "Speciality Fertilizers" : "خصوصی کھادیں",
      description:
        locale === "en" ? "Advanced crop nutrition" : "جدید فصل کی خوراک",
      href: "/products/search/crop-protection/speciality-fertilizers",
      color: "bg-purple-100",
      icon: "🧪",
    },
    {
      name: locale === "en" ? "Bio Fertilizers" : "بائیو کھادیں",
      description:
        locale === "en" ? "Natural soil boosters" : "قدرتی مٹی کی بہتری",
      href: "/products/search/crop-protection/bio-fertilizers",
      color: "bg-indigo-100",
      icon: "🧬",
    },
  ];

  const sustainability = [
    {
      name: locale === "en" ? "Stewardship" : "نگرانی",
      description:
        locale === "en" ? "Responsible crop care" : "ذمہ دار فصل کی دیکھ بھال",
      href: "/stewardship",
      color: "bg-teal-100",
      icon: "🌱",
    },
    {
      name: locale === "en" ? "Good Growth Plan" : "اچھی ترقی کا منصوبہ",
      description:
        locale === "en"
          ? "Sustainable farming plan"
          : "پائیدار کاشتکاری منصوبہ",
      href: "/growth-plan",
      color: "bg-cyan-100",
      icon: "📈",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
    >
      {/* First Section - Social, Logo, Search & Language */}
      <div className={`${isScrolled ? "border-b border-gray-200" : "border-b border-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left Side - Social Icons */}
            <div className="flex items-center space-x-1 md:space-x-2 lg:space-x-4">
              {/* Facebook */}
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isScrolled ? "text-gray-800 hover:text-gray-600" : "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"} transition-colors duration-200`}
              >
                <svg className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 ${isScrolled ? "text-gray-800" : "text-white"}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isScrolled ? "text-gray-800 hover:text-gray-600" : "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center hover:from-pink-400 hover:via-red-400 hover:to-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"} transition-colors duration-200`}
              >
                <svg className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 ${isScrolled ? "text-gray-800" : "text-white"}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isScrolled ? "text-gray-800 hover:text-gray-600" : "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"} transition-colors duration-200`}
              >
                <svg className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 ${isScrolled ? "text-gray-800" : "text-white"}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isScrolled ? "text-gray-800 hover:text-gray-600" : "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"} transition-colors duration-200`}
              >
                <svg className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 ${isScrolled ? "text-gray-800" : "text-white"}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </Link>
            </div>

            {/* Center - Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src={locale === "ur" ? "/logo-ur.png" : "/logo-en.png"}
                  alt="Oceanica Crop Science"
                  width={180}
                  height={50}
                  className="h-8 w-auto md:h-12"
                  priority
                />
              </Link>
            </div>

            {/* Right Side - Search Bar & Language Switcher */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative hidden sm:block">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder={locale === "en" ? "Search..." : "تلاش کریں..."}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-32 md:w-48 px-3 md:px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm ${isScrolled ? "border-gray-300 bg-white" : "border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-white/70"}`}
                  />
                  <button
                    type="submit"
                    className="bg-primary-600 text-white px-3 md:px-4 py-2 rounded-r-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Mobile Search Icon */}
              <button className={`sm:hidden p-2 transition-colors duration-200 ${isScrolled ? "text-gray-600 hover:text-primary-600" : "text-white hover:text-white/80"}`}>
                <Search className="w-5 h-5" />
              </button>

              {/* Cart Icon */}
              <Link
                href="/cart"
                className={`relative p-2 transition-colors duration-200 ${isScrolled ? "text-gray-600 hover:text-primary-600" : "text-white hover:text-white/80"}`}
              >
                <ShoppingCart className="w-5 h-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                    {getTotalItems()}
                  </span>
                )}
              </Link>

              {/* Language Switcher */}
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
      {/* <li><Link href="/about-us" className="text-gray-200 hover:text-primary-400 transition-colors duration-300 flex items-center group">
                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                {t('nav.aboutUs')}
              </Link></li> */}
      {/* Second Section - Navigation Links */}
      <div className={`${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className={`flex items-center space-x-8 ${isScrolled ? "" : "bg-black/50 backdrop-blur-sm px-6 py-2 rounded-full"}`}>
                <Link
                  href="/"
                  className={`transition-colors duration-200 font-bold uppercase tracking-wide ${isScrolled ? "text-primary-600 hover:text-primary-700" : "text-white hover:text-white/80"}`}
                >
                  <Home className="w-5 h-5" />
                </Link>

                <div className="relative group">
                  <Link href="/crop-solutions" className={`flex items-center transition-colors duration-200 font-bold uppercase tracking-wide ${isScrolled ? "text-primary-600 hover:text-primary-700" : "text-white hover:text-white/80"}`}>
                    {t("nav.crops") || "Crops"}
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                    <div className="p-1">
                      {crops.map((crop) => (
                        <Link
                          key={crop.name}
                          href={crop.href}
                          className={`flex items-center p-1.5 m-1.5 rounded-lg hover:bg-opacity-80 transition-all duration-200 group/item ${crop.color}`}
                        >
                          <div
                            className={`w-10 h-10 ${crop.color} rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-opacity-80 transition-colors duration-200`}
                          >
                            <span className="text-lg">{crop.icon}</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-sm">
                              {crop.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {crop.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  {/* <Link href="/crop-solutions" className="flex items-center text-primary-400 transition-colors duration-200 font-medium uppercase tracking-wide hover:text-primary-300">
                    {t("nav.crops") || "Crops"}
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                  </Link> */}
                  <Link href="/products/search/crop-protection" className={`flex items-center transition-colors duration-200 font-bold uppercase tracking-wide ${isScrolled ? "text-primary-600 hover:text-primary-700" : "text-white hover:text-white/80"}`}>
                    {t("nav.products") || "Products"}
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                    <div className="p-1">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className={`flex items-center p-2 m-1 rounded-lg hover:bg-opacity-80 transition-all duration-200 group/item ${product.color}`}
                        >
                          <div
                            className={`w-10 h-10 ${product.color} rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-opacity-80 transition-colors duration-200`}
                          >
                            <span className="text-lg">{product.icon}</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-sm">
                              {product.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {product.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <button className={`flex items-center transition-colors duration-200 font-bold uppercase tracking-wide ${isScrolled ? "text-primary-600 hover:text-primary-700" : "text-white hover:text-white/80"}`}>
                    {t("nav.sustainability") || "Sustainability"}
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                    <div className="p-1">
                      {sustainability.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`flex items-center p-2 m-1 rounded-lg hover:bg-opacity-80 transition-all duration-200 group/item ${item.color}`}
                        >
                          <div
                            className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-opacity-80 transition-colors duration-200`}
                          >
                            <span className="text-lg">{item.icon}</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-sm">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {item.name}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href="/about-us"
                  className={`transition-colors duration-200 font-bold uppercase tracking-wide ${isScrolled ? "text-primary-600 hover:text-primary-700" : "text-white hover:text-white/80"}`}
                >
                  {t("nav.aboutUs") || "About US"}
                </Link>

                <Link
                  href="/contact-us"
                  className={`transition-colors duration-200 font-bold uppercase tracking-wide ${isScrolled ? "text-primary-600 hover:text-primary-700" : "text-white hover:text-white/80"}`}
                >
                  {t("nav.contactUs") || "Contact US"}
                </Link>

                {/* <Link
                  href="/careers"
                  className="text-primary-400 transition-colors duration-200 font-medium uppercase tracking-wide"
                >
                  {t("nav.careers") || "Careers"}
                </Link> */}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`transition-colors duration-200 font-bold ${isScrolled ? "text-primary-600 hover:text-primary-700" : "text-white hover:text-white/80"}`}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden bg-gray-800 border-t border-gray-700 m-2 rounded-2xl">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/"
                className="block text-primary-400 transition-colors duration-200 font-bold uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                <Home />
              </Link>

              <div>
                <button
                  onClick={() => setCropsDropdownOpen(!cropsDropdownOpen)}
                  className="flex items-center justify-between w-full text-primary-400 transition-colors duration-200 font-bold uppercase tracking-wide"
                >
                  {t("nav.crops") || "Crops"}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${cropsDropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {cropsDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {crops.map((crop) => (
                      <Link
                        key={crop.name}
                        href={crop.href}
                        className={`flex items-center p-2 rounded-lg transition-all duration-200 ${crop.color} mx-2`}
                        onClick={() => setIsOpen(false)}
                      >
                        <div
                          className={`w-8 h-8 ${crop.color} rounded-lg flex items-center justify-center mr-3`}
                        >
                          <span className="text-sm">{crop.icon}</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {crop.name}
                          </div>
                          <div className="text-xs text-gray-600">
                            {crop.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                  className="flex items-center justify-between w-full text-primary-400 transition-colors duration-200 font-bold uppercase tracking-wide"
                >
                  {t("nav.products") || "Products"}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {productsDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className={`flex items-center p-2 rounded-lg transition-all duration-200 ${product.color} mx-2`}
                        onClick={() => setIsOpen(false)}
                      >
                        <div
                          className={`w-8 h-8 ${product.color} rounded-lg flex items-center justify-center mr-3`}
                        >
                          <span className="text-sm">{product.icon}</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {product.name}
                          </div>
                          <div className="text-xs text-gray-600">
                            {product.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() =>
                    setSustainabilityDropdownOpen(!sustainabilityDropdownOpen)
                  }
                  className="flex items-center justify-between w-full text-primary-400 transition-colors duration-200 font-bold uppercase tracking-wide"
                >
                  {t("nav.sustainability") || "Sustainability"}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${sustainabilityDropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {sustainabilityDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {sustainability.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center p-2 rounded-lg transition-all duration-200 ${item.color} mx-2`}
                        onClick={() => setIsOpen(false)}
                      >
                        <div
                          className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center mr-3`}
                        >
                          <span className="text-sm">{item.icon}</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-600">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about-us"
                className="block text-primary-400 transition-colors duration-200 font-bold uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.aboutUs") || "About US"}
              </Link>

              <Link
                href="/contact-us"
                className="block text-primary-400 transition-colors duration-200 font-bold uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.contactUs") || "Contact US"}
              </Link>

              {/* Cart Link */}
              <Link
                href="/cart"
                className="flex items-center gap-2 text-primary-400 transition-colors duration-200 font-bold uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart className="w-4 h-4" />
                {locale === "en" ? "Cart" : "کارٹ"}
                {getTotalItems() > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                    {getTotalItems()}
                  </span>
                )}
              </Link>

              {/* <Link
                href="/careers"
                className="block text-primary-400 transition-colors duration-200 font-medium uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.careers") || "Careers"}
              </Link> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
