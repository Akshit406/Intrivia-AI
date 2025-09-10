const SeeHowItWorks = () => {
  const youtubeVideoId = "hB7CDrVnNCs"; // Your YouTube video ID

  return (
    <section id="how-it-works" className="py-20 mt-10 rounded-xl bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          See <span className="gradient-text">How It Works</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <div className="shadow-lg rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="360"
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="Intrivia AI Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white">1. Start Your AI-Powered Interview</h3>
              <p className="text-text-secondary">
                Choose your role, difficulty, and skills to begin a simulated interview with our AI.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">2. Real-Time Interaction</h3>
              <p className="text-text-secondary">
                Answer AI-generated questions and receive adaptive follow-ups just like a real interview.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">3. Detailed Feedback & Leaderboards</h3>
              <p className="text-text-secondary">
                Get confidence analysis, skill breakdown, and see where you rank against other candidates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeeHowItWorks;
