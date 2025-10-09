import React, { Suspense, lazy, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import ContactFooter from './components/ContactFooter'
import ContactModal from './components/ContactModal'
import './i18n' // Initialize i18n

const Home = lazy(()=>import('./pages/Home'))
const Platform = lazy(()=>import('./pages/Platform'))
const HowItWorks = lazy(()=>import('./pages/HowItWorks'))
const ForCompanies = lazy(()=>import('./pages/ForCompanies'))
const ForEmployees = lazy(()=>import('./pages/ForEmployees'))
const Solutions = lazy(()=>import('./pages/Solutions'))
const Community = lazy(()=>import('./pages/Community'))
const Partners = lazy(()=>import('./pages/Partners'))
const About = lazy(()=>import('./pages/About'))
const Mission = lazy(()=>import('./pages/Mission'))
const Stories = lazy(()=>import('./pages/Stories'))
const Resources = lazy(()=>import('./pages/Resources'))
const Blog = lazy(()=>import('./pages/Blog'))
const FAQ = lazy(()=>import('./pages/FAQ'))
const Pricing = lazy(()=>import('./pages/Pricing'))

export default function App(){
  const [contactModal, setContactModal] = useState({
    isOpen: false,
    type: 'general'
  })

  const openContactModal = (type = 'general') => {
    setContactModal({ isOpen: true, type })
  }

  const closeContactModal = () => {
    setContactModal({ isOpen: false, type: 'general' })
  }

  return (
    <BrowserRouter>
      <div className="font-sans text-gray-900">
        <Navbar onContactClick={openContactModal} />
        <Suspense fallback={<div className="container py-20 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>}>
          <Routes>
            <Route path="/" element={<Home onContactClick={openContactModal} />} />
            
            {/* Platform routes */}
            <Route path="/platform" element={<Platform onContactClick={openContactModal} />} />
            <Route path="/platform/how-it-works" element={<HowItWorks onContactClick={openContactModal} />} />
            <Route path="/platform/companies" element={<ForCompanies onContactClick={openContactModal} />} />
            <Route path="/platform/employees" element={<ForEmployees onContactClick={openContactModal} />} />
            
            {/* Solutions routes */}
            <Route path="/solutions" element={<Solutions onContactClick={openContactModal} />} />
            <Route path="/solutions/community" element={<Community onContactClick={openContactModal} />} />
            <Route path="/solutions/partners" element={<Partners onContactClick={openContactModal} />} />
            
            {/* About routes */}
            <Route path="/about" element={<About onContactClick={openContactModal} />} />
            <Route path="/about/mission" element={<Mission onContactClick={openContactModal} />} />
            <Route path="/about/stories" element={<Stories onContactClick={openContactModal} />} />
            
            {/* Resources routes */}
            <Route path="/resources" element={<Resources onContactClick={openContactModal} />} />
            <Route path="/resources/blog" element={<Blog onContactClick={openContactModal} />} />
            <Route path="/resources/faq" element={<FAQ onContactClick={openContactModal} />} />
            
            {/* Pricing */}
            <Route path="/pricing" element={<Pricing onContactClick={openContactModal} />} />
            
            <Route path="*" element={<div className="container py-20 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
              <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
              <Link to="/" className="glass-cta px-6 py-3 rounded-lg">Go Home</Link>
            </div>} />
          </Routes>
        </Suspense>
        <ContactFooter />
        
        {/* Contact Modal */}
        <ContactModal 
          isOpen={contactModal.isOpen}
          onClose={closeContactModal}
          type={contactModal.type}
        />
      </div>
    </BrowserRouter>
  )
}
