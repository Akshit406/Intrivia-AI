// components/explore/ToolCard.tsx
import React from 'react';

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ title, description, icon, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <div className="text-purple-600 text-2xl mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ToolCard;