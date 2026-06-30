import { motion } from 'framer-motion'
import './Amenities.css'

const amenities = [
  { icon: '🏊', title: 'Spring-Fed Pool',  desc: 'Heated year-round, surrounded by date palms.' },
  { icon: '🧖', title: 'Desert Spa',       desc: 'Traditional Rajasthani therapies, open till sunset.' },
  { icon: '🍽',  title: 'Farm Table Dining',desc: 'Locally grown produce, open-fire cooking.' },
  { icon: '🐪', title: 'Dune Safaris',     desc: 'Sunrise camel treks and stargazing camps.' },
  { icon: '🧘', title: 'Sunrise Yoga',     desc: 'Daily sessions on our rooftop pavilion.' },
  { icon: '🚗', title: 'Airport Transfer', desc: 'Complimentary pickup from Jaisalmer airport.' },
]

export default function Amenities() {
  return (
    <section className="amenities-section" id="amenities">
      <div className="amenities-inner">
        <motion.div
          className="amenities-img"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=700&q=80" alt="Resort pool amenity" />
        </motion.div>

        <motion.div
          className="amenities-text"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="section-label">On The Property</p>
          <h2 className="section-title">Everything You<br />Need, <em>Nothing</em> More</h2>
          <div className="divider" />

          <div className="amenities-grid">
            {amenities.map((a, i) => (
              <motion.div
                key={a.title}
                className="amenity-item"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <span className="amenity-icon">{a.icon}</span>
                <div>
                  <h4>{a.title}</h4>
                  <p>{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
