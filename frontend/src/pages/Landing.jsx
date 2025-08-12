import { Hero, Features, HowItWorks, Gamification } from '@components/sections';
import { Navbar, Footer } from '@components/layout';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Gamification />
      <Footer />
    </div>
  );
}