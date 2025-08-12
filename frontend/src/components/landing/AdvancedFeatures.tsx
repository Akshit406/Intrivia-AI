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
    <section className="py-20 bg-gradient-section relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
        <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-accent-blue/30 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-accent-pink/30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced Features for <span className="gradient-text">Serious Candidates</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Go beyond basic mock interviews with our comprehensive preparation toolkit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple flex items-center justify-center text-white mb-6 shadow-glow">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdvancedFeatures