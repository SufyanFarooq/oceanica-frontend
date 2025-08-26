import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { ArrowLeft, Leaf, Shield, TrendingUp, Clock, Users } from 'lucide-react'

export default function WheatPage() {
  const solutions = [
    {
      title: 'Seed Treatment',
      description: 'Advanced seed protection for early disease control and improved establishment',
      icon: '🌱',
      benefits: ['Early disease protection', 'Better germination', 'Stronger root system']
    },
    {
      title: 'Herbicide Solutions',
      description: 'Selective weed control products for wheat fields with crop safety',
      icon: '🌿',
      benefits: ['Broadleaf weed control', 'Grass weed management', 'Crop tolerance']
    },
    {
      title: 'Insecticide Protection',
      description: 'Targeted control for wheat pests like aphids and armyworms',
      icon: '🦗',
      benefits: ['Pest-specific targeting', 'Long-lasting protection', 'Minimal resistance risk']
    },
    {
      title: 'Fungicide Management',
      description: 'Disease prevention for rust, powdery mildew and other wheat diseases',
      icon: '🍄',
      benefits: ['Rust protection', 'Mildew control', 'Yield preservation']
    }
  ]

  const challenges = [
    'Rust diseases',
    'Weed competition',
    'Aphid infestation',
    'Nutrient deficiency',
    'Water stress'
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <Link href="/crop-solutions" className="inline-flex items-center text-primary-600 hover:text-primary-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Crop Solutions
            </Link>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">🌾</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Wheat Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive solutions for high-quality wheat production in Pakistan. 
              Protect your wheat crop and maximize grain quality and yield.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary-600">
              <Leaf className="w-6 h-6" />
              <span className="font-semibold">Oceanica Crop Science</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Wheat Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated approach addresses every stage of wheat development 
              with proven solutions that deliver quality and yield.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-700 mb-4">{solution.description}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Wheat Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges Pakistani wheat farmers face 
              and provide targeted solutions for each.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-primary-500">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-primary-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{challenge}</h3>
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
              Why Choose Oceanica for Wheat?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Focus</h3>
              <p className="text-gray-600">Solutions that improve both yield and grain quality</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Seasonal Support</h3>
              <p className="text-gray-600">Expert advice throughout the wheat growing season</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Knowledge</h3>
              <p className="text-gray-600">Understanding of Pakistan's wheat growing regions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Improve Your Wheat Quality?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Contact our wheat specialists today for personalized recommendations 
            and expert guidance on maximizing your wheat production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get Expert Advice
            </Link>
            <Link href="/products/search/crop-protection" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
              View Wheat Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
