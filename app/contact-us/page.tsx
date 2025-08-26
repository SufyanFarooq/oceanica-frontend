import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ArrowLeft, Leaf, Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function ContactUs() {
  const contactMethods = [
    {
      title: 'Email Us',
      description: 'Send us a message and we\'ll get back to you within 24 hours',
      icon: '📧',
      contact: 'info@oceanica.com.pk',
      action: 'Send Email'
    },
    {
      title: 'Call Us',
      description: 'Speak directly with our agricultural experts',
      icon: '📞',
      contact: '+92 51 123 4567',
      action: 'Call Now'
    },
    {
      title: 'Visit Us',
      description: 'Drop by our office for a face-to-face consultation',
      icon: '🏢',
      contact: 'Islamabad, Pakistan',
      action: 'Get Directions'
    }
  ]

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ]

  const departments = [
    {
      name: 'Technical Support',
      description: 'Product questions and application guidance',
      contact: 'tech@oceanica.com.pk'
    },
    {
      name: 'Sales & Distribution',
      description: 'Product availability and pricing information',
      contact: 'sales@oceanica.com.pk'
    },
    {
      name: 'Training Programs',
      description: 'Farmer training and Naya Savera initiatives',
      contact: 'training@oceanica.com.pk'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get in touch with our team of agricultural experts. We're here to help 
              you find the right solutions for your farming needs.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary-600">
              <MessageCircle className="w-6 h-6" />
              <span className="font-semibold">Oceanica Crop Science</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way to reach us. Our team is ready to assist 
              you with any questions or concerns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-700 mb-4">{method.description}</p>
                <div className="text-primary-600 font-semibold mb-4">{method.contact}</div>
                <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <form className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="product-inquiry">Product Inquiry</option>
                <option value="technical-support">Technical Support</option>
                <option value="training-programs">Training Programs</option>
                <option value="partnership">Partnership Opportunities</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Office Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      Oceanica Crop Science<br />
                      Plot No. 123, Street 45<br />
                      Blue Area, Islamabad<br />
                      Pakistan
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+92 51 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@oceanica.com.pk</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
                    <div className="space-y-1">
                      {officeHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-gray-600">{schedule.day}:</span>
                          <span className="text-gray-600">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Department Contacts
              </h2>
              <div className="space-y-6">
                {departments.map((dept, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{dept.name}</h3>
                    <p className="text-gray-600 mb-3">{dept.description}</p>
                    <a
                      href={`mailto:${dept.contact}`}
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      {dept.contact}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Our team is ready to help you find the right agricultural solutions. 
            Contact us today and let's discuss how we can support your farming success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/crop-solutions" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Explore Solutions
            </Link>
            <Link href="/about-us" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
