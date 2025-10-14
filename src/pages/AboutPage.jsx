import React from 'react'
import { useTranslation } from 'react-i18next'
import CaseStudies from '../components/CaseStudies'

export default function AboutPage(){
  const { t } = useTranslation()
  
  return (
    <section className="page-hero-bg">
      <div className="container py-24">
        <div className="max-w-3xl">
          <h1 className="display-heading text-4xl lg:text-5xl">{t('aboutSection.title')}</h1>
          <p className="mt-4 subhead">{t('aboutSection.description')}</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-lg fade-up text-center">
              <div className="text-2xl font-bold">500.000+</div>
              <div className="text-sm muted-text">{t('aboutSection.stats.employees')}</div>
            </div>
            <div className="glass-card p-6 rounded-lg fade-up text-center">
              <div className="text-2xl font-bold">30–50%</div>
              <div className="text-sm muted-text">{t('aboutSection.stats.discounts')}</div>
            </div>
            <div className="glass-card p-6 rounded-lg fade-up text-center">
              <div className="text-2xl font-bold">10×</div>
              <div className="text-sm muted-text">{t('aboutSection.stats.value')}</div>
            </div>
          </div>
        </div>
        <CaseStudies />
      </div>
    </section>
  )
}
