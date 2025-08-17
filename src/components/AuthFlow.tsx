import React, { useState } from 'react';
import { Login } from './Login';
import { Onboarding } from './Onboarding';
import { useNavigate } from 'react-router-dom';
interface AuthFlowProps {
  onLoginSuccess?: () => void;
}
export const AuthFlow = ({
  onLoginSuccess
}: AuthFlowProps) => {
  const [step, setStep] = useState<'login' | 'onboarding'>('login');
  const navigate = useNavigate();
  const handleLoginComplete = () => {
    setStep('onboarding');
  };
  const handleOnboardingComplete = () => {
    if (onLoginSuccess) {
      onLoginSuccess();
    }
    navigate('/dashboard');
  };
  return <main className="min-h-screen w-full bg-[#0B0E15] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {step === 'login' ? <Login onComplete={handleLoginComplete} /> : <Onboarding onComplete={handleOnboardingComplete} />}
      </div>
    </main>;
};