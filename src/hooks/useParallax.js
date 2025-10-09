import { useEffect, useRef } from 'react'

export default function useParallax({ strength = 0.12, direction = 'vertical' } = {}) {
  const ref = useRef(null)
  const animationId = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let ticking = false

    function updateTransform() {
      const rect = el.getBoundingClientRect()
      const winH = window.innerHeight
      const winW = window.innerWidth
      
      // Calculate element center relative to viewport center
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = winH / 2
      const distanceFromCenter = elementCenter - viewportCenter
      
      // Normalize the distance (-1 to 1)
      const normalizedDistance = distanceFromCenter / (winH / 2)
      
      // Apply strength and direction
      let translateX = 0
      let translateY = 0
      
      if (direction === 'vertical') {
        translateY = normalizedDistance * strength * 100
      } else if (direction === 'horizontal') {
        translateX = normalizedDistance * strength * 100
      } else if (direction === 'both') {
        translateY = normalizedDistance * strength * 100
        translateX = normalizedDistance * strength * 50
      }
      
      // Clamp values to prevent extreme movement
      translateY = Math.max(-150, Math.min(150, translateY))
      translateX = Math.max(-150, Math.min(150, translateX))
      
      el.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`
      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        animationId.current = requestAnimationFrame(updateTransform)
        ticking = true
      }
    }

    // Initial calculation
    updateTransform()
    
    // Add scroll listener with passive flag for performance
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateTransform, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateTransform)
      if (animationId.current) {
        cancelAnimationFrame(animationId.current)
      }
    }
  }, [strength, direction])

  return ref
}
