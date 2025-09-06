import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Leaf, Shield, TrendingUp, Clock, Users, Globe, Target } from 'lucide-react'

export default function GrowthPlan() {
  const growthPillars = [
    {
      title: 'Operational Excellence',
      description: 'Improving efficiency and reducing environmental impact in our operations',
      icon: '⚡',
      color: 'bg-blue-100',
      goals: ['Reduce energy consumption by 25%', 'Minimize waste generation', 'Optimize resource usage']
    },
    {
      title: 'Farmer Prosperity',
      description: 'Supporting farmers to increase productivity and improve livelihoods',
      icon: '👨‍🌾',
      color: 'bg-green-100',
      goals: ['Train 50,000+ farmers by 2030', 'Increase average yields by 30%', 'Improve farmer incomes']
    },
    {
      title: 'Rural Communities',
      description: 'Building stronger, more sustainable rural communities',
      icon: '🏘️',
      color: 'bg-yellow-100',
      goals: ['Support 100+ rural communities', 'Create employment opportunities', 'Improve infrastructure']
    },
    {
      title: 'Climate Action',
      description: 'Addressing climate change through sustainable agricultural practices',
      icon: '🌍',
      color: 'bg-purple-100',
      goals: ['Reduce carbon footprint by 40%', 'Promote climate-smart agriculture', 'Support reforestation']
    }
  ]

  const targets = [
    {
      year: '2025',
      target: 'Achieve 100% recyclable packaging',
      status: 'In Progress'
    },
    {
      year: '2027',
      target: 'Train 25,000 farmers in sustainable practices',
      status: 'Planning'
    },
    {
      year: '2030',
      target: 'Reduce environmental footprint by 50%',
      status: 'Long-term Goal'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-32 m-2 overflow-hidden rounded-2xl">
        {/* Background Image */}
        <Image
          src="/assets/stewardship/growth-plan/hero.jpg"
          alt="Growth Plan Hero - Sustainable Development and Agricultural Progress"
          fill
          className="object-cover "
          priority
          unoptimized
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-4 animate-pulse">📈</div>
            <h1 className="text-5xl font-bold text-primary-600 mb-6 drop-shadow-lg">
              Good Growth Plan
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Our comprehensive roadmap for sustainable growth that benefits 
              farmers, communities, and the environment.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary-600 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full inline-flex">
              <Target className="w-6 h-6" />
              <span className="font-semibold">Oceanica Crop Science</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Vision for Growth
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The Good Growth Plan represents our commitment to sustainable development 
                that creates value for all stakeholders while protecting our planet.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that true growth comes from balancing economic success with 
                social responsibility and environmental stewardship.
              </p>
              <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Sustainable Growth</h3>
                  <p className="text-gray-600">Building a better future for all</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-2xl border border-blue-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Growth Principles</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 bg-white rounded-xl shadow-sm">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Inclusive development</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-white rounded-xl shadow-sm">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Environmental responsibility</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-white rounded-xl shadow-sm">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Community empowerment</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-white rounded-xl shadow-sm">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Long-term thinking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Four Pillars of Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to sustainable growth covers all aspects 
              of our business and impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {growthPillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* Card Header with Icon */}
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-center">
                  <div className="text-6xl mb-4">{pillar.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-blue-100 text-sm">{pillar.description}</p>
                </div>
                
                {/* Card Content */}
                <div className="p-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center">
                      <Target className="w-5 h-5 text-primary-600 mr-2" />
                      Key Goals:
                    </h4>
                    <ul className="space-y-3">
                      {pillar.goals.map((goal, idx) => (
                        <li key={idx} className="flex items-start text-gray-700 bg-gray-50 p-3 rounded-lg">
                          <div className="w-3 h-3 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{goal}</span>
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

      {/* Targets Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Targets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Concrete, measurable goals that guide our progress 
              toward sustainable growth and development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targets.map((target, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* Header with Year */}
                <div className={`p-6 text-center ${
                  target.status === 'In Progress' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                  target.status === 'Planning' ? 'bg-gradient-to-br from-yellow-500 to-orange-500' :
                  'bg-gradient-to-br from-green-500 to-emerald-600'
                }`}>
                  <div className="text-5xl mb-2">🎯</div>
                  <h3 className="text-3xl font-bold text-white">{target.year}</h3>
                </div>
                
                {/* Content */}
                <div className="p-8 text-center">
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">{target.target}</p>
                  <span className={`inline-block px-6 py-3 rounded-full text-sm font-bold shadow-lg ${
                    target.status === 'In Progress' ? 'bg-blue-100 text-blue-800 border-2 border-blue-300' :
                    target.status === 'Planning' ? 'bg-yellow-100 text-yellow-800 border-2 border-yellow-300' :
                    'bg-green-100 text-green-800 border-2 border-green-300'
                  }`}>
                    {target.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Measuring Progress
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We track our progress through key performance indicators 
              and regular reporting to ensure transparency and accountability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clear Metrics</h3>
              <p className="text-gray-600 leading-relaxed">Measurable goals and regular progress tracking</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regular Reporting</h3>
              <p className="text-gray-600 leading-relaxed">Transparent communication of our progress</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stakeholder Engagement</h3>
              <p className="text-gray-600 leading-relaxed">Involving all stakeholders in our journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Our Growth Journey
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Together, we can build a more sustainable and prosperous future 
            for Pakistani agriculture and rural communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/stewardship" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Learn About Stewardship
            </Link>
            <Link href="/contact-us" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
