import React from 'react'
import PartnerCarousel from '../components/PartnerCarousel'
import CaseStudies from '../components/CaseStudies'

export default function SolutionsPage(){
  return (
    <section className="page-hero-bg">
      <div className="container py-24">
        <div className="max-w-3xl">
          <h1 className="display-heading text-4xl lg:text-5xl">Solutions that connect</h1>
          <p className="mt-4 subhead">Community programs, merchant partnerships, and curated events that build affinity between companies and their people.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-lg fade-up">Community Programs — leagues, training, and networking to boost employee wellbeing.</div>
            <div className="glass-card p-6 rounded-lg fade-up">Merchant Network — daily visibility and loyal customers for partners across Vietnam.</div>
          </div>
        </div>
        <PartnerCarousel />
        <CaseStudies />
      </div>
    </section>
  )
}
