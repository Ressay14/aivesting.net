import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';
import { useTransform, useScroll } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay: d } },
});

export default function HeroBand() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0B0E17] text-white [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]">
      <Spline scene="https://prod.spline.design/XZ7AZXC5Y2yc7Q9Q/scene.splinecode" className="h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0B0E17]/70 via-[#0B0E17]/40 to-transparent" />
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <motion.span 
          {...fadeUp(0.05)} 
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-white/70 backdrop-blur font-medium"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        >
          AI-Powered • WealthPulse & MarketPro
        </motion.span>
        <motion.h1 
          {...fadeUp(0.15)} 
          className="mt-5 max-w-4xl text-5xl font-extra-bold leading-tight sm:text-6xl lg:text-7xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        >
          Analyze. <span className="text-purple-400">Optimize.</span> Elevate.
        </motion.h1>
        <motion.p 
          {...fadeUp(0.25)} 
          className="mt-4 max-w-2xl text-lg text-white/75 sm:text-xl font-light"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
        >
          Improve your financial wellness with our AI-powered tools.
        </motion.p>
        <motion.div 
          {...fadeUp(0.35)} 
          className="mt-8 flex gap-4 flex-wrap justify-center"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
        >
          <button 
            onClick={() => navigate('/signup')}
            className="rounded-xl bg-purple-500 px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Get Started →
          </button>
          
          <button 
            onClick={() => navigate('/ai-assistant-marketing')}
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            See Demo ▷
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer group"
        onClick={() => {
          const featuresSection = document.getElementById('features');
          if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="flex flex-col items-center text-white/60 group-hover:text-white/80 transition-colors duration-300">
          <span className="text-sm mb-3 font-medium tracking-wide">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/60 transition-colors duration-300">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-white/60 rounded-full mt-2 group-hover:bg-white/80 transition-colors duration-300"
            />
          </div>
          <motion.div
            className="mt-2 text-xs text-white/40 group-hover:text-white/60 transition-colors duration-300"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Click to jump
          </motion.div>
        </div>
      </motion.div>
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .spline-container {
            display: none;
          }
          section:has(> .spline-container) {
            background-image: url('/bg-fallback.jpg');
            background-size: cover;
            background-position: center;
          }
        }
      `}</style>
    </section>
  );
} 