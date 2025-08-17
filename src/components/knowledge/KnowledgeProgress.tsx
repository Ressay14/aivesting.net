import React, { useState, useEffect } from 'react';
import { 
  BrainIcon, 
  StarIcon, 
  TargetIcon, 
  TrendingUpIcon, 
  AwardIcon, 
  CalendarIcon, 
  FlameIcon,
  TrophyIcon,
  BookOpenIcon,
  ZapIcon,
  CheckIcon
} from 'lucide-react';

interface UserProgress {
  completedModules: string[];
  totalXP: number;
  streak: number;
  level: number;
  badges: string[];
  lastCompletedDate: string;
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  unlocked: boolean;
  requirement: string;
}

export const KnowledgeProgress: React.FC = () => {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedModules: [],
    totalXP: 0,
    streak: 0,
    level: 1,
    badges: [],
    lastCompletedDate: ''
  });

  useEffect(() => {
    // Load user progress from localStorage
    const savedProgress = localStorage.getItem('finance_mastery_progress');
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, []);

  const badges: Badge[] = [
    {
      id: 'first_module',
      name: 'First Steps',
      description: 'Complete your first learning module',
      icon: <BookOpenIcon className="h-5 w-5" />,
      color: 'text-green-500 bg-green-500/10',
      unlocked: userProgress.completedModules.length >= 1,
      requirement: 'Complete 1 module'
    },
    {
      id: 'streak_3',
      name: 'Consistent Learner',
      description: 'Maintain a 3-day learning streak',
      icon: <FlameIcon className="h-5 w-5" />,
      color: 'text-orange-500 bg-orange-500/10',
      unlocked: userProgress.streak >= 3,
      requirement: '3-day streak'
    },
    {
      id: 'streak_7',
      name: 'Week Warrior',
      description: 'Maintain a 7-day learning streak',
      icon: <TrophyIcon className="h-5 w-5" />,
      color: 'text-yellow-500 bg-yellow-500/10',
      unlocked: userProgress.streak >= 7,
      requirement: '7-day streak'
    },
    {
      id: 'xp_100',
      name: 'Knowledge Seeker',
      description: 'Earn 100 XP points',
      icon: <StarIcon className="h-5 w-5" />,
      color: 'text-blue-500 bg-blue-500/10',
      unlocked: userProgress.totalXP >= 100,
      requirement: '100 XP'
    },
    {
      id: 'xp_500',
      name: 'Learning Champion',
      description: 'Earn 500 XP points',
      icon: <AwardIcon className="h-5 w-5" />,
      color: 'text-purple-500 bg-purple-500/10',
      unlocked: userProgress.totalXP >= 500,
      requirement: '500 XP'
    },
    {
      id: 'all_modules',
      name: 'Master Investor',
      description: 'Complete all modules in the track',
      icon: <BrainIcon className="h-5 w-5" />,
      color: 'text-red-500 bg-red-500/10',
      unlocked: userProgress.completedModules.length >= 5,
      requirement: 'Complete all modules'
    }
  ];

  const getLevelTitle = (level: number) => {
    if (level >= 10) return 'Master Investor';
    if (level >= 7) return 'Advanced Learner';
    if (level >= 4) return 'Intermediate Investor';
    if (level >= 2) return 'Beginner Investor';
    return 'New Learner';
  };

  const getLevelColor = (level: number) => {
    if (level >= 10) return 'text-red-500';
    if (level >= 7) return 'text-purple-500';
    if (level >= 4) return 'text-blue-500';
    if (level >= 2) return 'text-green-500';
    return 'text-gray-500';
  };

  const calculateProgress = () => {
    const totalModules = 5; // Total modules in the track
    return Math.round((userProgress.completedModules.length / totalModules) * 100);
  };

  const getNextLevelXP = () => {
    return userProgress.level * 100; // Simple leveling system
  };

  return (
    <div className="bg-[#151822]/90 backdrop-blur-md rounded-xl border border-gray-800/30 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full p-2">
            <BrainIcon className="h-6 w-6 text-black" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Learning Progress</h2>
            <p className="text-sm text-gray-400">Investor IQ Track</p>
          </div>
        </div>
        <div className="text-right">
          <div className={`text-lg font-bold ${getLevelColor(userProgress.level)}`}>
            Level {userProgress.level}
          </div>
          <div className="text-xs text-gray-400">{getLevelTitle(userProgress.level)}</div>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#23263A] p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-yellow-500">{userProgress.totalXP}</div>
          <div className="text-sm text-gray-400">Total XP</div>
          <div className="text-xs text-gray-500 mt-1">
            {userProgress.totalXP}/{getNextLevelXP()} to next level
          </div>
        </div>
        
        <div className="bg-[#23263A] p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-500">{userProgress.streak}</div>
          <div className="text-sm text-gray-400">Day Streak</div>
          <div className="text-xs text-gray-500 mt-1">
            {userProgress.streak > 0 ? 'Keep it up!' : 'Start learning today'}
          </div>
        </div>
        
        <div className="bg-[#23263A] p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-500">{calculateProgress()}%</div>
          <div className="text-sm text-gray-400">Track Complete</div>
          <div className="text-xs text-gray-500 mt-1">
            {userProgress.completedModules.length}/5 modules
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Track Progress</span>
          <span className="text-sm text-yellow-500 font-medium">{calculateProgress()}%</span>
        </div>
        <div className="w-full bg-[#23263A] rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-3 rounded-full transition-all duration-500"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
      </div>

      {/* XP Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Level Progress</span>
          <span className="text-sm text-blue-500 font-medium">
            {userProgress.totalXP}/{getNextLevelXP()} XP
          </span>
        </div>
        <div className="w-full bg-[#23263A] rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-500"
            style={{ width: `${Math.min((userProgress.totalXP / getNextLevelXP()) * 100, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Badges Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white mb-4">Achievements</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`p-3 rounded-lg border transition-all ${
                badge.unlocked
                  ? 'border-gray-600 bg-[#23263A]'
                  : 'border-gray-800 bg-[#1E2230] opacity-50'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`p-1 rounded ${badge.color}`}>
                  {badge.icon}
                </div>
                <div className="flex-1">
                  <div className={`text-sm font-medium ${
                    badge.unlocked ? 'text-white' : 'text-gray-500'
                  }`}>
                    {badge.name}
                  </div>
                  <div className="text-xs text-gray-400">
                    {badge.requirement}
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-400">
                {badge.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {userProgress.completedModules.length > 0 ? (
            userProgress.completedModules.slice(-3).reverse().map((module, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-[#23263A] rounded-lg">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">
                    Completed {module.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </div>
                  <div className="text-xs text-gray-400">
                    {userProgress.lastCompletedDate || 'Recently'}
                  </div>
                </div>
                <div className="text-sm text-yellow-500 font-medium">+50 XP</div>
              </div>
            ))
          ) : (
            <div className="text-center py-6 text-gray-400">
              <BookOpenIcon className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No modules completed yet</p>
              <p className="text-sm">Start your learning journey today!</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-6 pt-4 border-t border-gray-800/30">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-green-500">
              {userProgress.completedModules.length}
            </div>
            <div className="text-xs text-gray-400">Modules Done</div>
          </div>
          <div>
            <div className="text-lg font-bold text-blue-500">
              {badges.filter(b => b.unlocked).length}
            </div>
            <div className="text-xs text-gray-400">Badges Earned</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Compact version for topbar
export const KnowledgeProgressCompact: React.FC = () => {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedModules: [],
    totalXP: 0,
    streak: 0,
    level: 1,
    badges: [],
    lastCompletedDate: ''
  });

  useEffect(() => {
    const savedProgress = localStorage.getItem('finance_mastery_progress');
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, []);

  const calculateProgress = () => {
    const totalModules = 5;
    return Math.round((userProgress.completedModules.length / totalModules) * 100);
  };

  return (
    <div className="flex items-center gap-4 p-3 bg-[#151822]/90 backdrop-blur-md rounded-lg border border-gray-800/30">
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full p-1">
          <BrainIcon className="h-4 w-4 text-black" />
        </div>
        <div className="text-sm">
          <div className="text-white font-medium">Level {userProgress.level}</div>
          <div className="text-gray-400 text-xs">{calculateProgress()}% Complete</div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="text-center">
          <div className="text-sm font-bold text-yellow-500">{userProgress.totalXP}</div>
          <div className="text-xs text-gray-400">XP</div>
        </div>
        
        <div className="text-center">
          <div className="text-sm font-bold text-blue-500">{userProgress.streak}</div>
          <div className="text-xs text-gray-400">Streak</div>
        </div>
        
        {userProgress.streak > 0 && (
          <div className="text-orange-500">
            <FlameIcon className="h-4 w-4" />
          </div>
        )}
      </div>
    </div>
  );
}; 