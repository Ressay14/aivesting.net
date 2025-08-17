import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import GlassCard from './GlassCard';

export function HomePage() {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen w-full text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        
        {/* Additional Sections with Glassmorphism */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Why Choose <span className="text-yellow-400">AIVesting</span>?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Experience the future of investing with AI-powered insights and professional-grade tools.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <GlassCard>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
                <p className="text-white/70">Get intelligent recommendations based on your goals and market conditions.</p>
              </div>
            </GlassCard>
            
            <GlassCard>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Data</h3>
                <p className="text-white/70">Access live market data and portfolio analytics 24/7.</p>
              </div>
            </GlassCard>
            
            <GlassCard>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
                <p className="text-white/70">Bank-level security with full control over your data.</p>
              </div>
            </GlassCard>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10">
          <div className="text-center">
            <GlassCard>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Ready to Transform Your <span className="text-yellow-400">Financial Future</span>?
              </h2>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Join thousands of investors who are already using AI to make smarter financial decisions.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button 
                  onClick={handleGetStarted}
                  className="rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-black shadow-lg shadow-yellow-500/20 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                >
                  Get Started Free →
                </button>
                <button className="rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
                  Watch Demo ▷
                </button>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>
    </div>
  );
}