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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      {/* First Section - Social, Logo, Search & Language */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left Side - Social Icons */}
            <div className="flex items-center space-x-1 md:space-x-2 lg:space-x-4">
              <Link
                href="#"
                className={`${isScrolled ? "text-gray-600 hover:text-primary-600" : "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center hover:from-accent-400 hover:to-accent-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"} transition-colors duration-200`}
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link
                href="#"
                className={`${isScrolled ? "text-gray-600 hover:text-primary-600" : "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center hover:from-primary-400 hover:to-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"} transition-colors duration-200`}
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </Link>
              <Link
                href="#"
                className={`${isScrolled ? "text-gray-600 hover:text-primary-600" : "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center hover:from-secondary-400 hover:to-secondary-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"} transition-colors duration-200`}
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </Link>
              <Link
                href="#"
                className={`${isScrolled ? "text-gray-600 hover:text-primary-600" : "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center hover:from-accent-400 hover:to-accent-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"} transition-colors duration-200`}
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
                    className="w-32 md:w-48 px-3 md:px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
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
              <button className="sm:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200">
                <Search className="w-5 h-5" />
              </button>

              {/* Cart Icon */}
              <Link 
                href="/cart" 
                className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
              >
                <ShoppingCart className={`${isScrolled ? "text-gray-600" : "text-white"} w-5 h-5`} />
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
      {/* isScrolled ? "bg-white shadow-lg" : "bg-transparent" */}
      <div className={`${isScrolled ? "bg-gray-800 shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-primary-400 transition-colors duration-200 font-medium uppercase tracking-wide"
                >
                  <Home className="w-5 h-5" />
                </Link>

                <div className="relative group">
                  <Link href="/crop-solutions" className="flex items-center text-primary-400 transition-colors duration-200 font-medium uppercase tracking-wide hover:text-primary-300">
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
                  <Link href="/products/search/crop-protection" className="flex items-center text-primary-400 transition-colors duration-200 font-medium uppercase tracking-wide">
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
                  <button className="flex items-center text-primary-400 transition-colors duration-200 font-medium uppercase tracking-wide">
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
                  className="text-primary-400 transition-colors duration-200 font-medium uppercase tracking-wide"
                >
                  {t("nav.aboutUs") || "About US"}
                </Link>

                <Link
                  href="/contact-us"
                  className="text-primary-400 transition-colors duration-200 font-medium uppercase tracking-wide"
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
                className="text-primary-400 transition-colors duration-200"
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
                className="block text-primary-400 transition-colors duration-200 font-medium uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                <Home />
              </Link>

              <div>
                <button
                  onClick={() => setCropsDropdownOpen(!cropsDropdownOpen)}
                  className="flex items-center justify-between w-full text-primary-400 transition-colors duration-200 font-medium uppercase tracking-wide"
                >
                  {t("nav.crops") || "Crops"}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      cropsDropdownOpen ? "rotate-180" : ""
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
                  className="flex items-center justify-between w-full text-primary-400 transition-colors duration-200 font-medium uppercase tracking-wide"
                >
                  {t("nav.products") || "Products"}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      productsDropdownOpen ? "rotate-180" : ""
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
                  className="flex items-center justify-between w-full text-primary-400 transition-colors duration-200 font-medium uppercase tracking-wide"
                >
                  {t("nav.sustainability") || "Sustainability"}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      sustainabilityDropdownOpen ? "rotate-180" : ""
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
                className="block text-primary-400 transition-colors duration-200 font-medium uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.aboutUs") || "About US"}
              </Link>

              <Link
                href="/contact-us"
                className="block text-primary-400 transition-colors duration-200 font-medium uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.contactUs") || "Contact US"}
              </Link>

              {/* Cart Link */}
              <Link
                href="/cart"
                className="flex items-center gap-2 text-primary-400 transition-colors duration-200 font-medium uppercase tracking-wide"
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
