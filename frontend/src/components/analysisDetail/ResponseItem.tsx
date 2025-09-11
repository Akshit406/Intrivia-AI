// components/pages/AnalysisDetail/ResponseItem.tsx
import React from 'react';

interface ResponseItemProps {
  question: string;
  answer: string;
  score: number;
  suggestion: string;
}

const ResponseItem: React.FC<ResponseItemProps> = ({ question, answer, score, suggestion }) => {
  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-600 bg-green-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-md font-semibold text-gray-800">{question}</h4>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(score)}`}>
          {score}/100
        </span>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-700 font-medium mb-1">Your Response:</p>
        <p className="text-gray-600">{answer}</p>
      </div>
      <div>
        <p className="text-sm text-gray-700 font-medium mb-1">Suggestion:</p>
        <p className="text-gray-600">{suggestion}</p>
      </div>
    </div>
  );
};

export default ResponseItem;