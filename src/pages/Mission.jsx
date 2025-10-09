import React from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'

export default function Mission({ onContactClick }) {
  const { t } = useTranslation()
  
  const stats = [
    {
      number: '10,000+',
      label: t('missionPage.stats.employees.label')
    },
    {
      number: '30–50%',
      label: t('missionPage.stats.discounts.label')
    },
    {
      number: '10×',
      label: t('missionPage.stats.value.label')
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
                {t('missionPage.hero.title')}
              </h1>
              <p className="subhead text-xl lg:text-2xl mb-8">
                {t('missionPage.hero.subtitle')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  {t('missionPage.mission.title')}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {t('missionPage.mission.description')}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  {t('missionPage.vision.title')}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {t('missionPage.vision.description')}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
                {t('missionPage.impact.title')}
              </h2>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div className="text-center p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                      {stat.number}
                    </div>
                    <p className="text-gray-600">{stat.label}</p>
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
                {t('missionPage.cta.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('missionPage.cta.description')}
              </p>
              <button 
                onClick={() => onContactClick('trial')}
                className="glass-cta px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('missionPage.cta.button')}
              </button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}