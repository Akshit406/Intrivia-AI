// components/leaderboard/LeaderboardRow.tsx
import React from 'react';

interface LeaderboardRowProps {
  rank: number;
  username: string;
  score: number;
  isCurrentUser?: boolean;
}

const LeaderboardRow: React.FC<LeaderboardRowProps> = ({ 
  rank, 
  username, 
  score, 
  isCurrentUser = false 
}) => {
  const getRankIcon = () => {
    switch (rank) {
      case 1:
        return <span className="text-2xl">🥇</span>;
      case 2:
        return <span className="text-2xl">🥈</span>;
      case 3:
        return <span className="text-2xl">🥉</span>;
      default:
        return (
          <span 
            className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
              rank <= 10 
                ? 'bg-purple-100 text-purple-700' 
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {rank}
          </span>
        );
    }
  };

  const getAvatar = () => {
    const initials = username
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
    
    return (
      <div className={`flex items-center justify-center w-10 h-10 rounded-full text-white font-semibold ${
        isCurrentUser 
          ? 'bg-gradient-to-r from-purple-600 to-pink-500' 
          : 'bg-gray-400'
      }`}>
        {initials}
      </div>
    );
  };

  return (
    <div className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover:shadow-md hover:scale-[1.01] ${
      isCurrentUser 
        ? 'bg-purple-50 border border-purple-200' 
        : 'bg-white border border-gray-100'
    }`}>
      <div className="flex items-center space-x-4">
        <div className="w-10 text-center">
          {getRankIcon()}
        </div>
        <div className="flex items-center space-x-3">
          {getAvatar()}
          <span className={`font-medium ${isCurrentUser ? 'text-purple-700' : 'text-gray-800'}`}>
            {username} {isCurrentUser && '(You)'}
          </span>
        </div>
      </div>
      <div className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
        {score.toLocaleString()} pts
      </div>
    </div>
  );
};

export default LeaderboardRow;