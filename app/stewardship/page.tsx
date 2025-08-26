import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ArrowLeft, Leaf, Shield, TrendingUp, Clock, Users, Globe } from 'lucide-react'

export default function Stewardship() {
  const stewardshipAreas = [
    {
      title: 'Environmental Protection',
      description: 'Minimizing environmental impact through responsible product development and usage',
      icon: '🌍',
      color: 'bg-green-100',
      practices: ['Eco-friendly formulations', 'Reduced packaging waste', 'Sustainable sourcing']
    },
    {
      title: 'Safe Use Training',
      description: 'Comprehensive training programs for farmers on safe and responsible product use',
      icon: '👨‍🌾',
      color: 'bg-blue-100',
      practices: ['Safety protocols', 'Application training', 'Protective equipment guidance']
    },
    {
      title: 'Product Stewardship',
      description: 'Ensuring products are used correctly and disposed of properly',
      icon: '🛡️',
      color: 'bg-yellow-100',
      practices: ['Proper disposal methods', 'Container recycling', 'Waste management']
    },
    {
      title: 'Community Engagement',
      description: 'Working with local communities to promote sustainable farming practices',
      icon: '🏘️',
      color: 'bg-purple-100',
      practices: ['Community programs', 'Knowledge sharing', 'Local partnerships']
    }
  ]

  const commitments = [
    'Reduce environmental footprint by 30% by 2030',
    'Train 10,000+ farmers in safe use practices annually',
    'Achieve 100% recyclable packaging by 2025',
    'Support sustainable farming initiatives across Pakistan'
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">🌱</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Stewardship
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Responsible stewardship of our products and the environment. 
              We're committed to protecting both people and the planet.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary-600">
              <Shield className="w-6 h-6" />
              <span className="font-semibold">Oceanica Crop Science</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Stewardship Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Oceanica Crop Science, we believe that true success in agriculture 
                comes from balancing productivity with environmental responsibility.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our stewardship program ensures that every product we develop and 
                every farmer we serve contributes to a more sustainable future.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Environmental Responsibility</h3>
                  <p className="text-gray-600">Protecting our planet for future generations</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Principles</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Environmental protection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Safe product use</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Community well-being</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Sustainable development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stewardship Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Areas of Focus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive stewardship initiatives that cover every aspect 
              of our business and product lifecycle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stewardshipAreas.map((area, index) => (
              <div key={index} className={`${area.color} rounded-xl p-8 hover:shadow-lg transition-shadow duration-300`}>
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-700 mb-4">{area.description}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Practices:</h4>
                  <ul className="space-y-1">
                    {area.practices.map((practice, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        {practice}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Commitments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Concrete goals and targets that demonstrate our commitment 
              to responsible stewardship and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((commitment, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-500">
                <div className="flex items-center">
                  <Leaf className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{commitment}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Stewardship Matters
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Environmental Protection</h3>
              <p className="text-gray-600">Safeguarding natural resources and ecosystems</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Safety</h3>
              <p className="text-gray-600">Protecting farmers and local communities</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Long-term Success</h3>
              <p className="text-gray-600">Building sustainable agricultural systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Us in Responsible Stewardship
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Together, we can build a more sustainable future for Pakistani agriculture. 
            Learn more about our stewardship programs and get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/growth-plan" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              View Growth Plan
            </Link>
            <Link href="/contact-us" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
