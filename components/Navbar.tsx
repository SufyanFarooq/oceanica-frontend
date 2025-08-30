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
} from "lucide-react";
import { useI18n } from "../app/i18n/context";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t, locale, isRTL } = useI18n();
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
            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className={`${isScrolled ? "text-gray-600" : "text-white"} hover:text-primary-600 transition-colors duration-200`}
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className={`${isScrolled ? "text-gray-600" : "text-white"} hover:text-primary-600 transition-colors duration-200`}
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className={`${isScrolled ? "text-gray-600" : "text-white"} hover:text-primary-600 transition-colors duration-200`}
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className={`${isScrolled ? "text-gray-600" : "text-white"} hover:text-primary-600 transition-colors duration-200`}
              >
                <Globe className="w-5 h-5" />
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
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Right Side - Search Bar & Language Switcher */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder={locale === "en" ? "Search..." : "تلاش کریں..."}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                  />
                  <button
                    type="submit"
                    className="bg-primary-600 text-white px-4 py-2 rounded-r-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Language Switcher */}
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

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
                  className="text-white hover:text-accent-400 transition-colors duration-200 font-medium uppercase tracking-wide"
                >
                  <Home className="w-5 h-5" />
                </Link>

                <div className="relative group">
                  <button className="flex items-center text-white hover:text-accent-400 transition-colors duration-200 font-medium uppercase tracking-wide">
                    {t("nav.crops") || "Crops"}
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
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
                  <button className="flex items-center text-white hover:text-accent-400 transition-colors duration-200 font-medium uppercase tracking-wide">
                    {t("nav.products") || "Products"}
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
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
                  <button className="flex items-center text-white hover:text-accent-400 transition-colors duration-200 font-medium uppercase tracking-wide">
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
                  className="text-white hover:text-accent-400 transition-colors duration-200 font-medium uppercase tracking-wide"
                >
                  {t("nav.aboutUs") || "About US"}
                </Link>

                <Link
                  href="/contact-us"
                  className="text-white hover:text-accent-400 transition-colors duration-200 font-medium uppercase tracking-wide"
                >
                  {t("nav.contactUs") || "Contact US"}
                </Link>

                {/* <Link
                  href="/careers"
                  className="text-white hover:text-accent-400 transition-colors duration-200 font-medium uppercase tracking-wide"
                >
                  {t("nav.careers") || "Careers"}
                </Link> */}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-accent-400 transition-colors duration-200"
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
          <div className="lg:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/"
                className="block text-white hover:text-accent-400 transition-colors duration-200 font-medium uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.home") || "Home"}
              </Link>

              <div>
                <button
                  onClick={() => setCropsDropdownOpen(!cropsDropdownOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-accent-400 transition-colors duration-200 font-medium uppercase tracking-wide"
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
                  className="flex items-center justify-between w-full text-white hover:text-accent-400 transition-colors duration-200 font-medium uppercase tracking-wide"
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
                  className="flex items-center justify-between w-full text-white hover:text-accent-400 transition-colors duration-200 font-medium uppercase tracking-wide"
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
                className="block text-white hover:text-accent-400 transition-colors duration-200 font-medium uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.aboutUs") || "About US"}
              </Link>

              <Link
                href="/contact-us"
                className="block text-white hover:text-accent-400 transition-colors duration-200 font-medium uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.contactUs") || "Contact US"}
              </Link>

              {/* <Link
                href="/careers"
                className="block text-white hover:text-accent-400 transition-colors duration-200 font-medium uppercase tracking-wide"
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
