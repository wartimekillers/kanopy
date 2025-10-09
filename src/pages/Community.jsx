import React from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'

export default function Community({ onContactClick }) {
  const { t } = useTranslation()
  
  const activities = [
    {
      icon: '⚽',
      title: t('communityPage.activities.sports.title'),
      description: t('communityPage.activities.sports.description'),
      image: '/api/placeholder/400/300'
    },
    {
      icon: '🎓',
      title: t('communityPage.activities.training.title'),
      description: t('communityPage.activities.training.description'),
      image: '/api/placeholder/400/300'
    },
    {
      icon: '🍷',
      title: t('communityPage.activities.networking.title'),
      description: t('communityPage.activities.networking.description'),
      image: '/api/placeholder/400/300'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="page-hero-bg">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center py-20">
            <Reveal>
              <h1 className="display-heading text-5xl lg:text-6xl mb-6">
                {t('communityPage.hero.title')}
              </h1>
              <p className="subhead text-xl lg:text-2xl mb-8">
                {t('communityPage.hero.subtitle')}
              </p>
              <p className="muted-text text-lg max-w-2xl mx-auto">
                {t('communityPage.hero.description')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div className="bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="aspect-video bg-gradient-to-r from-blue-100 to-emerald-100 flex items-center justify-center">
                      <div className="text-6xl">{activity.icon}</div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{activity.title}</h3>
                      <p className="muted-text">{activity.description}</p>
                    </div>
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
                {t('communityPage.cta.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('communityPage.cta.description')}
              </p>
              <button 
                onClick={() => onContactClick('trial')}
                className="glass-cta px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('communityPage.cta.button')}
              </button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}