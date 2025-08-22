import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { 
  UnifiedState, 
  WealthPulseState, 
  PortfolioSnapshot, 
  AIRec, 
  Goal, 
  RiskProfile,
  AIEfficiencyBreakdown 
} from '../types/aiCopilot';
import { 
  runOptimization, 
  runRiskAssessment, 
  runBacktest,
  simulateGoalImpact,
  analyzeSpendingOptimization,
  calculatePortfolioHealth
} from '../skills';

// AI Co-Pilot Context - Manages unified state across all products

interface AICopilotContextType {
  state: UnifiedState;
  dispatch: React.Dispatch<AICopilotAction>;
  runOptimization: () => Promise<void>;
  runRiskAssessment: () => Promise<void>;
  simulateSpendingOptimization: () => Promise<void>;
  generateRecommendations: () => Promise<void>;
  executeAction: (recId: string) => Promise<void>;
  updateGoal: (goalId: string, updates: Partial<Goal>) => void;
  updateRiskProfile: (updates: Partial<RiskProfile>) => void;
}

type AICopilotAction = 
  | { type: 'SET_WEALTH_PULSE_STATE'; payload: WealthPulseState }
  | { type: 'SET_PORTFOLIO'; payload: PortfolioSnapshot }
  | { type: 'SET_AI_EFFICIENCY'; payload: AIEfficiencyBreakdown }
  | { type: 'ADD_RECOMMENDATION'; payload: AIRec }
  | { type: 'UPDATE_RECOMMENDATION'; payload: { id: string; updates: Partial<AIRec> } }
  | { type: 'REMOVE_RECOMMENDATION'; payload: string }
  | { type: 'SET_OPTIMIZATION_RESULT'; payload: any }
  | { type: 'SET_RISK_ASSESSMENT'; payload: any }
  | { type: 'SET_BACKTEST_RESULT'; payload: any }
  | { type: 'UPDATE_GOAL'; payload: { id: string; updates: Partial<Goal> } }
  | { type: 'UPDATE_RISK_PROFILE'; payload: Partial<RiskProfile> };

