// components/pages/AnalysisDetail/PitchStatCard.tsx
import React from 'react';

interface PitchStatCardProps {
  mean: number;
  median: number;
  deviation: number;
  min: number;
  max: number;
  speechRate: number;
  confidenceIndex: number;
}

const PitchStatCard: React.FC<PitchStatCardProps> = ({
  mean,
  median,
  deviation,
  min,
  max,
  speechRate,
  confidenceIndex
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Pitch Analysis</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-pink-50 rounded-lg">
          <div className="text-xl font-bold text-pink-600">{mean}Hz</div>
          <div className="text-sm text-gray-600">Mean Pitch</div>
        </div>
        <div className="text-center p-4 bg-pink-50 rounded-lg">
          <div className="text-xl font-bold text-pink-600">{median}Hz</div>
          <div className="text-sm text-gray-600">Median Pitch</div>
        </div>
        <div className="text-center p-4 bg-pink-50 rounded-lg">
          <div className="text-xl font-bold text-pink-600">{deviation}Hz</div>
          <div className="text-sm text-gray-600">Deviation</div>
        </div>
        <div className="text-center p-4 bg-pink-50 rounded-lg">
          <div className="text-xl font-bold text-pink-600">{min}-{max}Hz</div>
          <div className="text-sm text-gray-600">Min-Max Range</div>
        </div>
        <div className="text-center p-4 bg-pink-50 rounded-lg">
          <div className="text-xl font-bold text-pink-600">{speechRate}</div>
          <div className="text-sm text-gray-600">Speech Rate (WPM)</div>
        </div>
        <div className="text-center p-4 bg-pink-50 rounded-lg">
          <div className="text-xl font-bold text-pink-600">{confidenceIndex}/10</div>
          <div className="text-sm text-gray-600">Vocal Confidence</div>
        </div>
      </div>
    </div>
  );
};

export default PitchStatCard;