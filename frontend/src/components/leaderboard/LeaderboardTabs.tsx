// components/leaderboard/LeaderboardTabs.tsx
import React from 'react';

interface LeaderboardTabsProps {
  activeTab: 'daily' | 'weekly' | 'overall';
  onTabChange: (tab: 'daily' | 'weekly' | 'overall') => void;
}

const LeaderboardTabs: React.FC<LeaderboardTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex rounded-full p-1 bg-gray-100 shadow-sm">
        <button
          onClick={() => onTabChange('daily')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeTab === 'daily'
              ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Daily
        </button>
        <button
          onClick={() => onTabChange('weekly')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeTab === 'weekly'
              ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Weekly
        </button>
        <button
          onClick={() => onTabChange('overall')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeTab === 'overall'
              ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Overall
        </button>
      </div>
    </div>
  );
};

export default LeaderboardTabs;