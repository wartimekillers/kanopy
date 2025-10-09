import React from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'

// Placeholder image generator for features
const createFeaturePlaceholder = (width, height, title, color = '#4A90E2') => {
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color}88;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" rx="12"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">${title}</text>
    </svg>
  `)}`
}

export default function Platform({ onContactClick }){
  const { t } = useTranslation()
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="page-hero-bg">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
              {/* Content */}
              <div>
                <Reveal>
                  <h1 className="display-heading text-5xl lg:text-6xl mb-6">
                    {t('platform.title')}
                  </h1>
                  <p className="subhead text-xl lg:text-2xl mb-8">
                    {t('platform.subtitle')}
                  </p>
                  <p className="muted-text text-lg mb-8">
                    {t('platform.description')}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-card p-6 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-3">Easy Onboarding</h3>
                      <p className="text-gray-600 text-sm">Fast CSV imports, SSO, and role-based access control</p>
                    </div>
                    <div className="glass-card p-6 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-3">Real-time Analytics</h3>
                      <p className="text-gray-600 text-sm">Engagement metrics, redemption rates, and ROI tracking</p>
                    </div>
                  </div>
                </Reveal>
              </div>
              
              {/* Platform Preview */}
              <div className="relative">
                <Reveal delay={200}>
                  <div className="relative">
                    <img 
                      src={createFeaturePlaceholder(600, 400, 'Platform Dashboard', '#4A90E2')}
                      alt="Platform dashboard preview"
                      className="w-full rounded-2xl shadow-2xl"
                      onError={(e) => {
                        e.target.src = createFeaturePlaceholder(600, 400, 'Dashboard Preview', '#4A90E2')
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10 rounded-2xl"></div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
                {t('platform.features.title')}
              </h2>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Employee Management',
                  description: 'Streamlined onboarding with bulk imports and automated workflows',
                  image: createFeaturePlaceholder(400, 300, 'Employee Management', '#7ED6A7')
                },
                {
                  title: 'Benefits Dashboard',
                  description: 'Intuitive interface for managing all employee perks and benefits',
                  image: createFeaturePlaceholder(400, 300, 'Benefits Dashboard', '#8B5CF6')
                },
                {
                  title: 'Analytics & Reporting',
                  description: 'Comprehensive insights into engagement and program effectiveness',
                  image: createFeaturePlaceholder(400, 300, 'Analytics Hub', '#F59E0B')
                }
              ].map((feature, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('platform.cta.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('platform.cta.subtitle')}
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
                  className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-all duration-300"
                >
                  {t('cta.scheduleDemo')}
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
