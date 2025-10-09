import React from 'react'

const faqs = [
  {q: 'How much does Kanopy cost?', a: '25,000 VND per employee/month.'},
  {q: 'Is there a free trial?', a: 'Yes! 1-year free for founding members.'},
  {q: 'Can small teams join?', a: 'Absolutely. Even 10-person SMEs can participate.'},
  {q: 'How do employees use perks?', a: 'Through the Kanopy app (QR or code redemption).'}
]

export default function FAQ(){
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {faqs.map((f, idx) => (
        <details key={idx} className="p-4 glass-card rounded-lg">
          <summary className="font-semibold">{f.q}</summary>
          <div className="mt-2 text-sm text-gray-600">{f.a}</div>
        </details>
      ))}
    </div>
  )
}
