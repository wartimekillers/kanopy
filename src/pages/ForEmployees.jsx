import React from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'

export default function ForEmployees({ onContactClick }) {
  const { t } = useTranslation()
  
  const categories = [
    {
      icon: '🍜',
      title: t('forEmployeesPage.categories.foodBeverage.title'),
      description: t('forEmployeesPage.categories.foodBeverage.description'),
      examples: [
        t('forEmployeesPage.categories.foodBeverage.examples.coffeeShops'),
        t('forEmployeesPage.categories.foodBeverage.examples.restaurants'),
        t('forEmployeesPage.categories.foodBeverage.examples.foodDelivery')
      ]
    },
    {
      icon: '🧘',
      title: t('forEmployeesPage.categories.healthWellness.title'),
      description: t('forEmployeesPage.categories.healthWellness.description'),
      examples: [
        t('forEmployeesPage.categories.healthWellness.examples.fitnessCenters'),
        t('forEmployeesPage.categories.healthWellness.examples.yogaStudios'),
        t('forEmployeesPage.categories.healthWellness.examples.medicalClinics')
      ]
    },
    {
      icon: '🎭',
      title: t('forEmployeesPage.categories.lifestyleLeisure.title'),
      description: t('forEmployeesPage.categories.lifestyleLeisure.description'),
      examples: [
        t('forEmployeesPage.categories.lifestyleLeisure.examples.movieTheaters'),
        t('forEmployeesPage.categories.lifestyleLeisure.examples.travelBooking'),
        t('forEmployeesPage.categories.lifestyleLeisure.examples.spaServices')
      ]
    },
    {
      icon: '🎓',
      title: t('forEmployeesPage.categories.learningGrowth.title'),
      description: t('forEmployeesPage.categories.learningGrowth.description'),
      examples: [
        t('forEmployeesPage.categories.learningGrowth.examples.onlineCourses'),
        t('forEmployeesPage.categories.learningGrowth.examples.languageSchools'),
        t('forEmployeesPage.categories.learningGrowth.examples.workshops')
      ]
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="page-hero-bg">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center py-20">
            <Reveal>
              <h1 className="display-heading text-5xl lg:text-6xl mb-6">
                {t('forEmployeesPage.title')}
              </h1>
              <p className="subhead text-xl lg:text-2xl mb-8">
                {t('forEmployeesPage.subtitle')}
              </p>
              <p className="muted-text text-lg max-w-2xl mx-auto">
                {t('forEmployeesPage.description')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="icon-circle">
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                        <p className="muted-text mb-4">{category.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {category.examples.map((example, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Savings Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <div className="bg-white rounded-3xl p-12 shadow-xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {t('forEmployeesPage.savings.title')}
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  {t('forEmployeesPage.savings.description')}
                </p>
                <button 
                  onClick={() => onContactClick('trial')}
                  className="glass-cta px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t('forEmployeesPage.savings.cta')}
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}