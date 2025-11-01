import React from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'

// Partner logo placeholder generator
const createPartnerPlaceholder = (name, color = '#4A90E2') => {
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}" rx="8"/>
      <text x="100" y="55" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">${name}</text>
    </svg>
  `)}`
}

const partnerTypes = [
  {
    icon: '🎬',
    title: 'Entertainment',
    examples: 'BHD, CGV, Galaxy',
    perks: 'Movie vouchers, event tickets',
    partners: [
      { name: 'BHD Star', logo: createPartnerPlaceholder('BHD Star', '#E53E3E') },
      { name: 'CGV Cinemas', logo: createPartnerPlaceholder('CGV', '#D53F8C') },
      { name: 'Galaxy Cinema', logo: createPartnerPlaceholder('Galaxy', '#9F7AEA') }
    ]
  },
  {
    icon: '☕',
    title: 'F&B',
    examples: 'Phúc Long, TocoToco, Pepsi',
    perks: 'Beverages, combos, discounts',
    partners: [
      { name: 'Phúc Long Coffee', logo: createPartnerPlaceholder('Phúc Long', '#38A169') },
      { name: 'TocoToco', logo: createPartnerPlaceholder('TocoToco', '#D69E2E') },
      { name: 'Pepsi Vietnam', logo: createPartnerPlaceholder('Pepsi', '#3182CE') }
    ]
  },
  {
    icon: '👕',
    title: 'Lifestyle & Fashion',
    examples: 'Coolmate, DirtyCoins, Degrey',
    perks: 'Merch, vouchers, brand collabs',
    partners: [
      { name: 'Coolmate', logo: createPartnerPlaceholder('Coolmate', '#4A90E2') },
      { name: 'DirtyCoins', logo: createPartnerPlaceholder('DirtyCoins', '#6B46C1') },
      { name: 'Degrey', logo: createPartnerPlaceholder('Degrey', '#1A202C') }
    ]
  },
  {
    icon: '🏥',
    title: 'Health & Wellness',
    examples: 'Clinics, Gyms, Spas',
    perks: 'Medical checkups, fitness, wellness services',
    partners: [
      { name: 'Vinmec Hospital', logo: createPartnerPlaceholder('Vinmec', '#059669') },
      { name: 'California Fitness', logo: createPartnerPlaceholder('California', '#DC2626') },
      { name: 'Thann Sanctuary', logo: createPartnerPlaceholder('Thann', '#7C3AED') }
    ]
  },
  {
    icon: '🚗',
    title: 'Transportation',
    examples: 'Grab, Be, Train tickets',
    perks: 'Ride credits, fuel discounts, travel deals',
    partners: [
      { name: 'Grab Vietnam', logo: createPartnerPlaceholder('Grab', '#00B14F') },
      { name: 'Be Transport', logo: createPartnerPlaceholder('Be', '#FFD700') },
      { name: 'Vietnam Railways', logo: createPartnerPlaceholder('VNR', '#1E40AF') }
    ]
  },
  {
    icon: '📚',
    title: 'Education & Learning',
    examples: 'Courses, Books, Training',
    perks: 'Online courses, skill development, certifications',
    partners: [
      { name: 'Coursera Plus', logo: createPartnerPlaceholder('Coursera', '#0056D3') },
      { name: 'Fahasa Books', logo: createPartnerPlaceholder('Fahasa', '#E11D48') },
      { name: 'English Center', logo: createPartnerPlaceholder('ECenter', '#059669') }
    ]
  }
]

const benefits = [
  '10,000+ professionals across Vietnam',
  'Daily visibility to loyal customers',
  'Marketing support and co-branding opportunities',
  'Performance analytics and insights'
]

export default function Partners({ onContactClick }) {
  const { t } = useTranslation()
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="page-hero-bg">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center py-20">
            <Reveal>
              <h1 className="display-heading text-5xl lg:text-6xl mb-6">
                Join the Kanopy Merchant Network
              </h1>
              <p className="subhead text-xl lg:text-2xl mb-8">
                Merchants & Partners
              </p>
              <p className="muted-text text-lg max-w-2xl mx-auto">
                Reach 10,000+ professionals across Vietnam through exclusive partnerships. Kanopy brings daily visibility and loyal customers from all business communities.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
                Partner Categories
              </h2>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="text-center mb-6">
                      <div className="icon-circle mx-auto mb-4">
                        {type.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{type.perks}</p>
                    </div>
                    
                    {/* Partner Logos */}
                    <div className="space-y-3">
                      <p className="text-xs font-medium text-gray-700 text-center">{t('partners.featuredPartners', 'Featured Partners')}</p>
                      <div className="grid grid-cols-1 gap-2">
                        {type.partners.map((partner, i) => (
                          <div key={i} className="bg-gray-50 rounded-lg p-2 flex items-center justify-center">
                            <img 
                              src={partner.logo}
                              alt={partner.name}
                              className="h-6 object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
                Why Partner with Kanopy?
              </h2>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div className="flex items-center gap-4 p-6 bg-white rounded-xl">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-900">{benefit}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join hundreds of brands already growing with Kanopy
              </p>
              <button 
                onClick={() => onContactClick('partner')}
                className="glass-cta px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Become a Partner
              </button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}