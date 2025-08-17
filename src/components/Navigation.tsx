import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuIcon, XIcon, BrainIcon, StarIcon } from 'lucide-react';
export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userProgress, setUserProgress] = useState({
    completedModules: [],
    totalXP: 0,
    streak: 0,
    level: 1
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Load user progress from localStorage
    const savedProgress = localStorage.getItem('finance_mastery_progress');
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, []);
  return <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0B0E15]/80 border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6 md:px-16 lg:px-24">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-white flex items-center">
            <span className="text-yellow-500">AI</span>Vesting
            <span className="text-yellow-500">.</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-10">
          <a href="/" className="text-white hover:text-yellow-500 transition-colors text-sm font-medium">
            Home
          </a>
          <a href="/features" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm font-medium">
            Features
          </a>
          <a href="/learn" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm font-medium">
            Learn
          </a>
          <a href="/ai-assistant" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm font-medium">
            AI Assistant
          </a>
          <a href="/plans" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm font-medium">
            Plans
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm font-medium">
            Testimonials
          </a>
          <a href="#about" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm font-medium">
            About
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          {/* Progress Widget */}
          {userProgress.totalXP > 0 && (
            <div className="flex items-center gap-2 bg-[#23263A] px-3 py-2 rounded-lg border border-yellow-500/20">
              <BrainIcon className="h-4 w-4 text-yellow-500" />
              <div className="text-xs">
                <div className="text-yellow-500 font-medium">{userProgress.totalXP} XP</div>
                <div className="text-gray-400">Level {userProgress.level}</div>
              </div>
            </div>
          )}
          <button onClick={() => navigate('/login')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            Log in
          </button>
          <a href="/login" className="bg-yellow-500 text-black font-medium px-5 py-2 rounded-lg hover:bg-yellow-400 transition-colors text-sm">
            Get Started
          </a>
        </div>
        <button className="md:hidden p-2 rounded-lg bg-[#1A1F2E]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      {menuOpen && <div className="md:hidden bg-[#151822] border-b border-gray-800">
          <div className="px-4 py-3 space-y-4">
            <a href="/" className="block text-white hover:text-yellow-500 transition-colors py-2">
              Home
            </a>
            <a href="/features" className="block text-gray-300 hover:text-yellow-500 transition-colors py-2">
              Features
            </a>
            <a href="/learn" className="block text-gray-300 hover:text-yellow-500 transition-colors py-2">
              Learn
            </a>
            <a href="/ai-assistant" className="block text-gray-300 hover:text-yellow-500 transition-colors py-2">
              AI Assistant
            </a>
            <a href="/plans" className="block text-gray-300 hover:text-yellow-500 transition-colors py-2">
              Plans
            </a>
            <a href="#testimonials" className="block text-gray-300 hover:text-yellow-500 transition-colors py-2">
              Testimonials
            </a>
            <a href="#about" className="block text-gray-300 hover:text-yellow-500 transition-colors py-2">
              About
            </a>
            <div className="pt-4 flex flex-col gap-3">
              <button onClick={() => navigate('/login')} className="text-gray-300 hover:text-white transition-colors py-2">
                Log in
              </button>
              <a href="/login" className="bg-yellow-500 text-black font-medium px-5 py-2 rounded-lg hover:bg-yellow-400 transition-colors text-center">
                Get Started
              </a>
            </div>
          </div>
        </div>}
    </header>;
};