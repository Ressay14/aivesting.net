import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3Icon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  XIcon,
  StarIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  DollarSignIcon,
  ClockIcon,
  BrainIcon,
  AwardIcon,
  PieChartIcon,
  CalendarIcon,
  UserIcon,
  ShieldIcon
} from 'lucide-react';

interface Flashcard {
  id: number;
  type: 'content' | 'quiz';
  title: string;
  content: React.ReactNode;
  quizQuestion?: string;
  quizOptions?: {
    value: string;
    label: string;
    correct: boolean;
  }[];
}

export const AssetAllocationModule: React.FC = () => {
  const navigate = useNavigate();
  const [currentCard, setCurrentCard] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [userProgress, setUserProgress] = useState<{
    completedModules: string[];
    totalXP: number;
    streak: number;
    level: number;
  }>({
    completedModules: [],
    totalXP: 0,
    streak: 0,
    level: 1
  });

  useEffect(() => {
    // Load user progress
    const savedProgress = localStorage.getItem('finance_mastery_progress');
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, []);

  const flashcards: Flashcard[] = [
    {
      id: 1,
      type: 'content',
      title: 'What is Asset Allocation?',
      content: (
        <div className="space-y-4">
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h3 className="font-bold text-blue-500 mb-2">Definition of Asset Allocation</h3>
            <p className="text-gray-300">
              Asset allocation is the strategy of dividing your investment portfolio among different asset categories like stocks, bonds, and cash. It's one of the most important decisions you'll make as an investor.
            </p>
          </div>
          
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h4 className="font-bold text-yellow-500 mb-3">Why Asset Allocation Matters</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                  <PieChartIcon className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <div className="font-medium text-white">Portfolio Balance</div>
                  <div className="text-sm text-gray-400">Ensures your portfolio isn't too concentrated in one area</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-500/10 p-2 rounded-lg">
                  <ShieldIcon className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <div className="font-medium text-white">Risk Management</div>
                  <div className="text-sm text-gray-400">Helps control the level of risk you're taking</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-500/10 p-2 rounded-lg">
                  <TrendingUpIcon className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <div className="font-medium text-white">Return Optimization</div>
                  <div className="text-sm text-gray-400">Aims to maximize returns for your risk tolerance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      type: 'content',
      title: 'Role of Time Horizon',
      content: (
        <div className="space-y-4">
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h3 className="font-bold text-green-500 mb-2">Time Horizon Impact</h3>
            <p className="text-gray-300">
              Your time horizon - how long you plan to invest - is crucial in determining your asset allocation. Longer time horizons generally allow for more aggressive allocations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#23263A] p-4 rounded-lg border border-green-500/30">
              <h4 className="font-bold text-green-500 mb-3 flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                Long Time Horizon (20+ years)
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Stocks:</span>
                  <span className="text-green-500 font-medium">80-90%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Bonds:</span>
                  <span className="text-green-500 font-medium">10-20%</span>
                </div>
                <div className="pt-2 border-t border-gray-700">
                  <div className="text-sm text-gray-400">Can weather market volatility</div>
                  <div className="text-sm text-gray-400">Higher growth potential</div>
                </div>
              </div>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg border border-yellow-500/30">
              <h4 className="font-bold text-yellow-500 mb-3 flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                Short Time Horizon (1-5 years)
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Stocks:</span>
                  <span className="text-yellow-500 font-medium">20-40%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Bonds:</span>
                  <span className="text-yellow-500 font-medium">60-80%</span>
                </div>
                <div className="pt-2 border-t border-gray-700">
                  <div className="text-sm text-gray-400">Protect against short-term losses</div>
                  <div className="text-sm text-gray-400">More stable returns</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#23263A] p-4 rounded-lg">
            <h4 className="font-bold text-blue-500 mb-2">Key Principle</h4>
            <p className="text-gray-300">
              <strong>Young investors</strong> can afford to be more aggressive (more stocks) because they have time to recover from market downturns. <strong>Older investors</strong> approaching retirement should be more conservative (more bonds) to protect their savings.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      type: 'content',
      title: 'Role of Risk Profile',
      content: (
        <div className="space-y-4">
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h3 className="font-bold text-purple-500 mb-2">Understanding Risk Profile</h3>
            <p className="text-gray-300">
              Your risk profile reflects how comfortable you are with investment volatility and potential losses. It's a personal preference that should guide your asset allocation decisions.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-[#23263A] p-4 rounded-lg border border-green-500/30">
              <h4 className="font-bold text-green-500 mb-3 flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                Conservative Investor
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Stocks:</span>
                  <span className="text-green-500 font-medium">20-30%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Bonds:</span>
                  <span className="text-green-500 font-medium">60-70%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cash:</span>
                  <span className="text-green-500 font-medium">10%</span>
                </div>
                <div className="pt-2 border-t border-gray-700">
                  <div className="text-sm text-gray-400">Prefers stability over growth</div>
                  <div className="text-sm text-gray-400">Can't tolerate large losses</div>
                </div>
              </div>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg border border-yellow-500/30">
              <h4 className="font-bold text-yellow-500 mb-3 flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                Moderate Investor
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Stocks:</span>
                  <span className="text-yellow-500 font-medium">50-60%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Bonds:</span>
                  <span className="text-yellow-500 font-medium">30-40%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cash:</span>
                  <span className="text-yellow-500 font-medium">5-10%</span>
                </div>
                <div className="pt-2 border-t border-gray-700">
                  <div className="text-sm text-gray-400">Balances growth and stability</div>
                  <div className="text-sm text-gray-400">Can handle moderate volatility</div>
                </div>
              </div>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg border border-red-500/30">
              <h4 className="font-bold text-red-500 mb-3 flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                Aggressive Investor
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Stocks:</span>
                  <span className="text-red-500 font-medium">80-90%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Bonds:</span>
                  <span className="text-red-500 font-medium">10-20%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cash:</span>
                  <span className="text-red-500 font-medium">0-5%</span>
                </div>
                <div className="pt-2 border-t border-gray-700">
                  <div className="text-sm text-gray-400">Seeks maximum growth</div>
                  <div className="text-sm text-gray-400">Can handle high volatility</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      type: 'content',
      title: 'Example Allocations',
      content: (
        <div className="space-y-4">
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h3 className="font-bold text-blue-500 mb-2">Popular Asset Allocation Models</h3>
            <p className="text-gray-300">
              Here are some well-known asset allocation strategies that have stood the test of time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#23263A] p-4 rounded-lg border border-blue-500/30">
              <h4 className="font-bold text-blue-500 mb-3">60/40 Portfolio</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Stocks:</span>
                  <span className="text-blue-500 font-medium">60%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Bonds:</span>
                  <span className="text-blue-500 font-medium">40%</span>
                </div>
                <div className="pt-2 border-t border-gray-700">
                  <div className="text-sm text-gray-400">Classic balanced approach</div>
                  <div className="text-sm text-gray-400">Good for moderate investors</div>
                  <div className="text-sm text-gray-400">Rebalanced annually</div>
                </div>
              </div>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg border border-green-500/30">
              <h4 className="font-bold text-green-500 mb-3">80/20 Portfolio</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Stocks:</span>
                  <span className="text-green-500 font-medium">80%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Bonds:</span>
                  <span className="text-green-500 font-medium">20%</span>
                </div>
                <div className="pt-2 border-t border-gray-700">
                  <div className="text-sm text-gray-400">Growth-oriented approach</div>
                  <div className="text-sm text-gray-400">Good for long-term investors</div>
                  <div className="text-sm text-gray-400">Higher potential returns</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#23263A] p-4 rounded-lg">
            <h4 className="font-bold text-yellow-500 mb-2">Age-Based Rule of Thumb</h4>
            <div className="space-y-3">
              <div className="bg-[#1E2230] p-3 rounded-lg">
                <div className="text-sm text-gray-400">Percentage in Bonds = Your Age</div>
                <div className="text-sm text-gray-400">Percentage in Stocks = 100 - Your Age</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#1E2230] p-3 rounded-lg">
                  <div className="text-sm text-gray-400">Age 25:</div>
                  <div className="text-white font-medium">25% Bonds, 75% Stocks</div>
                </div>
                <div className="bg-[#1E2230] p-3 rounded-lg">
                  <div className="text-sm text-gray-400">Age 50:</div>
                  <div className="text-white font-medium">50% Bonds, 50% Stocks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      type: 'quiz',
      title: 'Knowledge Check',
      content: <div>Quiz content will be rendered separately</div>,
      quizQuestion: 'What\'s the main factor to consider in asset allocation?',
      quizOptions: [
        { value: 'a', label: 'Your favorite stock', correct: false },
        { value: 'b', label: 'Time horizon & risk', correct: true },
        { value: 'c', label: 'Amount of taxes', correct: false },
        { value: 'd', label: 'Your friends\' portfolio', correct: false }
      ]
    }
  ];

  const currentFlashcard = flashcards[currentCard];
  const isLastCard = currentCard === flashcards.length - 1;
  const isQuizCard = currentFlashcard.type === 'quiz';

  const handleNext = () => {
    if (isQuizCard && !showResult) {
      // Handle quiz submission
      const correctAnswer = currentFlashcard.quizOptions?.find(option => option.correct);
      const isAnswerCorrect = selectedAnswer === correctAnswer?.value;
      
      setIsCorrect(isAnswerCorrect);
      setShowResult(true);
      
      if (isAnswerCorrect) {
        // Mark module as completed
        const updatedProgress = {
          ...userProgress,
          completedModules: [...userProgress.completedModules, 'asset-allocation'],
          totalXP: userProgress.totalXP + 125,
          streak: userProgress.streak + 1
        };
        
        setUserProgress(updatedProgress);
        localStorage.setItem('finance_mastery_progress', JSON.stringify(updatedProgress));
        setIsCompleted(true);
      }
    } else if (currentCard < flashcards.length - 1) {
      setCurrentCard(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handlePrevious = () => {
    if (currentCard > 0) {
      setCurrentCard(prev => prev - 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleAnswerSelect = (answer: string) => {
    if (!showResult) {
      setSelectedAnswer(answer);
    }
  };

  const handleComplete = () => {
    // Save progress to localStorage
    const updatedProgress = {
      ...userProgress,
      completedModules: [...userProgress.completedModules, 'asset-allocation'],
      totalXP: userProgress.totalXP + 125,
      level: Math.floor((userProgress.totalXP + 125) / 100) + 1,
      lastCompletedDate: new Date().toISOString()
    };
    
    localStorage.setItem('finance_mastery_progress', JSON.stringify(updatedProgress));
    setUserProgress(updatedProgress);
    
    navigate('/knowledge/roadmap');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0E15] via-[#181C2A] to-[#23263A] p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-700/20 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '15s'}}></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '20s'}}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/knowledge/roadmap')}
              className="p-2 bg-[#23263A] rounded-lg hover:bg-[#1E2230] transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 text-gray-400" />
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className="px-3 py-2 bg-[#1E2230] hover:bg-[#23263A] text-gray-400 hover:text-white rounded-lg transition-colors text-sm"
            >
              Back to Dashboard
            </button>
            <div>
              <h1 className="text-2xl font-bold text-white">Asset Allocation</h1>
              <p className="text-gray-400">Investor IQ Track</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm text-gray-400">Progress</div>
              <div className="text-lg font-bold text-yellow-500">
                {currentCard + 1} / {flashcards.length}
              </div>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center">
              <BarChart3Icon className="h-8 w-8 text-black" />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-[#23263A] rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentCard + 1) / flashcards.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Flashcard */}
        <div className="bg-[#151822]/90 backdrop-blur-md rounded-2xl border border-gray-800/30 shadow-2xl p-8 mb-8 animate-fadeIn">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">{currentFlashcard.title}</h2>
            {isQuizCard && (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                <BrainIcon className="h-4 w-4" />
                Knowledge Check
              </div>
            )}
          </div>

          {/* Content */}
          <div className="mb-8">
            {isQuizCard ? (
              <div className="space-y-4">
                <div className="bg-[#23263A] p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-4">
                    {currentFlashcard.quizQuestion}
                  </h3>
                  
                  {!showResult ? (
                    <div className="space-y-3">
                      {currentFlashcard.quizOptions?.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleAnswerSelect(option.value)}
                          className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                            selectedAnswer === option.value
                              ? 'border-yellow-500 bg-yellow-500/10'
                              : 'border-gray-700 bg-[#1E2230] hover:border-gray-600'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              selectedAnswer === option.value
                                ? 'border-yellow-500 bg-yellow-500'
                                : 'border-gray-600'
                            }`}>
                              {selectedAnswer === option.value && (
                                <CheckIcon className="h-3 w-3 text-black" />
                              )}
                            </div>
                            <span className="text-white">{option.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className={`p-4 rounded-lg border-2 ${
                        isCorrect 
                          ? 'border-green-500 bg-green-500/10' 
                          : 'border-red-500 bg-red-500/10'
                      }`}>
                        <div className="flex items-center gap-3 mb-2">
                          {isCorrect ? (
                            <CheckIcon className="h-6 w-6 text-green-500" />
                          ) : (
                            <XIcon className="h-6 w-6 text-red-500" />
                          )}
                          <span className={`font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                            {isCorrect ? 'Correct!' : 'Incorrect'}
                          </span>
                        </div>
                        <p className="text-gray-300">
                          {isCorrect 
                            ? 'Perfect! You understand that time horizon and risk tolerance are the key factors in determining asset allocation.'
                            : 'The correct answer is "Time horizon & risk". These are the primary factors that should guide your asset allocation decisions.'
                          }
                        </p>
                      </div>
                      
                      {isCorrect && (
                        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 p-4 rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <StarIcon className="h-6 w-6 text-yellow-500" />
                            <span className="font-bold text-white">Congratulations!</span>
                          </div>
                          <p className="text-gray-300">
                            You've earned <span className="text-yellow-500 font-bold">125 XP</span> and completed the Asset Allocation module!
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-gray-300">
                {currentFlashcard.content}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentCard === 0}
              className={`px-6 py-2 rounded-lg transition-colors ${
                currentCard === 0
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-[#23263A] text-white hover:bg-[#1E2230]'
              }`}
            >
              Previous
            </button>

            {isQuizCard && showResult ? (
              <button
                onClick={handleComplete}
                className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black rounded-lg font-medium hover:from-yellow-400 hover:to-yellow-300 transition-all duration-200"
              >
                Continue to Roadmap
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={isQuizCard && !selectedAnswer}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  isQuizCard && !selectedAnswer
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-black hover:from-yellow-400 hover:to-yellow-300'
                }`}
              >
                {isLastCard ? 'Complete Quiz' : 'Next'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}; 