// components/pages/AnalysisDetail/Overview.tsx
import React from 'react';

interface OverviewProps {
  summary: string;
}

const Overview: React.FC<OverviewProps> = ({ summary }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">AI Overview</h3>
      <p className="text-gray-600 leading-relaxed">{summary}</p>
    </div>
  );
};

export default Overview;