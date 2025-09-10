// components/common/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-600">
          <p>© {new Date().getFullYear()} Intrivia AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;