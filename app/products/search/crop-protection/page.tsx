import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import Link from 'next/link'
import { ArrowLeft, Leaf, Shield, TrendingUp, Clock, Users, Search } from 'lucide-react'

export default function CropProtectionProducts() {
  const productCategories = [
    {
      name: 'Herbicide',
      href: '/products/search/crop-protection/type/herbicide-1156',
      description: 'Selective weed control products for various crops',
      icon: '🌿',
      color: 'bg-green-100',
      features: ['Broad-spectrum control', 'Crop safety', 'Residual activity']
    },
    {
      name: 'Insecticide',
      href: '/products/search/crop-protection/type/insecticide-1166',
      description: 'Targeted pest control solutions',
      icon: '🦗',
      color: 'bg-blue-100',
      features: ['Pest-specific targeting', 'Long-lasting protection', 'Minimal resistance risk']
    },
    {
      name: 'Fungicide',
      href: '/products/search/crop-protection/type/fungicide-1161',
      description: 'Disease prevention and treatment products',
      icon: '🍄',
      color: 'bg-purple-100',
      features: ['Preventive protection', 'Curative action', 'Yield preservation']
    },
    {
      name: 'Seedcare',
      href: '/products/search/crop-protection/type/seedcare-1176',
      description: 'Seed treatment and protection solutions',
      icon: '🌱',
      color: 'bg-yellow-100',
      features: ['Early disease protection', 'Improved germination', 'Better establishment']
    }
  ]

  const featuredProducts = [
    {
      name: 'Oceanica Shield Pro',
      category: 'Fungicide',
      description: 'Advanced disease protection for multiple crops',
      image: '🛡️',
      rating: 4.8
    },
    {
      name: 'Oceanica Weed Control Plus',
      category: 'Herbicide',
      description: 'Effective weed management with crop safety',
      image: '🌿',
      rating: 4.7
    },
    {
      name: 'Oceanica Pest Shield',
      category: 'Insecticide',
      description: 'Targeted pest control for maximum protection',
      image: '🦗',
      rating: 4.9
    },
    {
      name: 'Oceanica Seed Guard',
      category: 'Seedcare',
      description: 'Complete seed protection and enhancement',
      image: '🌱',
      rating: 4.8
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-32 m-2 overflow-hidden rounded-2xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="mb-6 md:mb-8">
            <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white transition-all duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          <div className="text-center">
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 shadow-lg">
                <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 drop-shadow-sm">
              Crop Protection Products
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed">
              Premium agricultural solutions designed for Pakistani farmers. 
              Protect your crops with our proven product range.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary-600 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full inline-flex shadow-lg">
              <Shield className="w-5 h-5 md:w-6 md:h-6" />
              <span className="font-semibold text-sm md:text-base">Oceanica Crop Science</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of crop protection solutions 
              designed for every stage of crop development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className={`${category.color} rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.name}</h3>
                  <p className="text-gray-700 mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-gray-600">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and effective crop protection solutions 
              trusted by farmers across Pakistan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">{product.image}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        ★
                      </div>
                    ))}
                    <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
                  </div>
                  <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Oceanica Products?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Field-tested products that consistently deliver results</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Technical support and application guidance</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600">Understanding of Pakistan's farming conditions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Need Product Recommendations?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Our product specialists are here to help you choose the right solutions 
            for your specific crop and growing conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get Expert Advice
            </Link>
            <Link href="/crop-solutions" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
              View Crop Solutions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
