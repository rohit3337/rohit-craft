import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Feedback', href: '#feedback' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navItems.map(i => i.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive(`#${sections[i]}`)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo" onClick={() => scrollTo('#home')}>
            Rohit<span>.</span>craft
          </div>
          <ul className="navbar-links">
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  className={active === item.href ? 'active' : ''}
                  onClick={() => scrollTo(item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a className="navbar-cta" onClick={() => scrollTo('#contact')}>
                Hire Me
              </a>
            </li>
          </ul>
          <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <a key={item.href} onClick={() => scrollTo(item.href)}>
            {item.label}
          </a>
        ))}
        <a onClick={() => scrollTo('#contact')} style={{ color: '#6c63ff' }}>
          Contact Me
        </a>
      </div>
    </>
  )
}
