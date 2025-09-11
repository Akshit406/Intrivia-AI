// components/search/ResultCard.tsx
import React from 'react';

interface ResultCardProps {
  title: string;
  candidate: string;
  date: string;
  description: string;
  onViewAnalysis: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({
  title,
  candidate,
  date,
  description,
  onViewAnalysis
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <p className="text-gray-600 mb-2"><span className="font-medium">Candidate:</span> {candidate}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        onClick={onViewAnalysis}
        className="px-4 py-2 bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200 transition-colors font-medium"
      >
        View Analysis
      </button>
    </div>
  );
};

export default ResultCard;