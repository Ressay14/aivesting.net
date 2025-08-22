import React from 'react';
import { AtSignIcon, LockIcon, ArrowRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HeroLogo } from './Logo';

interface LoginProps {
  onComplete: () => void;
}

export const Login = ({ onComplete }: LoginProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative bg-gradient-to-br from-[#0B0E15] via-[#181C2A] to-[#23263A]">
      {/* Decorative blurred background elements for premium look */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-700/30 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '15s'}}></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-yellow-500/20 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '20s'}}></div>
      </div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Brand/Logo */}
        <div className="flex justify-center mb-8">
          <HeroLogo />
        </div>
        
        <div className="bg-[#181C2A]/90 rounded-2xl shadow-2xl border border-[#23263A] p-8 md:p-10">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2 text-white text-center">Welcome to AIVesting</h1>
            <p className="text-gray-400 text-center">Sign in to access your portfolio</p>
          </div>
          
          <form onSubmit={(e) => {
            e.preventDefault();
            onComplete();
          }} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <AtSignIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-[#23263A] rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-[#23263A] focus:border-yellow-500 transition-all"
                />
              </div>
              <div className="relative">
                <LockIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="w-full bg-[#23263A] rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-[#23263A] focus:border-yellow-500 transition-all"
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-yellow-500 text-black font-medium py-3 px-4 rounded-lg hover:bg-yellow-400 transition-colors flex items-center gap-2 justify-center"
            >
              Continue
              <ArrowRightIcon className="h-4 w-4" />
            </button>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#181C2A] text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>
            
            <button 
              type="button" 
              className="w-full bg-[#23263A] text-white font-medium py-3 px-4 rounded-lg hover:bg-[#2A2F3A] transition-colors flex items-center gap-2 justify-center border border-[#2A2F3A] hover:border-[#3A3F4A]"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              Google
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <span className="text-gray-400">Don't have an account? </span>
            <button
              className="text-yellow-500 hover:underline font-medium"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </button>
          </div>
          <div className="mt-4 text-center">
            <span className="text-gray-400">Want to see our plans first? </span>
            <button
              className="text-blue-400 hover:underline font-medium"
              onClick={() => navigate('/plans')}
            >
              View Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};