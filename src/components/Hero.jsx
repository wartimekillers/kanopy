import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ParallaxImage from './ParallaxImage'
import Reveal from './Reveal'

// Import placeholder images - these will fallback to SVG if real images don't load
import heroBackgroundImage from '../assets/images/hero/hero-background.jpeg'
import heroIllustrationSvg from '../assets/images/hero/hero-illustration.svg'
import dashboardPreviewSvg from '../assets/images/hero/dashboard-preview.svg'

// Temporary colored placeholder for development
const createPlaceholder = (width, height, color, text) => {
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
    </svg>
  `)}`
}

export default function Hero({ onContactClick }) {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  const keyBenefits = [
    {
      icon: '💰',
      title: t('benefits.predictableBudgets.title'),
      description: t('benefits.predictableBudgets.description')
    },
    {
      icon: '☕',
      title: t('benefits.dailyCare.title'),
      description: t('benefits.dailyCare.description')
    },
    {
      icon: '💼',
      title: t('benefits.strongerBrand.title'),
      description: t('benefits.strongerBrand.description')
    }
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section 
      className="hero-full relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
          {/* Content */}
          <div className="space-y-8">
            <Reveal>
              <div className="space-y-6">
                <h1 className="text-white text-5xl lg:text-7xl leading-tight font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                  {t('hero.title')}
                </h1>
                
                <p className="text-white text-xl lg:text-2xl max-w-2xl font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                  {t('hero.subtitle')}
                </p>
                
                <p className="text-white text-lg max-w-xl" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
                  {t('hero.description')}
                </p>
              </div>
            </Reveal>

            <Reveal rootMargin="0px 0px -20% 0px">
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onContactClick('trial')}
                  className="glass-cta px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t('hero.startTrial')}
                </button>
                <button 
                  onClick={() => onContactClick('trial')}
                  className="px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
                >
                  {t('hero.contactUs')}
                </button>
              </div>
            </Reveal>

            {/* Callout Banner */}
            <Reveal rootMargin="0px 0px -40% 0px">
              <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl border border-blue-200/50">
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    {t('cta.startFreeTrial')}
                  </p>
                  <p className="text-gray-600">
                    {t('cta.noHiddenFees')}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Visual */}
          <div className="relative lg:order-last">
            <Reveal rootMargin="0px 0px -20% 0px">
              <div className="relative max-w-lg mx-auto">
                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-30"></div>
                
                {/* Main illustration */}
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 overflow-hidden">
                  {/* Hero illustration */}
                  <div className="relative">
                    <img 
                      src={heroIllustrationSvg} 
                      alt="Kanopy platform illustration" 
                      className="w-full h-auto rounded-2xl"
                      onError={(e) => {
                        e.target.src = createPlaceholder(800, 600, '#4A90E2', 'Hero Illustration')
                      }}
                    />
                    
                    {/* Overlay elements for visual interest */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10 rounded-2xl"></div>
                  </div>
                  
                  {/* Floating dashboard preview */}
                  <div className="absolute -right-6 -bottom-6 w-32 lg:w-40 shadow-2xl rounded-2xl overflow-hidden bg-white p-2">
                    <img 
                      src={dashboardPreviewSvg}
                      alt="Dashboard preview" 
                      className="w-full h-auto rounded-xl"
                      onError={(e) => {
                        e.target.src = createPlaceholder(400, 800, '#7ED6A7', 'Dashboard')
                      }}
                    />
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg float">
                    🎯
                  </div>
                  
                  <div className="absolute top-8 -right-4 w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg float" style={{animationDelay: '1s'}}>
                    ✨
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-sm text-gray-500">{t('hero.scrollToExplore')}</span>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
