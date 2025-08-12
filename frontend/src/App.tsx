import { useState, useEffect } from 'react'
import Navbar from './components/landing/Navbar'
import Hero from './components/landing/Hero'
import TrustBar from './components/landing/TrustBar'
import PowerOfAI from './components/landing/PowerOfAI'
import AdvancedFeatures from './components/landing/AdvancedFeatures'
import Testimonials from './components/landing/Testimonials'
import CTA from './components/landing/CTA'
import Footer from './components/common/Footer'


function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="grid-bg min-h-screen">
      <Navbar scrolled={scrolled} />
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <Hero />
        <TrustBar />
        <PowerOfAI />
        <AdvancedFeatures />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App