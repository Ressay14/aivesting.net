import React from 'react';
import { ArrowRightIcon, BarChart2Icon, BellIcon, BrainIcon, ShieldIcon, TrendingUpIcon, PieChartIcon } from 'lucide-react';
import StickyHeader from './StickyHeader';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen w-full bg-[#0B0E17] text-white">
      <StickyHeader />
      <main className="pt-24">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Powerful <span className="text-purple-400">Features</span> for Modern Investors
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover the tools and insights that will transform your investment strategy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl shadow-xl p-8 border border-purple-400/20 flex flex-col items-center text-center backdrop-blur-xl hover:border-purple-400/40 transition-all">
              <PieChartIcon className="h-12 w-12 text-purple-400 mb-4 animate-pulse" />
              <h3 className="text-xl font-bold text-white mb-3">AI Portfolio Optimization</h3>
              <p className="text-gray-300">Let advanced AI optimize your asset allocation for maximum returns and minimum risk, with real-time insights.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl shadow-xl p-8 border border-blue-400/20 flex flex-col items-center text-center backdrop-blur-xl hover:border-blue-400/40 transition-all">
              <BellIcon className="h-12 w-12 text-blue-400 mb-4 animate-bounce" />
              <h3 className="text-xl font-bold text-white mb-3">Real-Time Alerts</h3>
              <p className="text-gray-300">Get instant, AI-powered alerts for market opportunities, portfolio changes, and risk events.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl shadow-xl p-8 border border-purple-400/20 flex flex-col items-center text-center backdrop-blur-xl hover:border-purple-400/40 transition-all">
              <BarChart2Icon className="h-12 w-12 text-purple-400 mb-4 animate-pulse" />
              <h3 className="text-xl font-bold text-white mb-3">Sentiment Analysis</h3>
              <p className="text-gray-300">Track market sentiment across sectors and assets, powered by real-time news and social data.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl shadow-xl p-8 border border-blue-400/20 flex flex-col items-center text-center backdrop-blur-xl hover:border-blue-400/40 transition-all">
              <BrainIcon className="h-12 w-12 text-blue-400 mb-4 animate-bounce" />
              <h3 className="text-xl font-bold text-white mb-3">Personalized Insights</h3>
              <p className="text-gray-300">Receive actionable, plain-English insights tailored to your goals, risk, and experience level.</p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl shadow-xl p-8 border border-purple-400/20 flex flex-col items-center text-center backdrop-blur-xl hover:border-purple-400/40 transition-all">
              <ShieldIcon className="h-12 w-12 text-purple-400 mb-4 animate-pulse" />
              <h3 className="text-xl font-bold text-white mb-3">Bank-Level Security</h3>
              <p className="text-gray-300">Your data is encrypted and securely synced across devices, with full privacy and control.</p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl shadow-xl p-8 border border-blue-400/20 flex flex-col items-center text-center backdrop-blur-xl hover:border-blue-400/40 transition-all">
              <TrendingUpIcon className="h-12 w-12 text-blue-400 mb-4 animate-bounce" />
              <h3 className="text-xl font-bold text-white mb-3">Easy Onboarding</h3>
              <p className="text-gray-300">Get started in minutes with a friendly, guided onboarding flow—no finance background required.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 