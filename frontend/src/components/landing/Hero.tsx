import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col md:flex-row items-center">
      {/* Left Column */}
      <div className="md:w-1/2 space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Master Any Interview with <span className="gradient-text">AI-Driven Precision</span>
        </h1>
        <p className="text-lg text-text-secondary max-w-lg">
          Get FAANG-ready with real-time feedback and adaptive challenges from our AI-powered mock interview platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn-primary">Start Now</button>
          <button className="btn-outline">
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

      {/* Right Column - Spline Scene */}
      <div className="md:w-1/2 h-[400px] relative md:-ml-[50px]  mt-12 md:mt-0">
        {/* <Spline scene="https://prod.spline.design/w3cVusAxyaBmT5jp/scene.splinecode"  /> */}
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
