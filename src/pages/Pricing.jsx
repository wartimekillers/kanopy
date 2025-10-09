import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'

export default function Pricing({ onContactClick }) {
  const { t } = useTranslation()

  const plans = [
    {
      name: t('pricing.plans.launch.name'),
      price: t('pricing.plans.launch.price'),
      period: t('pricing.plans.launch.period'),
      description: t('pricing.plans.launch.description'),
      features: t('pricing.plans.launch.features', { returnObjects: true }),
      highlighted: true,
      cta: t('pricing.plans.launch.cta'),
      popular: t('pricing.plans.launch.popular'),
    },
    {
      name: t('pricing.plans.standard.name'),
      price: t('pricing.plans.standard.price'),
      period: t('pricing.plans.standard.period'),
      description: t('pricing.plans.standard.description'),
      features: t('pricing.plans.standard.features', { returnObjects: true }),
      highlighted: false,
      cta: t('pricing.plans.standard.cta'),
    },
    {
      name: t('pricing.plans.enterprise.name'),
      price: t('pricing.plans.enterprise.price'),
      period: t('pricing.plans.enterprise.period'),
      description: t('pricing.plans.enterprise.description'),
      features: t('pricing.plans.enterprise.features', { returnObjects: true }),
      highlighted: false,
      cta: t('pricing.plans.enterprise.cta'),
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
                {t('pricing.title')}
              </h1>
              <p className="subhead text-xl lg:text-2xl mb-8">
                {t('pricing.subtitle')}
              </p>
              <p className="muted-text text-lg max-w-2xl mx-auto">
                {t('pricing.description')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                    plan.highlighted 
                      ? 'border-blue-500 shadow-xl scale-105 bg-gradient-to-b from-blue-50 to-white' 
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-lg bg-white'
                  }`}>
                    {plan.highlighted && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {plan.popular}
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-4">{plan.description}</p>
                      <div className="mb-2">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      </div>
                      <p className="text-gray-600">{plan.period}</p>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => onContactClick('trial')}
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      plan.highlighted
                        ? 'glass-cta text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}>
                      {plan.cta}
                    </button>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
                {t('pricing.whatsIncluded')}
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t('pricing.features', { returnObjects: true }).map((feature, index) => (
                <Reveal key={index} delay={index * 50}>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
                    <span className="text-lg">{feature}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                {t('pricing.commonQuestions')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">{t('pricing.faq.changePlans.question')}</h3>
                  <p className="text-gray-600">{t('pricing.faq.changePlans.answer')}</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">{t('pricing.faq.teamSize.question')}</h3>
                  <p className="text-gray-600">{t('pricing.faq.teamSize.answer')}</p>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/resources/faq" className="text-blue-600 hover:text-blue-700 font-medium">
                  {t('pricing.faq.viewAll')}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('pricing.cta.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('pricing.cta.subtitle')}
              </p>
              <button 
                onClick={() => onContactClick('trial')}
                className="glass-cta px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('cta.startFreeTrial')}
              </button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}