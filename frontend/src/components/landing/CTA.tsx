const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-accent-purple to-accent-blue relative overflow-hidden">
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-primary/50"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Next Interview Starts Here
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10">
            Join 50,000+ candidates who transformed their interview skills with Intrivia AI.
          </p>
          <button className="btn-primary text-lg px-12 py-4 hover:bg-gradient-reverse">
            Start Practicing
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA