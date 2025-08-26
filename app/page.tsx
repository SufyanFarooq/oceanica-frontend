import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { ArrowRight, Leaf, Shield, Users, Target } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Growing Tomorrow's
                <span className="text-primary-600"> Food Security</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Oceanica Crop Science provides innovative agricultural solutions to help farmers 
                increase yields, protect crops, and ensure sustainable food production for Pakistan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/crop-solutions" className="btn-primary inline-flex items-center">
                  Explore Crop Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link href="/products/search/crop-protection" className="btn-secondary">
                  View Products
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center">
                  <Leaf className="w-20 h-20 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Oceanica Crop Science</h3>
                  <p className="text-gray-600">Leading agricultural innovation in Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Oceanica?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge science with local expertise to deliver solutions 
              that work for Pakistani farmers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Latest agricultural technologies and research-backed solutions</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">Premium products that meet international standards</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">Expert agronomic advice and technical support</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Results</h3>
              <p className="text-gray-600">Proven track record of increased yields and crop protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Crops Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Crop Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for Pakistan's major crops, from seed to harvest.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Corn', href: '/crop-solutions/corn', color: 'bg-yellow-100' },
              { name: 'Wheat', href: '/crop-solutions/wheat', color: 'bg-amber-100' },
              { name: 'Rice', href: '/crop-solutions/rice', color: 'bg-green-100' },
              { name: 'Sugarcane', href: '/crop-solutions/sugarcane', color: 'bg-red-100' },
              { name: 'Potato', href: '/crop-solutions/potato', color: 'bg-purple-100' },
              { name: 'Cotton', href: '/crop-solutions/cotton', color: 'bg-blue-100' },
            ].map((crop) => (
              <Link
                key={crop.name}
                href={crop.href}
                className={`${crop.color} rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-200`}
              >
                <h3 className="text-lg font-semibold text-gray-900">{crop.name}</h3>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/crop-solutions" className="btn-primary">
              View All Crop Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join thousands of farmers who trust Oceanica Crop Science for their agricultural needs. 
            Get expert advice and premium products today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Contact Us
            </Link>
            <Link href="/about-us" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
