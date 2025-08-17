import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BrainIcon, 
  TargetIcon, 
  TrendingUpIcon, 
  DollarSignIcon, 
  ClockIcon, 
  CheckIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  BookOpenIcon,
  ShieldIcon,
  ZapIcon
} from 'lucide-react';

interface OnboardingQuestion {
  id: string;
  question: string;
  options: {
    value: string;
    label: string;
    icon: React.ReactNode;
    description?: string;
  }[];
}

interface OnboardingAnswers {
  goals: string;
  experience: string;
  timeCommitment: string;
  riskTolerance: string;
  learningStyle: string;
}

export const KnowledgeOnboarding: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<OnboardingAnswers>({
    goals: '',
    experience: '',
    timeCommitment: '',
    riskTolerance: '',
    learningStyle: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questions: OnboardingQuestion[] = [
    {
      id: 'goals',
      question: 'What are your primary financial goals?',
      options: [
        {
          value: 'retirement',
          label: 'Retirement Planning',
          icon: <TargetIcon className="h-6 w-6" />,
          description: 'Build wealth for a comfortable retirement'
        },
        {
          value: 'wealth_building',
          label: 'Wealth Building',
          icon: <TrendingUpIcon className="h-6 w-6" />,
          description: 'Grow my net worth over time'
        },
        {
          value: 'income',
          label: 'Passive Income',
          icon: <DollarSignIcon className="h-6 w-6" />,
          description: 'Generate regular income from investments'
        },
        {
          value: 'education',
          label: 'Financial Literacy',
          icon: <BookOpenIcon className="h-6 w-6" />,
          description: 'Learn about investing and finance'
        }
      ]
    },
    {
      id: 'experience',
      question: 'What\'s your current investment experience?',
      options: [
        {
          value: 'beginner',
          label: 'Complete Beginner',
          icon: <BookOpenIcon className="h-6 w-6" />,
          description: 'New to investing, need fundamentals'
        },
        {
          value: 'novice',
          label: 'Some Experience',
          icon: <TrendingUpIcon className="h-6 w-6" />,
          description: 'Basic knowledge, want to improve'
        },
        {
          value: 'intermediate',
          label: 'Intermediate',
          icon: <BrainIcon className="h-6 w-6" />,
          description: 'Good foundation, seeking advanced topics'
        },
        {
          value: 'advanced',
          label: 'Advanced',
          icon: <ZapIcon className="h-6 w-6" />,
          description: 'Experienced, want expert-level insights'
        }
      ]
    },
    {
      id: 'timeCommitment',
      question: 'How much time can you dedicate to learning?',
      options: [
        {
          value: '5_min',
          label: '5 minutes/day',
          icon: <ClockIcon className="h-6 w-6" />,
          description: 'Quick daily lessons'
        },
        {
          value: '15_min',
          label: '15 minutes/day',
          icon: <ClockIcon className="h-6 w-6" />,
          description: 'Moderate daily commitment'
        },
        {
          value: '30_min',
          label: '30 minutes/day',
          icon: <ClockIcon className="h-6 w-6" />,
          description: 'Dedicated daily learning'
        },
        {
          value: 'flexible',
          label: 'Flexible',
          icon: <ClockIcon className="h-6 w-6" />,
          description: 'Varies by day and topic'
        }
      ]
    },
    {
      id: 'riskTolerance',
      question: 'What\'s your risk tolerance?',
      options: [
        {
          value: 'conservative',
          label: 'Conservative',
          icon: <ShieldIcon className="h-6 w-6" />,
          description: 'Prefer safety over high returns'
        },
        {
          value: 'moderate',
          label: 'Moderate',
          icon: <TargetIcon className="h-6 w-6" />,
          description: 'Balance of safety and growth'
        },
        {
          value: 'aggressive',
          label: 'Aggressive',
          icon: <TrendingUpIcon className="h-6 w-6" />,
          description: 'Seek maximum growth potential'
        }
      ]
    },
    {
      id: 'learningStyle',
      question: 'How do you prefer to learn?',
      options: [
        {
          value: 'visual',
          label: 'Visual',
          icon: <BookOpenIcon className="h-6 w-6" />,
          description: 'Charts, diagrams, and examples'
        },
        {
          value: 'practical',
          label: 'Practical',
          icon: <TargetIcon className="h-6 w-6" />,
          description: 'Real-world applications and exercises'
        },
        {
          value: 'theoretical',
          label: 'Theoretical',
          icon: <BrainIcon className="h-6 w-6" />,
          description: 'Concepts and principles first'
        },
        {
          value: 'mixed',
          label: 'Mixed',
          icon: <ZapIcon className="h-6 w-6" />,
          description: 'Combination of all approaches'
        }
      ]
    }
  ];

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Save answers to localStorage
    localStorage.setItem('finance_mastery_onboarding', JSON.stringify(answers));
    
    // Initialize user progress
    const initialProgress = {
      completedModules: [],
      totalXP: 0,
      streak: 0,
      level: 1,
      lastCompletedDate: new Date().toISOString()
    };
    localStorage.setItem('finance_mastery_progress', JSON.stringify(initialProgress));
    
    // Save to Supabase if available (placeholder for future)
    // await supabase.from('user_profiles').upsert({
    //   user_id: user.id,
    //   onboarding_answers: answers,
    //   created_at: new Date().toISOString()
    // });

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/knowledge/roadmap');
    }, 1000);
  };

  const currentQ = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const canProceed = answers[currentQ.id as keyof OnboardingAnswers];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0E15] via-[#181C2A] to-[#23263A] flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-700/20 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '15s'}}></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '20s'}}></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
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
              <h1 className="text-3xl font-bold text-white">Finance Mastery Lite</h1>
              <p className="text-gray-400">Let's personalize your learning journey</p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-sm text-yellow-500 font-medium">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-[#23263A] rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-[#151822]/90 backdrop-blur-md rounded-2xl border border-gray-800/30 shadow-2xl p-8 animate-fadeIn">
          <h2 className="text-xl font-bold text-white mb-6 text-center">
            {currentQ.question}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {currentQ.options.map((option) => {
              const isSelected = answers[currentQ.id as keyof OnboardingAnswers] === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(currentQ.id, option.value)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 text-left group hover:scale-[1.02] ${
                    isSelected
                      ? 'border-yellow-500 bg-yellow-500/10 shadow-lg shadow-yellow-500/20'
                      : 'border-gray-700 bg-[#23263A] hover:border-gray-600 hover:bg-[#1E2230]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg transition-colors ${
                      isSelected ? 'bg-yellow-500 text-black' : 'bg-gray-700 text-gray-400 group-hover:bg-gray-600'
                    }`}>
                      {option.icon}
                    </div>
                    <div className="flex-1">
                      <div className={`font-medium mb-1 ${
                        isSelected ? 'text-yellow-500' : 'text-white'
                      }`}>
                        {option.label}
                      </div>
                      {option.description && (
                        <div className="text-sm text-gray-400">
                          {option.description}
                        </div>
                      )}
                    </div>
                    {isSelected && (
                      <CheckIcon className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                currentQuestion === 0
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-[#23263A] text-white hover:bg-[#1E2230] hover:scale-105'
              }`}
            >
              Previous
            </button>

            {isLastQuestion ? (
              <button
                onClick={handleSubmit}
                disabled={!canProceed || isSubmitting}
                className={`px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  !canProceed || isSubmitting
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-black hover:from-yellow-400 hover:to-yellow-300 hover:scale-105 shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                    Creating Your Roadmap...
                  </>
                ) : (
                  <>
                    <span>Complete Setup</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={!canProceed}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  !canProceed
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-blue-400 text-white hover:from-blue-400 hover:to-blue-300 hover:scale-105'
                }`}
              >
                <span>Next</span>
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Your answers help us create a personalized learning experience
          </p>
        </div>
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