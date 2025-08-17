import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  TargetIcon,
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
  AlertTriangleIcon,
  BarChart3Icon
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

export const RiskReturnModule: React.FC = () => {
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
      title: 'What is Risk?',
      content: (
        <div className="space-y-4">
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h3 className="font-bold text-red-500 mb-2">Definition of Risk</h3>
            <p className="text-gray-300">
              Risk is the possibility of losing money on an investment. It's the uncertainty about whether you'll get back what you invested, or potentially lose some or all of it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#23263A] p-4 rounded-lg">
              <h4 className="font-bold text-red-500 mb-2">High Risk Examples</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <TrendingDownIcon className="h-4 w-4 text-red-500" />
                  <span>Individual stocks</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingDownIcon className="h-4 w-4 text-red-500" />
                  <span>Cryptocurrencies</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingDownIcon className="h-4 w-4 text-red-500" />
                  <span>Startup investments</span>
                </div>
              </div>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg">
              <h4 className="font-bold text-green-500 mb-2">Low Risk Examples</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <TrendingUpIcon className="h-4 w-4 text-green-500" />
                  <span>Government bonds</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUpIcon className="h-4 w-4 text-green-500" />
                  <span>Savings accounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUpIcon className="h-4 w-4 text-green-500" />
                  <span>CDs (Certificates of Deposit)</span>
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
      title: 'What is Return?',
      content: (
        <div className="space-y-4">
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h3 className="font-bold text-green-500 mb-2">Definition of Return</h3>
            <p className="text-gray-300">
              Return is the profit or loss you make on an investment. It's usually expressed as a percentage of your original investment amount.
            </p>
          </div>
          
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h4 className="font-bold text-yellow-500 mb-3">Return Formula</h4>
            <div className="bg-[#1E2230] p-4 rounded-lg">
              <div className="text-center text-lg font-mono">
                <div className="text-green-500">Return = (Final Value - Initial Investment) / Initial Investment × 100%</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#23263A] p-4 rounded-lg">
              <h4 className="font-bold text-green-500 mb-2">Positive Return Example</h4>
              <p className="text-sm text-gray-400 mb-2">You invest €1,000 in a stock</p>
              <p className="text-sm text-gray-400 mb-2">After 1 year, it's worth €1,200</p>
              <div className="text-lg font-bold text-green-500">
                Return = (€1,200 - €1,000) / €1,000 × 100% = +20%
              </div>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg">
              <h4 className="font-bold text-red-500 mb-2">Negative Return Example</h4>
              <p className="text-sm text-gray-400 mb-2">You invest €1,000 in a stock</p>
              <p className="text-sm text-gray-400 mb-2">After 1 year, it's worth €800</p>
              <div className="text-lg font-bold text-red-500">
                Return = (€800 - €1,000) / €1,000 × 100% = -20%
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      type: 'content',
      title: 'The Risk-Return Trade-off',
      content: (
        <div className="space-y-4">
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h3 className="font-bold text-yellow-500 mb-2">The Fundamental Principle</h3>
            <p className="text-gray-300">
              Generally, higher potential returns come with higher risk. Lower risk investments typically offer lower potential returns.
            </p>
          </div>
          
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h4 className="font-bold text-blue-500 mb-3">Risk-Return Spectrum</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-[#1E2230] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-white">Savings Account</span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Low Risk</div>
                  <div className="text-sm text-green-500">1-2% Return</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#1E2230] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span className="text-white">Bonds</span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Medium Risk</div>
                  <div className="text-sm text-yellow-500">3-5% Return</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#1E2230] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <span className="text-white">Stock Market</span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Higher Risk</div>
                  <div className="text-sm text-orange-500">7-10% Return</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#1E2230] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-white">Individual Stocks</span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">High Risk</div>
                  <div className="text-sm text-red-500">Variable Return</div>
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
      title: 'Real-Life Example: Stocks vs Bonds',
      content: (
        <div className="space-y-4">
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h3 className="font-bold text-blue-500 mb-2">Comparing Investment Options</h3>
            <p className="text-gray-300">
              Let's compare two common investment types to see the risk-return trade-off in action.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#23263A] p-4 rounded-lg border border-green-500/30">
              <h4 className="font-bold text-green-500 mb-3 flex items-center gap-2">
                <BarChart3Icon className="h-5 w-5" />
                Government Bonds
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Risk Level:</span>
                  <span className="text-green-500 font-medium">Low</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Expected Return:</span>
                  <span className="text-green-500 font-medium">3-5% annually</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Volatility:</span>
                  <span className="text-green-500 font-medium">Low</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Best For:</span>
                  <span className="text-green-500 font-medium">Conservative investors</span>
                </div>
              </div>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg border border-orange-500/30">
              <h4 className="font-bold text-orange-500 mb-3 flex items-center gap-2">
                <TrendingUpIcon className="h-5 w-5" />
                Stock Market (S&P 500)
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Risk Level:</span>
                  <span className="text-orange-500 font-medium">Medium-High</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Expected Return:</span>
                  <span className="text-orange-500 font-medium">7-10% annually</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Volatility:</span>
                  <span className="text-orange-500 font-medium">High</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Best For:</span>
                  <span className="text-orange-500 font-medium">Growth investors</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#23263A] p-4 rounded-lg">
            <h4 className="font-bold text-yellow-500 mb-2">Key Takeaway</h4>
            <p className="text-gray-300">
              <strong>Bonds</strong> offer stability but lower returns, while <strong>stocks</strong> offer higher potential returns but come with more risk and volatility. Your choice depends on your risk tolerance and investment goals.
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
      quizQuestion: 'What does high return usually mean?',
      quizOptions: [
        { value: 'a', label: 'Low risk', correct: false },
        { value: 'b', label: 'High risk', correct: true },
        { value: 'c', label: 'No risk', correct: false },
        { value: 'd', label: 'Guaranteed gain', correct: false }
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
          completedModules: [...userProgress.completedModules, 'risk-return'],
          totalXP: userProgress.totalXP + 75,
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
      completedModules: [...userProgress.completedModules, 'risk-return'],
      totalXP: userProgress.totalXP + 75,
      level: Math.floor((userProgress.totalXP + 75) / 100) + 1,
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
              <h1 className="text-2xl font-bold text-white">Risk vs Return</h1>
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
              <TargetIcon className="h-8 w-8 text-black" />
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
                            ? 'Great job! You understand that higher returns typically come with higher risk.'
                            : 'The correct answer is "High risk". Generally, investments with higher potential returns also carry higher risk.'
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
                            You've earned <span className="text-yellow-500 font-bold">75 XP</span> and completed the Risk vs Return module!
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