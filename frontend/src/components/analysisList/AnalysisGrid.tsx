// components/pages/AnalysisList/AnalysisGrid.tsx
import React from 'react';
import AnalysisCard from './AnalysisCard';

interface Interview {
  id: string;
  title: string;
  date: string;
  score: number;
}

interface AnalysisGridProps {
  interviews: Interview[];
  onInterviewClick: (id: string) => void;
}

const AnalysisGrid: React.FC<AnalysisGridProps> = ({ interviews, onInterviewClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {interviews.map(interview => (
        <AnalysisCard
          key={interview.id}
          id={interview.id}
          title={interview.title}
          date={interview.date}
          score={interview.score}
          onClick={() => onInterviewClick(interview.id)}
        />
      ))}
    </div>
  );
};

export default AnalysisGrid;