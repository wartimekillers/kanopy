import React from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'

export default function ForCompanies({ onContactClick }) {
  const { t } = useTranslation()
  
  const benefits = [
    {
      icon: '📊',
      title: t('forCompaniesPage.benefits.budgetPredictability.title'),
      description: t('forCompaniesPage.benefits.budgetPredictability.description')
    },
    {
      icon: '💙',
      title: t('forCompaniesPage.benefits.retentionLoyalty.title'),
      description: t('forCompaniesPage.benefits.retentionLoyalty.description')
    },
    {
      icon: '🌟',
      title: t('forCompaniesPage.benefits.employerBranding.title'),
      description: t('forCompaniesPage.benefits.employerBranding.description')
    },
    {
      icon: '📈',
      title: t('forCompaniesPage.benefits.engagementData.title'),
      description: t('forCompaniesPage.benefits.engagementData.description')
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
                {t('forCompaniesPage.title')}
              </h1>
              <p className="subhead text-xl lg:text-2xl mb-8">
                {t('forCompaniesPage.subtitle')}
              </p>
              <p className="muted-text text-lg max-w-2xl mx-auto">
                {t('forCompaniesPage.description')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benefits Table */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
                Benefits for Your Company
              </h2>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="icon-circle">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                        <p className="muted-text">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <div className="bg-white rounded-3xl p-12 shadow-xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  10:1 ROI
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Every 1 VND spent = 10 VND in employee value
                </p>
                <button 
                  onClick={() => onContactClick('trial')}
                  className="glass-cta px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Calculate Your Savings
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}