import { Check,  Infinity, Sparkles } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-accent-blue/30 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-accent-purple/30 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Try our beta for free. No credit card required.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 min-h-[500px]">
          {/* Card 1 - $5/month (behind left) */}
          <div className="absolute md:relative z-10 md:z-auto -left-4 md:left-0 -rotate-6 md:rotate-0 w-full md:w-1/3 max-w-md">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 shadow-2xl border border-white/10 h-full">
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 text-text-secondary line-through">$5/month</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-text-secondary">
                  <Check className="text-accent-blue" size={18} />
                  <span>10 interview generations</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Check className="text-accent-blue" size={18} />
                  <span>Basic analytics</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Check className="text-accent-blue" size={18} />
                  <span>Community leaderboard</span>
                </div>
              </div>
              <button className="w-full mt-8 bg-transparent hover:bg-white/5 border border-white/20 text-white font-medium py-3 rounded-lg transition-all">
                Not available
              </button>
            </div>
          </div>

          {/* Card 2 - Free Beta (main card) */}
          <div className="relative z-20 w-full md:w-1/3 max-w-md transform scale-105">
            <div className="bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 rounded-2xl p-8 shadow-2xl border-2 border-accent-blue/30 backdrop-blur-sm relative overflow-hidden">
              {/* Ribbon */}
              <div className="absolute top-0 right-0 bg-accent-blue text-white text-xs font-bold px-4 py-1 transform translate-x-2 translate-y-3 rotate-45 origin-bottom-left">
                POPULAR
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="text-accent-purple" size={20} />
                <span className="text-sm font-medium text-accent-purple">BETA ACCESS</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Free</h3>
              <p className="text-text-secondary mb-6">Limited access during beta testing</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="text-accent-blue" size={18} />
                  <span>5 free interview generations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-accent-blue" size={18} />
                  <span>Basic feedback</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-accent-blue" size={18} />
                  <span>Early access to new features</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-accent-blue" size={18} />
                  <span>Help shape our product</span>
                </div>
              </div>
              <button className="w-full mt-8 bg-gradient-to-r from-accent-blue to-accent-purple hover:from-accent-blue/90 hover:to-accent-purple/90 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-glow transition-all">
                Join Beta Now
              </button>
            </div>
          </div>

          {/* Card 3 - $100 lifetime (behind right) */}
          <div className="absolute md:relative z-10 md:z-auto -right-4 md:right-0 rotate-6 md:rotate-0 w-full md:w-1/3 max-w-md">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 shadow-2xl border border-white/10 h-full">
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 text-text-secondary line-through">$100 lifetime</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-text-secondary">
                  <Infinity className="text-accent-purple" size={18} />
                  <span>Unlimited generations</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Check className="text-accent-purple" size={18} />
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Check className="text-accent-purple" size={18} />
                  <span>Priority support</span>
                </div>
              </div>
              <button className="w-full mt-8 bg-transparent hover:bg-white/5 border border-white/20 text-white font-medium py-3 rounded-lg transition-all">
                Coming soon
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-text-secondary">
          <p>All plans include our core interview preparation features.</p>
          <p className="mt-2">Beta testers will get special discounts when paid plans launch.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;