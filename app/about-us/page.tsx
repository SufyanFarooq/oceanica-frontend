import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ArrowLeft, Leaf, Shield, TrendingUp, Clock, Users, Globe, Award, Target } from 'lucide-react'

export default function AboutUs() {
  const values = [
    {
      title: 'Innovation',
      description: 'Continuously developing cutting-edge agricultural solutions',
      icon: '💡',
      color: 'bg-blue-100'
    },
    {
      title: 'Sustainability',
      description: 'Committed to environmental responsibility and long-term success',
      icon: '🌱',
      color: 'bg-green-100'
    },
    {
      title: 'Excellence',
      description: 'Maintaining the highest standards in everything we do',
      icon: '⭐',
      color: 'bg-yellow-100'
    },
    {
      title: 'Integrity',
      description: 'Building trust through honest and transparent relationships',
      icon: '🤝',
      color: 'bg-purple-100'
    }
  ]

  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Oceanica Crop Science established in Pakistan'
    },
    {
      year: '2015',
      title: 'First Product Launch',
      description: 'Introduced our flagship crop protection products'
    },
    {
      year: '2018',
      title: 'Regional Expansion',
      description: 'Expanded operations across major agricultural regions'
    },
    {
      year: '2020',
      title: 'Sustainability Initiative',
      description: 'Launched comprehensive sustainability program'
    },
    {
      year: '2023',
      title: 'Digital Transformation',
      description: 'Enhanced digital capabilities and farmer support'
    }
  ]

  const team = [
    {
      name: 'Dr. Ahmed Khan',
      position: 'Chief Executive Officer',
      expertise: 'Agricultural Science, Business Leadership',
      image: '👨‍💼'
    },
    {
      name: 'Dr. Fatima Ali',
      position: 'Head of Research & Development',
      expertise: 'Crop Protection, Product Development',
      image: '👩‍🔬'
    },
    {
      name: 'Muhammad Hassan',
      position: 'Director of Operations',
      expertise: 'Supply Chain, Quality Management',
      image: '👨‍💼'
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
              About Oceanica Crop Science
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Leading agricultural innovation in Pakistan. We're committed to helping farmers 
              increase yields, protect crops, and build sustainable futures.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary-600">
              <Leaf className="w-6 h-6" />
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
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Oceanica Crop Science, we're dedicated to advancing agricultural 
                productivity and sustainability in Pakistan through innovative solutions, 
                expert knowledge, and unwavering commitment to our farming community.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that by empowering farmers with the right tools and knowledge, 
                we can build a more food-secure and prosperous Pakistan for generations to come.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Food Security</h3>
                  <p className="text-gray-600">Supporting Pakistan's agricultural future</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700">Develop innovative crop protection solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700">Provide expert agronomic advice</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700">Train farmers in modern techniques</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700">Promote sustainable farming practices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape 
              our relationships with farmers, partners, and communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`${value.color} rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300`}>
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a leading agricultural solutions provider 
              in Pakistan.
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center space-x-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                <div className="flex-1">
                  <div className={`text-right ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.year}</h3>
                    <h4 className="text-xl font-semibold text-primary-600 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to advancing 
              agricultural innovation in Pakistan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-2">{member.position}</p>
                <p className="text-gray-600">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Whether you're a farmer looking for solutions, a partner wanting to collaborate, 
            or someone passionate about agriculture, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get in Touch
            </Link>
            <Link href="/crop-solutions" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
