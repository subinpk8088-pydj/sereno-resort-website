import { useState } from 'react'
import { motion } from 'framer-motion'
import './BookingCTA.css'

export default function BookingCTA() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="booking-section" id="booking">
      <div className="booking-bg">
        <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1400&q=80" alt="Desert resort terrace" />
        <div className="booking-scrim" />
      </div>

      <motion.div
        className="booking-inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <p className="section-label" style={{ color: '#e8d0b8' }}>Reserve Your Stay</p>
        <h2 className="booking-title">Your Escape<br />Starts <em>Here</em></h2>

        {submitted ? (
          <div className="booking-success">✓ Request received — we'll confirm within 12 hours.</div>
        ) : (
          <div className="booking-form">
            <div className="bf-group">
              <label>Check In</label>
              <input type="date" />
            </div>
            <div className="bf-group">
              <label>Check Out</label>
              <input type="date" />
            </div>
            <div className="bf-group">
              <label>Guests</label>
              <select>
                <option>2 Guests</option>
                <option>3–4 Guests</option>
                <option>5+ Guests</option>
              </select>
            </div>
            <motion.button
              className="booking-btn"
              onClick={() => setSubmitted(true)}
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              Check Availability
            </motion.button>
          </div>
        )}
      </motion.div>
    </section>
  )
}
