import { useEffect, useState, useRef } from 'react'

export default function useInView({root = null, rootMargin = '0px', threshold = 0.15} = {}){
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(()=>{
    if(!ref.current) return
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e => {
        if(e.isIntersecting){
          setInView(true)
          // optionally unobserve to keep the element visible
          obs.unobserve(e.target)
        }
      })
    }, {root, rootMargin, threshold})

    obs.observe(ref.current)
    return ()=> obs.disconnect()
  }, [ref, root, rootMargin, threshold])

  return [ref, inView]
}
