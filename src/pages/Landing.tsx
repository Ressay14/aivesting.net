import StickyHeader from "../components/StickyHeader";
import HeroBand from "../components/HeroBand";
import LogoRow from "../components/LogoRow";
import SectionBlock from "../components/SectionBlock";
import { WealthPulsePlaceholder, MarketProPlaceholder, SecurityPlaceholder } from "../components/PlaceholderMedia";
import DashboardPreview from "../components/DashboardPreview";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUpIcon, BarChart3Icon, ShieldIcon, BrainIcon, 
  ArrowRightIcon, CheckCircleIcon, UsersIcon, ZapIcon,
  GlobeIcon, TargetIcon, CalculatorIcon, CrownIcon,
  HomeIcon, BitcoinIcon, PiggyBankIcon, RocketIcon, 
  HandshakeIcon, GemIcon, ChevronUpIcon
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <main className="text-white">
      <StickyHeader />
      <div id="hero">
        <HeroBand />
      </div>
      <LogoRow />

      {/* Core Features Section */}
      <motion.section 
        id="features"
        className="py-20 bg-gradient-to-b from-[#0B0E17] to-[#151822]"
        {...fadeInUp}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extra-bold mb-6">
              Vision. <span className="text-purple-400">Strategy.</span> Wealth.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              AIVesting is the ultimate AI-powered wealth management platform. Build your vision, execute strategic plans, and grow your wealth with AI insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3Icon,
                title: "Track Your Wealth",
                description: "Link your accounts and start managing your wealth with AI-powered insights and real-time tracking.",
                color: "blue"
              },
              {
                icon: BrainIcon,
                title: "AI Portfolio Optimization",
                description: "Get personalized investment recommendations and portfolio rebalancing suggestions powered by advanced AI.",
                color: "purple"
              },
              {
                icon: ShieldIcon,
                title: "Risk Management",
                description: "Advanced risk scoring and portfolio diversification analysis to protect your investments.",
                color: "green"
              },
              {
                icon: TrendingUpIcon,
                title: "Performance Analytics",
                description: "Beautiful, customizable charts and real-time performance tracking across all your assets.",
                color: "yellow"
              },
              {
                icon: ZapIcon,
                title: "Instant Alerts",
                description: "Proactive notifications for market opportunities, risk alerts, and portfolio changes.",
                color: "orange"
              },
              {
                icon: TargetIcon,
                title: "Goal Planning",
                description: "Set financial goals and track your progress with AI-powered forecasting and recommendations.",
                color: "pink"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div 
                  key={index} 
                  className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-8 rounded-xl border border-gray-800/30 transition-all duration-300 hover:border-purple-500/20 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                >
                  <div className={`bg-gradient-to-br from-${feature.color}-500/30 to-${feature.color}-500/10 p-4 rounded-xl transition-all duration-300 group-hover:scale-110 w-fit mb-6`}>
                    <IconComponent className={`h-8 w-8 text-${feature.color}-500`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Real Dashboard Preview Section */}
      <motion.section 
        className="py-20 bg-gradient-to-b from-[#151822] to-[#0B0E17]"
        {...fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-300"
            >
              Live Preview
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-extra-bold mb-6"
            >
              See <span className="text-purple-400">AIVesting</span> in Action
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-xl text-gray-300 max-w-3xl mx-auto font-light"
            >
              Experience the power of AI-driven wealth management with our interactive dashboard preview. 
              See real-time insights, portfolio optimization, and AI recommendations in action.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            {/* Interactive Elements Overlay */}
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <motion.div 
                className="bg-green-500/20 border border-green-500/30 text-green-400 px-3 py-1 rounded-full text-xs font-medium"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Live Data
              </motion.div>
              <motion.div 
                className="bg-blue-500/20 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-xs font-medium"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                AI-Powered
              </motion.div>
            </div>
            
            {/* Dashboard Preview */}
            <DashboardPreview />
            
            {/* Call to Action Below Dashboard */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="text-center mt-8"
            >
              <p className="text-gray-400 mb-4 font-light">
                This is just a preview. Get the full experience with your own dashboard.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <motion.button 
                  onClick={() => navigate('/signup')}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial →
                </motion.button>
                <motion.button 
                  className="border border-gray-600 text-white px-8 py-3 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/ai-assistant-marketing')}
                >
                  Watch Full Demo ▷
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        className="py-20 bg-[#151822]"
        {...fadeInUp}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extra-bold mb-6">
              Get started in <span className="text-purple-400">3 simple steps</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Join thousands of investors who trust AIVesting to manage their wealth intelligently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Create account",
                description: "Sign up in seconds and connect your existing financial accounts securely."
              },
              {
                step: "2", 
                title: "Link accounts",
                description: "Connect your bank, investment, and crypto accounts with bank-level security."
              },
              {
                step: "3",
                title: "Make better decisions",
                description: "Get AI-powered insights and recommendations to optimize your wealth."
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Existing Sections */}
      <SectionBlock
        eyebrow="WealthPulse"
        title="The heartbeat of your money."
        body="Real-time savings & investment insights with proactive alerts."
        media={<WealthPulsePlaceholder />}
      />

      <SectionBlock
        flip
        eyebrow="MarketPro"
        title="Pro-grade market intelligence."
        body="Signals, risk scoring, and strategy suggestions powered by AI."
        media={<MarketProPlaceholder />}
      />

      <SectionBlock
        eyebrow="Security"
        title="Bank-level protection."
        body="Encryption, 2FA, privacy controls — secure by default."
        media={<SecurityPlaceholder />}
      />

      {/* All Assets in One Place Section */}
      <motion.section 
        id="learn"
        className="py-20 bg-gradient-to-b from-[#151822] to-[#0B0E17]"
        {...fadeInUp}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extra-bold mb-6">
              ALL YOUR ASSETS IN <span className="text-purple-400">ONE PLACE</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              From traditional investments to crypto, real estate to precious metals - track everything in one unified dashboard
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
            {[
              { name: "Stocks & ETFs", icon: TrendingUpIcon },
              { name: "Real Estate", icon: HomeIcon },
              { name: "Crypto", icon: BitcoinIcon },
              { name: "Savings", icon: PiggyBankIcon },
              { name: "Startups", icon: RocketIcon },
              { name: "Crowdlending", icon: HandshakeIcon },
              { name: "Exotics", icon: GemIcon }
            ].map((asset, index) => {
              const IconComponent = asset.icon;
              const iconColors = [
                "text-green-400", // Stocks & ETFs
                "text-blue-400",  // Real Estate
                "text-orange-400", // Crypto
                "text-emerald-400", // Savings
                "text-purple-400", // Startups
                "text-cyan-400",   // Crowdlending
                "text-pink-400"    // Exotics
              ];
              
              return (
                <motion.div 
                  key={index}
                  className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-4 rounded-xl border border-gray-800/30 text-center hover:border-purple-500/20 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className={`h-8 w-8 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 ${iconColors[index]}`}>
                    <IconComponent className="h-full w-full" />
                  </div>
                  <div className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                    {asset.name}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
                            <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 flex items-center gap-2 mx-auto group">
              Link all your assets
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        id="testimonials"
        className="py-20 bg-[#0B0E17]"
        {...fadeInUp}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extra-bold mb-6">
              What our users are <span className="text-purple-400">saying</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Join thousands of investors who trust AIVesting to manage their wealth intelligently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                rating: 5,
                quote: "AIVesting transformed how I manage my portfolio. The AI insights are incredibly accurate and the interface is beautiful.",
                author: "Sarah Chen",
                plan: "Pro Plan"
              },
              {
                rating: 5,
                quote: "Finally, a platform that makes complex financial data easy to understand. The automated alerts save me hours every week.",
                author: "Michael Rodriguez",
                plan: "Plus Plan"
              },
              {
                rating: 5,
                quote: "The AI recommendations have helped me diversify my investments and reduce risk. Highly recommend for any serious investor.",
                author: "Emily Watson",
                plan: "Lite Plan"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-6 rounded-xl border border-gray-800/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <CheckCircleIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">{testimonial.author}</span>
                  <span className="text-sm text-purple-400">{testimonial.plan}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        id="pricing"
        className="py-20 bg-gradient-to-b from-[#0B0E17] to-[#151822]"
        {...fadeInUp}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extra-bold mb-6">
              Choose your <span className="text-purple-400">plan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Start free and upgrade as you grow. No hidden fees, cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "AIVesting Lite",
                price: "Free",
                period: "forever",
                features: ["Basic portfolio tracking", "AI insights (5/month)", "Mobile app access", "Email support"],
                button: "Get Started Free",
                popular: false
              },
              {
                name: "AIVesting Plus",
                price: "$19",
                period: "per month",
                features: ["Everything in Lite", "Unlimited AI insights", "Advanced analytics", "Priority support", "Portfolio optimization"],
                button: "Start Free Trial",
                popular: true
              },
              {
                name: "AIVesting Pro",
                price: "$49",
                period: "per month",
                features: ["Everything in Plus", "Custom AI strategies", "Tax optimization", "Dedicated advisor", "API access"],
                button: "Start Free Trial",
                popular: false
              }
            ].map((plan, index) => (
              <motion.div 
                key={index}
                className={`relative bg-gradient-to-br from-[#151822] to-[#1A1F2E] p-8 rounded-xl border ${
                  plan.popular 
                                                    ? 'border-purple-500/50' 
                    : 'border-gray-800/30'
                } ${plan.popular ? 'scale-105' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period !== "forever" && <span className="text-gray-400">/{plan.period}</span>}
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => navigate('/signup')}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                                                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'border border-gray-600 text-white hover:border-purple-500 hover:bg-purple-500/10'
                  }`}
                >
                  {plan.button}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        id="ai-assistant"
        className="py-20 bg-gradient-to-b from-[#151822] to-[#0B0E17]"
        {...fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extra-bold mb-6">
            Start managing your <span className="text-purple-400">wealth</span> today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
            Join over 50,000+ investors on AIVesting and manage your wealth like a pro with AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/signup')}
                              className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 flex items-center gap-2 justify-center group"
            >
              Get Started Free
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-[#1A1F2E] text-white px-8 py-4 rounded-xl font-semibold border border-gray-700 hover:border-purple-500/50 hover:bg-[#1E2230] transition-all duration-300">
              Watch Demo
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4 font-light">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </motion.section>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
                            className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-full transition-all duration-300"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ 
              scale: 1.1,
              y: -2
            }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUpIcon className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
} 