import React, { useState, useEffect } from 'react';
import { useAuth } from '../lib/context/AuthContext';
import { supabase } from '../lib/supabaseClient';
import { motion } from 'framer-motion';
import { 
  UserIcon, CrownIcon, GemIcon, StarIcon, 
  CalendarIcon, ShieldIcon, LogOutIcon, SettingsIcon,
  CheckCircleIcon, ClockIcon
} from 'lucide-react';

interface UserProfile {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  plan: 'plus' | 'metal' | 'ultra';
  beta_code: string;
  is_beta_user: boolean;
  created_at: string;
  updated_at: string;
}

export default function UserProfile() {
  const { user, signOut } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
      } else {
        setProfile(data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPlanIcon = (plan: string) => {
    switch (plan) {
      case 'plus':
        return <StarIcon className="w-6 h-6 text-blue-400" />;
      case 'metal':
        return <GemIcon className="w-6 h-6 text-purple-400" />;
      case 'ultra':
        return <CrownIcon className="w-6 h-6 text-yellow-400" />;
      default:
        return <StarIcon className="w-6 h-6 text-gray-400" />;
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'plus':
        return 'from-blue-500 to-cyan-500';
      case 'metal':
        return 'from-purple-500 to-pink-500';
      case 'ultra':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getPlanName = (plan: string) => {
    switch (plan) {
      case 'plus':
        return 'Plus Plan';
      case 'metal':
        return 'Metal Plan';
      case 'ultra':
        return 'Ultra Plan';
      default:
        return 'Unknown Plan';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0E17] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user || !profile) {
    return (
      <div className="min-h-screen bg-[#0B0E17] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400">Please log in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0E17] text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">Your Beta Account</h1>
          <p className="text-xl text-gray-400">Welcome to the future of AI-powered wealth management</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div 
            className="lg:col-span-2 bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-8 border border-gray-800/30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <UserIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{profile.first_name} {profile.last_name}</h2>
                <p className="text-gray-400">{profile.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/30 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-gray-300">Account Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">User ID:</span>
                    <span className="text-white font-mono">{profile.id.slice(0, 8)}...</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Beta Code:</span>
                    <span className="text-green-400 font-mono">{profile.beta_code}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Beta User:</span>
                    <span className="text-green-400">✓ Active</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-gray-300">Timeline</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Created:</span>
                    <span className="text-white">{new Date(profile.created_at).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Last Updated:</span>
                    <span className="text-white">{new Date(profile.updated_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Plan Card */}
          <motion.div 
            className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-2xl p-6 border border-gray-800/30"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${getPlanColor(profile.plan)} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                {getPlanIcon(profile.plan)}
              </div>
              <h3 className="text-xl font-bold mb-2">{getPlanName(profile.plan)}</h3>
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg px-3 py-1 text-green-400 text-sm font-medium">
                Beta Access - Free
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-800/30 rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-gray-300">Plan Features</h4>
                <ul className="space-y-2 text-sm">
                  {profile.plan === 'plus' && (
                    <>
                      <li className="flex items-center gap-2 text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400" />
                        Basic AI Insights
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400" />
                        Portfolio Tracking
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400" />
                        Goal Planning
                      </li>
                    </>
                  )}
                  {profile.plan === 'metal' && (
                    <>
                      <li className="flex items-center gap-2 text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400" />
                        Advanced AI Co-Pilot
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400" />
                        Risk Analysis
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400" />
                        Backtesting Tools
                      </li>
                    </>
                  )}
                  {profile.plan === 'ultra' && (
                    <>
                      <li className="flex items-center gap-2 text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400" />
                        Full AI Suite
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400" />
                        Custom Strategies
                      </li>
                      <li className="flex items-center gap-2 text-gray-400">
                        <CheckCircleIcon className="w-4 h-4 text-green-400" />
                        Priority Support
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-blue-400">Beta Benefits</h4>
                <ul className="space-y-1 text-xs text-gray-300">
                  <li>• Early access to features</li>
                  <li>• Free premium plan</li>
                  <li>• Direct feedback channel</li>
                  <li>• Exclusive community</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div 
          className="mt-12 text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/dashboard'}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Go to Dashboard
            </button>
            <button
              onClick={() => window.location.href = '/ai-copilot'}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Try AI Co-Pilot
            </button>
            <button
              onClick={signOut}
              className="bg-gray-800/50 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50"
            >
              <LogOutIcon className="w-4 h-4 inline mr-2" />
              Sign Out
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 