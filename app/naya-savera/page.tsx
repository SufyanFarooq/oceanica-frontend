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
      <section className="bg-gradient-to-r from-yellow-50 to-orange-50 py-20 m-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-4">🌅</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Naya Savera
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A new dawn for Pakistani agriculture. Empowering farmers, 
              engaging youth, and building sustainable farming communities for tomorrow.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary-600 mb-8">
              <Sun className="w-6 h-6" />
              <span className="font-semibold">Oceanica Crop Science</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#initiatives" className="btn-primary inline-flex items-center">
                Explore Initiatives
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/contact-us" className="btn-secondary">
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
