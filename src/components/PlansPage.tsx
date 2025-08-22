import React, { useState } from 'react';
import StickyHeader from './StickyHeader';
import { Footer } from './Footer';
import { CheckIcon, BookOpenIcon, CalculatorIcon, BarChart2Icon, WalletIcon, PieChartIcon, ShieldIcon, LineChartIcon, BellIcon, TrendingUpIcon, UsersIcon, FileTextIcon, ArrowRightIcon, CrownIcon, TargetIcon, BrainIcon, ZapIcon, StarIcon, RefreshCwIcon, AlertTriangleIcon, UserIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PlansPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const navigate = useNavigate();

  const plans = [
    {
      name: "Plus Plan",
      price: billingCycle === 'monthly' ? "$19" : "$15",
      period: billingCycle === 'monthly' ? "/month" : "/month",
      color: "blue",
      popular: false,
      features: [
        "AI-generated Stock Analysis Reports (5 per month)",
        "Budgeting & Expense Tracking",
        "Basic Sentiment Analysis",
        "Manual Portfolio Tracking"
      ],
      tools: [
        { name: "Financial Planner", icon: FileTextIcon },
        { name: "Financial Knowledge", icon: BookOpenIcon },
        { name: "Sentiment Analysis (basic)", icon: BarChart2Icon },
        { name: "Manual Portfolio Tracker", icon: BarChart2Icon }
      ]
    },
    {
      name: "Metal Plan",
      price: billingCycle === 'monthly' ? "$59" : "$47",
      period: billingCycle === 'monthly' ? "/month" : "/month",
      color: "yellow",
      popular: true,
      features: [
        "Everything in Plus, plus:",
        "Unlimited AI Stock Analysis",
        "AI Backtesting Tool",
        "3x/week AI Trade Alerts",
        "AI Risk Assessment + Recommendations"
      ],
      tools: [
        { name: "Portfolio Optimization", icon: RefreshCwIcon },
        { name: "Risk Assessment", icon: ShieldIcon },
        { name: "Backtesting Module", icon: LineChartIcon },
        { name: "Automated Alerts", icon: BellIcon }
      ]
    },
    {
      name: "Ultra Plan",
      price: billingCycle === 'monthly' ? "$119" : "$95",
      period: billingCycle === 'monthly' ? "/month" : "/month",
      color: "purple",
      popular: false,
      features: [
        "Everything in Metal, plus:",
        "Real-Time AI Portfolio Optimization (auto updates)",
        "Unlimited AI Trade Alerts & Signals",
        "Early Access to Financial Models",
        "VIP Research Reports",
        "Bi-weekly Financial Coaching (1-on-1)"
      ],
      tools: [
        { name: "Real-Time Optimizer", icon: TrendingUpIcon },
        { name: "Forecasting Models", icon: LineChartIcon },
        { name: "Premium Report Access", icon: CrownIcon },
        { name: "Coaching Portal", icon: UsersIcon }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          accent: 'bg-blue-500',
          accentLight: 'bg-blue-500/20',
          accentBorder: 'border-blue-500/30',
          accentText: 'text-blue-400'
        };
      case 'yellow':
        return {
          accent: 'bg-yellow-500',
          accentLight: 'bg-yellow-500/20',
          accentBorder: 'border-yellow-500/30',
          accentText: 'text-yellow-400'
        };
      case 'purple':
        return {
          accent: 'bg-purple-500',
          accentLight: 'bg-purple-500/20',
          accentBorder: 'border-purple-500/30',
          accentText: 'text-purple-400'
        };
      default:
        return {
          accent: 'bg-gray-500',
          accentLight: 'bg-gray-500/20',
          accentBorder: 'border-gray-500/30',
          accentText: 'text-gray-400'
        };
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0B0E15] text-white">
      <StickyHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-16 lg:px-24 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extra-bold mb-6">
            Choose Your <span className="text-yellow-400">Financial</span> Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Select the plan that fits your investment goals and financial ambitions.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-[#151822] rounded-lg p-1 border border-gray-800/30">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-yellow-500 text-black shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                  billingCycle === 'annual'
                    ? 'bg-yellow-500 text-black shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Annual Billing <span className="text-green-400">Save 20%</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const colorClasses = getColorClasses(plan.color);
              return (
                <div
                  key={plan.name}
                  className={`relative bg-[#151822] rounded-xl border ${
                    plan.popular 
                      ? `${colorClasses.accentBorder} shadow-lg shadow-${plan.color}-500/20` 
                      : 'border-gray-800/30'
                  } p-8 ${plan.popular ? 'scale-105' : ''} transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </div>
                  )}
                  
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 ${colorClasses.accent} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                      {plan.color === 'blue' && <BrainIcon className="w-8 h-8 text-white" />}
                      {plan.color === 'yellow' && <TargetIcon className="w-8 h-8 text-white" />}
                      {plan.color === 'purple' && <CrownIcon className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <button 
                    onClick={() => navigate('/signup')}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 mb-6 ${
                      plan.popular
                        ? `${colorClasses.accent} text-white hover:shadow-lg hover:shadow-${plan.color}-500/25`
                        : 'border border-gray-600 text-white hover:border-purple-500 hover:bg-purple-500/10'
                    }`}
                  >
                    Get Started →
                  </button>

                  {/* Included Tools */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Included Tools:</h4>
                    {plan.tools.map((tool, toolIndex) => {
                      const IconComponent = tool.icon;
                      return (
                        <div key={toolIndex} className="flex items-center gap-3 text-sm">
                          <IconComponent className={`w-4 h-4 ${colorClasses.accentText}`} />
                          <span className="text-gray-400">{tool.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-400">
            All plans include access to our mobile app, 24/7 customer support, and regular updates.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}