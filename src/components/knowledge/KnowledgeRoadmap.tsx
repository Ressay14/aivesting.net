import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BrainIcon, 
  TargetIcon, 
  TrendingUpIcon, 
  DollarSignIcon, 
  ClockIcon, 
  LockIcon,
  UnlockIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  BookOpenIcon,
  CalculatorIcon,
  ShieldIcon,
  ZapIcon,
  BarChart3Icon
} from 'lucide-react';

interface Module {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: 'locked' | 'unlocked' | 'completed';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  xpReward: number;
  prerequisites?: string[];
}

interface UserProgress {
  completedModules: string[];
  totalXP: number;
  streak: number;
  level: number;
}

export const KnowledgeRoadmap: React.FC = () => {
  const navigate = useNavigate();
  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedModules: [],
    totalXP: 0,
    streak: 0,
    level: 1
  });
  const [onboardingAnswers, setOnboardingAnswers] = useState<any>(null);

  useEffect(() => {
    // Load user progress from localStorage
    const savedProgress = localStorage.getItem('finance_mastery_progress');
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }

    // Load onboarding answers
    const savedOnboarding = localStorage.getItem('finance_mastery_onboarding');
    if (savedOnboarding) {
      setOnboardingAnswers(JSON.parse(savedOnboarding));
    }
  }, []);



  // Calculate module status based on user progress
  const getModuleStatus = (moduleId: string, prerequisites: string[] = []): 'locked' | 'unlocked' | 'completed' => {
    if (userProgress.completedModules.includes(moduleId)) {
      return 'completed';
    }
    
    if (!prerequisites || prerequisites.length === 0) {
      return 'unlocked';
    }
    
    const allPrerequisitesCompleted = prerequisites.every(prereq => 
      userProgress.completedModules.includes(prereq)
    );
    
    return allPrerequisitesCompleted ? 'unlocked' : 'locked';
  };

  // Calculate overall progress percentage
  const calculateProgress = () => {
    const totalModules = modules.length;
    const completedModules = userProgress.completedModules.length;
    console.log('Progress calculation:', { completedModules, totalModules, completedModulesList: userProgress.completedModules });
    return Math.round((completedModules / totalModules) * 100);
  };

  const modules: Module[] = useMemo(() => [
    {
      id: 'compound-interest',
      title: 'Compound Interest',
      description: 'Learn how money grows over time and why starting early matters',
      icon: <CalculatorIcon className="h-6 w-6" />,
      status: getModuleStatus('compound-interest', []),
      difficulty: 'beginner',
      estimatedTime: '5 min',
      xpReward: 50
    },
    {
      id: 'risk-return',
      title: 'Risk vs Return',
      description: 'Understand the relationship between risk and potential returns',
      icon: <TargetIcon className="h-6 w-6" />,
      status: getModuleStatus('risk-return', ['compound-interest']),
      difficulty: 'beginner',
      estimatedTime: '8 min',
      xpReward: 75,
      prerequisites: ['compound-interest']
    },
    {
      id: 'diversification',
      title: 'Diversification',
      description: 'Learn why spreading your investments reduces risk',
      icon: <ShieldIcon className="h-6 w-6" />,
      status: getModuleStatus('diversification', ['risk-return']),
      difficulty: 'intermediate',
      estimatedTime: '10 min',
      xpReward: 100,
      prerequisites: ['risk-return']
    },
    {
      id: 'asset-allocation',
      title: 'Asset Allocation',
      description: 'Master the art of balancing different investment types',
      icon: <BarChart3Icon className="h-6 w-6" />,
      status: getModuleStatus('asset-allocation', ['diversification']),
      difficulty: 'intermediate',
      estimatedTime: '12 min',
      xpReward: 125,
      prerequisites: ['diversification']
    },
    {
      id: 'market-cycles',
      title: 'Market Cycles',
      description: 'Understand how markets move and when to invest',
      icon: <TrendingUpIcon className="h-6 w-6" />,
      status: getModuleStatus('market-cycles', ['asset-allocation']),
      difficulty: 'advanced',
      estimatedTime: '15 min',
      xpReward: 150,
      prerequisites: ['asset-allocation']
    }
  ], [userProgress]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-500 bg-green-500/10';
      case 'intermediate': return 'text-yellow-500 bg-yellow-500/10';
      case 'advanced': return 'text-red-500 bg-red-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'unlocked': return <UnlockIcon className="h-5 w-5 text-yellow-500" />;
      case 'locked': return <LockIcon className="h-5 w-5 text-gray-500" />;
      default: return <LockIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  const handleModuleClick = (module: Module) => {
    if (module.status === 'unlocked') {
      navigate(`/knowledge/${module.id}`);
    }
  };

  const getPersonalizedMessage = () => {
    if (!onboardingAnswers) return "Welcome to your learning journey!";
    
    const { goals, experience } = onboardingAnswers;
    
    if (experience === 'beginner') {
      return "Perfect! We'll start with the fundamentals and build your knowledge step by step.";
    } else if (goals === 'retirement') {
      return "Great choice! Understanding compound interest is crucial for retirement planning.";
    } else if (goals === 'wealth_building') {
      return "Excellent! These modules will give you the foundation for building long-term wealth.";
    }
    
    return "Your personalized learning path is ready! Let's start with the basics.";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0E15] via-[#181C2A] to-[#23263A] p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-700/20 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '15s'}}></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '20s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          {/* Back to Dashboard Button */}
          <div className="flex justify-start mb-6">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 px-4 py-2 bg-[#23263A] hover:bg-[#1E2230] text-white rounded-lg transition-colors border border-gray-700 hover:border-gray-600"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to Dashboard
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full p-3 shadow-lg">
              <BrainIcon className="h-8 w-8 text-black" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Your Learning Roadmap</h1>
              <p className="text-gray-400">Investor IQ Track</p>
            </div>
          </div>
          
          <div className="bg-[#151822]/90 backdrop-blur-md rounded-xl border border-gray-800/30 p-6 max-w-2xl mx-auto">
            <p className="text-white mb-4">{getPersonalizedMessage()}</p>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-500">{userProgress.totalXP}</div>
                <div className="text-sm text-gray-400">Total XP</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-500">{userProgress.streak}</div>
                <div className="text-sm text-gray-400">Day Streak</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-500">Level {userProgress.level}</div>
                <div className="text-sm text-gray-400">Current Level</div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-[#151822]/90 backdrop-blur-md rounded-xl border border-gray-800/30 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Track Progress</h2>
            <div className="text-sm text-gray-400">
              {userProgress.completedModules.length} of {modules.length} modules completed
            </div>
          </div>
          
          <div className="w-full bg-[#23263A] rounded-full h-3 mb-2">
            <div 
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-3 rounded-full transition-all duration-500"
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
          
          <div className="text-sm text-gray-400">
            {calculateProgress()}% Complete
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const isClickable = module.status === 'unlocked';
            const isCompleted = module.status === 'completed';
            
            return (
              <div
                key={module.id}
                onClick={() => handleModuleClick(module)}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  isClickable 
                    ? 'hover:scale-105 hover:shadow-2xl' 
                    : 'cursor-not-allowed'
                }`}
              >
                {/* Connection Line */}
                {index < modules.length - 1 && (
                  <div className="absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-700 transform -translate-y-1/2 z-0"></div>
                )}

                <div className={`relative bg-[#151822]/90 backdrop-blur-md rounded-xl border-2 p-6 transition-all duration-300 ${
                  isCompleted
                    ? 'border-green-500 bg-green-500/5'
                    : isClickable
                    ? 'border-yellow-500 bg-yellow-500/5 hover:border-yellow-400 hover:bg-yellow-500/10'
                    : 'border-gray-700 bg-gray-800/20'
                }`}>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    {getStatusIcon(module.status)}
                  </div>

                  {/* Module Icon */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    isCompleted
                      ? 'bg-green-500 text-white'
                      : isClickable
                      ? 'bg-yellow-500 text-black'
                      : 'bg-gray-700 text-gray-400'
                  }`}>
                    {module.icon}
                  </div>

                  {/* Module Info */}
                  <h3 className={`text-lg font-bold mb-2 ${
                    isCompleted ? 'text-green-500' : 'text-white'
                  }`}>
                    {module.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-4">
                    {module.description}
                  </p>

                  {/* Module Details */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Difficulty</span>
                      <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(module.difficulty)}`}>
                        {module.difficulty}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Time</span>
                      <span className="text-xs text-gray-400">{module.estimatedTime}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">XP Reward</span>
                      <span className="text-xs text-yellow-500 font-medium">{module.xpReward} XP</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  {isClickable && (
                    <button className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium py-2 px-4 rounded-lg hover:from-yellow-400 hover:to-yellow-300 transition-all flex items-center justify-center gap-2">
                      <span>Start Learning</span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </button>
                  )}

                  {/* Locked Message */}
                  {module.status === 'locked' && (
                    <div className="mt-4 text-center">
                      <p className="text-xs text-gray-500">
                        Complete previous modules to unlock
                      </p>
                    </div>
                  )}

                  {/* Completed Badge */}
                  {isCompleted && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1">
                      <CheckCircleIcon className="h-4 w-4" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Steps */}
        <div className="mt-8 bg-[#151822]/90 backdrop-blur-md rounded-xl border border-gray-800/30 p-6">
          <h3 className="text-lg font-bold text-white mb-4">Next Steps</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#23263A] p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <span className="font-medium text-white">Daily Goal</span>
              </div>
              <p className="text-sm text-gray-400">Complete at least one module today to maintain your streak</p>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <TargetIcon className="h-5 w-5 text-blue-500" />
                <span className="font-medium text-white">Recommended</span>
              </div>
              <p className="text-sm text-gray-400">Start with "Compound Interest" to build a strong foundation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 