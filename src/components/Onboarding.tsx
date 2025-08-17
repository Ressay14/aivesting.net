import React, { useState } from 'react';
import { TrendingUpIcon, BookOpenIcon, BriefcaseIcon, PiggyBankIcon, CoinsIcon, TimerIcon, ArrowRightIcon } from 'lucide-react';
interface OnboardingProps {
  onComplete?: () => void;
}
export const Onboarding = ({
  onComplete
}: OnboardingProps) => {
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [timeSpent, setTimeSpent] = useState(5);

  const handleContinue = () => {
    const onboardingData = {
      level: selectedLevel,
      goals: selectedGoals,
      timeSpent,
    };
    localStorage.setItem('aivesting_onboarding', JSON.stringify(onboardingData));
    if (onComplete) onComplete();
  };
  return <div className="bg-[#151822] rounded-xl p-8 shadow-lg space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Customize Your Experience</h2>
        <p className="text-gray-400">Help us tailor AIVesting to your needs</p>
      </div>
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-300">
          Select your experience level
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[{
          title: 'Beginner',
          icon: BookOpenIcon,
          description: 'New to investing'
        }, {
          title: 'Intermediate',
          icon: TrendingUpIcon,
          description: 'Some experience'
        }, {
          title: 'Expert',
          icon: BriefcaseIcon,
          description: 'Advanced trader'
        }].map(level => <button key={level.title} onClick={() => setSelectedLevel(level.title)} className={`p-4 rounded-lg text-left transition-all ${selectedLevel === level.title ? 'bg-yellow-500 text-black' : 'bg-[#1E2230] hover:bg-[#262B3D]'}`}>
              <level.icon className="h-6 w-6 mb-2" />
              <div className="font-medium">{level.title}</div>
              <div className="text-sm opacity-75">{level.description}</div>
            </button>)}
        </div>
      </div>
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-300">
          What are your financial goals?
        </label>
        <div className="grid grid-cols-2 gap-4">
          {[{
          title: 'Save',
          icon: PiggyBankIcon
        }, {
          title: 'Invest',
          icon: CoinsIcon
        }].map(goal => <button key={goal.title} onClick={() => setSelectedGoals(prev => prev.includes(goal.title) ? prev.filter(g => g !== goal.title) : [...prev, goal.title])} className={`p-4 rounded-lg flex items-center gap-3 transition-all ${selectedGoals.includes(goal.title) ? 'bg-yellow-500 text-black' : 'bg-[#1E2230] hover:bg-[#262B3D]'}`}>
              <goal.icon className="h-5 w-5" />
              {goal.title}
            </button>)}
        </div>
      </div>
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-300">
          How much time do you spend on finances weekly?
        </label>
        <div className="flex items-center gap-4">
          <TimerIcon className="h-5 w-5 text-gray-400" />
          <input type="range" min="1" max="20" value={timeSpent} onChange={e => setTimeSpent(Number(e.target.value))} className="w-full h-2 bg-[#1E2230] rounded-lg appearance-none cursor-pointer" />
          <span className="text-sm text-gray-400 w-20">{timeSpent} hours</span>
        </div>
      </div>
      <button type="button" onClick={handleContinue} className="w-full bg-yellow-500 text-black font-medium py-3 px-4 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2">
        Continue to Dashboard
        <ArrowRightIcon className="h-4 w-4" />
      </button>
    </div>;
};