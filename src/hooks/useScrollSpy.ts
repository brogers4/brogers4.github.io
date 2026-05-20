import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 100): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        const elTop = el ? el.getBoundingClientRect().top + window.scrollY : Infinity
        if (el && elTop <= scrollPos) {
          setActiveId(sectionIds[i])
          return
        }
      }
      setActiveId(sectionIds[0] ?? '')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeId
}
