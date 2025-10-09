import React from 'react'
import useParallax from '../hooks/useParallax'

export default function ParallaxImage({
  src, 
  fallback, 
  alt = '', 
  className = '', 
  style = {}, 
  strength = 0.15,
  direction = 'vertical',
  loading = 'lazy'
}) {
  const ref = useParallax({ strength, direction })
  
  return (
    <div
      ref={ref}
      className={`${className} overflow-hidden`}
      style={{
        willChange: 'transform',
        ...style
      }}
    >
      <picture>
        {src && <source type="image/svg+xml" srcSet={src} />}
        <img 
          src={fallback || src} 
          alt={alt} 
          className="w-full h-auto block transition-transform duration-300 hover:scale-105" 
          loading={loading}
          style={{
            borderRadius: 'inherit'
          }}
        />
      </picture>
    </div>
  )
}
