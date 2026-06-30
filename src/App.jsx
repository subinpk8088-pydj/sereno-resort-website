import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Rooms from './components/Rooms'
import Amenities from './components/Amenities'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import BookingCTA from './components/BookingCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Rooms />
        <Amenities />
        <Experience />
        <Testimonials />
        <BookingCTA />
      </main>
      <Footer />
    </>
  )
}
