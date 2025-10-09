import React from 'react'
import FAQ from '../components/FAQ'

export default function ResourcesPage(){
  return (
    <section className="page-hero-bg">
      <div className="container py-24">
        <div className="max-w-3xl">
          <h1 className="display-heading text-4xl lg:text-5xl">Resources & Insights</h1>
          <p className="mt-4 subhead">Articles, case studies, FAQs and guidance to help HR teams plan benefits and improve retention.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 rounded-lg">Featured articles and insights</div>
          <div className="glass-card p-6 rounded-lg">Popular FAQs</div>
        </div>
        <FAQ />
      </div>
    </section>
  )
}
