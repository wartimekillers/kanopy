import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'

export default function Solutions({ onContactClick }) {
  const { t } = useTranslation()
  
  const solutions = [
    {
      title: t('solutionsPage.solutions.communityEvents.title'),
      description: t('solutionsPage.solutions.communityEvents.description'),
      icon: '🏃‍♂️',
      link: '/solutions/community',
      features: [
        t('solutionsPage.solutions.communityEvents.features.sports'),
        t('solutionsPage.solutions.communityEvents.features.training'),
        t('solutionsPage.solutions.communityEvents.features.teamBuilding'),
        t('solutionsPage.solutions.communityEvents.features.networking')
      ]
    },
    {
      title: t('solutionsPage.solutions.partnerNetwork.title'),
      description: t('solutionsPage.solutions.partnerNetwork.description'),
      icon: '🤝',
      link: '/solutions/partners',
      features: [
        t('solutionsPage.solutions.partnerNetwork.features.restaurant'),
        t('solutionsPage.solutions.partnerNetwork.features.fitness'),
        t('solutionsPage.solutions.partnerNetwork.features.retail'),
        t('solutionsPage.solutions.partnerNetwork.features.services')
      ]
    }
  ]

  const benefits = [
    {
      title: t('solutionsPage.benefits.engagement.title'),
      description: t('solutionsPage.benefits.engagement.description'),
      stat: '85%',
      statLabel: t('solutionsPage.benefits.engagement.statLabel')
    },
    {
      title: t('solutionsPage.benefits.turnover.title'),
      description: t('solutionsPage.benefits.turnover.description'),
      stat: '40%',
      statLabel: t('solutionsPage.benefits.turnover.statLabel')
    },
    {
      title: t('solutionsPage.benefits.wellness.title'),
      description: t('solutionsPage.benefits.wellness.description'),
      stat: '60%',
      statLabel: t('solutionsPage.benefits.wellness.statLabel')
    },
    {
      title: t('solutionsPage.benefits.costs.title'),
      description: t('solutionsPage.benefits.costs.description'),
      stat: '10:1',
      statLabel: t('solutionsPage.benefits.costs.statLabel')
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
                {t('solutionsPage.title')}
              </h1>
              <p className="subhead text-xl lg:text-2xl mb-8">
                {t('solutionsPage.subtitle')}
              </p>
              <p className="muted-text text-lg max-w-2xl mx-auto">
                {t('solutionsPage.description')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
                {t('solutionsPage.coreTitle')}
              </h2>
            </Reveal>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {solutions.map((solution, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
                    <div className="text-4xl mb-4">{solution.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to={solution.link}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group-hover:gap-3 transition-all duration-300"
                    >
                      {t('cta.learnMore')}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
                {t('solutionsPage.impactTitle')}
              </h2>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div className="bg-white p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{benefit.stat}</div>
                    <div className="text-sm text-gray-500 mb-4">{benefit.statLabel}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
                {t('solutionsPage.processTitle')}
              </h2>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: t('solutionsPage.process.step1.title'),
                  description: t('solutionsPage.process.step1.description')
                },
                {
                  step: '02', 
                  title: t('solutionsPage.process.step2.title'),
                  description: t('solutionsPage.process.step2.description')
                },
                {
                  step: '03',
                  title: t('solutionsPage.process.step3.title'),
                  description: t('solutionsPage.process.step3.description')
                }
              ].map((step, index) => (
                <Reveal key={index} delay={index * 150}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
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
                {t('solutionsPage.cta.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('solutionsPage.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => onContactClick('trial')}
                  className="glass-cta px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t('cta.startFreeTrial')}
                </button>
                <Link 
                  to="/platform/how-it-works"
                  className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-all duration-300"
                >
                  {t('solutionsPage.cta.seeHowItWorks')}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}