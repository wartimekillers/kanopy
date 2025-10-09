import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function ContactModal({ isOpen, onClose, type = 'general' }) {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create email body
    const subject = type === 'partner' ? t('contact.becomePartner') : 'Kanopy Free Trial Request'
    const body = `
${t('contact.fullName')}: ${formData.name}
${t('contact.email')}: ${formData.email}
${t('contact.company')}: ${formData.company}
${t('contact.message')}: ${formData.message}

Type: ${type}
    `.trim()

    // Open email client
    window.location.href = `mailto:contact@kanopy.vn?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Reset form and close modal
    setFormData({ name: '', email: '', company: '', message: '' })
    onClose()
  }

  const openZalo = () => {
    // Replace with your actual Zalo contact link
    window.open('https://zalo.me/kanopyvn', '_blank')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {type === 'partner' ? t('contact.becomePartner') : t('contact.contactUs')}
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>
          <p className="text-gray-600 mt-2">
            {type === 'partner' 
              ? t('contact.partnerDescription')
              : t('contact.generalDescription')
            }
          </p>
        </div>

        {/* Quick Contact Options */}
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">{t('contact.quickContact')}</h3>
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
                <p className="font-medium text-gray-900">{t('contact.email')}</p>
                <p className="text-xs text-gray-600">contact@kanopy.vn</p>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4">{t('contact.sendMessage')}</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.fullName')} *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={t('contact.fullName')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.email')} *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your.email@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.company')}
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={t('contact.company')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.message')} *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={type === 'partner' 
                  ? t('contact.partnerPlaceholder')
                  : t('contact.generalPlaceholder')
                }
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              {t('contact.cancel')}
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              {t('contact.send')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}