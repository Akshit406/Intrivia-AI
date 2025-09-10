// components/common/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-purple-600">Intrivia AI</div>
          <div className="flex space-x-6">
            <button className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Explore</button>
            <button className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Search</button>
            <button className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Analytics</button>
            <button className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Leaderboards</button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;