import React from 'react'
import { useTranslation } from 'react-i18next'

export default function PlatformHowItWorks(){
  const { t } = useTranslation()
  
  const steps = [
    {emoji: '1️⃣', title: t('howItWorks.step1.title'), desc: t('howItWorks.step1.description')},
    {emoji: '2️⃣', title: t('howItWorks.step2.title'), desc: t('howItWorks.step2.description')},
    {emoji: '3️⃣', title: t('howItWorks.step3.title'), desc: t('howItWorks.step3.description')},
    {emoji: '4️⃣', title: t('howItWorks.step4.title'), desc: t('howItWorks.step4.description')}
  ]

  return (
    <section className="bg-white">
      <div className="container py-12">
        <h2 className="text-2xl font-bold">{t('howItWorks.title')}</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={s.title} className="p-6 glass-card rounded-lg text-center transform transition hover:-translate-y-2 fade-up" style={{transitionDelay: `${idx * 80}ms`}}>
              <div className="text-4xl mb-3">{s.emoji}</div>
              <h3 className="mt-1 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
