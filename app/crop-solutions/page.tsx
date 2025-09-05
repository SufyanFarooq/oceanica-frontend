import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ArrowRight, Leaf, TrendingUp, Shield } from 'lucide-react'

export default function CropSolutions() {
  const crops = [
    {
      name: 'Corn',
      href: '/crop-solutions/corn',
      description: 'High-yield corn solutions for optimal growth and protection',
      color: 'bg-yellow-100',
      icon: '🌽'
    },
    {
      name: 'Wheat',
      href: '/crop-solutions/wheat',
      description: 'Comprehensive wheat protection and enhancement solutions',
      color: 'bg-amber-100',
      icon: '🌾'
    },
    {
      name: 'Rice',
      href: '/crop-solutions/rice',
      description: 'Advanced rice farming solutions for maximum productivity',
      color: 'bg-green-100',
      icon: '🍚'
    },
    {
      name: 'Sugarcane',
      href: '/crop-solutions/sugarcane',
      description: 'Specialized sugarcane protection and growth solutions',
      color: 'bg-red-100',
      icon: '🎋'
    },
    {
      name: 'Potato',
      href: '/crop-solutions/potato',
      description: 'Complete potato crop management and protection',
      color: 'bg-purple-100',
      icon: '🥔'
    },
    {
      name: 'Cotton',
      href: '/crop-solutions/cotton',
      description: 'Premium cotton solutions for quality fiber production',
      color: 'bg-blue-100',
      icon: '🧵'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-50 to-green-50 py-32 m-2 overflow-hidden rounded-2xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="mb-6 md:mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-500 to-green-600 rounded-full mb-6 shadow-lg">
              <Leaf className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 drop-shadow-sm">
            Crop Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed">
            Comprehensive agricultural solutions tailored for Pakistan's major crops. 
            From seed treatment to harvest protection, we've got you covered.
          </p>
          <div className="flex items-center justify-center space-x-2 text-primary-600 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full inline-flex shadow-lg">
            <Leaf className="w-5 h-5 md:w-6 md:h-6" />
            <span className="font-semibold text-sm md:text-base">Oceanica Crop Science</span>
          </div>
        </div>
      </section>

      {/* Crops Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crops.map((crop) => (
              <Link
                key={crop.name}
                href={crop.href}
                className={`${crop.color} rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{crop.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{crop.name}</h3>
                  <p className="text-gray-700 mb-4">{crop.description}</p>
                  <div className="flex items-center justify-center text-primary-600 font-semibold">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Crop Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide science-backed solutions that deliver real results for Pakistani farmers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Increased Yields</h3>
              <p className="text-gray-600">Proven solutions that boost crop productivity and quality</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Crop Protection</h3>
              <p className="text-gray-600">Comprehensive protection against pests, diseases, and weeds</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Farming</h3>
              <p className="text-gray-600">Environmentally responsible solutions for long-term success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Need Expert Advice?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Our agricultural experts are here to help you choose the right solutions 
            for your specific crop and growing conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get Expert Advice
            </Link>
            <Link href="/products/search/crop-protection" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
              View Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
