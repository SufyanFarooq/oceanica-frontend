import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
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
      <section className="relative bg-gradient-to-r from-green-50 to-emerald-50 py-20 m-2 overflow-hidden rounded-2xl">
        {/* Background Image */}
        <Image
          src="/assets/stewardship/sustainable/hero.jpg"
          alt="Stewardship Hero - Sustainable Agriculture and Environmental Protection"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        
        {/* Gradient Overlay */}
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white transition-all duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4 animate-bounce">🌱</div>
            <h1 className="text-5xl font-bold text-primary-600 mb-6 drop-shadow-lg">
              Stewardship
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Responsible stewardship of our products and the environment. 
              We're committed to protecting both people and the planet.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary-600 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full inline-flex">
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
              <div className="flex items-center space-x-4 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Environmental Responsibility</h3>
                  <p className="text-gray-600">Protecting our planet for future generations</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 shadow-2xl border border-green-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Principles</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 bg-white rounded-xl shadow-sm">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Environmental protection</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-white rounded-xl shadow-sm">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Safe product use</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-white rounded-xl shadow-sm">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Community well-being</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-white rounded-xl shadow-sm">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Sustainable development</span>
                    </div>
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
              <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* Card Header with Icon */}
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 text-center">
                  <div className="text-6xl mb-4">{area.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{area.title}</h3>
                  <p className="text-green-100 text-sm">{area.description}</p>
                </div>
                
                {/* Card Content */}
                <div className="p-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center">
                      <Shield className="w-5 h-5 text-primary-600 mr-2" />
                      Key Practices:
                    </h4>
                    <ul className="space-y-3">
                      {area.practices.map((practice, idx) => (
                        <li key={idx} className="flex items-start text-gray-700 bg-gray-50 p-3 rounded-lg">
                          <div className="w-3 h-3 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* Header with Icon */}
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-relaxed">{commitment}</h3>
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
            <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Protection</h3>
              <p className="text-gray-600 leading-relaxed">Safeguarding natural resources and ecosystems</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Safety</h3>
              <p className="text-gray-600 leading-relaxed">Protecting farmers and local communities</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Long-term Success</h3>
              <p className="text-gray-600 leading-relaxed">Building sustainable agricultural systems</p>
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
