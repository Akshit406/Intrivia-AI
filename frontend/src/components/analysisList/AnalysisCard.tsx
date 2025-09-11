// components/pages/AnalysisList/AnalysisCard.tsx
import React from 'react';

interface AnalysisCardProps {
  id: string;
  title: string;
  date: string;
  score: number;
  onClick: () => void;
}

const AnalysisCard: React.FC<AnalysisCardProps> = ({ id, title, date, score, onClick }) => {
  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-600 bg-green-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-purple-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(score)}`}>
          {score}/100
        </span>
      </div>
      <div className="text-gray-600 text-sm mb-2">
        <span className="font-medium">ID:</span> {id}
      </div>
      <div className="text-gray-500 text-sm">
        {formatDate(date)}
      </div>
    </div>
  );
};

export default AnalysisCard;