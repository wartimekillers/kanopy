import React from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from './Reveal'

export default function Benefits(){
  const { t } = useTranslation()
  
  return (
    <section className="bg-gray-50">
      <div className="container py-12">
        <h2 className="text-2xl font-bold">{t('benefits.title')}</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Reveal><div className="p-6 glass-card rounded-lg">
            <div className="icon-circle">💰</div>
            <h3 className="mt-3 font-semibold">{t('benefits.predictableBudgets.title')}</h3>
            <p className="mt-2 text-sm text-gray-600">{t('benefits.predictableBudgets.description')}</p>
          </div></Reveal>
          <Reveal><div className="p-6 glass-card rounded-lg">
            <div className="icon-circle">☕</div>
            <h3 className="mt-3 font-semibold">{t('benefits.dailyCare.title')}</h3>
            <p className="mt-2 text-sm text-gray-600">{t('benefits.dailyCare.description')}</p>
          </div></Reveal>
          <Reveal><div className="p-6 glass-card rounded-lg">
            <div className="icon-circle">💼</div>
            <h3 className="mt-3 font-semibold">{t('benefits.strongerBrand.title')}</h3>
            <p className="mt-2 text-sm text-gray-600">{t('benefits.strongerBrand.description')}</p>
          </div></Reveal>
        </div>
      </div>
    </section>
  )
}
