const CTA = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden mt-10 mb-20 rounded-xl border border-accent-purple/30">
      {/* Glowing gradient accents */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-accent-blue/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-accent-purple/20 blur-3xl"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(to right, rgba(79, 159, 255, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(79, 159, 255, 0.2) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to <span className="gradient-text">Ace Your Interview</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Join thousands who landed their dream jobs with our AI-powered coaching.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-glow text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-[1.02]">
              Start 7-Day Free Trial
            </button>
            <button className="border-2 border-accent-blue/50 hover:border-accent-purple text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:bg-accent-blue/10">
              Book a Demo
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA