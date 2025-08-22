import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon, ArrowRightIcon, CrownIcon, GemIcon, StarIcon } from 'lucide-react';
import { HeroLogo } from './Logo';

interface SignUpProps {
  onSignUpSuccess?: () => void;
}

export const SignUp: React.FC<SignUpProps> = ({ onSignUpSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    betaCode: '',
    plan: 'metal' as 'plus' | 'metal' | 'ultra'
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Validate beta code (for now, accept any code)
      if (!formData.betaCode.trim()) {
        throw new Error('Beta code is required');
      }

      // Create user account
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            plan: formData.plan,
            beta_code: formData.betaCode,
            is_beta_user: true,
            created_at: new Date().toISOString()
          }
        }
      });

      if (authError) throw authError;

      // Create user profile in profiles table
      if (authData.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: authData.user.id,
              first_name: formData.firstName,
              last_name: formData.lastName,
              email: formData.email,
              plan: formData.plan,
              beta_code: formData.betaCode,
              is_beta_user: true,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString()
            }
          ]);

        if (profileError) {
          console.error('Profile creation error:', profileError);
          // Don't throw error here as auth was successful
        }
      }

      setSuccess(true);
      if (onSignUpSuccess) onSignUpSuccess();
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithOAuth({ 
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      }
    });
    setLoading(false);
    if (error) setError(error.message);
  };

  const plans = [
    {
      id: 'plus',
      name: 'Plus Plan',
      price: '€19/month',
      icon: StarIcon,
      color: 'from-blue-500 to-cyan-500',
      features: ['Basic AI Insights', 'Portfolio Tracking', 'Goal Planning']
    },
    {
      id: 'metal',
      name: 'Metal Plan',
      price: '€49/month',
      icon: GemIcon,
      color: 'from-purple-500 to-pink-500',
      features: ['Advanced AI Co-Pilot', 'Risk Analysis', 'Backtesting Tools'],
      popular: true
    },
    {
      id: 'ultra',
      name: 'Ultra Plan',
      price: '€99/month',
      icon: CrownIcon,
      color: 'from-yellow-500 to-orange-500',
      features: ['Full AI Suite', 'Custom Strategies', 'Priority Support']
    }
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative bg-gradient-to-br from-[#0B0E15] via-[#181C2A] to-[#23263A]">
      {/* Decorative blurred background elements for premium look */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-700/30 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '15s'}}></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '20s'}}></div>
      </div>
      <div className="relative z-10 w-full max-w-4xl px-4">
        {/* Brand/Logo */}
        <div className="flex justify-center mb-8">
          <HeroLogo />
        </div>

        {success ? (
          <div className="bg-[#181C2A]/90 rounded-2xl shadow-2xl border border-[#23263A] p-8 md:p-10 text-center">
            <div className="text-green-500 text-center mb-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRightIcon className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Beta Account Created Successfully!</h3>
              <p className="text-gray-300">Check your email to verify your account and complete registration.</p>
            </div>
            <button
              onClick={() => navigate('/onboarding')}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              Complete Profile Setup
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sign Up Form */}
            <div className="bg-[#181C2A]/90 rounded-2xl shadow-2xl border border-[#23263A] p-8">
              <h2 className="text-2xl font-bold mb-6 text-white text-center">Create Beta Account</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-1 font-medium text-sm">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="w-full bg-[#23263A] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-[#23263A] focus:border-yellow-500 transition-all text-sm"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1 font-medium text-sm">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="w-full bg-[#23263A] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-[#23263A] focus:border-yellow-500 transition-all text-sm"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-1 font-medium text-sm">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-[#23263A] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-[#23263A] focus:border-yellow-500 transition-all text-sm"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-1 font-medium text-sm">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className="w-full bg-[#23263A] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-[#23263A] focus:border-yellow-500 transition-all text-sm pr-10"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      minLength={8}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-1 font-medium text-sm">Beta Code</label>
                  <input
                    type="text"
                    name="betaCode"
                    className="w-full bg-[#23263A] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-[#23263A] focus:border-yellow-500 transition-all text-sm"
                    placeholder="Enter beta access code"
                    value={formData.betaCode}
                    onChange={handleInputChange}
                    required
                  />
                  <p className="text-xs text-gray-400 mt-1">Enter any code to access the beta</p>
                </div>

                <div>
                  <label className="block text-gray-300 mb-1 font-medium text-sm">Select Plan</label>
                  <select
                    name="plan"
                    value={formData.plan}
                    onChange={handleInputChange}
                    className="w-full bg-[#23263A] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-[#23263A] focus:border-yellow-500 transition-all text-sm"
                  >
                    {plans.map(plan => (
                      <option key={plan.id} value={plan.id}>
                        {plan.name} - {plan.price}
                      </option>
                    ))}
                  </select>
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating Account...' : 'Create Beta Account'}
                  <ArrowRightIcon className="h-4 w-4" />
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleGoogleSignUp}
                    disabled={loading}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-lg border border-white/20 transition-all duration-200 disabled:opacity-50"
                  >
                    Continue with Google
                  </button>
                </div>
              </form>
            </div>

            {/* Plan Selection */}
            <div className="bg-[#181C2A]/90 rounded-2xl shadow-2xl border border-[#23263A] p-8">
              <h3 className="text-xl font-bold mb-6 text-white text-center">Choose Your Beta Plan</h3>
              
              <div className="space-y-4">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                      formData.plan === plan.id
                        ? 'border-yellow-500/50 bg-yellow-500/10'
                        : 'border-gray-700/50 bg-[#23263A]/50 hover:border-gray-600/50'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, plan: plan.id as any }))}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center`}>
                        <plan.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{plan.name}</h4>
                        <p className="text-yellow-400 font-bold">{plan.price}</p>
                      </div>
                      {plan.popular && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                          POPULAR
                        </span>
                      )}
                    </div>
                    
                    <ul className="space-y-1">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">🎉 Beta Access Benefits</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Early access to AI Co-Pilot features</li>
                  <li>• Free premium plan during beta</li>
                  <li>• Direct feedback to development team</li>
                  <li>• Exclusive beta user community</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
