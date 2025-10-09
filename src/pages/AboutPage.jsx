import React from 'react'
import CaseStudies from '../components/CaseStudies'

export default function AboutPage(){
  return (
    <section className="page-hero-bg">
      <div className="container py-24">
        <div className="max-w-3xl">
          <h1 className="display-heading text-4xl lg:text-5xl">Mission & Vision</h1>
          <p className="mt-4 subhead">To make employee care simple, affordable, and powerful — helping every company care like a corporation.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-lg fade-up text-center">
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-sm muted-text">employees in network</div>
            </div>
            <div className="glass-card p-6 rounded-lg fade-up text-center">
              <div className="text-2xl font-bold">30–50%</div>
              <div className="text-sm muted-text">average vendor discounts</div>
            </div>
            <div className="glass-card p-6 rounded-lg fade-up text-center">
              <div className="text-2xl font-bold">10×</div>
              <div className="text-sm muted-text">employee value per $1 spent</div>
            </div>
          </div>
        </div>
        <CaseStudies />
      </div>
    </section>
  )
}
