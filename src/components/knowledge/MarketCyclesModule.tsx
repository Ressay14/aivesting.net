import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUpIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  XIcon,
  StarIcon,
  TrendingDownIcon,
  DollarSignIcon,
  ClockIcon,
  BrainIcon,
  AwardIcon,
  BarChart3Icon,
  RefreshCwIcon,
  ActivityIcon,
  AlertTriangleIcon
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

export const MarketCyclesModule: React.FC = () => {
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
      title: 'Market Cycle Phases',
      content: (
        <div className="space-y-4">
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h3 className="font-bold text-blue-500 mb-2">The Four Phases of Market Cycles</h3>
            <p className="text-gray-300">
              Markets move in cycles with four distinct phases. Understanding these phases can help you make better investment decisions.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-[#23263A] p-4 rounded-lg border border-green-500/30">
              <h4 className="font-bold text-green-500 mb-3 flex items-center gap-2">
                <TrendingUpIcon className="h-5 w-5" />
                Phase 1: Expansion
              </h4>
              <div className="space-y-2">
                <div className="text-sm text-gray-400">• Economic growth is strong</div>
                <div className="text-sm text-gray-400">• Corporate profits are rising</div>
                <div className="text-sm text-gray-400">• Stock prices are climbing</div>
                <div className="text-sm text-gray-400">• Unemployment is low</div>
                <div className="text-sm text-green-500 font-medium">Investor sentiment: Optimistic</div>
              </div>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg border border-yellow-500/30">
              <h4 className="font-bold text-yellow-500 mb-3 flex items-center gap-2">
                <ActivityIcon className="h-5 w-5" />
                Phase 2: Peak
              </h4>
              <div className="space-y-2">
                <div className="text-sm text-gray-400">• Growth starts to slow</div>
                <div className="text-sm text-gray-400">• Inflation may be rising</div>
                <div className="text-sm text-gray-400">• Markets reach all-time highs</div>
                <div className="text-sm text-gray-400">• Euphoria and overconfidence</div>
                <div className="text-sm text-yellow-500 font-medium">Investor sentiment: Euphoric</div>
              </div>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg border border-red-500/30">
              <h4 className="font-bold text-red-500 mb-3 flex items-center gap-2">
                <TrendingDownIcon className="h-5 w-5" />
                Phase 3: Recession
              </h4>
              <div className="space-y-2">
                <div className="text-sm text-gray-400">• Economic activity contracts</div>
                <div className="text-sm text-gray-400">• Corporate profits decline</div>
                <div className="text-sm text-gray-400">• Stock prices fall significantly</div>
                <div className="text-sm text-gray-400">• Unemployment rises</div>
                <div className="text-sm text-red-500 font-medium">Investor sentiment: Fearful</div>
              </div>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg border border-blue-500/30">
              <h4 className="font-bold text-blue-500 mb-3 flex items-center gap-2">
                <RefreshCwIcon className="h-5 w-5" />
                Phase 4: Recovery
              </h4>
              <div className="space-y-2">
                <div className="text-sm text-gray-400">• Economic activity begins to improve</div>
                <div className="text-sm text-gray-400">• Corporate profits start to recover</div>
                <div className="text-sm text-gray-400">• Stock prices begin to rise</div>
                <div className="text-sm text-gray-400">• Unemployment starts to decline</div>
                <div className="text-sm text-blue-500 font-medium">Investor sentiment: Cautious</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      type: 'content',
      title: 'Investor Behavior in Cycles',
      content: (
        <div className="space-y-4">
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h3 className="font-bold text-purple-500 mb-2">The Psychology of Market Cycles</h3>
            <p className="text-gray-300">
              Investor behavior often follows predictable patterns during market cycles, which can create opportunities for disciplined investors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#23263A] p-4 rounded-lg border border-red-500/30">
              <h4 className="font-bold text-red-500 mb-3">Common Mistakes</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-medium text-white">Buying at the Peak</div>
                    <div className="text-xs text-gray-400">Investing when everyone is euphoric</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-medium text-white">Selling at the Bottom</div>
                    <div className="text-xs text-gray-400">Panic selling during market crashes</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-medium text-white">Following the Crowd</div>
                    <div className="text-xs text-gray-400">Making decisions based on emotions</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg border border-green-500/30">
              <h4 className="font-bold text-green-500 mb-3">Smart Strategies</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-medium text-white">Dollar-Cost Averaging</div>
                    <div className="text-xs text-gray-400">Investing regularly regardless of market conditions</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-medium text-white">Buying the Dip</div>
                    <div className="text-xs text-gray-400">Adding to positions when prices are low</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-medium text-white">Staying Disciplined</div>
                    <div className="text-xs text-gray-400">Sticking to your long-term plan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#23263A] p-4 rounded-lg">
            <h4 className="font-bold text-yellow-500 mb-2">Key Insight</h4>
            <p className="text-gray-300">
              <strong>Contrarian investing</strong> - going against the crowd - can be profitable. When everyone is fearful (recession), it might be a good time to buy. When everyone is euphoric (peak), it might be time to be cautious.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      type: 'content',
      title: 'Market Indicators',
      content: (
        <div className="space-y-4">
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h3 className="font-bold text-blue-500 mb-2">Economic Indicators to Watch</h3>
            <p className="text-gray-300">
              These indicators can help you understand where we are in the market cycle and make informed investment decisions.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-[#23263A] p-4 rounded-lg">
              <h4 className="font-bold text-green-500 mb-3 flex items-center gap-2">
                <BarChart3Icon className="h-5 w-5" />
                GDP Growth Rate
              </h4>
              <div className="space-y-2">
                <div className="text-sm text-gray-400">• Measures economic growth</div>
                <div className="text-sm text-gray-400">• Strong GDP = expansion phase</div>
                <div className="text-sm text-gray-400">• Declining GDP = recession phase</div>
                <div className="text-sm text-green-500 font-medium">Watch for: Quarterly reports</div>
              </div>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg">
              <h4 className="font-bold text-yellow-500 mb-3 flex items-center gap-2">
                <ActivityIcon className="h-5 w-5" />
                Inflation Rate
              </h4>
              <div className="space-y-2">
                <div className="text-sm text-gray-400">• Measures price increases</div>
                <div className="text-sm text-gray-400">• High inflation = peak phase</div>
                <div className="text-sm text-gray-400">• Low inflation = recovery phase</div>
                <div className="text-sm text-yellow-500 font-medium">Watch for: CPI reports</div>
              </div>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg">
              <h4 className="font-bold text-blue-500 mb-3 flex items-center gap-2">
                <TrendingUpIcon className="h-5 w-5" />
                Unemployment Rate
              </h4>
              <div className="space-y-2">
                <div className="text-sm text-gray-400">• Measures job market health</div>
                <div className="text-sm text-gray-400">• Low unemployment = expansion</div>
                <div className="text-sm text-gray-400">• High unemployment = recession</div>
                <div className="text-sm text-blue-500 font-medium">Watch for: Monthly jobs report</div>
              </div>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg">
              <h4 className="font-bold text-purple-500 mb-3 flex items-center gap-2">
                <DollarSignIcon className="h-5 w-5" />
                Interest Rates
              </h4>
              <div className="space-y-2">
                <div className="text-sm text-gray-400">• Set by central banks</div>
                <div className="text-sm text-gray-400">• Low rates = expansion</div>
                <div className="text-sm text-gray-400">• High rates = peak/recession</div>
                <div className="text-sm text-purple-500 font-medium">Watch for: Fed announcements</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      type: 'content',
      title: 'Market Timing Risks',
      content: (
        <div className="space-y-4">
          <div className="bg-[#23263A] p-4 rounded-lg">
            <h3 className="font-bold text-red-500 mb-2">The Dangers of Market Timing</h3>
            <p className="text-gray-300">
              Trying to predict market movements and time your investments perfectly is extremely difficult and often counterproductive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#23263A] p-4 rounded-lg border border-red-500/30">
              <h4 className="font-bold text-red-500 mb-3">Why Market Timing Fails</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-medium text-white">Emotional Decisions</div>
                    <div className="text-xs text-gray-400">Fear and greed cloud judgment</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-medium text-white">Missing Best Days</div>
                    <div className="text-xs text-gray-400">Biggest gains happen unexpectedly</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-medium text-white">Transaction Costs</div>
                    <div className="text-xs text-gray-400">Frequent trading reduces returns</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#23263A] p-4 rounded-lg border border-green-500/30">
              <h4 className="font-bold text-green-500 mb-3">Better Alternatives</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-medium text-white">Time in Market</div>
                    <div className="text-xs text-gray-400">Stay invested for the long term</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-medium text-white">Dollar-Cost Averaging</div>
                    <div className="text-xs text-gray-400">Invest regularly over time</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="text-sm font-medium text-white">Rebalancing</div>
                    <div className="text-xs text-gray-400">Adjust allocation periodically</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#23263A] p-4 rounded-lg">
            <h4 className="font-bold text-yellow-500 mb-2">Key Takeaway</h4>
            <p className="text-gray-300">
              <strong>Time in the market beats timing the market.</strong> Instead of trying to predict market movements, focus on staying invested, diversifying your portfolio, and maintaining a long-term perspective.
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
      quizQuestion: 'What\'s the risk of trying to time the market?',
      quizOptions: [
        { value: 'a', label: 'You always buy low', correct: false },
        { value: 'b', label: 'Guaranteed losses', correct: false },
        { value: 'c', label: 'Missing key growth periods', correct: true },
        { value: 'd', label: 'No downside', correct: false }
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
          completedModules: [...userProgress.completedModules, 'market-cycles'],
          totalXP: userProgress.totalXP + 150,
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
      completedModules: [...userProgress.completedModules, 'market-cycles'],
      totalXP: userProgress.totalXP + 150,
      level: Math.floor((userProgress.totalXP + 150) / 100) + 1,
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
              <h1 className="text-2xl font-bold text-white">Market Cycles</h1>
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
              <TrendingUpIcon className="h-8 w-8 text-black" />
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
                            ? 'Excellent! You understand that market timing risks missing key growth periods, which can significantly impact long-term returns.'
                            : 'The correct answer is "Missing key growth periods". Market timing often results in missing the best days in the market, which can dramatically reduce returns.'
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
                            You've earned <span className="text-yellow-500 font-bold">150 XP</span> and completed the Market Cycles module!
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