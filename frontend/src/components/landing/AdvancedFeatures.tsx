const AdvancedFeatures = () => {
  const features = [
    {
      title: "Gamified Leaderboards",
      description: "Compete with peers and climb the ranks with our skill-based scoring system.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Performance Analytics",
      description: "Detailed breakdowns of your strengths and areas for improvement.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Daily Streak Tracking",
      description: "Build consistent practice habits with our streak system and rewards.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden border-t border-accent-purple/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(to right, rgba(79, 159, 255, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(79, 159, 255, 0.2) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Glowing accents */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-accent-blue/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-accent-purple/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="gradient-text">Advanced</span> Preparation Tools
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Elevate your interview skills with our professional-grade training system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 hover:bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-8 transition-all duration-300 hover:shadow-glow hover:border-accent-blue/30"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 flex items-center justify-center mb-6 mx-auto">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple flex items-center justify-center text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdvancedFeatures