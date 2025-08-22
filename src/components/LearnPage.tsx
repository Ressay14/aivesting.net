import { motion } from 'framer-motion';
import { 
  TrendingUpIcon, BarChart3Icon, ShieldIcon, BrainIcon, 
  ArrowRightIcon, CheckCircleIcon, UsersIcon, ZapIcon,
  GlobeIcon, TargetIcon, CalculatorIcon, CrownIcon,
  BookOpenIcon, GraduationCapIcon, LightbulbIcon, 
  ClockIcon, StarIcon, PlayIcon, DownloadIcon
} from 'lucide-react';
import StickyHeader from './StickyHeader';
import { useNavigate } from 'react-router-dom';

export default function LearnPage() {
  const navigate = useNavigate();
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const courses = [
    {
      title: "Investment Fundamentals",
      description: "Learn the basics of investing, risk management, and portfolio building",
      duration: "2 hours",
      level: "Beginner",
      rating: 4.9,
      students: 1247,
      icon: BookOpenIcon,
      color: "blue"
    },
    {
      title: "AI-Powered Portfolio Optimization",
      description: "Master the art of using AI tools to optimize your investment portfolio",
      duration: "3 hours",
      level: "Intermediate",
      rating: 4.8,
      students: 892,
      icon: BrainIcon,
      color: "purple"
    },
    {
      title: "Risk Management Strategies",
      description: "Advanced techniques for protecting your investments in volatile markets",
      duration: "2.5 hours",
      level: "Advanced",
      rating: 4.9,
      students: 567,
      icon: ShieldIcon,
      color: "green"
    },
    {
      title: "Market Analysis & Timing",
      description: "Learn to read market signals and make informed investment decisions",
      duration: "4 hours",
      level: "Intermediate",
      rating: 4.7,
      students: 734,
      icon: BarChart3Icon,
      color: "amber"
    },
    {
      title: "Tax Optimization for Investors",
      description: "Maximize your returns by understanding tax implications and strategies",
      duration: "1.5 hours",
      level: "Intermediate",
      rating: 4.8,
      students: 456,
      icon: CalculatorIcon,
      color: "emerald"
    },
    {
      title: "Crypto & Alternative Investments",
      description: "Explore digital assets and alternative investment opportunities",
      duration: "3.5 hours",
      level: "Advanced",
      rating: 4.6,
      students: 389,
      icon: GlobeIcon,
      color: "purple"
    }
  ];

  const learningPaths = [
    {
      title: "Beginner Investor",
      description: "Start your investment journey with confidence",
      courses: 3,
      duration: "6 hours",
      icon: BookOpenIcon,
      color: "blue"
    },
    {
      title: "Portfolio Manager",
      description: "Build and manage sophisticated investment portfolios",
      courses: 5,
      duration: "12 hours",
      icon: TargetIcon,
      color: "purple"
    },
    {
      title: "AI Investment Expert",
      description: "Master AI-powered investment strategies",
      courses: 4,
      duration: "10 hours",
      icon: BrainIcon,
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
            Knowledge Hub
          </motion.div>
          <motion.h1 
            {...fadeInUp}
            className="text-5xl md:text-6xl font-extra-bold mb-6"
          >
            Master <span className="text-purple-400">AI-Powered</span> Investing
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto font-light mb-8"
          >
            Learn from industry experts and AI specialists. Master the fundamentals of investing, 
            understand risk management, and discover how AI can optimize your portfolio.
          </motion.p>
          <motion.div 
            {...fadeInUp}
            className="flex gap-4 justify-center flex-wrap"
          >
            <button 
              onClick={() => navigate('/plans')}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2"
            >
              <PlayIcon className="w-5 h-5" />
              Start Learning
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300">
              Browse Courses
            </button>
          </motion.div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-[#151822]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extra-bold mb-6">
              Choose Your <span className="text-purple-400">Learning Path</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Structured learning paths designed to take you from beginner to expert investor
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => {
              const IconComponent = path.icon;
              return (
                <motion.div
                  key={path.title}
                  className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] p-8 rounded-xl border border-gray-800/30 hover:border-purple-500/20 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br from-${path.color}-500/20 to-${path.color}-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 text-${path.color}-400`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {path.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{path.courses} courses</span>
                    <span>{path.duration}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400 px-4 py-2 rounded-lg border border-purple-500/30 hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300">
                    Start Path →
              </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-[#0B0E17]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extra-bold mb-6">
              Featured <span className="text-purple-400">Courses</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Expert-led courses designed to accelerate your investment knowledge
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const IconComponent = course.icon;
              return (
                <motion.div
                  key={course.title}
                  className="bg-gradient-to-br from-[#1A1F2E] to-[#151822] rounded-xl border border-gray-800/30 hover:border-purple-500/20 transition-all duration-300 group cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="p-6">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${course.color}-500/20 to-${course.color}-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 text-${course.color}-400`} />
                  </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                      {course.title}
                </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        {course.duration}
                      </span>
                      <span className="bg-gray-700 px-2 py-1 rounded text-xs">
                        {course.level}
                      </span>
                    </div>
                <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{course.rating}</span>
                      </div>
                      <span className="text-sm text-gray-400">{course.students} students</span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                      Enroll Now →
                    </button>
                  </div>
                </motion.div>
              );
            })}
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
            Ready to <span className="text-purple-400">Transform</span> Your Investing?
          </motion.h2>
          <motion.p 
            {...fadeInUp}
            className="text-xl text-gray-300 mb-8 font-light"
          >
            Join thousands of investors who are already learning and growing with AIVesting
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
              View All Courses
              </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}