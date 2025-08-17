import React, { useState } from 'react';
import { PieChartIcon, CalendarIcon, TrendingUpIcon, CreditCardIcon, ShoppingBagIcon, HomeIcon, CarIcon, UtensilsIcon, PlaneIcon, HeartIcon, PiggyBankIcon, DollarSignIcon, ArrowRightIcon, PlusIcon, EyeIcon, EyeOffIcon, ChevronRightIcon, FilterIcon, CheckIcon, AlertCircleIcon, BellIcon } from 'lucide-react';
export const WealthPulseDashboard = () => {
  const [showValues, setShowValues] = useState(true);
  const [activePeriod, setActivePeriod] = useState('Month');
  const [newGoalModalOpen, setNewGoalModalOpen] = useState(false);
  return <div className="space-y-6">
      {/* Budget Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/20 group">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Monthly Budget</p>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-purple-500 group-hover:to-purple-300 transition-all duration-300">
                {showValues ? '€4,500.00' : '••••••••'}
              </h3>
            </div>
            <div className="bg-gradient-to-br from-purple-500/30 to-purple-500/10 p-2 rounded-lg shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300 group-hover:scale-110">
              <CalendarIcon className="h-5 w-5 text-purple-500" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-full bg-[#0B0E15] rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-2 rounded-full w-3/4 group-hover:animate-pulse"></div>
            </div>
            <span className="text-gray-400 whitespace-nowrap">
              {showValues ? '€3,375 / €4,500' : '•••• / ••••'}
            </span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-green-500/20 group">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Total Savings</p>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-green-500 group-hover:to-green-300 transition-all duration-300">
                {showValues ? '€32,150.00' : '••••••••'}
              </h3>
            </div>
            <div className="bg-gradient-to-br from-green-500/30 to-green-500/10 p-2 rounded-lg shadow-lg group-hover:shadow-green-500/20 transition-all duration-300 group-hover:scale-110">
              <PiggyBankIcon className="h-5 w-5 text-green-500" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-500 flex items-center">
              <TrendingUpIcon className="h-4 w-4 mr-1" />
              12.5%
            </span>
            <span className="text-gray-400">vs last year</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-red-500/20 group">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Monthly Spending</p>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-red-500 group-hover:to-red-300 transition-all duration-300">
                {showValues ? '€3,375.00' : '••••••••'}
              </h3>
            </div>
            <div className="bg-gradient-to-br from-red-500/30 to-red-500/10 p-2 rounded-lg shadow-lg group-hover:shadow-red-500/20 transition-all duration-300 group-hover:scale-110">
              <CreditCardIcon className="h-5 w-5 text-red-500" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-red-500 flex items-center">
              <TrendingUpIcon className="h-4 w-4 mr-1" />
              8.2%
            </span>
            <span className="text-gray-400">vs last month</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-yellow-500/20 group">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Remaining Budget</p>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-yellow-500 group-hover:to-yellow-300 transition-all duration-300">
                {showValues ? '€1,125.00' : '••••••••'}
              </h3>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/30 to-yellow-500/10 p-2 rounded-lg shadow-lg group-hover:shadow-yellow-500/20 transition-all duration-300 group-hover:scale-110">
              <PieChartIcon className="h-5 w-5 text-yellow-500" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-yellow-500">25% remaining</span>
              <span className="text-gray-400">for 8 days</span>
            </div>
            <button onClick={() => setShowValues(!showValues)} className="text-gray-400 hover:text-white transition-colors">
              {showValues ? <EyeIcon className="h-4 w-4" /> : <EyeOffIcon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Spending Breakdown */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
            <div className="flex justify-between items-center mb-6 relative z-10">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-medium">
                  Monthly Spending Breakdown
                </h3>
                <div className="bg-purple-500/10 text-purple-400 text-xs px-2 py-1 rounded-full">
                  {showValues ? '€3,375' : '••••'} Total
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className={`${activePeriod === 'Week' ? 'bg-gradient-to-r from-purple-500 to-purple-400 text-white' : 'text-gray-400 hover:bg-[#1E2230] hover:text-white'} 
                    text-sm px-3 py-1 rounded-lg transition-all duration-200`} onClick={() => setActivePeriod('Week')}>
                  Week
                </button>
                <button className={`${activePeriod === 'Month' ? 'bg-gradient-to-r from-purple-500 to-purple-400 text-white' : 'text-gray-400 hover:bg-[#1E2230] hover:text-white'} 
                    text-sm px-3 py-1 rounded-lg transition-all duration-200`} onClick={() => setActivePeriod('Month')}>
                  Month
                </button>
                <button className={`${activePeriod === 'Year' ? 'bg-gradient-to-r from-purple-500 to-purple-400 text-white' : 'text-gray-400 hover:bg-[#1E2230] hover:text-white'} 
                    text-sm px-3 py-1 rounded-lg transition-all duration-200`} onClick={() => setActivePeriod('Year')}>
                  Year
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="h-64 relative flex items-center justify-center">
                {/* Animated pie chart */}
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-1 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="w-full h-full rounded-full bg-[#151822] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-sm text-gray-400">Total</div>
                      <div className="font-bold">
                        {showValues ? '€3,375' : '•••••'}
                      </div>
                    </div>
                  </div>
                  {/* SVG Pie Chart Animation */}
                  <svg viewBox="0 0 100 100" className="absolute top-0 left-0 w-full h-full">
                    <circle cx="50" cy="50" r="45" fill="transparent" stroke="url(#purpleGradient)" strokeWidth="10" strokeDasharray="283" strokeDashoffset="0" transform="rotate(-90, 50, 50)" className="animate-drawCircle" style={{
                    animationDelay: '0s'
                  }} />
                    <circle cx="50" cy="50" r="45" fill="transparent" stroke="url(#redGradient)" strokeWidth="10" strokeDasharray="283" strokeDashoffset="100" transform="rotate(-90, 50, 50)" className="animate-drawCircle" style={{
                    animationDelay: '0.2s'
                  }} />
                    <circle cx="50" cy="50" r="45" fill="transparent" stroke="url(#yellowGradient)" strokeWidth="10" strokeDasharray="283" strokeDashoffset="170" transform="rotate(-90, 50, 50)" className="animate-drawCircle" style={{
                    animationDelay: '0.4s'
                  }} />
                    <circle cx="50" cy="50" r="45" fill="transparent" stroke="url(#greenGradient)" strokeWidth="10" strokeDasharray="283" strokeDashoffset="210" transform="rotate(-90, 50, 50)" className="animate-drawCircle" style={{
                    animationDelay: '0.6s'
                  }} />
                    <circle cx="50" cy="50" r="45" fill="transparent" stroke="url(#blueGradient)" strokeWidth="10" strokeDasharray="283" strokeDashoffset="240" transform="rotate(-90, 50, 50)" className="animate-drawCircle" style={{
                    animationDelay: '0.8s'
                  }} />
                    <circle cx="50" cy="50" r="45" fill="transparent" stroke="url(#pinkGradient)" strokeWidth="10" strokeDasharray="283" strokeDashoffset="260" transform="rotate(-90, 50, 50)" className="animate-drawCircle" style={{
                    animationDelay: '1s'
                  }} />
                    {/* Gradient definitions */}
                    <defs>
                      <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#9333ea" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                      <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#f87171" />
                      </linearGradient>
                      <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#eab308" />
                        <stop offset="100%" stopColor="#facc15" />
                      </linearGradient>
                      <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#4ade80" />
                      </linearGradient>
                      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#60a5fa" />
                      </linearGradient>
                      <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#f472b6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-center p-2 hover:bg-[#1E2230] rounded-lg transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
                    <div className="flex items-center gap-1">
                      <HomeIcon className="h-4 w-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                      <span className="text-sm group-hover:text-purple-400 transition-colors">
                        Housing
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">
                      {showValues ? '€1,200' : '•••••'}
                    </span>
                    <span className="text-xs text-gray-400">35.5%</span>
                    <ChevronRightIcon className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 hover:bg-[#1E2230] rounded-lg transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-red-400"></div>
                    <div className="flex items-center gap-1">
                      <UtensilsIcon className="h-4 w-4 text-gray-400 group-hover:text-red-400 transition-colors" />
                      <span className="text-sm group-hover:text-red-400 transition-colors">
                        Food
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">
                      {showValues ? '€650' : '•••'}
                    </span>
                    <span className="text-xs text-gray-400">19.3%</span>
                    <ChevronRightIcon className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 hover:bg-[#1E2230] rounded-lg transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400"></div>
                    <div className="flex items-center gap-1">
                      <CarIcon className="h-4 w-4 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                      <span className="text-sm group-hover:text-yellow-400 transition-colors">
                        Transport
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">
                      {showValues ? '€450' : '•••'}
                    </span>
                    <span className="text-xs text-gray-400">13.3%</span>
                    <ChevronRightIcon className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 hover:bg-[#1E2230] rounded-lg transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-green-400"></div>
                    <div className="flex items-center gap-1">
                      <ShoppingBagIcon className="h-4 w-4 text-gray-400 group-hover:text-green-400 transition-colors" />
                      <span className="text-sm group-hover:text-green-400 transition-colors">
                        Shopping
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">
                      {showValues ? '€400' : '•••'}
                    </span>
                    <span className="text-xs text-gray-400">11.9%</span>
                    <ChevronRightIcon className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 hover:bg-[#1E2230] rounded-lg transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-400"></div>
                    <div className="flex items-center gap-1">
                      <PlaneIcon className="h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                      <span className="text-sm group-hover:text-blue-400 transition-colors">
                        Travel
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">
                      {showValues ? '€350' : '•••'}
                    </span>
                    <span className="text-xs text-gray-400">10.4%</span>
                    <ChevronRightIcon className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 hover:bg-[#1E2230] rounded-lg transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-400"></div>
                    <div className="flex items-center gap-1">
                      <HeartIcon className="h-4 w-4 text-gray-400 group-hover:text-pink-400 transition-colors" />
                      <span className="text-sm group-hover:text-pink-400 transition-colors">
                        Health
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">
                      {showValues ? '€325' : '•••'}
                    </span>
                    <span className="text-xs text-gray-400">9.6%</span>
                    <ChevronRightIcon className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Savings Goals */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/20 h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="flex justify-between items-center mb-6 relative z-10">
              <h3 className="text-lg font-medium">Savings Goals</h3>
              <button className="text-purple-400 text-sm hover:text-purple-300 transition-colors flex items-center gap-1 group" onClick={() => setNewGoalModalOpen(true)}>
                <PlusIcon className="h-3 w-3" />
                Add New
              </button>
            </div>
            <div className="space-y-4 relative z-10">
              <div className="bg-[#1E2230]/80 backdrop-blur-sm p-4 rounded-lg border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/20 group cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium group-hover:text-purple-400 transition-colors">
                    Home Down Payment
                  </h4>
                  <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded-full">
                    Priority
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Progress</span>
                  <span>
                    {showValues ? '€45,000 / €75,000' : '••••• / •••••'}
                  </span>
                </div>
                <div className="w-full bg-[#0B0E15] rounded-full h-2 mb-1 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-2 rounded-full w-3/5 group-hover:animate-pulse"></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">60% completed</span>
                  <span className="text-purple-400">Target: Dec 2023</span>
                </div>
              </div>
              <div className="bg-[#1E2230]/80 backdrop-blur-sm p-4 rounded-lg border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-yellow-500/20 group cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium group-hover:text-yellow-400 transition-colors">
                    Travel Fund
                  </h4>
                  <span className="text-xs bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full">
                    Medium
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Progress</span>
                  <span>
                    {showValues ? '€3,500 / €5,000' : '••••• / •••••'}
                  </span>
                </div>
                <div className="w-full bg-[#0B0E15] rounded-full h-2 mb-1 overflow-hidden">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full w-[70%] group-hover:animate-pulse"></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">70% completed</span>
                  <span className="text-yellow-500">Target: Aug 2023</span>
                </div>
              </div>
              <div className="bg-[#1E2230]/80 backdrop-blur-sm p-4 rounded-lg border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-green-500/20 group cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium group-hover:text-green-400 transition-colors">
                    Emergency Fund
                  </h4>
                  <span className="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded-full flex items-center gap-1">
                    <CheckIcon className="h-3 w-3" />
                    Completed
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Progress</span>
                  <span>
                    {showValues ? '€15,000 / €15,000' : '••••• / •••••'}
                  </span>
                </div>
                <div className="w-full bg-[#0B0E15] rounded-full h-2 mb-1 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full w-full"></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">100% completed</span>
                  <span className="text-green-500">Completed: Mar 2023</span>
                </div>
              </div>
              <div className="bg-[#1E2230]/80 backdrop-blur-sm p-4 rounded-lg border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/20 group cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium group-hover:text-blue-400 transition-colors">
                    New Car
                  </h4>
                  <span className="text-xs bg-blue-500/10 text-blue-500 px-2 py-1 rounded-full">
                    Low
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Progress</span>
                  <span>
                    {showValues ? '€5,000 / €25,000' : '••••• / •••••'}
                  </span>
                </div>
                <div className="w-full bg-[#0B0E15] rounded-full h-2 mb-1 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full w-1/5 group-hover:animate-pulse"></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">20% completed</span>
                  <span className="text-blue-500">Target: Jun 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Recent Transactions */}
      <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-medium">Recent Transactions</h3>
            <div className="bg-purple-500/10 text-purple-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
              <BellIcon className="h-3 w-3" />
              Today (3)
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 bg-[#0B0E15]/80 backdrop-blur-sm rounded-lg hover:bg-[#1E2230] transition-all duration-200 text-gray-400 hover:text-white">
              <FilterIcon className="h-4 w-4" />
            </button>
            <button className="text-purple-400 text-sm hover:text-purple-300 transition-colors flex items-center group">
              View All
              <ArrowRightIcon className="h-3 w-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto custom-scrollbar relative z-10">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 text-sm border-b border-gray-800">
                <th className="pb-3 font-medium">Description</th>
                <th className="pb-3 font-medium">Category</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr className="text-sm hover:bg-[#1A1F2E]/50 transition-colors cursor-pointer group">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-red-500/30 to-red-500/10 p-2 rounded-lg shadow-lg group-hover:shadow-red-500/20 transition-all duration-300 group-hover:scale-110">
                      <ShoppingBagIcon className="h-4 w-4 text-red-500" />
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-red-400 transition-colors">
                        Amazon
                      </div>
                      <div className="text-xs text-gray-400">
                        Online Shopping
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4">Shopping</td>
                <td className="py-4">
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Today</span>
                  </div>
                </td>
                <td className="py-4 text-right text-red-500">
                  {showValues ? '-€89.95' : '-€••••'}
                </td>
              </tr>
              <tr className="text-sm hover:bg-[#1A1F2E]/50 transition-colors cursor-pointer group">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-red-500/30 to-red-500/10 p-2 rounded-lg shadow-lg group-hover:shadow-red-500/20 transition-all duration-300 group-hover:scale-110">
                      <UtensilsIcon className="h-4 w-4 text-red-500" />
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-red-400 transition-colors">
                        Grocery Store
                      </div>
                      <div className="text-xs text-gray-400">
                        Weekly Groceries
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4">Food</td>
                <td className="py-4">
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Yesterday</span>
                  </div>
                </td>
                <td className="py-4 text-right text-red-500">
                  {showValues ? '-€124.32' : '-€•••••'}
                </td>
              </tr>
              <tr className="text-sm hover:bg-[#1A1F2E]/50 transition-colors cursor-pointer group">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-green-500/30 to-green-500/10 p-2 rounded-lg shadow-lg group-hover:shadow-green-500/20 transition-all duration-300 group-hover:scale-110">
                      <DollarSignIcon className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-green-400 transition-colors">
                        Salary
                      </div>
                      <div className="text-xs text-gray-400">
                        Monthly Income
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4">Income</td>
                <td className="py-4">Jul 28, 2023</td>
                <td className="py-4 text-right text-green-500">
                  {showValues ? '+€3,450.00' : '+€•••••••'}
                </td>
              </tr>
              <tr className="text-sm hover:bg-[#1A1F2E]/50 transition-colors cursor-pointer group">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-red-500/30 to-red-500/10 p-2 rounded-lg shadow-lg group-hover:shadow-red-500/20 transition-all duration-300 group-hover:scale-110">
                      <HomeIcon className="h-4 w-4 text-red-500" />
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-red-400 transition-colors">
                        Rent Payment
                      </div>
                      <div className="text-xs text-gray-400">Monthly Rent</div>
                    </div>
                  </div>
                </td>
                <td className="py-4">Housing</td>
                <td className="py-4">Jul 26, 2023</td>
                <td className="py-4 text-right text-red-500">
                  {showValues ? '-€1,200.00' : '-€•••••••'}
                </td>
              </tr>
              <tr className="text-sm hover:bg-[#1A1F2E]/50 transition-colors cursor-pointer group">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-red-500/30 to-red-500/10 p-2 rounded-lg shadow-lg group-hover:shadow-red-500/20 transition-all duration-300 group-hover:scale-110">
                      <CarIcon className="h-4 w-4 text-red-500" />
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-red-400 transition-colors">
                        Gas Station
                      </div>
                      <div className="text-xs text-gray-400">Fuel</div>
                    </div>
                  </div>
                </td>
                <td className="py-4">Transport</td>
                <td className="py-4">Jul 24, 2023</td>
                <td className="py-4 text-right text-red-500">
                  {showValues ? '-€65.75' : '-€••••'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* New Goal Modal (not shown by default) */}
      {newGoalModalOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/50 shadow-2xl w-full max-w-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex justify-between items-center mb-6 relative z-10">
              <h3 className="text-lg font-medium">Create New Savings Goal</h3>
              <button onClick={() => setNewGoalModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4 relative z-10">
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Goal Name
                </label>
                <input type="text" placeholder="e.g. New Laptop" className="w-full bg-[#0B0E15] rounded-lg px-4 py-2 border border-gray-800/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Target Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    €
                  </span>
                  <input type="number" placeholder="0.00" className="w-full bg-[#0B0E15] rounded-lg pl-10 pr-4 py-2 border border-gray-800/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Target Date
                </label>
                <input type="date" className="w-full bg-[#0B0E15] rounded-lg px-4 py-2 border border-gray-800/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Priority
                </label>
                <select className="w-full bg-[#0B0E15] rounded-lg px-4 py-2 border border-gray-800/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50">
                  <option value="high">High Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="low">Low Priority</option>
                </select>
              </div>
              <div className="pt-4 flex gap-3">
                <button onClick={() => setNewGoalModalOpen(false)} className="flex-1 bg-[#0B0E15] text-gray-300 py-2 rounded-lg hover:bg-[#1A1F2E] transition-all">
                  Cancel
                </button>
                <button onClick={() => setNewGoalModalOpen(false)} className="flex-1 bg-gradient-to-r from-purple-500 to-purple-400 text-white py-2 rounded-lg hover:from-purple-400 hover:to-purple-300 transition-all shadow-lg hover:shadow-purple-500/20">
                  Create Goal
                </button>
              </div>
            </div>
          </div>
        </div>}
      {/* Custom animations */}
      <style jsx global>{`
        @keyframes drawCircle {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-drawCircle {
          animation: drawCircle 1.5s ease-in-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a1f2e;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #2d3748;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4a5568;
        }
      `}</style>
    </div>;
};