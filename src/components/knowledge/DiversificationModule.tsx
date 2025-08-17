import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldIcon,
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
  BarChart3Icon,
  PieChartIcon,
  LayersIcon
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

export const DiversificationModule: React.FC = () => {
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
      title: 'What is Diversification?',
      content: (
        <div className="space-y-4">
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h3 className="font-bold text-blue-500 mb-2">Definition of Diversification</h3>
            <p className="text-gray-300">
              Diversification is the strategy of spreading your investments across different assets, sectors, or geographic regions to reduce risk. It's like not putting all your eggs in one basket.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#23263A] p-4 rounded-lg border border-red-500/30">
              <h4 className="font-bold text-red-500 mb-2 flex items-center gap-2">
                <XIcon className="h-5 w-5" />
                Not Diversified
              </h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>All money in one stock</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>All investments in tech sector</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Only domestic investments</span>
                </div>
              </div>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg border border-green-500/30">
              <h4 className="font-bold text-green-500 mb-2 flex items-center gap-2">
                <CheckIcon className="h-5 w-5" />
                Well Diversified
              </h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Multiple stocks across sectors</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Mix of stocks, bonds, ETFs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Domestic and international</span>
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
      title: 'Why Spread Your Investments?',
      content: (
        <div className="space-y-4">
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h3 className="font-bold text-green-500 mb-2">The Power of Diversification</h3>
            <p className="text-gray-300">
              When you diversify, you reduce the impact of any single investment's poor performance on your overall portfolio. If one investment goes down, others may go up or stay stable.
            </p>
          </div>
          
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h4 className="font-bold text-yellow-500 mb-3">Real Example</h4>
            <div className="space-y-4">
              <div className="bg-[#1E2230] p-4 rounded-lg">
                <h5 className="font-bold text-red-500 mb-2">Scenario: All in Tech (2000)</h5>
                <p className="text-sm text-gray-400 mb-2">If you invested €10,000 only in tech stocks during the dot-com bubble:</p>
                <div className="text-lg font-bold text-red-500">Result: Lost 80% = €2,000 remaining</div>
              </div>
              <div className="bg-[#1E2230] p-4 rounded-lg">
                <h5 className="font-bold text-green-500 mb-2">Scenario: Diversified Portfolio (2000)</h5>
                <p className="text-sm text-gray-400 mb-2">If you invested €10,000 across different sectors:</p>
                <div className="text-lg font-bold text-green-500">Result: Lost 20% = €8,000 remaining</div>
              </div>
            </div>
          </div>

          <div className="bg-[#23263A] p-4 rounded-lg">
            <h4 className="font-bold text-blue-500 mb-2">Key Benefits</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-300">Reduces portfolio volatility</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-300">Protects against single losses</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <TrendingUpIcon className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-300">Captures growth opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUpIcon className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-300">Improves risk-adjusted returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      type: 'content',
      title: 'Correlation Between Assets',
      content: (
        <div className="space-y-4">
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h3 className="font-bold text-purple-500 mb-2">Understanding Correlation</h3>
            <p className="text-gray-300">
              Correlation measures how two investments move in relation to each other. Perfect diversification means combining assets that don't move together.
            </p>
          </div>
          
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h4 className="font-bold text-yellow-500 mb-3">Correlation Examples</h4>
            <div className="space-y-4">
              <div className="bg-[#1E2230] p-4 rounded-lg border border-red-500/30">
                <h5 className="font-bold text-red-500 mb-2">High Correlation (+1.0)</h5>
                <p className="text-sm text-gray-400 mb-2">When one goes up, the other goes up</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-400">Tech stocks</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-gray-400">More tech stocks</span>
                </div>
                <div className="text-xs text-red-500 mt-2">Poor diversification</div>
              </div>
              <div className="bg-[#1E2230] p-4 rounded-lg border border-green-500/30">
                <h5 className="font-bold text-green-500 mb-2">Low Correlation (0.0)</h5>
                <p className="text-sm text-gray-400 mb-2">When one goes up, the other is unaffected</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-400">Stocks</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-gray-400">Bonds</span>
                </div>
                <div className="text-xs text-green-500 mt-2">Good diversification</div>
              </div>
              <div className="bg-[#1E2230] p-4 rounded-lg border border-blue-500/30">
                <h5 className="font-bold text-blue-500 mb-2">Negative Correlation (-1.0)</h5>
                <p className="text-sm text-gray-400 mb-2">When one goes up, the other goes down</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-400">Stocks</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-gray-400">Gold (sometimes)</span>
                </div>
                <div className="text-xs text-blue-500 mt-2">Excellent diversification</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      type: 'content',
      title: 'Portfolio Examples',
      content: (
        <div className="space-y-4">
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h3 className="font-bold text-blue-500 mb-2">Diversified Portfolio Examples</h3>
            <p className="text-gray-300">
              Here are some examples of well-diversified portfolios for different risk levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#23263A] p-4 rounded-lg border border-green-500/30">
              <h4 className="font-bold text-green-500 mb-3 flex items-center gap-2">
                <ShieldIcon className="h-5 w-5" />
                Conservative Portfolio
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Bonds:</span>
                  <span className="text-green-500 font-medium">60%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Large Cap Stocks:</span>
                  <span className="text-green-500 font-medium">30%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cash:</span>
                  <span className="text-green-500 font-medium">10%</span>
                </div>
                <div className="pt-2 border-t border-gray-700">
                  <div className="text-sm text-gray-400">Expected Return: 4-6%</div>
                  <div className="text-sm text-gray-400">Risk Level: Low</div>
                </div>
              </div>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg border border-yellow-500/30">
              <h4 className="font-bold text-yellow-500 mb-3 flex items-center gap-2">
                <BarChart3Icon className="h-5 w-5" />
                Balanced Portfolio
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Stocks:</span>
                  <span className="text-yellow-500 font-medium">60%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Bonds:</span>
                  <span className="text-yellow-500 font-medium">30%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Real Estate:</span>
                  <span className="text-yellow-500 font-medium">10%</span>
                </div>
                <div className="pt-2 border-t border-gray-700">
                  <div className="text-sm text-gray-400">Expected Return: 6-8%</div>
                  <div className="text-sm text-gray-400">Risk Level: Medium</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#23263A] p-4 rounded-lg">
            <h4 className="font-bold text-blue-500 mb-2">ETF Example</h4>
            <p className="text-gray-300 mb-3">
              ETFs (Exchange-Traded Funds) are excellent for diversification because they automatically spread your money across many investments.
            </p>
            <div className="bg-[#1E2230] p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <PieChartIcon className="h-5 w-5 text-blue-500" />
                <span className="font-medium text-white">Vanguard Total Stock Market ETF (VTI)</span>
              </div>
              <p className="text-sm text-gray-400">
                This single ETF gives you exposure to over 4,000 US stocks across all sectors and company sizes - instant diversification!
              </p>
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
      quizQuestion: 'What\'s the main benefit of diversification?',
      quizOptions: [
        { value: 'a', label: 'Reduce taxes', correct: false },
        { value: 'b', label: 'Reduce risk', correct: true },
        { value: 'c', label: 'Increase inflation', correct: false },
        { value: 'd', label: 'Increase debt', correct: false }
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
          completedModules: [...userProgress.completedModules, 'diversification'],
          totalXP: userProgress.totalXP + 100,
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
      completedModules: [...userProgress.completedModules, 'diversification'],
      totalXP: userProgress.totalXP + 100,
      level: Math.floor((userProgress.totalXP + 100) / 100) + 1,
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
              <h1 className="text-2xl font-bold text-white">Diversification</h1>
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
              <ShieldIcon className="h-8 w-8 text-black" />
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
                            ? 'Excellent! You understand that diversification is primarily about reducing risk by spreading investments.'
                            : 'The correct answer is "Reduce risk". Diversification helps reduce the overall risk of your portfolio.'
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
                            You've earned <span className="text-yellow-500 font-bold">100 XP</span> and completed the Diversification module!
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