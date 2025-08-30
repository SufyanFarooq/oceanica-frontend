'use client'

import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Leaf, Mail, Phone, MapPin, Clock, MessageCircle, Send, Building, Globe, Facebook, Linkedin, Twitter, Instagram, Youtube, Users, Award, Star, CheckCircle } from 'lucide-react'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const officeLocations = [
    {
      name: 'Head Office',
      address: 'Plot No. 123, Street 45, Blue Area, Islamabad, Pakistan',
      email: 'marketing@oceanica.com.pk',
      phone: '+92 51 123 4567',
      coordinates: { lat: 33.7294, lng: 73.0931 },
      icon: '🏢',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Lahore Industrial Complex',
      address: 'Industrial Zone, Lahore, Punjab, Pakistan',
      email: 'lahore@oceanica.com.pk',
      phone: '+92 42 123 4567',
      coordinates: { lat: 31.5204, lng: 74.3587 },
      icon: '🏭',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Faisalabad Industrial Complex',
      address: 'Industrial Zone No.7, Faisalabad, Punjab, Pakistan',
      email: 'faisalabad@oceanica.com.pk',
      phone: '+92 41 123 4567',
      coordinates: { lat: 31.4504, lng: 73.1350 },
      icon: '🏗️',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/oceanica', color: 'hover:bg-blue-600' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/oceanica', color: 'hover:bg-blue-700' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/oceanica', color: 'hover:bg-blue-400' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/oceanica', color: 'hover:bg-pink-600' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/oceanica', color: 'hover:bg-red-600' }
  ]

  const stats = [
    { number: '24/7', label: 'Support Available', icon: Clock, color: 'bg-blue-100' },
    { number: '500+', label: 'Happy Farmers', icon: Users, color: 'bg-green-100' },
    { number: '15+', label: 'Years Experience', icon: Award, color: 'bg-yellow-100' },
    { number: '4.9★', label: 'Customer Rating', icon: Star, color: 'bg-purple-100' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-blue-600 py-20 overflow-hidden m-2 rounded-2xl">
        {/* Background Image */}
        <Image
          src="/assets/contact-us/hero.jpg"
          alt="Contact Us Hero - Customer Service and Support"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-white/90 hover:text-white transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Let's Connect
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              Have a question or need assistance? We're just a message away! Our expert team is ready to help 
              you with agricultural solutions, technical support, and partnership opportunities.
            </p>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <Leaf className="w-6 h-6" />
              <span className="font-semibold text-lg">Oceanica Crop Science</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <Send className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Send us a message
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ${social.color} hover:text-white`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {!isSubmitted ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contact Form */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all duration-300 bg-gray-50 hover:bg-white"
                          placeholder="Enter your full name"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <Users className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3">
                        Company Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all duration-300 bg-gray-50 hover:bg-white"
                          placeholder="Your company (optional)"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <Building className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                        Business Email *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all duration-300 bg-gray-50 hover:bg-white"
                          placeholder="your.email@company.com"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all duration-300 bg-gray-50 hover:bg-white"
                          placeholder="+92 300 123 4567"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                      Your Message *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                        placeholder="Tell us how we can help you with your agricultural needs..."
                      />
                      <div className="absolute top-4 right-4 pointer-events-none">
                        <MessageCircle className="h-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-10 py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center shadow-lg"
                    >
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Image */}
              <div className="relative">
                <div className="relative h-full min-h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/contact-us/contact.jpg"
                    alt="Contact Oceanica - Agricultural Solutions"
                    fill
                    className="object-fill"
                    priority
                  />
                  {/* Overlay with text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="text-2xl font-bold mb-3">Ready to Grow Together?</h3>
                    <p className="text-white/90 leading-relaxed">
                      Our expert team is here to support your agricultural success with innovative solutions, 
                      technical expertise, and proven results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-12 text-center shadow-xl max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-green-800 mb-3">Thank you for reaching out!</h3>
              <p className="text-green-700 text-lg mb-6">
                We've received your message and will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit our state-of-the-art offices and industrial complexes across Pakistan
            </p>
          </div>
          
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             {officeLocations.map((office, index) => (
               <div key={index} className="group">
                 <div className={`bg-gradient-to-br ${office.color} rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden h-full min-h-[320px] flex flex-col justify-between transform hover:scale-105 hover:shadow-3xl transition-all duration-500`}>
                   {/* Enhanced Background Pattern */}
                   <div className="absolute inset-0 opacity-20">
                     <div className="absolute inset-0" style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                     }}></div>
                   </div>
                   
                   {/* Top Section */}
                   <div className="relative z-10">
                     <div className="text-5xl mb-6 text-center">{office.icon}</div>
                     <h3 className="text-2xl font-bold mb-6 text-center">{office.name}</h3>
                   </div>
                   
                   {/* Bottom Section */}
                   <div className="relative z-10 space-y-4">
                     <div className="flex items-start space-x-4 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                       <MapPin className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                       <p className="text-white/95 text-sm leading-relaxed">{office.address}</p>
                     </div>
                     <div className="flex items-center space-x-4 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                       <Mail className="w-6 h-6 text-white flex-shrink-0" />
                       <a href={`mailto:${office.email}`} className="text-white/95 hover:text-white text-sm transition-colors duration-200 font-medium">
                         {office.email}
                       </a>
                     </div>
                     <div className="flex items-center space-x-4 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                       <Phone className="w-6 h-6 text-white flex-shrink-0" />
                       <a href={`tel:${office.phone}`} className="text-white/95 hover:text-white text-sm transition-colors duration-200 font-medium">
                         {office.phone}
                       </a>
                     </div>
                   </div>
                   
                   {/* Hover Effect Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <Globe className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find Us on the Map
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Interactive map showing all our office locations across Pakistan
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              {/* Real Google Maps Embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d67.15546194999999!3d25.193202399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi!5e0!3m2!1sen!2s!4v1756344706520!5m2!1sen!2s" 
                width="100%" 
                height="500" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
            
            {/* Location Links Below Map */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {officeLocations.map((office, idx) => (
                <a 
                  key={idx} 
                  href={`https://maps.app.goo.gl/k3S5GgsTmHmJYrZ69`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-4 hover:from-primary-100 hover:to-blue-100 transition-all duration-300 transform hover:scale-105 border border-primary-100 hover:border-primary-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                      <MapPin className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 group-hover:text-primary-700 transition-colors duration-300">
                        {office.name}
                      </div>
                      <div className="text-sm text-gray-600 group-hover:text-primary-600 transition-colors duration-300">
                        Click to view on map
                      </div>
                    </div>
                    <div className="text-primary-400 group-hover:text-primary-600 transition-colors duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 via-primary-800 to-blue-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Transform Your Agriculture?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful farmers who trust Oceanica for innovative agricultural solutions. 
            Let's build a sustainable future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/about-us" className="bg-white text-primary-700 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
              Learn More About Us
            </Link>
            <Link href="/crop-solutions" className="border-2 border-white text-white px-10 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary-700 transition-all duration-300 transform hover:scale-105">
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