const initialState: UnifiedState = {
  wealthPulse: {
    netWorth: 342500,
    cashFlowMonthly: 2450,
    spending: [
      { category: 'Housing', monthlyAvg: 1200, elasticity: 0.2, variance: 50, trend: 'stable', optimizationPotential: 60 },
      { category: 'Dining', monthlyAvg: 450, elasticity: 0.7, variance: 120, trend: 'up', optimizationPotential: 150 },
      { category: 'Transportation', monthlyAvg: 300, elasticity: 0.5, variance: 80, trend: 'down', optimizationPotential: 90 },
      { category: 'Entertainment', monthlyAvg: 200, elasticity: 0.8, variance: 100, trend: 'stable', optimizationPotential: 120 }
    ],
    goals: [
      {
        id: 'house',
        type: 'House',
        targetAmount: 500000,
        targetDate: '2027-12-31',
        priority: 'High',
        fundingSource: ['Investments'],
        currentProgress: 25,
        monthlyContribution: 2000,
        category: 'Primary Residence'
      },
      {
        id: 'travel',
        type: 'Travel',
        targetAmount: 25000,
        targetDate: '2025-06-30',
        priority: 'Medium',
        fundingSource: ['Cash'],
        currentProgress: 34,
        monthlyContribution: 500,
        category: 'Bucket List'
      },
      {
        id: 'retirement',
        type: 'Retirement',
        targetAmount: 1000000,
        targetDate: '2040-12-31',
        priority: 'High',
        fundingSource: ['Investments'],
        currentProgress: 45,
        monthlyContribution: 1500,
        category: 'Financial Independence'
      }
    ],
    aiEfficiencyScore: 87,
    goalAlignment: 85,
    spendingEfficiency: 78,
    investmentOptimization: 82
  },
  portfolio: {
    timestamp: new Date().toISOString(),
    value: 456800,
    holdings: [
      { symbol: 'SPY', name: 'SPDR S&P 500 ETF', assetClass: 'ETF', currency: 'USD', quantity: 500, price: 450, weight: 0.35, sector: 'Broad Market', country: 'US' },
      { symbol: 'QQQ', name: 'Invesco QQQ Trust', assetClass: 'ETF', currency: 'USD', quantity: 300, price: 380, weight: 0.25, sector: 'Technology', country: 'US' },
      { symbol: 'BND', name: 'Vanguard Total Bond Market ETF', assetClass: 'ETF', currency: 'USD', quantity: 800, price: 75, weight: 0.20, sector: 'Fixed Income', country: 'US' },
      { symbol: 'GLD', name: 'SPDR Gold Shares', assetClass: 'ETF', currency: 'USD', quantity: 100, price: 190, weight: 0.10, sector: 'Commodities', country: 'US' },
      { symbol: 'CASH', name: 'Cash', assetClass: 'Cash', currency: 'EUR', quantity: 45680, price: 1, weight: 0.10, sector: 'Cash', country: 'EU' }
    ],
    benchmark: 'SPX',
    riskProfile: {
      level: 'Moderate',
      maxDrawdown: 15,
      var99: 2.5,
      timeHorizon: 15,
      liquidityNeeds: 6
    },
    cashAvailable: 45680,
    totalReturn: 12.5,
    volatility: 18.2,
    sharpeRatio: 1.45,
    maxDrawdown: 12.3,
    var99: 2.1
  },
  aiEfficiency: {
    overall: 87,
    goalAlignment: 85,
    spendingEfficiency: 78,
    investmentOptimization: 82,
    peerComparison: {
      percentile: 85,
      rank: 'top 15%',
      improvement: '+15% vs peers'
    },
    insights: [
      'Your portfolio is well-diversified but could benefit from international exposure',
      'Spending optimization could free up €420/month for investment',
      'Goal alignment is excellent, with retirement on track for early achievement'
    ],
    recommendations: [
      'Consider reducing dining out by 15% to accelerate travel goal by 3 months',
      'Add international ETFs to improve diversification and reduce US concentration',
      'Emergency fund is well-funded, consider investing excess cash for better returns'
    ]
  },
  activeAlerts: [],
  pendingActions: []
};

function aiCopilotReducer(state: UnifiedState, action: AICopilotAction): UnifiedState {
  switch (action.type) {
    case 'SET_WEALTH_PULSE_STATE':
      return { ...state, wealthPulse: action.payload };
    
    case 'SET_PORTFOLIO':
      return { ...state, portfolio: action.payload };
    
    case 'SET_AI_EFFICIENCY':
      return { ...state, aiEfficiency: action.payload };
    
    case 'ADD_RECOMMENDATION':
      return { 
        ...state, 
        pendingActions: [...state.pendingActions, action.payload] 
      };
    
    case 'UPDATE_RECOMMENDATION':
      return {
        ...state,
        pendingActions: state.pendingActions.map(rec => 
          rec.id === action.payload.id 
            ? { ...rec, ...action.payload.updates }
            : rec
        )
      };
    
    case 'REMOVE_RECOMMENDATION':
      return {
        ...state,
        pendingActions: state.pendingActions.filter(rec => rec.id !== action.payload)
      };
    
    case 'SET_OPTIMIZATION_RESULT':
      return { ...state, lastOptimization: action.payload };
    
    case 'SET_RISK_ASSESSMENT':
      return { ...state, lastRiskAssessment: action.payload };
    
    case 'SET_BACKTEST_RESULT':
      return { ...state, lastBacktest: action.payload };
    
    case 'UPDATE_GOAL':
      return {
        ...state,
        wealthPulse: {
          ...state.wealthPulse,
          goals: state.wealthPulse.goals.map(goal =>
            goal.id === action.payload.id
              ? { ...goal, ...action.payload.updates }
              : goal
          )
        }
      };
    
    case 'UPDATE_RISK_PROFILE':
      return {
        ...state,
        portfolio: {
          ...state.portfolio,
          riskProfile: { ...state.portfolio.riskProfile, ...action.payload }
        }
      };
    
    default:
      return state;
  }
}

