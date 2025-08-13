import { useState, useEffect } from 'react'
import Navbar from '../components/landing/Navbar'
import Hero from '../components/landing/Hero'
import TrustBar from '../components/landing/TrustBar'
import PowerOfAI from '../components/landing/PowerOfAI'
import AdvancedFeatures from '../components/landing/AdvancedFeatures'
import Testimonials from '../components/landing/Testimonials'
import CTA from '../components/landing/CTA'
import Footer from '../components/common/Footer'
import SeeHowItWorks from '../components/landing/SeeHowItWorks'

const Home: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false)

  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="grid-bg min-h-screen">
      <div
        className="absolute bg-black/40 hidden sm:block backdrop-blur-md -z-10 rounded-xl"
        style={{
          width: 'calc(100vw - 300px)',
          height: 'calc(100vh - 20px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <img
          src="/bgLanding1.png"
          alt=""
          className="absolute bg-black/40 backdrop-blur-md -z-9 rounded-xl invert opacity-[5%]"
          style={{
            width: 'calc(100vw - 60px)',
            height: 'calc(100vh - 20px)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      <Navbar scrolled={scrolled} />

      <main className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <Hero />
        <TrustBar />
        <PowerOfAI />
        <AdvancedFeatures />
        <SeeHowItWorks/>
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default Home
