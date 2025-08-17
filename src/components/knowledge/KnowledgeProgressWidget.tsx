import React, { useState, useEffect } from 'react';
import { 
  BrainIcon, 
  StarIcon, 
  FlameIcon,
  TrophyIcon
} from 'lucide-react';

interface UserProgress {
  completedModules: string[];
  totalXP: number;
  streak: number;
  level: number;
}

export const KnowledgeProgressWidget: React.FC = () => {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedModules: [],
    totalXP: 0,
    streak: 0,
    level: 1
  });

  useEffect(() => {
    // Load user progress from localStorage
    const savedProgress = localStorage.getItem('finance_mastery_progress');
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, []);

  const calculateProgress = () => {
    // Assuming 5 modules total for now
    return Math.round((userProgress.completedModules.length / 5) * 100);
  };

  return (
    <div className="flex items-center gap-4 bg-[#23263A] rounded-lg px-4 py-2 border border-gray-700">
      {/* Level */}
      <div className="flex items-center gap-2">
        <div className="bg-yellow-500/10 p-2 rounded-lg">
          <BrainIcon className="h-4 w-4 text-yellow-500" />
        </div>
        <div className="text-sm">
          <div className="font-bold text-white">Level {userProgress.level}</div>
          <div className="text-xs text-gray-400">{userProgress.totalXP} XP</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex-1 max-w-32">
        <div className="flex items-center gap-2 mb-1">
          <div className="text-xs text-gray-400">Progress</div>
          <div className="text-xs text-white font-medium">{calculateProgress()}%</div>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full transition-all duration-300"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
      </div>

      {/* Streak */}
      <div className="flex items-center gap-2">
        <div className="bg-orange-500/10 p-2 rounded-lg">
          <FlameIcon className="h-4 w-4 text-orange-500" />
        </div>
        <div className="text-sm">
          <div className="font-bold text-white">{userProgress.streak}</div>
          <div className="text-xs text-gray-400">Streak</div>
        </div>
      </div>

      {/* Modules Completed */}
      <div className="flex items-center gap-2">
        <div className="bg-green-500/10 p-2 rounded-lg">
          <TrophyIcon className="h-4 w-4 text-green-500" />
        </div>
        <div className="text-sm">
          <div className="font-bold text-white">{userProgress.completedModules.length}</div>
          <div className="text-xs text-gray-400">Done</div>
        </div>
      </div>
    </div>
  );
}; 