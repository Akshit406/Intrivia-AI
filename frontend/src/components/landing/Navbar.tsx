import { useState } from 'react'

const Navbar = ({ scrolled }: { scrolled: boolean }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Leaderboards', href: '#leaderboards' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-primary/90 backdrop-blur-md py-2 shadow-lg' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Intrivia<span className="gradient-text">AI</span></span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white hover:text-transparent hover:bg-gradient-to-r hover:from-accent-blue hover:to-accent-pink hover:bg-clip-text transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
            <button className="btn-primary text-sm">
              Start Practicing
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-secondary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10"
              >
                {item.name}
              </a>
            ))}
            <button className="w-full btn-primary mt-2">
              Start Practicing
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar