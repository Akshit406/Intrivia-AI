import { useState } from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Intrivia AI helped me land my dream job at Google. The mock interviews were so realistic that my actual interview felt easier!",
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
    },
    {
      quote: "The AI feedback on my communication skills was incredibly detailed. I improved my interview performance dramatically in just 2 weeks.",
      name: "Michael Chen",
      role: "Product Manager at Meta",
    },
    {
      quote: "As a career switcher, the resume-based interviews gave me the confidence to showcase my transferable skills effectively.",
      name: "David Rodriguez",
      role: "Data Scientist at Amazon",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Users Say</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Join thousands of candidates who transformed their interview skills with Intrivia AI.
          </p>
        </div>

        {/* Desktop - 3 column layout */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="text-lg mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-text-secondary text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile - Carousel */}
        <div className="md:hidden relative">
          <div className="glass-card rounded-2xl p-8 min-h-[300px]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-lg mb-6">{testimonials[activeIndex].quote}</p>
            <div>
              <p className="font-bold">{testimonials[activeIndex].name}</p>
              <p className="text-text-secondary text-sm">{testimonials[activeIndex].role}</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-accent-blue' : 'bg-white/20'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials