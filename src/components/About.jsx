import React from 'react'
import { useTranslation } from 'react-i18next'

export default function About(){
  const { t } = useTranslation()
  
  return (
    <section className="bg-white">
      <div className="container py-12">
        <h2 className="text-2xl font-bold">{t('aboutSection.title')}</h2>
        <p className="mt-3 text-gray-600">{t('aboutSection.description')}</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 glass-card rounded-lg text-center fade-up">
            <div className="text-2xl font-bold">10,000+</div>
            <div className="text-sm text-gray-600">{t('aboutSection.stats.employees')}</div>
          </div>
          <div className="p-4 glass-card rounded-lg text-center fade-up">
            <div className="text-2xl font-bold">30–50%</div>
            <div className="text-sm text-gray-600">{t('aboutSection.stats.discounts')}</div>
          </div>
          <div className="p-4 glass-card rounded-lg text-center fade-up">
            <div className="text-2xl font-bold">10×</div>
            <div className="text-sm text-gray-600">{t('aboutSection.stats.value')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
