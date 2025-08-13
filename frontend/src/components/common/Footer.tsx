import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Brand and description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">
                Intrivia<span className="gradient-text">AI</span>
              </span>
            </div>
            <p className="text-text-secondary text-lg max-w-md">
              The most advanced AI-powered mock interview platform to help you land your dream tech job.
            </p>
          </div>

          {/* Social icons on the right */}
          <div className="flex justify-center md:justify-end space-x-6">
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

        {/* Bottom copyright */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-lg">
            © {new Date().getFullYear()} Intrivia AI. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-text-secondary hover:text-white transition-colors text-lg">
              Privacy Policy
            </a>
            <a href="#" className="text-text-secondary hover:text-white transition-colors text-lg">
              Terms of Service
            </a>
            <a href="#" className="text-text-secondary hover:text-white transition-colors text-lg">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
