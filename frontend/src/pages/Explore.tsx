// pages/Explore.tsx
import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ToolCard from '../components/explore/ToolCard';
import TopInterviewCard from '../components/explore/TopInterviewCard';
import { FiFileText, FiYoutube, FiEdit } from 'react-icons/fi';

const Explore: React.FC = () => {
  const [topInterviews, setTopInterviews] = useState<any[]>([]);

  // Mock data for top interviews
  useEffect(() => {
    setTopInterviews([
      {
        id: 1,
        title: "Frontend System Design",
        description: "Design a responsive dashboard for analytics platform",
        upvotes: 124,
        difficulty: "Hard",
        tags: ["React", "System Design", "UI/UX"]
      },
      {
        id: 2,
        title: "JavaScript Algorithms",
        description: "Common algorithm questions for JavaScript developers",
        upvotes: 98,
        difficulty: "Medium",
        tags: ["JavaScript", "Algorithms"]
      },
      {
        id: 3,
        title: "React Hooks Deep Dive",
        description: "Advanced questions about React hooks and state management",
        upvotes: 76,
        difficulty: "Medium",
        tags: ["React", "Hooks"]
      },
      {
        id: 4,
        title: "CSS Layout Techniques",
        description: "Modern CSS layout implementations and tricks",
        upvotes: 64,
        difficulty: "Easy",
        tags: ["CSS", "Frontend"]
      }
    ]);
  }, []);

  const handleResumeAnalyzerClick = () => {
    console.log("Resume Analyzer clicked");
    // Navigation logic here
  };

  const handleYoutubeInterviewClick = () => {
    console.log("YouTube to Interview clicked");
    // Navigation logic here
  };

  const handleCustomInterviewClick = () => {
    console.log("Custom Interview clicked");
    // Navigation logic here
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <section className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Practice Makes Perfect</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master your technical interview skills with AI-powered mock interviews tailored to your experience level.
          </p>
        </section>

        {/* Tools Section */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ToolCard
              title="Resume Analyzer & Interviewer"
              description="Upload your resume and get a personalized interview based on your skills and experience."
              icon={<FiFileText />}
              onClick={handleResumeAnalyzerClick}
            />
            <ToolCard
              title="YouTube → Interview"
              description="Convert any technical YouTube video into an interactive interview session."
              icon={<FiYoutube />}
              onClick={handleYoutubeInterviewClick}
            />
            <ToolCard
              title="Custom Interview"
              description="Create your own interview by specifying topics, difficulty, and question types."
              icon={<FiEdit />}
              onClick={handleCustomInterviewClick}
            />
          </div>
        </section>

        {/* Top Interviews Section */}
        <section className="animate-fade-in">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Top Interviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topInterviews.map(interview => (
              <TopInterviewCard
                key={interview.id}
                title={interview.title}
                description={interview.description}
                upvotes={interview.upvotes}
                difficulty={interview.difficulty}
                tags={interview.tags}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Explore;