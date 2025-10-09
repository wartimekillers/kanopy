import React from 'react'
import { useTranslation } from 'react-i18next'
import kanopyLogo from '../assets/images/logo/kanopylogo2.png'

export default function ContactFooter(){
  const { t } = useTranslation()
  
  const openZalo = () => {
    window.open('https://zalo.me/kanopyvn', '_blank')
  }

  return (
    <footer id="contact" className="bg-white border-t mt-12">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              src={kanopyLogo} 
              alt="Kanopy logo" 
              className="h-9 w-auto mb-4"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextElementSibling.style.display = 'block'
              }}
            />
            <div style={{ display: 'none' }} className="text-2xl font-bold text-gray-900 mb-4">Kanopy</div>
            <h3 className="text-xl font-bold mt-4">{t('contact.readyToMakeTeamHappier', 'Ready to make your team happier?')}</h3>
            <p className="mt-2 text-gray-600">{t('contact.address', '92 Xuân Thủy, Thảo Điền, Ho Chi Minh City')}</p>
            <p className="mt-1 text-gray-600">hello@kanopy.vn · +84 34 898 5093</p>
          </div>
          <div>
            <div className="glass-card p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">{t('contact.quickContact')}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={openZalo}
                  className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">Z</span>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Zalo</p>
                    <p className="text-xs text-gray-600">{t('contact.chatWithUs')}</p>
                  </div>
                </button>
                
                <a
                  href="mailto:contact@kanopy.vn"
                  className="flex items-center gap-3 p-3 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">{t('contact.email', 'Email')}</p>
                    <p className="text-xs text-gray-600">contact@kanopy.vn</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-sm text-gray-500">© {new Date().getFullYear()} Kanopy — {t('contact.allRightsReserved', 'All rights reserved')}.</div>
      </div>
    </footer>
  )
}
