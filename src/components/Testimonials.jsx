import { motion } from 'framer-motion'
import './Testimonials.css'

const reviews = [
  { name: 'Tara Sharma',  role: 'Mumbai',    text: "Sereno is the most peaceful place I've stayed in India. The pool villa, the silence, the staff — flawless.", rating: 5 },
  { name: 'James Holt',   role: 'London, UK',text: "We came for two nights and stayed five. The sunrise camel trek alone was worth the trip.",                  rating: 5 },
  { name: 'Ananya Rao',   role: 'Delhi',     text: "Booked the family villa for my parents' anniversary. They still talk about the stargazing dinner.",         rating: 5 },
]

export default function Testimonials() {
  return (
    <section className="testi-section" id="reviews">
      <div className="testi-header">
        <p className="section-label">Guest Stories</p>
        <h2 className="section-title">Words From Our <em>Guests</em></h2>
        <div className="divider" style={{ margin: '0 auto' }} />
      </div>
      <div className="testi-grid">
        {reviews.map((r, i) => (
          <motion.div key={r.name} className="testi-card"
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -4 }}>
            <div className="stars">{'★'.repeat(r.rating)}</div>
            <p className="testi-text">"{r.text}"</p>
            <div className="testi-author"><strong>{r.name}</strong><span>{r.role}</span></div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
