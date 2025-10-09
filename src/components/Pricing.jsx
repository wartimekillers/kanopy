import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Pricing(){
  const { t } = useTranslation()
  
  const plans = [
    {name: t('pricingSection.plans.launch.name'), price: t('pricingSection.plans.launch.price'), desc: t('pricingSection.plans.launch.description')},
    {name: t('pricingSection.plans.standard.name'), price: t('pricingSection.plans.standard.price'), desc: t('pricingSection.plans.standard.description')},
    {name: t('pricingSection.plans.enterprise.name'), price: t('pricingSection.plans.enterprise.price'), desc: t('pricingSection.plans.enterprise.description')}
  ]

  return (
    <section className="bg-gray-50">
      <div className="container py-12">
        <h2 className="text-2xl font-bold">{t('pricingSection.title')}</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((p, idx) => (
            <div key={p.name} className="p-6 glass-card rounded-lg fade-up" style={{transitionDelay: `${idx * 80}ms`}}>
              <div className="font-semibold">{p.name}</div>
              <div className="mt-2 text-lg">{p.price}</div>
              <div className="mt-2 text-sm text-gray-600">{p.desc}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-700">{t('pricingSection.note')}</p>
      </div>
    </section>
  )
}
