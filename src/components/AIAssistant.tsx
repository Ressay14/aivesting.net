import { motion } from 'framer-motion';
import { 
  BrainIcon, SparklesIcon, MessageCircleIcon, 
  TrendingUpIcon, ShieldIcon, TargetIcon, 
  ZapIcon, ClockIcon, StarIcon, UsersIcon,
  ArrowRightIcon, PlayIcon, DownloadIcon,
  CheckCircleIcon, LightbulbIcon, BarChart3Icon
} from 'lucide-react';
import StickyHeader from './StickyHeader';
import { useNavigate } from 'react-router-dom';

export default function AIAssistant() {
  const navigate = useNavigate();
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const features = [
    {
      title: "Portfolio Analysis",
      description: "Get AI-powered insights into your investment portfolio performance and optimization opportunities",
      icon: BarChart3Icon,
      color: "blue"
    },
    {
      title: "Risk Assessment",
      description: "Understand your risk tolerance and get personalized recommendations for risk management",
      icon: ShieldIcon,
      color: "green"
    },
    {
      title: "Market Insights",
      description: "Receive real-time market analysis and trend predictions powered by advanced AI algorithms",
      icon: TrendingUpIcon,
      color: "purple"
    },
    {
      title: "Goal Planning",
      description: "Set financial goals and get AI-driven strategies to achieve them efficiently",
      icon: TargetIcon,
      color: "amber"
    },
    {
      title: "Tax Optimization",
      description: "Maximize your returns with AI-powered tax optimization strategies and recommendations",
      icon: LightbulbIcon,
      color: "emerald"
    },
    {
      title: "Investment Education",
      description: "Learn investment concepts through interactive AI conversations and personalized explanations",
      icon: BrainIcon,
      color: "indigo"
    }
  ];

  const conversationExamples = [
    {
      user: "How should I diversify my portfolio?",
      ai: "Based on your current portfolio, I recommend diversifying across 5-7 asset classes. Consider adding international stocks (20%), bonds (15%), and alternative investments (10%) to reduce risk and improve returns.",
      type: "Portfolio Advice"
    },
    {
      user: "What's the best time to invest in tech stocks?",
      ai: "Timing the market is challenging, but I can help you identify entry points. Currently, tech valuations are reasonable, and I recommend dollar-cost averaging over 6-12 months to reduce timing risk.",
      type: "Market Timing"
    },
    {
      user: "How can I optimize my retirement savings?",
      ai: "For retirement optimization, I suggest maximizing your 401(k) contributions, considering a Roth IRA for tax-free growth, and implementing a target-date fund strategy based on your retirement timeline.",
      type: "Retirement Planning"
    }
  ];

  const plans = [
    {
      name: "AI Assistant Lite",
      price: "Free",
      features: [
        "5 AI conversations per month",
        "Basic portfolio insights",
        "General investment advice",
        "Email support"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "AI Assistant Plus",
      price: "$19",
      period: "/month",
      features: [
        "Unlimited AI conversations",
        "Advanced portfolio analysis",
        "Personalized investment strategies",
        "Priority support",
        "Market alerts"
      ],
      popular: true,
      color: "purple"
    },
    {
      name: "AI Assistant Pro",
      price: "$49",
      period: "/month",
      features: [
        "Everything in Plus",
        "Custom AI strategies",
        "Real-time market monitoring",
        "Dedicated AI advisor",
        "API access",
        "White-label solutions"
      ],
      popular: false,
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0E17] text-white">
      <StickyHeader />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#0B0E17] to-[#151822]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div 
            {...fadeInUp}
            className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-300"
          >
            AI-Powered
          </motion.div>
          <motion.h1 
            {...fadeInUp}
            className="text-5xl md:text-6xl font-extra-bold mb-6"
          >
            Your Personal <span className="text-purple-400">AI Financial Advisor</span>
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto font-light mb-8"
          >
            Get instant, intelligent financial advice 24/7. Our AI assistant understands your goals, 
            analyzes your portfolio, and provides personalized recommendations to optimize your wealth.
          </motion.p>
          <motion.div 
            {...fadeInUp}
            className="flex gap-4 justify-center flex-wrap"
          >
            <button 
              onClick={() => navigate('/signup')}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2"
            >
              <SparklesIcon className="w-5 h-5" />
              Start Free Trial
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2">
              <PlayIcon className="w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#151822]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extra-bold mb-6">
              AI-Powered <span className="text-purple-400">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Experience the future of financial advice with our intelligent AI assistant
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] p-8 rounded-xl border border-gray-800/30 hover:border-purple-500/20 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-500/20 to-${feature.color}-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 text-${feature.color}-400`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
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
      </section>

      {/* Conversation Examples */}
      <section className="py-20 bg-[#0B0E17]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extra-bold mb-6">
              See <span className="text-purple-400">AI in Action</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Real conversations with our AI financial advisor
            </p>
          </motion.div>

          <div className="space-y-6">
            {conversationExamples.map((conversation, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-xl border border-gray-800/30 p-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-purple-400 text-sm font-medium">{conversation.type}</span>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <UsersIcon className="w-4 h-4 text-gray-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">You</p>
                      <p className="text-gray-300">{conversation.user}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <BrainIcon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-purple-400 font-medium">AI Assistant</p>
                      <p className="text-gray-300">{conversation.ai}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-[#151822]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extra-bold mb-6">
              Choose Your <span className="text-purple-400">AI Plan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Start free and upgrade as you need more advanced AI capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-xl border ${
                  plan.popular ? 'border-purple-500/50' : 'border-gray-800/30'
                } p-8 hover:border-purple-500/20 transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-extra-bold">{plan.price}</span>
                    {plan.period && <span className="text-gray-400">{plan.period}</span>}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => navigate('/signup')}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
                      : 'bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-white hover:from-gray-600/50 hover:to-gray-500/50'
                  }`}
                >
                  {plan.price === 'Free' ? 'Get Started' : 'Start Free Trial'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#0B0E17] to-[#151822]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl md:text-5xl font-extra-bold mb-6"
          >
            Ready to Get <span className="text-purple-400">AI-Powered</span> Financial Advice?
          </motion.h2>
          <motion.p 
            {...fadeInUp}
            className="text-xl text-gray-300 mb-8 font-light"
          >
            Join thousands of investors who trust our AI assistant for their financial decisions
          </motion.p>
          <motion.div 
            {...fadeInUp}
            className="flex gap-4 justify-center flex-wrap"
          >
            <button 
              onClick={() => navigate('/signup')}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Start Free Trial →
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300">
              Schedule Demo
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 