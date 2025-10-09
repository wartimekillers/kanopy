import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'

const plans = [
  {
    nameKey: 'pricing.plans.launch.name',
    priceKey: 'pricing.plans.launch.price',
    periodKey: 'pricing.plans.launch.period',
    descriptionKey: 'pricing.plans.launch.description',
    featuresKeys: [
      'pricing.plans.launch.features.0',
      'pricing.plans.launch.features.1',
      'pricing.plans.launch.features.2',
      'pricing.plans.launch.features.3',
      'pricing.plans.launch.features.4'
    ],
    highlighted: true,
    ctaKey: 'pricing.plans.launch.cta'
  },
  {
    nameKey: 'pricing.plans.standard.name',
    priceKey: 'pricing.plans.standard.price',
    periodKey: 'pricing.plans.standard.period',
    descriptionKey: 'pricing.plans.standard.description',
    featuresKeys: [
      'pricing.plans.standard.features.0',
      'pricing.plans.standard.features.1',
      'pricing.plans.standard.features.2',
      'pricing.plans.standard.features.3',
      'pricing.plans.standard.features.4'
    ],
    highlighted: false,
    ctaKey: 'pricing.plans.standard.cta'
  },
  {
    nameKey: 'pricing.plans.enterprise.name',
    priceKey: 'pricing.plans.enterprise.price',
    periodKey: 'pricing.plans.enterprise.period',
    descriptionKey: 'pricing.plans.enterprise.description',
    featuresKeys: [
      'pricing.plans.enterprise.features.0',
      'pricing.plans.enterprise.features.1',
      'pricing.plans.enterprise.features.2',
      'pricing.plans.enterprise.features.3',
      'pricing.plans.enterprise.features.4'
    ],
    highlighted: false,
    ctaKey: 'pricing.plans.enterprise.cta'
  }
]

const features = [
  'pricing.features.0',
  'pricing.features.1',
  'pricing.features.2',
  'pricing.features.3',
  'pricing.features.4',
  'pricing.features.5'
]

export default function Pricing({ onContactClick }) {
  const { t } = useTranslation()
  
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
                          {t('pricing.plans.launch.popular')}
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{t(plan.nameKey)}</h3>
                      <p className="text-gray-600 mb-4">{t(plan.descriptionKey)}</p>
                      <div className="mb-2">
                        <span className="text-4xl font-bold text-gray-900">{t(plan.priceKey)}</span>
                      </div>
                      <p className="text-gray-600">{t(plan.periodKey)}</p>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.featuresKeys.map((featureKey, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{t(featureKey)}</span>
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
                      {t(plan.ctaKey)}
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
              {features.map((featureKey, index) => (
                <Reveal key={index} delay={index * 50}>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
                    <span className="text-lg">{t(featureKey)}</span>
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
                  <h3 className="font-semibold text-gray-900 mb-2">Can I change plans later?</h3>
                  <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Is there a minimum team size?</h3>
                  <p className="text-gray-600">No, teams of any size can join Kanopy starting from 10 employees.</p>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/resources/faq" className="text-blue-600 hover:text-blue-700 font-medium">
                  View all FAQs →
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