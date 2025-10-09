import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Callout(){
  const { t } = useTranslation()
  
  return (
    <div className="bg-kanopy-blue text-white">
      <div className="container py-4 flex items-center justify-center">
        <div className="text-center font-semibold">{t('callout.trialOffer')}</div>
      </div>
    </div>
  )
}
