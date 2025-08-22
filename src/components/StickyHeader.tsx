import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HeaderLogo } from './Logo';

export default function StickyHeader() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      
      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "Learn", href: "/learn" },
    { name: "AI Assistant", href: "/ai-assistant-marketing" },
    { name: "Plans", href: "/#pricing" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "About", href: "/about" }
  ];

  return (
    <>
      {/* Main Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0B0E17]/95 backdrop-blur-xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Scroll Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800/30">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
            style={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <HeaderLogo />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  className="relative px-4 py-2 text-white/80 hover:text-white transition-colors duration-200 font-medium"
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                    style={{ originX: 0 }}
                  />
                </motion.button>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.button
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
                onClick={() => navigate('/login')}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Log in
              </motion.button>
              <motion.button
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/signup')}
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden bg-[#0B0E17]/95 backdrop-blur-xl border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    className="block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
                    onClick={() => {
                      scrollToSection(item.href);
                      setIsOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <div className="pt-4 space-y-2">
                  <motion.button
                    className="block w-full text-center px-4 py-3 text-white/80 hover:text-white transition-colors duration-200 font-medium"
                    onClick={() => {
                      navigate('/login');
                      setIsOpen(false);
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                  >
                    Log in
                  </motion.button>
                  <motion.button
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold transition-all duration-300"
                    onClick={() => {
                      navigate('/signup');
                      setIsOpen(false);
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1 + 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
} 