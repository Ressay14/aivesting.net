import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { Onboarding } from './components/Onboarding';
import LearnPage from './components/LearnPage';
import AIAssistant from './components/AIAssistant';
import AboutPage from './components/AboutPage';
import PlansPage from './components/PlansPage';
import UserProfile from './components/UserProfile';
import { AICopilotProvider } from './lib/context/AICopilotContext';
import { AuthProvider } from './lib/context/AuthContext';
import AICopilotDashboard from './components/dashboard/AICopilotDashboard';

// Wrapper components for Login and SignUp
const LoginWrapper = () => {
  const onComplete = () => {
    console.log('Login completed');
    // Handle login completion
  };
  return <Login onComplete={onComplete} />;
};

const SignUpWrapper = () => {
  const onSignUpSuccess = () => {
    console.log('Sign up successful');
    // Handle sign up success
  };
  return <SignUp onSignUpSuccess={onSignUpSuccess} />;
};

function App() {
  return (
    <AuthProvider>
      <AICopilotProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/ai-copilot" element={<AICopilotDashboard />} />
            <Route path="/login" element={<LoginWrapper />} />
            <Route path="/signup" element={<SignUpWrapper />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/ai-assistant-marketing" element={<AIAssistant />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
      </AICopilotProvider>
    </AuthProvider>
  );
}

export default App;
