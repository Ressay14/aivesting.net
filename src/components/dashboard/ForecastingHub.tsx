import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TargetIcon, DollarSignIcon, CalendarIcon, TrendingUpIcon, BrainIcon } from 'lucide-react';

interface ForecastData {
  age: number;
  projectedValue: number;
  targetValue: number;
  savings: number;
}

interface ForecastInputs {
  currentIncome: number;
  monthlySavings: number;
  targetRetirementAge: number;
  currentAge: number;
  currentSavings: number;
}

export const ForecastingHub: React.FC = () => {
  const [inputs, setInputs] = useState<ForecastInputs>({
    currentIncome: 75000,
    monthlySavings: 1500,
    targetRetirementAge: 65,
    currentAge: 30,
    currentSavings: 50000
  });

  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [aiInsight, setAiInsight] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    calculateForecast();
  }, [inputs]);

  const calculateForecast = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const yearsToRetirement = inputs.targetRetirementAge - inputs.currentAge;
      const data: ForecastData[] = [];
      
      let currentValue = inputs.currentSavings;
      const monthlyReturn = 0.007; // 7% annual return / 12 months
      
      for (let i = 0; i <= yearsToRetirement; i++) {
        const age = inputs.currentAge + i;
        const yearlySavings = inputs.monthlySavings * 12;
        
        // Compound growth calculation
        currentValue = (currentValue + yearlySavings) * Math.pow(1 + monthlyReturn, 12);
        
        data.push({
          age,
          projectedValue: Math.round(currentValue),
          targetValue: 500000, // Target retirement amount
          savings: yearlySavings
        });
      }
      
      setForecastData(data);
      
      // Generate AI insight
      const finalValue = data[data.length - 1]?.projectedValue || 0;
      const targetReached = finalValue >= 500000;
      const yearsToTarget = data.find(d => d.projectedValue >= 500000)?.age || inputs.targetRetirementAge;
      
      if (targetReached) {
        setAiInsight(`🎯 You'll reach €500,000 by age ${yearsToTarget} at current rate. Consider increasing monthly savings by €300 to reach €1M by age 50.`);
      } else {
        const shortfall = 500000 - finalValue;
        const additionalSavings = Math.round(shortfall / (yearsToRetirement * 12));
        setAiInsight(`⚠️ You'll need to save an additional €${additionalSavings}/month to reach your €500,000 target. Consider increasing your savings rate or adjusting your retirement age.`);
      }
      
      setIsCalculating(false);
    }, 1000);
  };

  const handleInputChange = (field: keyof ForecastInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-[#151822]/90 to-[#1A1F2E]/90 p-6 rounded-xl border border-gray-800/30 shadow-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <TargetIcon className="h-5 w-5 text-blue-500" />
          Forecasting Hub
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Form */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Financial Profile</h3>
            
            <div>
              <label className="block text-sm font-medium mb-2">Current Age</label>
              <input
                type="number"
                value={inputs.currentAge}
                onChange={(e) => handleInputChange('currentAge', parseInt(e.target.value) || 0)}
                className="w-full bg-[#23263A] rounded-lg px-4 py-3 text-white border border-gray-800 focus:border-yellow-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Current Income (€/year)</label>
              <input
                type="number"
                value={inputs.currentIncome}
                onChange={(e) => handleInputChange('currentIncome', parseInt(e.target.value) || 0)}
                className="w-full bg-[#23263A] rounded-lg px-4 py-3 text-white border border-gray-800 focus:border-yellow-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Current Savings</label>
              <input
                type="number"
                value={inputs.currentSavings}
                onChange={(e) => handleInputChange('currentSavings', parseInt(e.target.value) || 0)}
                className="w-full bg-[#23263A] rounded-lg px-4 py-3 text-white border border-gray-800 focus:border-yellow-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Monthly Savings (€)</label>
              <input
                type="number"
                value={inputs.monthlySavings}
                onChange={(e) => handleInputChange('monthlySavings', parseInt(e.target.value) || 0)}
                className="w-full bg-[#23263A] rounded-lg px-4 py-3 text-white border border-gray-800 focus:border-yellow-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Target Retirement Age</label>
              <input
                type="number"
                value={inputs.targetRetirementAge}
                onChange={(e) => handleInputChange('targetRetirementAge', parseInt(e.target.value) || 0)}
                className="w-full bg-[#23263A] rounded-lg px-4 py-3 text-white border border-gray-800 focus:border-yellow-500 focus:outline-none"
              />
            </div>
          </div>

          {/* AI Insights */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">AI Projection</h3>
            
            <div className="bg-[#23263A] p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <BrainIcon className="h-5 w-5 text-yellow-500" />
                <span className="font-medium">AI Insight</span>
              </div>
              {isCalculating ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-500"></div>
                  <span className="text-sm text-gray-400">Calculating projection...</span>
                </div>
              ) : (
                <p className="text-sm text-gray-300">{aiInsight}</p>
              )}
            </div>

            {forecastData.length > 0 && (
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#23263A] p-3 rounded-lg text-center">
                  <div className="text-lg font-bold text-green-500">
                    {formatCurrency(forecastData[forecastData.length - 1]?.projectedValue || 0)}
                  </div>
                  <div className="text-xs text-gray-400">Projected at {inputs.targetRetirementAge}</div>
                </div>
                <div className="bg-[#23263A] p-3 rounded-lg text-center">
                  <div className="text-lg font-bold text-blue-500">
                    {formatCurrency(500000)}
                  </div>
                  <div className="text-xs text-gray-400">Target Amount</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Forecast Chart */}
        {forecastData.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4">Net Worth Projection</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={forecastData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="age" 
                    stroke="#9CA3AF"
                    label={{ value: 'Age', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis 
                    stroke="#9CA3AF"
                    tickFormatter={(value) => formatCurrency(value)}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                    formatter={(value: number) => [formatCurrency(value), 'Value']}
                    labelFormatter={(label) => `Age ${label}`}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="projectedValue" 
                    stroke="#10B981" 
                    strokeWidth={3}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                    name="Projected Value"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="targetValue" 
                    stroke="#F59E0B" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Target Value"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 