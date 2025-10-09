import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ForEmployees(){
  const { t } = useTranslation()
  
  const categories = [
    {emoji: '🍜', title: t('forEmployees.categories.foodBeverage.title'), desc: t('forEmployees.categories.foodBeverage.description')},
    {emoji: '🧘', title: t('forEmployees.categories.healthWellness.title'), desc: t('forEmployees.categories.healthWellness.description')},
    {emoji: '🎭', title: t('forEmployees.categories.lifestyleLeisure.title'), desc: t('forEmployees.categories.lifestyleLeisure.description')},
    {emoji: '🎓', title: t('forEmployees.categories.learningGrowth.title'), desc: t('forEmployees.categories.learningGrowth.description')}
  ]

  return (
    <section className="bg-white">
      <div className="container py-12">
        <h2 className="text-2xl font-bold">{t('forEmployees.title')}</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
          {categories.map((c, idx) => (
            <div key={c.title} className="p-4 glass-card rounded-lg text-center fade-up" style={{transitionDelay: `${idx * 60}ms`}}>
              <div className="icon-circle mb-3">{c.emoji}</div>
              <div className="font-semibold mt-2">{c.title}</div>
              <div className="text-sm text-gray-600 mt-1">{c.desc}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-700">{t('forEmployees.savings')}</p>
      </div>
    </section>
  )
}
