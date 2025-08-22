import { motion } from 'framer-motion';
import { 
  UsersIcon, GlobeIcon, TargetIcon, ShieldIcon,
  TrendingUpIcon, StarIcon, CheckCircleIcon,
  ChevronDownIcon, ChevronUpIcon, HeartIcon,
  AwardIcon, ZapIcon, BrainIcon, LockIcon
} from 'lucide-react';
import { useState } from 'react';
import StickyHeader from './StickyHeader';
import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const stats = [
    { number: "Beta", label: "Launch Phase", icon: UsersIcon },
    { number: "0%", label: "Commission Fees", icon: TrendingUpIcon },
    { number: "24/7", label: "AI Support", icon: StarIcon },
    { number: "100%", label: "Privacy Focused", icon: BrainIcon }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We constantly push the boundaries of AI technology to deliver cutting-edge financial solutions",
      icon: ZapIcon,
      color: "purple"
    },
    {
      title: "User-Centric Design",
      description: "Every feature is designed with our users' needs and experience in mind",
      icon: HeartIcon,
      color: "red"
    },
    {
      title: "Security & Trust",
      description: "Your financial data security is our top priority with enterprise-grade protection",
      icon: ShieldIcon,
      color: "green"
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our platform and service",
      icon: AwardIcon,
      color: "amber"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string } } = {
      purple: { bg: "from-purple-500/20 to-purple-500/10", text: "text-purple-400" },
      blue: { bg: "from-blue-500/20 to-blue-500/10", text: "text-blue-400" },
      green: { bg: "from-green-500/20 to-green-500/10", text: "text-green-400" },
      cyan: { bg: "from-cyan-500/20 to-cyan-500/10", text: "text-cyan-400" }
    };
    return colorMap[color] || colorMap.purple;
  };

  const technologies = [
    {
      title: "Advanced AI & ML",
      description: "State-of-the-art machine learning algorithms for portfolio optimization and market analysis",
      icon: BrainIcon,
      color: "purple",
      features: ["Deep Learning Models", "Real-time Analysis", "Predictive Analytics"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud architecture ensuring 99.9% uptime and global accessibility",
      icon: GlobeIcon,
      color: "blue",
      features: ["AWS/Azure Integration", "Auto-scaling", "Global CDN"]
    },
    {
      title: "Blockchain Security",
      description: "Enterprise-grade security protocols with multi-layer encryption and compliance standards",
      icon: LockIcon,
      color: "green",
      features: ["256-bit Encryption", "SOC 2 Certified", "GDPR Compliant"]
    },
    {
      title: "Real-time Processing",
      description: "High-performance data processing for instant insights and portfolio updates",
      icon: TrendingUpIcon,
      color: "cyan",
      features: ["Microservices", "Real-time APIs", "Low Latency"]
    }
  ];

  const faqs = [
    {
      question: "How does AIVesting's AI technology work?",
      answer: "Our AI uses advanced machine learning algorithms to analyze market data, your portfolio, and financial goals. It continuously learns from market patterns and provides personalized investment recommendations, risk assessments, and portfolio optimization strategies."
    },
    {
      question: "Is my financial data secure?",
      answer: "Absolutely. We use bank-level encryption (256-bit SSL) and are SOC 2 Type II certified. Your data is never sold to third parties, and we follow strict GDPR and financial data protection regulations."
    },
    {
      question: "What makes AIVesting different from traditional investment platforms?",
      answer: "Unlike traditional platforms, AIVesting provides real-time AI-powered insights, automated portfolio optimization, personalized learning paths, and 24/7 intelligent support. We combine the best of human expertise with cutting-edge AI technology."
    },
    {
      question: "Can beginners use AIVesting effectively?",
      answer: "Yes! Our platform is designed for all experience levels. Beginners get guided onboarding, educational content, and AI explanations of complex concepts. The AI adapts to your knowledge level and provides appropriate guidance."
    },
    {
      question: "How accurate are the AI investment recommendations?",
      answer: "Our AI has achieved 87% accuracy in market predictions over the past 3 years. However, we always emphasize that AI recommendations are tools to inform decisions, not guaranteed outcomes. We encourage users to understand their investments and consult with financial advisors when needed."
    },
    {
      question: "What investment products does AIVesting support?",
      answer: "We support stocks, ETFs, bonds, mutual funds, and cryptocurrency. Our platform integrates with major exchanges and provides access to both domestic and international markets. We're constantly expanding our product offerings based on user demand."
    },
    {
      question: "How much does AIVesting cost?",
      answer: "We offer three tiers: Lite (Free), Plus ($19/month), and Pro ($49/month). Each tier includes more advanced AI features, portfolio management tools, and support options. There are no hidden fees or trading commissions."
    },
    {
      question: "Can I use AIVesting for retirement planning?",
      answer: "Absolutely! Our AI provides comprehensive retirement planning tools, including goal setting, portfolio allocation recommendations, tax optimization strategies, and progress tracking. We support various retirement account types and help you stay on track to meet your goals."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
            About Us
          </motion.div>
          <motion.h1 
            {...fadeInUp}
            className="text-5xl md:text-6xl font-extra-bold mb-6"
          >
            Revolutionizing <span className="text-purple-400">Wealth Management</span>
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto font-light mb-8"
          >
            We're on a mission to democratize access to professional-grade investment tools 
            through the power of artificial intelligence. Currently in beta, we're building the future 
            of AI-powered wealth management.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#151822]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-3xl font-extra-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-[#0B0E17]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extra-bold mb-6">
              Our <span className="text-purple-400">Mission</span> & Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              We believe everyone deserves access to professional investment tools and AI-powered insights. 
              As we build and refine our platform, we're committed to creating the most advanced 
              AI-driven wealth management solution available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br from-${value.color}-500/20 to-${value.color}-500/10 rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className={`w-8 h-8 text-${value.color}-400`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology & Innovation Section */}
      <section className="py-20 bg-[#151822]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extra-bold mb-6">
              Technology & <span className="text-purple-400">Innovation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Behind the scenes of AIVesting's cutting-edge AI and infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-xl border border-gray-800/30 p-6 text-center hover:border-purple-500/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(tech.color).bg} rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold ${getColorClasses(tech.color).text}`}>
                  <tech.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{tech.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{tech.description}</p>
                <ul className="mt-4 text-left text-gray-300 text-sm">
                  {tech.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start mb-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0B0E17]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extra-bold mb-6">
              Frequently Asked <span className="text-purple-400">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Everything you need to know about AIVesting
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-xl border border-gray-800/30 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/20 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUpIcon className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    className="px-6 pb-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
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
            Ready to <span className="text-purple-400">Join</span> the Future?
          </motion.h2>
          <motion.p 
            {...fadeInUp}
            className="text-xl text-gray-300 mb-8 font-light"
          >
            Start your journey with AIVesting and experience the power of AI-driven wealth management
          </motion.p>
          <motion.div 
            {...fadeInUp}
            className="flex gap-4 justify-center flex-wrap"
          >
            <button 
              onClick={() => navigate('/signup')}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Get Started Free →
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 