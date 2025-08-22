import React from 'react';
import StickyHeader from './StickyHeader';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#0B0E17] text-white">
      <StickyHeader />
      <main className="pt-24">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              What Our <span className="text-purple-400">Users Say</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Hear from investors who have transformed their financial future with AIVesting
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-6 border border-purple-400/20">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-purple-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-200 mb-4">
                "AIVesting has completely changed how I approach investing. The AI insights are incredibly accurate and the portfolio optimization is game-changing."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-300 font-semibold">A</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Alex Thompson</div>
                  <div className="text-sm text-gray-400">Individual Investor</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-400/20">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-purple-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-200 mb-4">
                "The WealthPulse dashboard gives me real-time insights I never had before. It's like having a financial advisor available 24/7."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-300 font-semibold">S</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Sarah Johnson</div>
                  <div className="text-sm text-gray-400">Financial Advisor</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-red-500/10 rounded-2xl p-6 border border-purple-400/20">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-purple-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-200 mb-4">
                "As someone new to investing, AIVesting has been an educational tool as much as an investment platform. The AI assistant answers all my questions."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                  <span className="text-red-300 font-semibold">M</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Michael Chen</div>
                  <div className="text-sm text-gray-400">Beginner Investor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 