import React from 'react'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import Callout from '../components/Callout'
import PlatformHowItWorks from '../components/PlatformHowItWorks'
import ForCompanies from '../components/ForCompanies'
import ForEmployees from '../components/ForEmployees'
import Solutions from '../components/Solutions'
import About from '../components/About'
import Pricing from '../components/Pricing'

export default function Home({ onContactClick }) {
  return (
    <main>
      <Hero onContactClick={onContactClick} />
      <Benefits />
      <Callout />
      <PlatformHowItWorks />
      <ForCompanies />
      <ForEmployees />
      <Solutions onContactClick={onContactClick} />
      <About />
      <Pricing />
    </main>
  )
}
