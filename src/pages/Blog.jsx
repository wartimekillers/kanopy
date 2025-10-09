import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'

// Blog image placeholder generator
const createBlogPlaceholder = (title, category) => {
  const colors = {
    'HR Trends': '#4A90E2',
    'Engagement': '#7ED6A7', 
    'Budget Planning': '#8B5CF6',
    'Case Study': '#F59E0B',
    'ROI Analysis': '#EF4444',
    'Remote Culture': '#06B6D4'
  }
  const color = colors[category] || '#4A90E2'
  
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:${color};stop-opacity:0.4" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <rect x="50" y="50" width="500" height="300" fill="rgba(255,255,255,0.1)" rx="12"/>
      <text x="300" y="200" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">${category}</text>
    </svg>
  `)}`
}

const categories = ['All', 'HR Trends', 'Engagement', 'Budget Planning', 'Case Study', 'ROI Analysis', 'Remote Culture']

export default function Blog({ onContactClick }) {
  const { t } = useTranslation()
  
  const articles = [
    {
      title: t('blogPage.articles.hrTrends.title'),
      excerpt: t('blogPage.articles.hrTrends.excerpt'),
      category: t('blogPage.categories.hrTrends'),
      readTime: t('blogPage.readTime'),
      date: t('blogPage.articles.hrTrends.date')
    },
    {
      title: t('blogPage.articles.engagement.title'),
      excerpt: t('blogPage.articles.engagement.excerpt'),
      category: t('blogPage.categories.engagement'),
      readTime: t('blogPage.readTime'),
      date: t('blogPage.articles.engagement.date')
    },
    {
      title: t('blogPage.articles.budgetPlanning.title'),
      excerpt: t('blogPage.articles.budgetPlanning.excerpt'),
      category: t('blogPage.categories.budgetPlanning'),
      readTime: t('blogPage.readTime'),
      date: t('blogPage.articles.budgetPlanning.date')
    },
    {
      title: t('blogPage.articles.caseStudy.title'),
      excerpt: t('blogPage.articles.caseStudy.excerpt'),
      category: t('blogPage.categories.caseStudy'),
      readTime: t('blogPage.readTime'),
      date: t('blogPage.articles.caseStudy.date')
    },
    {
      title: t('blogPage.articles.roiAnalysis.title'),
      excerpt: t('blogPage.articles.roiAnalysis.excerpt'),
      category: t('blogPage.categories.roiAnalysis'),
      readTime: t('blogPage.readTime'),
      date: t('blogPage.articles.roiAnalysis.date')
    },
    {
      title: t('blogPage.articles.remoteCulture.title'),
      excerpt: t('blogPage.articles.remoteCulture.excerpt'),
      category: t('blogPage.categories.remoteCulture'),
      readTime: t('blogPage.readTime'),
      date: t('blogPage.articles.remoteCulture.date')
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
                {t('blogPage.hero.title')}
              </h1>
              <p className="subhead text-xl lg:text-2xl mb-8">
                {t('blogPage.hero.subtitle')}
              </p>
              <p className="muted-text text-lg max-w-2xl mx-auto">
                {t('blogPage.hero.description')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    index === 0
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Reveal key={index} delay={index * 100}>
                  <article className="bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={createBlogPlaceholder(article.title, article.category)}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">{article.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{article.date}</span>
                        <button className="text-blue-600 hover:text-blue-700 font-medium">
                          {t('blogPage.readMore')}
                        </button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('blogPage.newsletter.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('blogPage.newsletter.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t('blogPage.newsletter.placeholder')}
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="glass-cta px-6 py-3 rounded-lg font-semibold">
                  {t('blogPage.newsletter.subscribe')}
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}