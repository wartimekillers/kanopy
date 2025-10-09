import React from 'react'

const partners = [
  {name: 'BHD', img: '/src/assets/partners/partner-1.svg'},
  {name: 'CGV', img: '/src/assets/partners/partner-2.svg'},
  {name: 'Phuc Long', img: '/src/assets/partners/partner-3.svg'},
  {name: 'TocoToco', img: '/src/assets/partners/partner-4.svg'},
  {name: 'Coolmate', img: '/src/assets/partners/partner-5.svg'}
]

export default function PartnerCarousel(){
  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 items-center">
        {partners.map(p => (
          <div key={p.name} className="p-4 glass-card rounded-lg flex items-center justify-center">
            <img src={p.img} alt={p.name} width="120" height="48" />
          </div>
        ))}
      </div>
    </div>
  )
}
