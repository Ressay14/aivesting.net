import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { KnowledgeOnboarding } from './KnowledgeOnboarding';
import { KnowledgeRoadmap } from './KnowledgeRoadmap';
import { CompoundInterestModule } from './CompoundInterestModule';
import { RiskReturnModule } from './RiskReturnModule';
import { DiversificationModule } from './DiversificationModule';
import { AssetAllocationModule } from './AssetAllocationModule';
import { MarketCyclesModule } from './MarketCyclesModule';
import { KnowledgeProgress } from './KnowledgeProgress';

export const KnowledgeMain: React.FC = () => {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user has completed onboarding
    const onboardingData = localStorage.getItem('finance_mastery_onboarding');
    setHasCompletedOnboarding(!!onboardingData);
  }, []);

  // Show loading while checking onboarding status
  if (hasCompletedOnboarding === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0B0E15] via-[#181C2A] to-[#23263A] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          hasCompletedOnboarding 
            ? <Navigate to="/knowledge/roadmap" replace /> 
            : <Navigate to="/knowledge/onboarding" replace />
        } 
      />
      <Route path="/onboarding" element={<KnowledgeOnboarding />} />
      <Route path="/roadmap" element={<KnowledgeRoadmap />} />
      <Route path="/compound-interest" element={<CompoundInterestModule />} />
      <Route path="/risk-return" element={<RiskReturnModule />} />
      <Route path="/diversification" element={<DiversificationModule />} />
      <Route path="/asset-allocation" element={<AssetAllocationModule />} />
      <Route path="/market-cycles" element={<MarketCyclesModule />} />
      <Route path="/profile" element={<KnowledgeProgress />} />
    </Routes>
  );
}; 