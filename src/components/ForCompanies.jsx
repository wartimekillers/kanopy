import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ForCompanies(){
  const { t } = useTranslation()
  
  const benefits = [
    {title: t('forCompanies.benefits.budgetPredictability.title'), desc: t('forCompanies.benefits.budgetPredictability.description')},
    {title: t('forCompanies.benefits.retentionLoyalty.title'), desc: t('forCompanies.benefits.retentionLoyalty.description')},
    {title: t('forCompanies.benefits.employerBranding.title'), desc: t('forCompanies.benefits.employerBranding.description')},
    {title: t('forCompanies.benefits.engagementData.title'), desc: t('forCompanies.benefits.engagementData.description')}
  ]

  return (
    <section className="bg-gray-50">
      <div className="container py-12">
        <h2 className="text-2xl font-bold">{t('forCompanies.title')}</h2>
        <p className="mt-3 text-gray-600">{t('forCompanies.subtitle')}</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((b, idx) => (
            <div key={b.title} className="p-4 glass-card rounded-lg fade-up" style={{transitionDelay: `${idx * 60}ms`}}>
              <div className="font-semibold">{b.title}</div>
              <div className="text-sm text-gray-600 mt-1">{b.desc}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-700">{t('forCompanies.valueProposition')}</p>
      </div>
    </section>
  )
}
