// components/pages/AnalysisDetail/FluencyCard.tsx
import React from 'react';

interface FluencyCardProps {
  fillerWords: number;
  fillerPercentage: number;
}

const FluencyCard: React.FC<FluencyCardProps> = ({ fillerWords, fillerPercentage }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Fluency Analysis</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">{fillerWords}</div>
          <div className="text-sm text-gray-600">Filler Words</div>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">{fillerPercentage}%</div>
          <div className="text-sm text-gray-600">Filler Percentage</div>
        </div>
      </div>
    </div>
  );
};

export default FluencyCard;