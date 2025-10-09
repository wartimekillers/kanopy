import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import kanopyLogo from '../assets/images/logo/kanopylogo2.png'

export default function Navbar({ onContactClick }) {
  const { t, i18n } = useTranslation()
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const submenuTimeout = useRef(null)
  const navRef = useRef(null)

  // Language switching
  const toggleLanguage = () => {
    const newLang = i18n.language === 'vi' ? 'en' : 'vi'
    i18n.changeLanguage(newLang)
  }

  // Dynamic navigation data based on current language
  const navigationData = [
    {
      label: t('nav.platform'),
      path: '/platform',
      submenu: [
        { label: t('nav.howItWorks'), path: '/platform/how-it-works', description: t('nav.descriptions.howItWorks') },
        { label: t('nav.forCompanies'), path: '/platform/companies', description: t('nav.descriptions.forCompanies') },
        { label: t('nav.forEmployees'), path: '/platform/employees', description: t('nav.descriptions.forEmployees') }
      ]
    },
    {
      label: t('nav.solutions'),
      path: '/solutions',
      submenu: [
        { label: t('nav.community'), path: '/solutions/community', description: t('nav.descriptions.community') },
        { label: t('nav.partners'), path: '/solutions/partners', description: t('nav.descriptions.partners') }
      ]
    },
    {
      label: t('nav.about'),
      path: '/about',
      submenu: [
        { label: t('nav.mission'), path: '/about/mission', description: t('nav.descriptions.mission') },
        { label: t('nav.stories'), path: '/about/stories', description: t('nav.descriptions.stories') }
      ]
    },
    {
      label: t('nav.resources'),
      path: '/resources',
      submenu: [
        { label: t('nav.blog'), path: '/resources/blog', description: t('nav.descriptions.blog') },
        { label: t('nav.faq'), path: '/resources/faq', description: t('nav.descriptions.faq') }
      ]
    },
    {
      label: t('nav.pricing'),
      path: '/pricing'
    }
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveSubmenu(null)
  }, [location.pathname])

  const handleMouseEnter = (index) => {
    clearTimeout(submenuTimeout.current)
    setActiveSubmenu(index)
  }

  const handleMouseLeave = () => {
    submenuTimeout.current = setTimeout(() => {
      setActiveSubmenu(null)
    }, 150)
  }

  const handleSubmenuMouseEnter = () => {
    clearTimeout(submenuTimeout.current)
  }

  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <>
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/20 shadow-sm' 
            : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center group cursor-pointer relative z-10"
              onClick={() => {
                // Scroll to top when logo is clicked
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <img 
                src={kanopyLogo} 
                alt="Kanopy Logo" 
                className="h-10 w-auto transition-transform group-hover:scale-105 select-none pointer-events-none"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  e.target.style.display = 'none'
                  e.target.nextElementSibling.style.display = 'flex'
                }}
              />
              <div 
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg items-center justify-center transition-transform group-hover:scale-105 hidden select-none"
                style={{ display: 'none' }}
              >
                <span className="text-white font-bold text-base">K</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationData.map((item, index) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.submenu && handleMouseEnter(index)}
                  onMouseLeave={() => item.submenu && handleMouseLeave()}
                >
                  {item.submenu ? (
                    <button
                      className={`px-4 py-2 text-[15px] font-medium rounded-lg transition-all duration-200 ${
                        isActivePath(item.path)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50/70'
                      }`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-4 py-2 text-[15px] font-medium rounded-lg transition-all duration-200 ${
                        isActivePath(item.path)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50/70'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Apple-style Submenu */}
                  {item.submenu && (
                    <div
                      className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 transition-all duration-200 ${
                        activeSubmenu === index
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                      onMouseEnter={handleSubmenuMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/20 py-4 min-w-[280px]">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subItem.label}
                            to={subItem.path}
                            className="block px-6 py-3 hover:bg-gray-50/70 transition-colors duration-150 group"
                          >
                            <div className="font-medium text-gray-900 text-[15px] mb-1 group-hover:text-blue-600 transition-colors">
                              {subItem.label}
                            </div>
                            <div className="text-sm text-gray-600">
                              {subItem.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                      {/* Arrow */}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/95 border-l border-t border-gray-200/20 rotate-45"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button & Mobile Toggle */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onContactClick('trial')}
                className="hidden md:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-[15px] font-semibold rounded-full hover:from-blue-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {t('hero.startTrial')}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100/70 transition-all duration-200"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/20">
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
              {navigationData.map((item) => (
                <div key={item.label} className="space-y-1">
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 text-[17px] font-medium rounded-xl transition-all duration-200 ${
                      isActivePath(item.path)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                  
                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.path}
                          className="block px-4 py-2 text-[15px] text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200/30 space-y-3">
                {/* Mobile Language Switcher */}
                <button
                  onClick={toggleLanguage}
                  className="block w-full px-6 py-3 text-gray-700 bg-gray-100/70 text-center text-[15px] font-medium rounded-xl"
                >
                  {i18n.language === 'vi' ? '🇺🇸 Switch to English' : '🇻🇳 Chuyển sang Tiếng Việt'}
                </button>
                
                <button
                  onClick={() => {
                    onContactClick('trial')
                    setMobileMenuOpen(false)
                  }}
                  className="block w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-center text-[17px] font-semibold rounded-xl shadow-lg"
                >
                  {t('hero.startTrial')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>

      {/* Fixed Language Switcher - Right Side */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleLanguage}
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 bg-white/90 hover:bg-white backdrop-blur-xl border border-gray-200/50 hover:border-gray-300/70 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          title={i18n.language === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
        >
          {i18n.language === 'vi' ? (
            <span className="flex items-center gap-1">
              🇻🇳 VI
            </span>
          ) : (
            <span className="flex items-center gap-1">
              🇺🇸 EN
            </span>
          )}
        </button>
      </div>
    </>
  )
}
