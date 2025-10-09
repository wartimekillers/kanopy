import React from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'

export default function FAQ({ onContactClick }) {
  const { t } = useTranslation()
  
  const faqs = [
    {
      question: t('faqPage.faqs.cost.question'),
      answer: t('faqPage.faqs.cost.answer')
    },
    {
      question: t('faqPage.faqs.trial.question'),
      answer: t('faqPage.faqs.trial.answer')
    },
    {
      question: t('faqPage.faqs.smallTeams.question'),
      answer: t('faqPage.faqs.smallTeams.answer')
    },
    {
      question: t('faqPage.faqs.usage.question'),
      answer: t('faqPage.faqs.usage.answer')
    },
    {
      question: t('faqPage.faqs.benefits.question'),
      answer: t('faqPage.faqs.benefits.answer')
    },
    {
      question: t('faqPage.faqs.setup.question'),
      answer: t('faqPage.faqs.setup.answer')
    },
    {
      question: t('faqPage.faqs.contract.question'),
      answer: t('faqPage.faqs.contract.answer')
    },
    {
      question: t('faqPage.faqs.analytics.question'),
      answer: t('faqPage.faqs.analytics.answer')
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
                {t('faqPage.hero.title')}
              </h1>
              <p className="subhead text-xl lg:text-2xl mb-8">
                {t('faqPage.hero.subtitle')}
              </p>
              <p className="muted-text text-lg max-w-2xl mx-auto">
                {t('faqPage.hero.description')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Reveal key={index} delay={index * 50}>
                  <div className="bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                    <details className="group">
                      <summary className="flex items-center justify-between p-6 cursor-pointer">
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <svg 
                          className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('faqPage.contact.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('faqPage.contact.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => onContactClick('general')}
                  className="glass-cta px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t('faqPage.contact.supportButton')}
                </button>
                <button 
                  onClick={() => onContactClick('trial')}
                  className="px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
                >
                  {t('faqPage.contact.demoButton')}
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}