const AICopilotContext = createContext<AICopilotContextType | undefined>(undefined);

export function AICopilotProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(aiCopilotReducer, initialState);

  // Run portfolio optimization
  const executeOptimization = async () => {
    try {
      const result = await runOptimization({
        portfolio: state.portfolio,
        goals: state.wealthPulse.goals,
        risk: state.portfolio.riskProfile
      });
      
      dispatch({ type: 'SET_OPTIMIZATION_RESULT', payload: result });
      
      // Generate new recommendations based on optimization
      await generateRecommendations();
    } catch (error) {
      console.error('Optimization failed:', error);
    }
  };

  // Run risk assessment
  const executeRiskAssessment = async () => {
    try {
      const result = await runRiskAssessment({
        portfolio: state.portfolio
      });
      
      dispatch({ type: 'SET_RISK_ASSESSMENT', payload: result });
    } catch (error) {
      console.error('Risk assessment failed:', error);
    }
  };

  // Simulate spending optimization impact
  const simulateSpendingOptimization = async () => {
    try {
      const result = await analyzeSpendingOptimization({
        spending: state.wealthPulse.spending.map(s => ({
          category: s.category,
          monthlyAvg: s.monthlyAvg,
          elasticity: s.elasticity || 0.5
        })),
        goals: state.wealthPulse.goals
      });
      
      // Create recommendation for spending optimization
      const rec: AIRec = {
        id: `spending_opt_${Date.now()}`,
        action: 'BudgetShift',
        confidence: 0.85,
        horizonDays: 30,
        rationale: [
          `Optimize spending to free up €${result.optimizationPotential}/month`,
          'Focus on high-elasticity categories for maximum impact',
          'Redirect savings to accelerate goal achievement'
        ],
        expectedImpact: {
          cashFlowImpact: result.optimizationPotential,
          goalTimeDeltaMonths: -3
        },
        skillUsed: 'SpendingOptimization',
        signals: [
          {
            id: 'spending_elasticity',
            type: 'Macro',
            strength: 0.8,
            evidence: 'High elasticity in dining and entertainment categories',
            lastUpdated: new Date().toISOString(),
            source: 'WealthPulse',
            confidence: 0.9
          }
        ],
        priority: 'High',
        category: 'Spending',
        createdAt: new Date().toISOString()
      };
      
      dispatch({ type: 'ADD_RECOMMENDATION', payload: rec });
    } catch (error) {
      console.error('Spending optimization simulation failed:', error);
    }
  };

  // Generate AI recommendations
  const generateRecommendations = async () => {
    try {
      // Portfolio health assessment
      const health = await calculatePortfolioHealth({
        portfolio: state.portfolio,
        goals: state.wealthPulse.goals,
        risk: state.portfolio.riskProfile
      });
      
      // Goal impact simulation
      const goalImpact = await simulateGoalImpact({
        portfolio: state.portfolio,
        goals: state.wealthPulse.goals,
        changes: {
          monthlyInvestment: 500,
          riskAdjustment: 'Moderate'
        }
      });
      
      // Create portfolio optimization recommendation
      if (health.overallScore < 90) {
        const portfolioRec: AIRec = {
          id: `portfolio_opt_${Date.now()}`,
          action: 'Rebalance',
          confidence: 0.78,
          horizonDays: 7,
          rationale: [
            `Portfolio health score: ${health.overallScore}/100`,
            'Diversification could be improved with international exposure',
            'Risk alignment is good but could be optimized'
          ],
          expectedImpact: {
            expectedReturn: 0.8,
            drawdownDelta: -2.1,
            sharpeDelta: 0.15
          },
          skillUsed: 'PortfolioOptimization',
          signals: [
            {
              id: 'diversification_score',
              type: 'Valuation',
              strength: 0.6,
              evidence: `Diversification score: ${health.breakdown.diversification}/100`,
              lastUpdated: new Date().toISOString(),
              source: 'PortfolioHealth',
              confidence: 0.8
            }
          ],
          priority: 'Medium',
          category: 'Portfolio',
          createdAt: new Date().toISOString()
        };
        
        dispatch({ type: 'ADD_RECOMMENDATION', payload: portfolioRec });
      }
      
      // Goal acceleration recommendations
      Object.entries(goalImpact.goalTimeDelta).forEach(([goalId, monthsDelta]) => {
        if (monthsDelta < -3) { // Significant improvement
          const goalRec: AIRec = {
            id: `goal_accel_${goalId}_${Date.now()}`,
            action: 'GoalAdjust',
            target: { goalId },
            confidence: 0.82,
            horizonDays: 90,
            rationale: [
              `Accelerate ${goalId} goal by ${Math.abs(monthsDelta)} months`,
              'Increase monthly contribution or optimize portfolio allocation',
              'Consider risk-adjusted strategies for faster achievement'
            ],
            expectedImpact: {
              goalTimeDeltaMonths: monthsDelta
            },
            skillUsed: 'GoalImpactSimulation',
            signals: [
              {
                id: 'goal_timeline',
                type: 'Macro',
                strength: 0.7,
                evidence: `Timeline improvement: ${Math.abs(monthsDelta)} months`,
                lastUpdated: new Date().toISOString(),
                source: 'GoalSimulation',
                confidence: 0.8
              }
            ],
            priority: 'Medium',
            category: 'Goal',
            createdAt: new Date().toISOString()
          };
          
          dispatch({ type: 'ADD_RECOMMENDATION', payload: goalRec });
        }
      });
      
    } catch (error) {
      console.error('Recommendation generation failed:', error);
    }
  };

  // Execute an AI recommendation
  const executeAction = async (recId: string) => {
    const rec = state.pendingActions.find(r => r.id === recId);
    if (!rec) return;
    
    try {
      // Simulate execution
      console.log('Executing recommendation:', rec);
      
      // Remove from pending actions
      dispatch({ type: 'REMOVE_RECOMMENDATION', payload: recId });
      
      // Update state based on action type
      if (rec.action === 'BudgetShift') {
        // Update spending patterns
        const updatedSpending = state.wealthPulse.spending.map(cat => ({
          ...cat,
          optimizationPotential: Math.max(0, cat.optimizationPotential - 50)
        }));
        
        dispatch({
          type: 'SET_WEALTH_PULSE_STATE',
          payload: {
            ...state.wealthPulse,
            spending: updatedSpending
          }
        });
      }
      
      // Regenerate recommendations
      await generateRecommendations();
      
    } catch (error) {
      console.error('Action execution failed:', error);
    }
  };

  // Update goal
  const updateGoal = (goalId: string, updates: Partial<Goal>) => {
    dispatch({ type: 'UPDATE_GOAL', payload: { id: goalId, updates } });
  };

  // Update risk profile
  const updateRiskProfile = (updates: Partial<RiskProfile>) => {
    dispatch({ type: 'UPDATE_RISK_PROFILE', payload: updates });
  };

  // Initial recommendation generation
  useEffect(() => {
    generateRecommendations();
  }, []);

  const value: AICopilotContextType = {
    state,
    dispatch,
    runOptimization: executeOptimization,
    runRiskAssessment: executeRiskAssessment,
    simulateSpendingOptimization,
    generateRecommendations,
    executeAction,
    updateGoal,
    updateRiskProfile
  };

  return (
    <AICopilotContext.Provider value={value}>
      {children}
    </AICopilotContext.Provider>
  );
}

export function useAICopilot() {
  const context = useContext(AICopilotContext);
  if (context === undefined) {
    throw new Error('useAICopilot must be used within an AICopilotProvider');
  }
  return context;
} 