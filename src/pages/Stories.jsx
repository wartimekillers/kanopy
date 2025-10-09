import React from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'

export default function Stories({ onContactClick }) {
  const { t } = useTranslation()
  
  const stories = t('storiesPage.stories', { returnObjects: true })

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="page-hero-bg">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center py-20">
            <Reveal>
              <h1 className="display-heading text-5xl lg:text-6xl mb-6">
                {t('storiesPage.hero.title')}
              </h1>
              <p className="subhead text-xl lg:text-2xl mb-8">
                {t('storiesPage.hero.subtitle')}
              </p>
              <p className="muted-text text-lg max-w-2xl mx-auto">
                {t('storiesPage.hero.description')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {stories.map((story, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                          {story.industry}
                        </span>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full">
                          {story.employees}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{story.company}</h3>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{story.result}</div>
                      <blockquote className="text-gray-700 italic">
                        "{story.quote}"
                      </blockquote>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                {t('storiesPage.results.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {t('storiesPage.results.stats.costSavings.value')}
                  </div>
                  <p className="text-gray-600">
                    {t('storiesPage.results.stats.costSavings.label')}
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">
                    {t('storiesPage.results.stats.retention.value')}
                  </div>
                  <p className="text-gray-600">
                    {t('storiesPage.results.stats.retention.label')}
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {t('storiesPage.results.stats.adminOverhead.value')}
                  </div>
                  <p className="text-gray-600">
                    {t('storiesPage.results.stats.adminOverhead.label')}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('storiesPage.cta.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('storiesPage.cta.subtitle')}
              </p>
              <button 
                onClick={() => onContactClick('trial')}
                className="glass-cta px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('storiesPage.cta.button')}
              </button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}