import React from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'

export default function HowItWorks({ onContactClick }) {
  const { t } = useTranslation()
  
  const steps = [
    {
      number: '1️⃣',
      title: t('howItWorksPage.steps.step1.title'),
      description: t('howItWorksPage.steps.step1.description')
    },
    {
      number: '2️⃣',
      title: t('howItWorksPage.steps.step2.title'),
      description: t('howItWorksPage.steps.step2.description')
    },
    {
      number: '3️⃣',
      title: t('howItWorksPage.steps.step3.title'),
      description: t('howItWorksPage.steps.step3.description')
    },
    {
      number: '4️⃣',
      title: t('howItWorksPage.steps.step4.title'),
      description: t('howItWorksPage.steps.step4.description')
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
                {t('howItWorksPage.title')}
              </h1>
              <p className="subhead text-xl lg:text-2xl mb-8">
                {t('howItWorksPage.subtitle')}
              </p>
              <p className="muted-text text-lg max-w-2xl mx-auto">
                {t('howItWorksPage.description')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div className="text-center p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="text-6xl mb-6">{step.number}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                    <p className="muted-text">{step.description}</p>
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
                Ready to get started?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of companies already using Kanopy
              </p>
              <button 
                onClick={() => onContactClick('trial')}
                className="glass-cta px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}