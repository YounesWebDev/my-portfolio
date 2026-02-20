import { useEffect, useState } from 'react'
import { Contact, FolderOpen, Home, Info, Menu, Sparkles, X } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: Info },
  { id: 'skills', label: 'Skills', icon: Sparkles },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'contact', label: 'Contact', icon: Contact },
]

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (event, sectionId) => {
    event.preventDefault()
    const section = document.getElementById(sectionId)
    if (!section) {
      return
    }

    setActiveSection(sectionId)
    setIsMobileMenuOpen(false)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${sectionId}`)
  }

  useEffect(() => {
    const syncWithHash = () => {
      const hashId = window.location.hash.replace('#', '')
      if (hashId) {
        setActiveSection(hashId)
      }
    }

    syncWithHash()
    window.addEventListener('hashchange', syncWithHash)

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (visibleEntries.length === 0) {
          return
        }

        const mostVisible = visibleEntries.reduce((current, next) =>
          next.intersectionRatio > current.intersectionRatio ? next : current,
        )

        setActiveSection(mostVisible.target.id)
      },
      {
        root: null,
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', syncWithHash)
    }
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobileMenuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <nav className="mx-auto mt-4 flex h-15 w-[80%] items-center rounded-full border border-white/15 bg-transparent px-4 py-2 text-xs font-bold text-slate-100 backdrop-blur-[10px] md:px-6 md:text-sm">
        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="ml-auto inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-slate-100 transition-colors duration-300 hover:bg-white/5 hover:text-cyan-300 md:hidden"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="hidden w-full items-center justify-center gap-6 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <a
                key={item.id}
                className={`flex items-center gap-2 rounded-full px-3 py-2 transition-all duration-500 ease-out ${
                  isActive
                    ? '-translate-y-0.5 bg-cyan-300/20 text-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.28)]'
                    : 'text-slate-100 hover:bg-white/5 hover:text-cyan-300'
                }`}
                href={`#${item.id}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={(event) => handleNavClick(event, item.id)}
              >
                <Icon size={16} />
                {item.label}
              </a>
            )
          })}
        </div>
      </nav>

      <div
        id="mobile-nav-menu"
        className={`mx-auto mt-2 w-[80%] overflow-hidden rounded-3xl border border-white/15 bg-slate-950/75 backdrop-blur-xl transition-all duration-500 ease-out md:hidden ${
          isMobileMenuOpen
            ? 'pointer-events-auto max-h-80 opacity-100 translate-y-0'
            : 'pointer-events-none max-h-0 opacity-0 -translate-y-2'
        }`}
      >
        <div className="flex flex-col gap-1 p-3">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <a
                key={item.id}
                className={`flex items-center gap-2 rounded-2xl px-3 py-3 transition-all duration-500 ease-out ${
                  isActive
                    ? 'bg-cyan-300/20 text-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.28)]'
                    : 'text-slate-100 hover:bg-white/5 hover:text-cyan-300'
                }`}
                href={`#${item.id}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={(event) => handleNavClick(event, item.id)}
              >
                <Icon size={16} />
                {item.label}
              </a>
            )
          })}
        </div>
      </div>
    </header>
  )
}
