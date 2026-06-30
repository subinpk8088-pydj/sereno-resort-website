import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const links = ['Rooms', 'Amenities', 'Experience', 'Reviews']
const ids   = ['rooms', 'amenities', 'experience', 'reviews']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo">SERENO</a>
        <ul className="nav-links">
          {links.map((l, i) => (
            <li key={l}>
              <button className="nav-link-btn" onClick={() => scrollTo(ids[i])}>
                {l}<span className="nav-underline" />
              </button>
            </li>
          ))}
        </ul>
        <motion.button className="nav-cta" onClick={() => scrollTo('booking')}
          whileTap={{ scale: 0.96 }} whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
          Book Your Stay
        </motion.button>
        <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu"
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.22 }}>
            {links.map((l, i) => (
              <button key={l} onClick={() => scrollTo(ids[i])}>{l}</button>
            ))}
            <motion.button className="mobile-cta" whileTap={{ scale: 0.96 }} onClick={() => scrollTo('booking')}>
              Book Your Stay
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
