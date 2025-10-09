import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Solutions({ onContactClick }){
  const { t } = useTranslation()
  
  return (
    <section className="bg-gray-50">
      <div className="container py-12">
        <h2 className="text-2xl font-bold">{t('solutions.title')}</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 glass-card rounded-lg fade-up">
            <h3 className="font-semibold">{t('solutions.community.title')}</h3>
            <p className="mt-2 text-sm text-gray-600">{t('solutions.community.description')}</p>
          </div>
          <div className="p-6 glass-card rounded-lg fade-up">
            <h3 className="font-semibold">{t('solutions.merchants.title')}</h3>
            <p className="mt-2 text-sm text-gray-600">{t('solutions.merchants.description')}</p>
            <div className="mt-3">
              <button 
                onClick={() => onContactClick('partner')}
                className="bg-kanopy-green text-white px-3 py-2 rounded-md hover:bg-kanopy-green/90 transition-colors"
              >
                {t('cta.becomePartner')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
