import React from 'react';
import { AtSignIcon, LockIcon, ArrowRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface LoginProps {
  onComplete: () => void;
}
export const Login = ({
  onComplete
}: LoginProps) => {
  const navigate = useNavigate();
  return <div className="bg-[#151822] rounded-xl p-8 shadow-lg">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Welcome to AIVesting</h1>
        <p className="text-gray-400">Sign in to access your portfolio</p>
      </div>
      <form onSubmit={e => {
      e.preventDefault();
      onComplete();
    }} className="space-y-6">
        <div className="space-y-4">
          <div className="relative">
            <AtSignIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input type="email" placeholder="Email address" className="w-full bg-[#1E2230] rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          </div>
          <div className="relative">
            <LockIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input type="password" placeholder="Password" className="w-full bg-[#1E2230] rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          </div>
        </div>
        <button type="submit" className="w-full bg-yellow-500 text-black font-medium py-3 px-4 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2">
          Continue
          <ArrowRightIcon className="h-4 w-4" />
        </button>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#151822] text-gray-400">
              Or continue with
            </span>
          </div>
        </div>
        <button type="button" className="w-full bg-[#1E2230] text-white font-medium py-3 px-4 rounded-lg hover:bg-[#262B3D] transition-colors flex items-center justify-center gap-2">
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
    </div>;
};