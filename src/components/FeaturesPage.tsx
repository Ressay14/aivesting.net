import React from 'react';
import { ArrowRightIcon, BarChart2Icon, BellIcon, BrainIcon, CloudIcon, PieChartIcon } from 'lucide-react';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen w-full bg-[#0B0E15] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 drop-shadow-lg">Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-[#181C2A]/80 to-[#23263A]/80 rounded-2xl shadow-xl p-8 border border-blue-500/10 flex flex-col items-center text-center backdrop-blur-xl">
            <PieChartIcon className="h-10 w-10 text-blue-400 mb-4 animate-pulse" />
            <h3 className="text-xl font-bold text-white mb-2">AI Portfolio Optimization</h3>
            <p className="text-blue-100/90">Let advanced AI optimize your asset allocation for maximum returns and minimum risk, with real-time, animated insights.</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-[#181C2A]/80 to-[#23263A]/80 rounded-2xl shadow-xl p-8 border border-yellow-500/10 flex flex-col items-center text-center backdrop-blur-xl">
            <BellIcon className="h-10 w-10 text-yellow-400 mb-4 animate-bounce" />
            <h3 className="text-xl font-bold text-white mb-2">Real-Time Alerts</h3>
            <p className="text-blue-100/90">Get instant, AI-powered alerts for market opportunities, portfolio changes, and risk events—never miss a beat.</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-[#181C2A]/80 to-[#23263A]/80 rounded-2xl shadow-xl p-8 border border-green-500/10 flex flex-col items-center text-center backdrop-blur-xl">
            <BarChart2Icon className="h-10 w-10 text-green-400 mb-4 animate-pulse" />
            <h3 className="text-xl font-bold text-white mb-2">Sentiment Analysis</h3>
            <p className="text-blue-100/90">Track market sentiment across sectors and assets, powered by real-time news and social data.</p>
          </div>
          {/* Feature 4 */}
          <div className="bg-gradient-to-br from-[#181C2A]/80 to-[#23263A]/80 rounded-2xl shadow-xl p-8 border border-purple-500/10 flex flex-col items-center text-center backdrop-blur-xl">
            <BrainIcon className="h-10 w-10 text-purple-400 mb-4 animate-bounce" />
            <h3 className="text-xl font-bold text-white mb-2">Personalized Insights</h3>
            <p className="text-blue-100/90">Receive actionable, plain-English insights tailored to your goals, risk, and experience level.</p>
          </div>
          {/* Feature 5 */}
          <div className="bg-gradient-to-br from-[#181C2A]/80 to-[#23263A]/80 rounded-2xl shadow-xl p-8 border border-teal-500/10 flex flex-col items-center text-center backdrop-blur-xl">
            <CloudIcon className="h-10 w-10 text-teal-400 mb-4 animate-pulse" />
            <h3 className="text-xl font-bold text-white mb-2">Secure Cloud Sync</h3>
            <p className="text-blue-100/90">Your data is encrypted and securely synced across devices, with full privacy and control.</p>
          </div>
          {/* Feature 6 */}
          <div className="bg-gradient-to-br from-[#181C2A]/80 to-[#23263A]/80 rounded-2xl shadow-xl p-8 border border-pink-500/10 flex flex-col items-center text-center backdrop-blur-xl">
            <ArrowRightIcon className="h-10 w-10 text-pink-400 mb-4 animate-bounce" />
            <h3 className="text-xl font-bold text-white mb-2">Easy Onboarding</h3>
            <p className="text-blue-100/90">Get started in minutes with a friendly, guided onboarding flow—no finance background required.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 