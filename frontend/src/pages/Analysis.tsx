// pages/Analysis.tsx (Analysis List Page)
import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import AnalysisGrid from '../components/analysisList/AnalysisGrid';

const Analysis: React.FC = () => {
  const [interviews, setInterviews] = useState<any[]>([]);

  // Mock data for analysis list
  useEffect(() => {
    setInterviews([
      {
        id: 'INT-2023-001',
        title: 'Frontend Developer Interview',
        date: '2023-10-15',
        score: 82
      },
      {
        id: 'INT-2023-002',
        title: 'JavaScript Algorithms Assessment',
        date: '2023-10-10',
        score: 76
      },
      {
        id: 'INT-2023-003',
        title: 'React Technical Screening',
        date: '2023-10-05',
        score: 91
      },
      {
        id: 'INT-2023-004',
        title: 'System Design Interview',
        date: '2023-10-01',
        score: 68
      },
      {
        id: 'INT-2023-005',
        title: 'CSS Layout Techniques Review',
        date: '2023-09-28',
        score: 88
      },
      {
        id: 'INT-2023-006',
        title: 'Backend Architecture Discussion',
        date: '2023-09-25',
        score: 79
      },
      {
        id: 'INT-2023-007',
        title: 'UI/UX Design Principles',
        date: '2023-09-20',
        score: 85
      },
      {
        id: 'INT-2023-008',
        title: 'Data Structures & Algorithms',
        date: '2023-09-15',
        score: 72
      },
      {
        id: 'INT-2023-009',
        title: 'Behavioral Interview',
        date: '2023-09-10',
        score: 90
      },
      {
        id: 'INT-2023-010',
        title: 'Technical Problem Solving',
        date: '2023-09-05',
        score: 65
      }
    ]);
  }, []);

  const handleInterviewClick = (id: string) => {
    console.log(`Navigating to analysis detail for interview ${id}`);
    // Navigation logic here - would typically use React Router
    // window.location.href = `/analysis/${id}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Interview Analyses</h1>
        
        {interviews.length > 0 ? (
          <AnalysisGrid interviews={interviews} onInterviewClick={handleInterviewClick} />
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-300 text-6xl mb-4">📊</div>
            <h3 className="text-xl font-medium text-gray-700">No analyses yet</h3>
            <p className="text-gray-500 mt-2">Complete your first interview to see analysis here</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Analysis;