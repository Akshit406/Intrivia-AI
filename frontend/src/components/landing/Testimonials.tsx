import { useState } from 'react'

const ProblemStatement = () => {
  const points = [
    {
      title: "Lack of Realistic Interview Practice",
      description: "Most candidates fail because they’ve never practiced in a pressure-simulated environment. We provide AI-driven, role-specific mock interviews to replicate real-world challenges."
    },
    {
      title: "Generic Feedback Doesn’t Help",
      description: "Instead of vague advice, our platform gives granular, actionable insights — from technical depth to communication clarity — tailored to your career goals."
    },
    {
      title: "Motivation Through Healthy Competition",
      description: "Climb the leaderboard by outperforming peers in mock sessions — build confidence, stay accountable, and sharpen your competitive edge."
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 mt-10 bg-secondary/20 border border-white/10 rounded-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What <span className="gradient-text">Problem</span> Are We Solving?
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Candidates often fail interviews not because of lack of knowledge, 
            but because of poor preparation, unclear feedback, and no tailored practice.
            Our solution bridges that gap.
          </p>
        </div>

        {/* Desktop - 3 column layout */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div key={index} className="glass-card rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" 
                   className="h-8 w-8 text-accent-blue mb-4" 
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M12 4v16m8-8H4" />
              </svg>
              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
              <p className="text-text-secondary">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile - Carousel */}
        <div className="md:hidden relative">
          <div className="glass-card rounded-2xl p-8 min-h-[300px]">
            <svg xmlns="http://www.w3.org/2000/svg" 
                 className="h-8 w-8 text-accent-blue mb-4" 
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 4v16m8-8H4" />
            </svg>
            <h3 className="text-xl font-semibold mb-3">{points[activeIndex].title}</h3>
            <p className="text-text-secondary">{points[activeIndex].description}</p>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {points.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-accent-blue' : 'bg-white/20'}`}
                aria-label={`Go to point ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemStatement
