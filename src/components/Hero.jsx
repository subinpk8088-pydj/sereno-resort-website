import { motion } from 'framer-motion'
import './Hero.css'

const fade = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] }
})

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80"
          alt="Desert oasis resort pool"
        />
        <div className="hero-scrim" />
      </div>

      <div className="hero-inner">
        <motion.p className="hero-eyebrow" {...fade(0.1)}>
          Sereno Desert Resort · Jaisalmer
        </motion.p>
        <motion.h1 {...fade(0.3)}>
          An Oasis of<br /><em>Stillness</em>
        </motion.h1>
        <motion.p className="hero-sub" {...fade(0.5)}>
          Where the desert meets quiet luxury. 38 private villas,
          a spring-fed pool, and silence you can actually hear.
        </motion.p>
        <motion.div className="hero-btns" {...fade(0.65)}>
          <motion.button className="btn-primary" onClick={() => scrollTo('booking')}
            whileTap={{ scale: 0.96 }} whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
            Check Availability
          </motion.button>
          <motion.button className="hero-outline-light" onClick={() => scrollTo('rooms')}
            whileTap={{ scale: 0.96 }} whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
            Explore Villas
          </motion.button>
        </motion.div>
      </div>

      <motion.div className="hero-scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 0.8 }}>
        <div className="scroll-line" />
        <span>SCROLL</span>
      </motion.div>
    </section>
  )
}
