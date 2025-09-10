import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ArrowRight, Leaf, Sun, Users, Target, Clock } from 'lucide-react'

export default function NayaSavera() {
  const initiatives = [
    {
      title: 'Farmer Training Programs',
      description: 'Comprehensive training on modern farming techniques and best practices',
      icon: '👨‍🌾',
      color: 'bg-green-100',
      benefits: ['Modern farming techniques', 'Best practices', 'Technology adoption']
    },
    {
      title: 'Youth Empowerment',
      description: 'Engaging young people in agriculture through education and opportunities',
      icon: '👨‍🎓',
      color: 'bg-blue-100',
      benefits: ['Agricultural education', 'Career opportunities', 'Innovation focus']
    },
    {
      title: 'Community Development',
      description: 'Building stronger farming communities through collaboration and support',
      icon: '🏘️',
      color: 'bg-yellow-100',
      benefits: ['Community collaboration', 'Support networks', 'Knowledge sharing']
    },
    {
      title: 'Sustainable Practices',
      description: 'Promoting environmentally responsible farming methods',
      icon: '🌱',
      color: 'bg-purple-100',
      benefits: ['Environmental protection', 'Resource efficiency', 'Long-term sustainability']
    }
  ]

  const successStories = [
    {
      name: 'Ahmed Khan',
      location: 'Punjab',
      story: 'Through Naya Savera, I learned modern wheat farming techniques that increased my yield by 40%.',
      image: '👨‍🌾'
    },
    {
      name: 'Fatima Ali',
      location: 'Sindh',
      story: 'The youth training program helped me start my own vegetable farming business.',
      image: '👩‍🌾'
    },
    {
      name: 'Muhammad Hassan',
      location: 'KPK',
      story: 'Community support from Naya Savera helped our village adopt sustainable farming practices.',
      image: '👨‍🌾'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-50 to-orange-50 py-32 m-2 overflow-hidden rounded-2xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full mb-6 shadow-lg">
                <div className="text-4xl md:text-5xl">🌅</div>
              </div>
            </div>
            {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 drop-shadow-sm">
              Naya Savera
            </h1> */}
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed">
              A new dawn for Pakistani agriculture. Empowering farmers, 
              engaging youth, and building sustainable farming communities for tomorrow.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary-600 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full inline-flex shadow-lg mb-6 md:mb-8">
              <Sun className="w-5 h-5 md:w-6 md:h-6" />
              <span className="font-semibold text-sm md:text-base">Oceanica Crop Science</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link href="#initiatives" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center">
                Explore Initiatives
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <Link href="/contact-us" className="bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center">
                Get Involved
              </Link>
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
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Naya Savera represents our commitment to not just providing agricultural products, 
                but to building a brighter future for Pakistan's farming community.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe in empowering farmers with knowledge, engaging youth in agriculture, 
                and creating sustainable farming practices that benefit both people and the planet.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Sustainable Future</h3>
                  <p className="text-gray-600">Building tomorrow's agriculture today</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-yellow-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Objectives</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700">Empower farmers with modern knowledge</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700">Engage youth in agricultural innovation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700">Build sustainable farming communities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700">Promote environmental responsibility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section id="initiatives" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to transform Pakistani agriculture 
              and create opportunities for farmers and youth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className={`${initiative.color} rounded-xl p-8 hover:shadow-lg transition-shadow duration-300`}>
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{initiative.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{initiative.title}</h3>
                  <p className="text-gray-700 mb-4">{initiative.description}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {initiative.benefits.map((benefit, idx) => (
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

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real farmers who have transformed their lives 
              through Naya Savera programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{story.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                <p className="text-gray-500 mb-4">{story.location}</p>
                <p className="text-gray-700 italic">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Be Part of Naya Savera
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join us in building a brighter future for Pakistani agriculture. 
            Whether you're a farmer, student, or community member, there's a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Join Our Programs
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
