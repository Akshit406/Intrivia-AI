// import Spline from '@splinetool/react-spline';

const Hero = () => {

  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({
      behavior: "smooth"
    });

  }


  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col md:flex-row items-center">
      {/* Full-screen black glass background */}

      {/* Left Column */}
      <div className="md:w-1/2 space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Master Any Interview with <span className="gradient-text">AI-Driven Precision</span>
        </h1>
        <p className="text-lg text-text-secondary max-w-lg">
AI mock interviews that score you, track your confidence, and give feedback so precise it feels like a personal coach.        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn-primary">Start Now</button>
          <button className="btn-outline" onClick={scrollToHowItWorks}>
            <span>See How It Works</span>
          </button>
        </div>
        <div className="flex flex-wrap gap-6 pt-4">
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">10,000+</p>
            <p className="text-text-secondary">interviews</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">94%</p>
            <p className="text-text-secondary">success rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">4.9★</p>
            <p className="text-text-secondary">avg. rating</p>
          </div>
        </div>
      </div>

      {/* Right Column - Video */}
      <div className="md:w-1/2 h-[400px] relative md:-ml-[50px] mt-12 md:mt-0">
        <video
          src="/holo-blobs.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
