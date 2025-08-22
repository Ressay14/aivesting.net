// AI Co-Pilot Core Data Contracts
// Unifies MarketPro × WealthPulse × Tools with one intelligent brain

export interface RiskProfile {
  level: 'Conservative' | 'Moderate' | 'Aggressive';
  maxDrawdown?: number;          // %
  var99?: number;                // %
  constraints?: string[];        // e.g., "no tobacco", "EU bias 60%+"
  timeHorizon: number;           // years
  liquidityNeeds: number;        // months of expenses
}

export interface Goal {
  id: string;
  type: 'House' | 'Travel' | 'Retirement' | 'Emergency' | 'Custom';
  targetAmount: number;          // €
  targetDate: string;            // ISO
  priority: 'Low' | 'Medium' | 'High';
  fundingSource: ('Cash' | 'Investments' | 'Both')[];
  currentProgress: number;       // %
  monthlyContribution: number;   // €
  category: string;              // e.g., 'Primary Residence', 'Bucket List'
}

export interface SpendingPattern {
  category: string;              // e.g., 'Dining'
  monthlyAvg: number;            // €
  elasticity?: number;           // AI-estimated ease of reduction (0–1)
  variance: number;              // monthly spending volatility
  trend: 'up' | 'down' | 'stable';
  optimizationPotential: number; // €/month if optimized
}

export interface WealthPulseState {
  netWorth: number;
  cashFlowMonthly: number;
  spending: SpendingPattern[];
  goals: Goal[];
  aiEfficiencyScore: number;     // 0–100
  goalAlignment: number;         // 0-100
  spendingEfficiency: number;    // 0-100
  investmentOptimization: number; // 0-100
}

export interface Holding {
  symbol: string;
  name: string;
  assetClass: 'Stock' | 'ETF' | 'Bond' | 'Crypto' | 'Cash' | 'Other';
  currency: string;
  quantity: number;
  price: number;                 // latest
  weight?: number;               // %
  sector?: string;
  country?: string;
  marketCap?: number;
  pe?: number;
  dividendYield?: number;
  beta?: number;
}

export interface PortfolioSnapshot {
  timestamp: string;
  value: number;
  holdings: Holding[];
  benchmark: 'SPX' | 'STOXX50' | 'Custom';
  riskProfile: RiskProfile;
  cashAvailable: number;
  totalReturn: number;           // %
  volatility: number;            // %
  sharpeRatio: number;
  maxDrawdown: number;           // %
  var99: number;                 // %
}

export interface Signal {
  id: string;
  type: 'Valuation' | 'Momentum' | 'Macro' | 'Earnings' | 'Sentiment' | 'Flow';
  strength: number;     // -1..+1
  evidence: string;     // short text, e.g., "PE 1.1σ below 3y mean"
  lastUpdated: string;
  source: string;       // e.g., "MarketPro", "WealthPulse", "External API"
  confidence: number;   // 0-1
}

export interface AIRec {
  id: string;
  action: 'Buy' | 'Sell' | 'Hold' | 'Rebalance' | 'BudgetShift' | 'GoalAdjust';
  target?: { 
    symbol?: string; 
    weight?: number; 
    amount?: number;
    goalId?: string;
  };
  confidence: number;            // 0–1
  horizonDays: number;
  rationale: string[];           // bullet points
  expectedImpact: {              // all optional, show what we have
    expectedReturn?: number;     // %
    drawdownDelta?: number;      // %
    sharpeDelta?: number;
    goalTimeDeltaMonths?: number;// reach goal earlier/later
    cashFlowImpact?: number;     // €/month
  };
  blockers?: string[];           // e.g., "exceeds EU allocation constraint"
  skillUsed?: string;            // which Tool produced this (Risk/Backtest/Opt)
  signals: Signal[];             // top 3 driving signals
  priority: 'Low' | 'Medium' | 'High';
  category: 'Portfolio' | 'Spending' | 'Goal' | 'Risk' | 'Tax';
  createdAt: string;
  expiresAt?: string;
}

export interface OptimizationResult {
  targetWeights: Record<string, number>;
  metrics: {
    sharpe: number;
    var99: number;
    drawdown: number;
    expectedReturn: number;
    goalTimeImprovement: Record<string, number>; // goalId -> months earlier
  };
  constraints: string[];
  rebalanceCost: number;
  taxImplications: string[];
}

export interface RiskAssessment {
  exposures: {
    sector: Record<string, number>;
    country: Record<string, number>;
    assetClass: Record<string, number>;
    currency: Record<string, number>;
  };
  hiddenRisks: string[];
  stressTest: Record<string, number>;
  correlationMatrix: Record<string, Record<string, number>>;
  concentrationRisk: string[];
}

export interface BacktestResult {
  strategyDescriptor: string;
  lookbackYears: number;
  benchmark: string;
  cagr: number;
  sharpe: number;
  maxDrawdown: number;
  hitRate: number;
  equityCurve: number[];
  benchmarkComparison: {
    excessReturn: number;
    trackingError: number;
    informationRatio: number;
  };
}

export interface Alert {
  id: string;
  name: string;
  condition: string; // e.g., "META price -5% day OR VIX>25"
  action: 'Notify' | 'ProposeRebalance' | 'AutoExecute';
  status: 'Active' | 'Triggered' | 'Paused';
  createdAt: string;
  lastTriggered?: string;
  triggerCount: number;
}

export interface AIEfficiencyBreakdown {
  overall: number;               // 0-100
  goalAlignment: number;         // 0-100
  spendingEfficiency: number;    // 0-100
  investmentOptimization: number; // 0-100
  peerComparison: {
    percentile: number;
    rank: string;
    improvement: string;
  };
  insights: string[];
  recommendations: string[];
}

export interface UnifiedState {
  wealthPulse: WealthPulseState;
  portfolio: PortfolioSnapshot;
  aiEfficiency: AIEfficiencyBreakdown;
  activeAlerts: Alert[];
  pendingActions: AIRec[];
  lastOptimization?: OptimizationResult;
  lastRiskAssessment?: RiskAssessment;
  lastBacktest?: BacktestResult;
} 