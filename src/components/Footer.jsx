import { motion } from 'framer-motion'
import './Footer.css'

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const socials = [
  { name: 'Instagram', href: '#', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg> },
  { name: 'Facebook',  href: '#', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M15 8h-2c-1.1 0-2 .9-2 2v2H9v3h2v7h3v-7h2.2l.8-3H14v-1.6c0-.6.4-1 1-1h2V8z" strokeLinejoin="round"/><circle cx="12" cy="12" r="10"/></svg> },
  { name: 'Twitter',   href: '#', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 5.5c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.6.8-2.5 1-.7-.8-1.8-1.3-2.9-1.3-2.2 0-4 1.8-4 4 0 .3 0 .6.1.9-3.3-.2-6.3-1.8-8.3-4.2-.3.6-.5 1.3-.5 2 0 1.4.7 2.6 1.8 3.3-.7 0-1.3-.2-1.8-.5v.1c0 1.9 1.4 3.5 3.2 3.9-.3.1-.7.1-1 .1-.3 0-.5 0-.7-.1.5 1.6 2 2.7 3.7 2.8-1.4 1.1-3.1 1.7-5 1.7-.3 0-.6 0-1-.1 1.8 1.2 4 1.8 6.3 1.8 7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2-2.1z" strokeLinejoin="round"/></svg> },
  { name: 'YouTube',   href: '#', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9.5l5 2.5-5 2.5v-5z" fill="currentColor" stroke="none"/></svg> },
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-logo">SERENO</span>
          <p>A desert oasis resort in Jaisalmer. Quiet luxury, locally rooted, since 2016.</p>
          <div className="footer-socials">
            {socials.map(s => (
              <motion.a key={s.name} href={s.href} aria-label={s.name}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1, backgroundColor: 'var(--terracotta)', borderColor: 'var(--terracotta)', color: '#fff' }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >{s.svg}</motion.a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Stay</h4>
          <ul>
            {[['rooms','Villas & Suites'],['amenities','Amenities'],['experience','Experiences'],['reviews','Reviews']].map(([id, label]) => (
              <li key={id}><button onClick={() => scrollTo(id)}>{label}</button></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Resort</h4>
          <ul>
            <li><a href="#">About Sereno</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Visit Us</h4>
          <ul>
            <li><span>Sam Road, Jaisalmer</span></li>
            <li><span>Rajasthan 345001</span></li>
            <li><a href="tel:+919847088100">+91 98470 88100</a></li>
            <li><a href="mailto:stay@sereno.in">stay@sereno.in</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sereno Resort. All rights reserved. Built by <strong>VertexFlow Digital Solutions</strong>.</p>
        <p className="footer-tag">🌵 Quiet Luxury, Jaisalmer</p>
      </div>
    </footer>
  )
}
