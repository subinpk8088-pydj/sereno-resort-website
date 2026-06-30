import { motion } from 'framer-motion'
import './Experience.css'

const moments = [
  { img: 'photo-1559599746-8823b38544c6', title: 'Sunrise Camel Trek', time: '6:00 AM' },
  { img: 'photo-1540541338287-41700207dee6', title: 'Poolside Breakfast', time: '8:30 AM' },
  { img: 'photo-1544161515-4ab6ce6db874', title: 'Desert Spa Ritual', time: '2:00 PM' },
  { img: 'photo-1469796466635-455ede028aca', title: 'Stargazing Dinner', time: '8:00 PM' },
]

export default function Experience() {
  return (
    <section className="exp-section" id="experience">
      <div className="exp-header">
        <p className="section-label">A Day at Sereno</p>
        <h2 className="section-title">Moments You'll<br /><em>Carry Home</em></h2>
        <div className="divider" style={{ margin: '0 auto' }} />
      </div>

      <div className="exp-grid">
        {moments.map((m, i) => (
          <motion.div
            key={m.title}
            className="exp-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <div className="exp-img-wrap">
              <img src={`https://images.unsplash.com/${m.img}?w=500&q=80`} alt={m.title} loading="lazy" />
              <div className="exp-overlay">
                <span className="exp-time">{m.time}</span>
                <h4>{m.title}</h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
