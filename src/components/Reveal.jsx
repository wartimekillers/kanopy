import React from 'react'
import useInView from '../hooks/useInView'

export default function Reveal({ 
  children, 
  className = '', 
  rootMargin = '0px 0px -10% 0px', 
  threshold = 0.1,
  delay = 0,
  duration = 700,
  distance = 30,
  direction = 'up'
}) {
  const [ref, inView] = useInView({ rootMargin, threshold })
  
  const getTransform = () => {
    if (inView) return 'translate3d(0, 0, 0)'
    
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`
      case 'down':
        return `translate3d(0, -${distance}px, 0)`
      case 'left':
        return `translate3d(${distance}px, 0, 0)`
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`
      default:
        return `translate3d(0, ${distance}px, 0)`
    }
  }

  return (
    <div 
      ref={ref} 
      className={`${className} transition-all ease-out`}
      style={{
        opacity: inView ? 1 : 0,
        transform: getTransform(),
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  )
}
