// components/explore/TopInterviewCard.tsx
import React from 'react';

interface TopInterviewCardProps {
  title: string;
  description: string;
  upvotes: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
}

const TopInterviewCard: React.FC<TopInterviewCardProps> = ({ 
  title, 
  description, 
  upvotes, 
  difficulty,
  tags 
}) => {
  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}>
          {difficulty}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center text-gray-500">
          <span className="mr-1">▲</span>
          <span>{upvotes}</span>
        </div>
      </div>
    </div>
  );
};

export default TopInterviewCard;