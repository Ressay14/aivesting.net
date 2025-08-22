import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUpIcon, BookOpenIcon, BriefcaseIcon, PiggyBankIcon, CoinsIcon, TimerIcon, ArrowRightIcon, SparklesIcon } from 'lucide-react';
import { HeroLogo } from './Logo';

interface OnboardingProps {
  onComplete?: () => void;
}

export const Onboarding = ({ onComplete }: OnboardingProps) => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState('Beginner');
  const [selectedGoals, setSelectedGoals] = useState<string[]>(['Save']);
  const [timeSpent, setTimeSpent] = useState(5);

  const handleContinue = () => {
    console.log('Continue button clicked!');
    console.log('Selected level:', selectedLevel);
    console.log('Selected goals:', selectedGoals);
    console.log('Time spent:', timeSpent);
    
    const onboardingData = {
      level: selectedLevel,
      goals: selectedGoals,
      timeSpent,
    };
    
    // Save to localStorage
    localStorage.setItem('aivesting_onboarding', JSON.stringify(onboardingData));
    console.log('Onboarding data saved to localStorage');
    
    // Call onComplete if provided
    if (onComplete) {
      console.log('Calling onComplete callback');
      onComplete();
    }
    
    // Navigate to dashboard
    console.log('Navigating to /dashboard...');
    try {
      navigate('/dashboard');
      console.log('Navigation successful');
    } catch (error) {
      console.error('Navigation failed:', error);
      // Fallback: try window.location
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative bg-gradient-to-br from-[#0B0E15] via-[#181C2A] to-[#23263A]">
      {/* Decorative blurred background elements for premium look */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-700/30 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '15s'}}></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-yellow-500/20 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '20s'}}></div>
      </div>
      
      <div className="relative z-10 w-full max-w-2xl px-4">
        {/* Brand/Logo */}
        <div className="flex justify-center mb-8">
          <HeroLogo />
        </div>
        
        <div className="bg-[#181C2A]/90 rounded-2xl shadow-2xl border border-[#23263A] p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <SparklesIcon className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-white">Customize Your Experience</h2>
            <p className="text-gray-400">Help us tailor AIVesting to your needs and goals</p>
          </div>

          <div className="space-y-8">
            {/* Experience Level Selection */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-300">
                Select your experience level
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: 'Beginner',
                    icon: BookOpenIcon,
                    description: 'New to investing',
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    title: 'Intermediate',
                    icon: TrendingUpIcon,
                    description: 'Some experience',
                    color: 'from-blue-500 to-purple-500'
                  },
                  {
                    title: 'Expert',
                    icon: BriefcaseIcon,
                    description: 'Advanced trader',
                    color: 'from-purple-500 to-pink-500'
                  }
                ].map(level => (
                  <button
                    key={level.title}
                    onClick={() => setSelectedLevel(level.title)}
                    className={`p-6 rounded-xl text-left transition-all duration-300 border-2 ${
                      selectedLevel === level.title
                        ? 'border-yellow-500 bg-yellow-500/10 shadow-lg shadow-yellow-500/25'
                        : 'border-[#23263A] bg-[#23263A] hover:border-yellow-500/50 hover:bg-yellow-500/5'
                    }`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${level.color} rounded-lg flex items-center justify-center mb-3`}>
                      <level.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="font-semibold text-white mb-1">{level.title}</div>
                    <div className="text-sm text-gray-400">{level.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Financial Goals Selection */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-300">
                What are your financial goals?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Save',
                    icon: PiggyBankIcon,
                    description: 'Build emergency fund and save for future',
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    title: 'Invest',
                    icon: CoinsIcon,
                    description: 'Grow wealth through investments',
                    color: 'from-blue-500 to-purple-500'
                  }
                ].map(goal => (
                  <button
                    key={goal.title}
                    onClick={() => setSelectedGoals(prev => 
                      prev.includes(goal.title) 
                        ? prev.filter(g => g !== goal.title) 
                        : [...prev, goal.title]
                    )}
                    className={`p-6 rounded-xl text-left transition-all duration-300 border-2 ${
                      selectedGoals.includes(goal.title)
                        ? 'border-yellow-500 bg-yellow-500/10 shadow-lg shadow-yellow-500/25'
                        : 'border-[#23263A] bg-[#23263A] hover:border-yellow-500/50 hover:bg-yellow-500/5'
                    }`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${goal.color} rounded-lg flex items-center justify-center mb-3`}>
                      <goal.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="font-semibold text-white mb-1">{goal.title}</div>
                    <div className="text-sm text-gray-400">{goal.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Spent Selection */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-300">
                How much time do you spend on finances weekly?
              </label>
              <div className="bg-[#23263A] rounded-xl p-6 border border-[#2A2F3A]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <TimerIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium mb-1">{timeSpent} hours per week</div>
                    <div className="text-sm text-gray-400">
                      {timeSpent <= 5 && 'Quick insights and essential tools'}
                      {timeSpent > 5 && timeSpent <= 10 && 'Balanced analytics and features'}
                      {timeSpent > 10 && 'Full access to all advanced features'}
                    </div>
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={timeSpent}
                  onChange={e => setTimeSpent(Number(e.target.value))}
                  className="w-full h-2 bg-[#1A1F2E] rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #F59E0B 0%, #F59E0B ${(timeSpent - 1) / 19 * 100}%, #374151 ${(timeSpent - 1) / 19 * 100}%, #374151 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>1h</span>
                  <span>10h</span>
                  <span>20h</span>
                </div>
              </div>
            </div>

            {/* Continue Button */}
            <div className="space-y-4">
              <button
                type="button"
                onClick={handleContinue}
                disabled={!selectedLevel || selectedGoals.length === 0}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold py-4 px-6 rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                Continue to Dashboard
                <ArrowRightIcon className="h-5 w-5" />
              </button>
              
              {/* Selection Status */}
              {(!selectedLevel || selectedGoals.length === 0) && (
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-2">Please complete your selections to continue:</div>
                  <div className="flex flex-col sm:flex-row gap-2 justify-center text-xs">
                    {!selectedLevel && (
                      <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full border border-red-500/30">
                        ⚠️ Select experience level
                      </span>
                    )}
                    {selectedGoals.length === 0 && (
                      <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full border border-red-500/30">
                        ⚠️ Select financial goals
                      </span>
                    )}
                  </div>
                </div>
              )}
              
              {/* Success Message */}
              {selectedLevel && selectedGoals.length > 0 && (
                <div className="text-center">
                  <div className="text-sm text-green-400 mb-2">✓ All selections complete!</div>
                  <div className="text-xs text-gray-400">
                    Experience: {selectedLevel} • Goals: {selectedGoals.join(', ')} • Time: {timeSpent}h/week
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};