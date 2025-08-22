import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  className = '', 
  animated = true 
}) => {
  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* Company Name */}
      <motion.div
        className="flex items-center"
        initial={animated ? { opacity: 0, x: -10 } : {}}
        animate={animated ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <span className={`font-extrabold tracking-tight ${textSizes[size]}`}>
          <span className="bg-gradient-to-r from-purple-500 via-purple-600 to-black bg-clip-text text-transparent">
            AI
          </span>
          <span className="text-white">
            Vesting
          </span>
        </span>
        <motion.span
          className="text-white/60 ml-1 text-2xl"
          animate={animated ? { opacity: [0.6, 1, 0.6] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          .
        </motion.span>
      </motion.div>
    </div>
  );
};

// Variant for header usage
export const HeaderLogo: React.FC<LogoProps> = (props) => (
  <Logo {...props} size="md" animated={true} />
);

// Variant for hero sections
export const HeroLogo: React.FC<LogoProps> = (props) => (
  <Logo {...props} size="lg" animated={true} />
);

// Variant for compact usage (e.g., dashboard)
export const CompactLogo: React.FC<LogoProps> = (props) => (
  <Logo {...props} size="sm" animated={false} />
); 