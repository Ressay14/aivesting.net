import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CalculatorIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  XIcon,
  StarIcon,
  TargetIcon,
  TrendingUpIcon,
  DollarSignIcon,
  ClockIcon,
  BrainIcon,
  AwardIcon
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

export const CompoundInterestModule: React.FC = () => {
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
      title: 'What is Compound Interest?',
      content: (
        <div className="space-y-4">
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h3 className="font-bold text-yellow-500 mb-2">Simple Definition</h3>
            <p className="text-gray-300">
              Compound interest is when you earn interest not only on your original investment, 
              but also on the interest you've already earned.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#23263A] p-4 rounded-lg">
              <h4 className="font-bold text-green-500 mb-2">Simple Interest</h4>
              <p className="text-sm text-gray-400">
                You earn interest only on your original amount
              </p>
              <div className="text-lg font-bold text-green-500 mt-2">€100 → €110</div>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg">
              <h4 className="font-bold text-blue-500 mb-2">Compound Interest</h4>
              <p className="text-sm text-gray-400">
                You earn interest on your original amount PLUS previous interest
              </p>
              <div className="text-lg font-bold text-blue-500 mt-2">€100 → €121</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      type: 'content',
      title: 'The Power of Time',
      content: (
        <div className="space-y-4">
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h3 className="font-bold text-yellow-500 mb-4">Why Starting Early Matters</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-[#1E2230] rounded">
                <span className="text-gray-300">Starting at 25:</span>
                <span className="font-bold text-green-500">€100,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#1E2230] rounded">
                <span className="text-gray-300">Starting at 35:</span>
                <span className="font-bold text-yellow-500">€50,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#1E2230] rounded">
                <span className="text-gray-300">Starting at 45:</span>
                <span className="font-bold text-red-500">€25,000</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              <strong>Key Insight:</strong> The earlier you start, the more time your money has to grow exponentially.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      type: 'content',
      title: 'The Rule of 72',
      content: (
        <div className="space-y-4">
          <div className="bg-[#23263A] p-4 rounded-lg text-center">
            <h3 className="font-bold text-yellow-500 mb-4">Quick Calculation Trick</h3>
            <div className="text-4xl font-bold text-blue-500 mb-4">72 ÷ Rate = Years to Double</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-[#1E2230] p-4 rounded">
                <div className="text-2xl font-bold text-green-500">6%</div>
                <div className="text-sm text-gray-400">Interest Rate</div>
                <div className="text-lg font-bold text-white mt-2">12 Years</div>
                <div className="text-xs text-gray-400">to double money</div>
              </div>
              <div className="bg-[#1E2230] p-4 rounded">
                <div className="text-2xl font-bold text-blue-500">8%</div>
                <div className="text-sm text-gray-400">Interest Rate</div>
                <div className="text-lg font-bold text-white mt-2">9 Years</div>
                <div className="text-xs text-gray-400">to double money</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      type: 'content',
      title: 'Real-World Example',
      content: (
        <div className="space-y-4">
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h3 className="font-bold text-yellow-500 mb-4">Sarah's Investment Journey</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-[#1E2230] rounded">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <div className="font-medium text-white">Age 25: Invests €1,000</div>
                  <div className="text-sm text-gray-400">At 7% annual return</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#1E2230] rounded">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <div className="font-medium text-white">Age 35: €1,967</div>
                  <div className="text-sm text-gray-400">Money nearly doubled</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#1E2230] rounded">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <div className="font-medium text-white">Age 65: €14,974</div>
                  <div className="text-sm text-gray-400">15x her original investment!</div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              <strong>Lesson:</strong> Small amounts invested early can grow into significant wealth over time.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      type: 'quiz',
      title: 'Knowledge Check',
      content: <div>Quiz content will be rendered separately</div>,
      quizQuestion: 'If you invest €1,000 at 8% annual interest, how long will it take to double your money using the Rule of 72?',
      quizOptions: [
        { value: 'a', label: '6 years', correct: false },
        { value: 'b', label: '9 years', correct: true },
        { value: 'c', label: '12 years', correct: false },
        { value: 'd', label: '18 years', correct: false }
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
          completedModules: [...userProgress.completedModules, 'compound-interest'],
          totalXP: userProgress.totalXP + 50,
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
      completedModules: [...userProgress.completedModules, 'compound-interest'],
      totalXP: userProgress.totalXP + 50,
      level: Math.floor((userProgress.totalXP + 50) / 100) + 1,
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
              <h1 className="text-2xl font-bold text-white">Compound Interest</h1>
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
              <CalculatorIcon className="h-8 w-8 text-black" />
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
                      {currentFlashcard.quizOptions?.map((option) => (
                        <div
                          key={option.value}
                          className={`p-4 rounded-lg border-2 ${
                            option.correct
                              ? 'border-green-500 bg-green-500/10'
                              : selectedAnswer === option.value
                              ? 'border-red-500 bg-red-500/10'
                              : 'border-gray-700 bg-[#1E2230]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              option.correct
                                ? 'border-green-500 bg-green-500'
                                : selectedAnswer === option.value
                                ? 'border-red-500 bg-red-500'
                                : 'border-gray-600'
                            }`}>
                              {option.correct ? (
                                <CheckIcon className="h-3 w-3 text-white" />
                              ) : selectedAnswer === option.value ? (
                                <XIcon className="h-3 w-3 text-white" />
                              ) : null}
                            </div>
                            <span className="text-white">{option.label}</span>
                            {option.correct && (
                              <span className="ml-auto text-green-500 font-medium">Correct!</span>
                            )}
                          </div>
                        </div>
                      ))}
                      
                      <div className={`p-4 rounded-lg ${
                        isCorrect ? 'bg-green-500/10 border border-green-500' : 'bg-red-500/10 border border-red-500'
                      }`}>
                        <div className="flex items-center gap-2 mb-2">
                          {isCorrect ? (
                            <CheckIcon className="h-5 w-5 text-green-500" />
                          ) : (
                            <XIcon className="h-5 w-5 text-red-500" />
                          )}
                          <span className={`font-medium ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                            {isCorrect ? 'Great job!' : 'Not quite right'}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          {isCorrect 
                            ? 'You understand compound interest! The Rule of 72 shows that 72 ÷ 8 = 9 years to double your money.'
                            : 'The correct answer is 9 years. Using the Rule of 72: 72 ÷ 8 = 9 years to double your money.'
                          }
                        </p>
                      </div>
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
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                currentCard === 0
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-[#23263A] text-white hover:bg-[#1E2230] hover:scale-105'
              }`}
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Previous
            </button>

            {isCompleted ? (
              <button
                onClick={handleComplete}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-400 text-white font-medium rounded-lg hover:from-green-400 hover:to-green-300 transition-all flex items-center gap-2"
              >
                <span>Complete Module</span>
                <AwardIcon className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={isQuizCard && !selectedAnswer}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  isQuizCard && !selectedAnswer
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-black hover:from-yellow-400 hover:to-yellow-300 hover:scale-105'
                }`}
              >
                {isQuizCard && !showResult ? (
                  <>
                    <span>Check Answer</span>
                    <BrainIcon className="h-4 w-4" />
                  </>
                ) : isLastCard ? (
                  <>
                    <span>Finish</span>
                    <StarIcon className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    <span>Next</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* XP Reward */}
        {isCompleted && (
          <div className="bg-[#151822]/90 backdrop-blur-md rounded-xl border border-green-500/30 p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AwardIcon className="h-8 w-8 text-green-500" />
              <h3 className="text-xl font-bold text-white">Module Completed!</h3>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <div className="text-2xl font-bold text-yellow-500">+50 XP</div>
                <div className="text-sm text-gray-400">Earned</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-500">+1</div>
                <div className="text-sm text-gray-400">Day Streak</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-500">1/5</div>
                <div className="text-sm text-gray-400">Modules Done</div>
              </div>
            </div>
            <p className="text-gray-400">
              Great work! You now understand the power of compound interest. 
              Ready to learn about Risk vs Return?
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}; 