const PowerOfAI = () => {
  const features = [
    {
      title: "YouTube-to-Interview",
      description: "Auto-generate interview questions from any technical video content you watch.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Resume-Based Interviews",
      description: "AI-tailored scenarios based on your actual experience and skills.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Custom Skill Challenges",
      description: "Practice coding, system design, or behavioral questions with targeted drills.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "FAANG-Level Simulations",
      description: "Realistic onsite interview replicas with actual company question patterns.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          The Power of <span className="gradient-text">AI</span> in the Mock Interview Room
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Our platform uses advanced machine learning to analyze your responses, provide real-time feedback, and adapt questions to your skill level.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-secondary rounded-xl p-8 glass-card hover:shadow-glow hover:scale-[1.02] transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple flex items-center justify-center text-white">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-text-secondary">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PowerOfAI