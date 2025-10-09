import React from 'react'
import Reveal from '../components/Reveal'

const stories = [
  {
    company: 'Café Chain',
    result: 'Saved 75% welfare costs',
    quote: 'Our staff now enjoy perks daily instead of random bonuses.',
    industry: 'Food & Beverage',
    employees: '150+ employees'
  },
  {
    company: 'Tech Startup',
    result: '+30% retention',
    quote: 'Employees finally feel cared for.',
    industry: 'Technology',
    employees: '50+ employees'
  },
  {
    company: 'Retail SME',
    result: '0 admin stress',
    quote: 'Kanopy automated everything — our HR is free again.',
    industry: 'Retail',
    employees: '100+ employees'
  }
]

export default function Stories({ onContactClick }) {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="page-hero-bg">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center py-20">
            <Reveal>
              <h1 className="display-heading text-5xl lg:text-6xl mb-6">
                Impact Stories
              </h1>
              <p className="subhead text-xl lg:text-2xl mb-8">
                Real success stories
              </p>
              <p className="muted-text text-lg max-w-2xl mx-auto">
                See how companies like yours are transforming their employee benefits with Kanopy.
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
                Proven Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
                  <p className="text-gray-600">Average cost savings</p>
                </div>
                <div className="p-6 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">30%</div>
                  <p className="text-gray-600">Increase in retention</p>
                </div>
                <div className="p-6 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
                  <p className="text-gray-600">Admin overhead</p>
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
                Write Your Success Story
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join the companies already seeing amazing results
              </p>
              <button 
                onClick={() => onContactClick('trial')}
                className="glass-cta px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}