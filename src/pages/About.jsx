import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'

// Import team SVG placeholders
import sarahChenSvg from '../assets/images/team/sarah-chen.svg'
import davidNguyenSvg from '../assets/images/team/david-nguyen.svg'
import mariaRodriguezSvg from '../assets/images/team/maria-rodriguez.svg'

// Placeholder image generator for team photos
const createTeamPlaceholder = (name, role) => {
  const colors = ['#4A90E2', '#7ED6A7', '#8B5CF6', '#F59E0B', '#EF4444']
  const colorIndex = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length
  const initials = name.split(' ').map(n => n[0]).join('')
  
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${colors[colorIndex]}"/>
      <circle cx="200" cy="150" r="60" fill="rgba(255,255,255,0.3)"/>
      <text x="200" y="165" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle">${initials}</text>
      <text x="200" y="350" font-family="Arial, sans-serif" font-size="14" fill="white" text-anchor="middle">${role}</text>
    </svg>
  `)}`
}

const team = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    description: 'Former HR executive with 10+ years at Fortune 500 companies',
    image: sarahChenSvg
  },
  {
    name: 'David Nguyen',
    role: 'CTO',
    description: 'Tech veteran who built scalable platforms at leading startups',
    image: davidNguyenSvg
  },
  {
    name: 'Maria Rodriguez',
    role: 'Head of Partnerships',
    description: 'Expert in building strategic relationships and vendor networks',
    image: mariaRodriguezSvg
  }
]

const values = [
  {
    title: 'Employee-First',
    description: 'Every decision we make puts employee happiness and well-being at the center',
    icon: '💙'
  },
  {
    title: 'Transparency',
    description: 'Clear pricing, honest communication, and open feedback channels',
    icon: '🔍'
  },
  {
    title: 'Innovation',
    description: 'Constantly evolving to meet the changing needs of modern workplaces',
    icon: '🚀'
  },
  {
    title: 'Community',
    description: 'Building connections between employees, companies, and local partners',
    icon: '🤝'
  }
]

export default function About({ onContactClick }) {
  const { t } = useTranslation()
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="page-hero-bg">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center py-20">
            <Reveal>
              <h1 className="display-heading text-5xl lg:text-6xl mb-6">
                {t('about.title')}
              </h1>
              <p className="subhead text-xl lg:text-2xl mb-8">
                {t('about.subtitle')}
              </p>
              <p className="muted-text text-lg max-w-2xl mx-auto">
                {t('about.description')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission Preview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {t('about.mission.title')}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {t('about.mission.description')}
                </p>
                <Link 
                  to="/about/mission"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  {t('about.mission.readMore')} →
                </Link>
              </Reveal>
              
              <Reveal delay={200}>
                <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-8 rounded-2xl">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('about.vision.title')}</h3>
                  <p className="text-gray-600">
                    {t('about.vision.description')}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
                {t('about.values.title')}
              </h2>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
                {t('about.team.title')}
              </h2>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Reveal key={index} delay={index * 150}>
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                      <img 
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = createTeamPlaceholder(member.name, member.role)
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
                {t('about.impact.title')}
              </h2>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '10,000+', label: 'Happy Employees' },
                { number: '500+', label: 'Partner Companies' },
                { number: '100+', label: 'Trusted Partners' },
                { number: '85%', label: 'Engagement Rate' }
              ].map((stat, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                {t('about.stories.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('about.stories.subtitle')}
              </p>
              <div className="bg-gray-50 p-8 rounded-2xl max-w-2xl mx-auto">
                <p className="text-gray-700 italic mb-4">
                  "Since implementing Kanopy, our employee satisfaction scores have increased by 40% and turnover decreased by 35%. It's been a game-changer for our company culture."
                </p>
                <p className="font-semibold text-gray-900">— Tech Startup, 150 employees</p>
              </div>
              <div className="mt-8">
                <Link 
                  to="/about/stories"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read more success stories →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {t('about.cta.title')}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {t('about.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => onContactClick('trial')}
                  className="glass-cta px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t('cta.startFreeTrial')}
                </button>
                <button 
                  onClick={() => onContactClick('general')}
                  className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-gray-600 text-white hover:border-gray-400 transition-all duration-300"
                >
                  {t('contact.contactUs')}
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}