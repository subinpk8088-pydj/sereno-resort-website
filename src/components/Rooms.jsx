import { motion } from 'framer-motion'
import './Rooms.css'

const rooms = [
  { name: 'Desert Pool Villa',  img: 'photo-1582719508461-905c673771fd', size: '850 sq.ft', guests: 2, price: '₹24,500', tag: 'Most Booked' },
  { name: 'Dune View Suite',    img: 'photo-1591088398332-8a7791972843', size: '620 sq.ft', guests: 2, price: '₹16,800', tag: null },
  { name: 'Oasis Family Villa', img: 'photo-1564501049412-61c2a3083791', size: '1200 sq.ft',guests: 4, price: '₹38,900', tag: 'Spacious' },
]

export default function Rooms() {
  return (
    <section className="rooms-section" id="rooms">
      <div className="rooms-header">
        <p className="section-label">Stay With Us</p>
        <h2 className="section-title">Villas & <em>Suites</em></h2>
        <div className="divider" style={{ margin: '0 auto' }} />
        <p className="rooms-sub">Every room opens to the desert — private terrace, plunge pool views, total quiet.</p>
      </div>

      <div className="rooms-grid">
        {rooms.map((r, i) => (
          <motion.div
            key={r.name}
            className="room-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            whileHover={{ y: -6 }}
          >
            <div className="room-img-wrap">
              <img src={`https://images.unsplash.com/${r.img}?w=600&q=80`} alt={r.name} loading="lazy" />
              {r.tag && <span className="room-tag">{r.tag}</span>}
            </div>
            <div className="room-info">
              <h3>{r.name}</h3>
              <div className="room-meta">
                <span>{r.size}</span><span className="dot">·</span><span>{r.guests} Guests</span>
              </div>
              <div className="room-footer">
                <div>
                  <span className="room-price">{r.price}</span>
                  <span className="room-night">/night</span>
                </div>
                <motion.button className="room-btn"
                  whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                  View Room
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
