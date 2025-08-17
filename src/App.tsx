import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { AuthFlow } from './components/AuthFlow';
import { HomePage } from './components/HomePage';
import { Dashboard } from './components/Dashboard';
import { PlansPage } from './components/PlansPage';
import { ToolDetail } from './components/ToolDetail';
import { SignUp } from './components/SignUp';
import { supabase } from './lib/supabaseClient'; // ✅ for session tracking
import FeaturesPage from './components/FeaturesPage';
import { KnowledgeMain } from './components/knowledge/KnowledgeMain';
import { LearnPage } from './components/LearnPage';
import { ArticleViewer } from './components/ArticleViewer';
import { AIFinancialAssistant } from './components/dashboard/AIFinancialAssistant';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // ✅ Check if user is logged in (persisted login)
  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };

    getSession();

    // ✅ Listen for login/logout changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/login" element={<AuthFlow onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/signup" element={<SignUp onSignUpSuccess={() => window.location.href = '/dashboard'} />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/learn/article/:articleId" element={<ArticleViewer />} />
        <Route path="/knowledge/*" element={<KnowledgeMain />} />
        <Route path="/ai-assistant" element={<AIFinancialAssistant />} />
        <Route
          path="/dashboard/*"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        >
          <Route path="tools/:toolId" element={<ToolDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}
