import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { CheckIcon, BookOpenIcon, CalculatorIcon, BarChart2Icon, WalletIcon, PieChartIcon, ShieldIcon, LineChartIcon, BellIcon, TrendingUpIcon, UsersIcon, FileTextIcon, ArrowRightIcon } from 'lucide-react';
export const PlansPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const plans = [{
    name: 'Basic',
    color: 'blue',
    icon: 'blue',
    price: billingCycle === 'monthly' ? '$19' : '$190',
    popular: false,
    features: ['AI-generated Stock Analysis Reports (5 per month)', 'Budgeting & Expense Tracking', 'Basic Sentiment Analysis', 'Manual Portfolio Tracking'],
    tools: [{
      name: 'Financial Planner',
      icon: CalculatorIcon
    }, {
      name: 'Financial Knowledge',
      icon: BookOpenIcon
    }, {
      name: 'Sentiment Analysis (basic)',
      icon: BarChart2Icon
    }, {
      name: 'Manual Portfolio Tracker',
      icon: WalletIcon
    }]
  }, {
    name: 'Metal',
    color: 'yellow',
    icon: 'yellow',
    price: billingCycle === 'monthly' ? '$59' : '$590',
    popular: true,
    features: ['Everything in Basic, plus:', 'Unlimited AI Stock Analysis', 'AI Backtesting Tool', '3x/week AI Trade Alerts', 'AI Risk Assessment + Recommendations'],
    tools: [{
      name: 'Portfolio Optimization',
      icon: PieChartIcon
    }, {
      name: 'Risk Assessment',
      icon: ShieldIcon
    }, {
      name: 'Backtesting Module',
      icon: LineChartIcon
    }, {
      name: 'Automated Alerts',
      icon: BellIcon
    }]
  }, {
    name: 'Ultra',
    color: 'purple',
    icon: 'gray',
    price: billingCycle === 'monthly' ? '$119' : '$1,190',
    popular: false,
    features: ['Everything in Metal, plus:', 'Real-Time AI Portfolio Optimization (auto updates)', 'Unlimited AI Trade Alerts & Signals', 'Early Access to Financial Models', 'VIP Research Reports', 'Bi-weekly Financial Coaching (1-on-1)'],
    tools: [{
      name: 'Real-Time Optimizer',
      icon: TrendingUpIcon
    }, {
      name: 'Forecasting Models',
      icon: LineChartIcon
    }, {
      name: 'Premium Report Access',
      icon: FileTextIcon
    }, {
      name: 'Coaching Portal',
      icon: UsersIcon
    }]
  }];
  return <div className="min-h-screen w-full bg-[#0B0E15] text-white">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-16 lg:px-24 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-yellow-500">Financial</span>{' '}
            Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select the plan that fits your investment goals and financial
            ambitions
          </p>
          {/* Billing Toggle */}
          <div className="mt-10 inline-flex items-center bg-[#151822] p-1 rounded-lg">
            <button onClick={() => setBillingCycle('monthly')} className={`px-4 py-2 rounded-md text-sm ${billingCycle === 'monthly' ? 'bg-yellow-500 text-black' : 'text-gray-400 hover:text-white'}`}>
              Monthly Billing
            </button>
            <button onClick={() => setBillingCycle('yearly')} className={`px-4 py-2 rounded-md text-sm ${billingCycle === 'yearly' ? 'bg-yellow-500 text-black' : 'text-gray-400 hover:text-white'}`}>
              Annual Billing <span className="text-xs">Save 20%</span>
            </button>
          </div>
        </div>
      </section>
      {/* Pricing Cards */}
      <section className="pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map(plan => <div key={plan.name} className={`bg-[#151822] rounded-xl overflow-hidden border ${plan.popular ? 'border-yellow-500/50 shadow-xl shadow-yellow-500/10' : 'border-gray-800/50'} relative`}>
                {plan.popular && <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>}
                <div className="p-8">
                  <div className={`bg-${plan.color}-500/10 p-3 rounded-lg inline-block mb-4`}>
                    <div className={`bg-${plan.color}-500 rounded-full w-8 h-8`}></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name} Plan</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => <li key={index} className="flex items-start gap-3">
                        <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>)}
                  </ul>
                  <button className={`w-full ${plan.popular ? 'bg-yellow-500 text-black hover:bg-yellow-400' : 'bg-[#1E2230] hover:bg-[#262B3D]'} font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2`}>
                    Get Started
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
                <div className="bg-[#1A1F2E] p-6 border-t border-gray-800/50">
                  <h4 className="font-medium mb-4">Included Tools:</h4>
                  <div className="space-y-3">
                    {plan.tools.map((tool, index) => <div key={index} className="flex items-center gap-3">
                        <div className={`bg-${plan.icon}-500/10 p-1.5 rounded-lg`}>
                          <tool.icon className={`h-4 w-4 text-${plan.icon}-500`} />
                        </div>
                        <span className="text-sm">{tool.name}</span>
                      </div>)}
                  </div>
                </div>
              </div>)}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-400">
              All plans include access to our mobile app, 24/7 customer support,
              and regular updates.
            </p>
            <p className="text-gray-400 mt-2">
              Need a custom solution?{' '}
              <a href="#" className="text-yellow-500 hover:underline">
                Contact our sales team
              </a>
            </p>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#151822]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2">
                Can I switch between plans?
              </h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                to your subscription will be applied at the start of your next
                billing cycle.
              </p>
            </div>
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2">
                Is there a free trial available?
              </h3>
              <p className="text-gray-300">
                We offer a 7-day free trial for all new users. You can explore
                the Basic plan features during this period without any charge.
              </p>
            </div>
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-300">
                We accept all major credit cards, PayPal, and select
                cryptocurrencies for subscription payments.
              </p>
            </div>
            <div className="bg-[#1A1F2E] p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2">
                Can I cancel my subscription anytime?
              </h3>
              <p className="text-gray-300">
                Absolutely. You can cancel your subscription at any time from
                your account settings. Your access will remain active until the
                end of your current billing period.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};