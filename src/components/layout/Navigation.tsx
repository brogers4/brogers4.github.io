import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
]

const SECTION_IDS = ['hero', 'about', 'timeline', 'projects', 'resume']

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useScrollSpy(SECTION_IDS, 120)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0e1a]/95 backdrop-blur-md border-b border-slate-800/60 shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo('#hero')}
          className="text-sm font-semibold tracking-widest uppercase text-slate-300 hover:text-blue-400 transition-colors"
        >
          Brandon Rogers
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === href.replace('#', '')
            return (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive ? 'text-blue-400' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-full bg-blue-400 transition-transform origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            )
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-400 hover:text-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0e1a]/98 backdrop-blur-md border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="text-left text-slate-300 hover:text-blue-400 transition-colors py-1 text-sm font-medium"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
