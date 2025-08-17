import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon, ArrowRightIcon } from 'lucide-react';

interface SignUpProps {
  onSignUpSuccess?: () => void;
}

export const SignUp: React.FC<SignUpProps> = ({ onSignUpSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/dashboard');
      }
    };
    checkSession();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      if (onSignUpSuccess) onSignUpSuccess();
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
    setLoading(false);
    if (error) setError(error.message);
  };

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
          <span className="text-3xl font-extrabold text-yellow-500 tracking-tight drop-shadow-lg select-none">AIVesting</span>
        </div>
        <div className="bg-[#181C2A]/90 rounded-2xl shadow-2xl border border-[#23263A] p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">Sign Up</h2>
          {success ? (
            <div className="text-green-500 text-center mb-4">
              Check your email to verify your account and complete registration.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-1 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full bg-[#23263A] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-[#23263A] focus:border-yellow-500 transition-all"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1 font-medium">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="w-full bg-[#23263A] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-[#23263A] focus:border-yellow-500 pr-12 transition-all"
                    placeholder="Enter your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-yellow-500 transition-colors"
                    tabIndex={-1}
                    onClick={() => setShowPassword(v => !v)}
                  >
                    {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              {error && <div className="text-red-500 text-sm text-center">{error}</div>}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold py-3 px-4 rounded-lg shadow-lg hover:from-yellow-400 hover:to-yellow-300 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2"><svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>Signing up...</span>
                ) : (
                  <><span>Sign Up</span> <ArrowRightIcon className="h-4 w-4" /></>
                )}
              </button>
              <button
                type="button"
                className="w-full bg-[#23263A] text-white font-medium py-3 px-4 rounded-lg hover:bg-[#262B3D] transition-all flex items-center justify-center gap-2 border border-[#23263A] hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                onClick={handleGoogleSignUp}
                disabled={loading}
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                Sign up with Google
              </button>
            </form>
          )}
          <div className="mt-8 text-center">
            <span className="text-gray-400">Already have an account? </span>
            <button
              className="text-yellow-500 hover:underline font-medium"
              onClick={() => navigate('/login')}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
