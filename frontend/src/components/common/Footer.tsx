import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand and description */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">Intrivia<span className="gradient-text">AI</span></span>
            </div>
            <p className="text-text-secondary text-lg max-w-md">
              The most advanced AI-powered mock interview platform to help you land your dream tech job.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-text-secondary hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-text-secondary hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="#" className="text-text-secondary hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Product</h3>
            <ul className="space-y-4 text-text-secondary">
              <li><a href="#" className="hover:text-white transition-colors text-lg">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-lg">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-lg">Use Cases</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-lg">Integrations</a></li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-4 text-text-secondary">
              <li><a href="#" className="hover:text-white transition-colors text-lg">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-lg">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-lg">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-lg">Contact</a></li>
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Resources</h3>
            <ul className="space-y-4 text-text-secondary">
              <li><a href="#" className="hover:text-white transition-colors text-lg">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-lg">Interview Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-lg">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-lg">Webinars</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-lg">
            © {new Date().getFullYear()} Intrivia AI. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-text-secondary hover:text-white transition-colors text-lg">Privacy Policy</a>
            <a href="#" className="text-text-secondary hover:text-white transition-colors text-lg">Terms of Service</a>
            <a href="#" className="text-text-secondary hover:text-white transition-colors text-lg">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;