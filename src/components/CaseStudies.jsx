import React from 'react'

const cases = [
  {company: 'Café Chain', result: 'Saved 75% welfare costs', quote: 'Our staff now enjoy perks daily instead of random bonuses.'},
  {company: 'Tech Startup', result: '+30% retention', quote: 'Employees finally feel cared for.'},
  {company: 'Retail SME', result: '0 admin stress', quote: 'Kanopy automated everything — our HR is free again.'}
]

export default function CaseStudies(){
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {cases.map(c => (
        <div key={c.company} className="p-6 glass-card rounded-lg">
          <div className="font-semibold">{c.company}</div>
          <div className="text-sm text-gray-600 mt-1">{c.result}</div>
          <blockquote className="mt-3 text-sm text-gray-700">“{c.quote}”</blockquote>
        </div>
      ))}
    </div>
  )
}
