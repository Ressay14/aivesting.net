import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  ClockIcon, 
  BookOpenIcon,
  StarIcon,
  ZapIcon,
  TagIcon
} from 'lucide-react';

interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  readTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  featured?: boolean;
  premium?: boolean;
  tags: string[];
  author: string;
  publishedDate: string;
}

export const ArticleViewer: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();

  // Mock article data - in real implementation, this would come from an API or markdown files
  const mockArticle: Article = {
    id: 'compound-interest',
    title: 'The Power of Compound Interest',
    content: `
# The Power of Compound Interest

Compound interest is often called the "eighth wonder of the world" by financial experts, and for good reason. It's the concept that allows your money to grow exponentially over time, not just linearly.

## What is Compound Interest?

Compound interest occurs when you earn interest not only on your original investment (principal), but also on the interest you've already earned. This creates a snowball effect where your money grows faster and faster over time.

### Simple vs Compound Interest

**Simple Interest:**
- You earn interest only on your original amount
- Example: €1,000 at 10% = €100 per year
- After 10 years: €1,000 + (€100 × 10) = €2,000

**Compound Interest:**
- You earn interest on your original amount PLUS previous interest
- Example: €1,000 at 10% compounded annually
- After 10 years: €1,000 × (1.10)^10 = €2,594

## The Rule of 72

A quick way to estimate how long it takes to double your money:

**72 ÷ Interest Rate = Years to Double**

- At 6%: 72 ÷ 6 = 12 years
- At 8%: 72 ÷ 8 = 9 years
- At 12%: 72 ÷ 12 = 6 years

## Why Starting Early Matters

The earlier you start investing, the more time compound interest has to work its magic. Here's a powerful example:

**Sarah starts at age 25:**
- Invests €1,000 per year until age 65
- At 7% annual return
- Total invested: €40,000
- Final value: €199,635

**John starts at age 35:**
- Invests €1,000 per year until age 65
- At 7% annual return
- Total invested: €30,000
- Final value: €101,073

Sarah ends up with nearly twice as much money despite investing only €10,000 more!

## Real-World Applications

1. **Retirement Planning**: Compound interest is the foundation of retirement savings
2. **Education Savings**: 529 plans and other education accounts benefit from compound growth
3. **Emergency Funds**: Even conservative investments can grow significantly over time
4. **Debt**: Compound interest works against you with credit cards and loans

## Tips for Maximizing Compound Interest

1. **Start Early**: The earlier you begin, the more time your money has to grow
2. **Invest Regularly**: Consistent contributions amplify the compound effect
3. **Reinvest Dividends**: Don't take distributions, let them compound
4. **Minimize Fees**: High fees eat into your compound returns
5. **Stay Invested**: Avoid frequent trading and let time work in your favor

## Conclusion

Compound interest is one of the most powerful concepts in personal finance. By understanding and harnessing its power, you can build significant wealth over time. The key is to start early, invest consistently, and let time do the heavy lifting.

Remember: Time in the market beats timing the market. Start your investment journey today!
    `,
    excerpt: 'Learn how your money can grow exponentially over time and why starting early is crucial for wealth building.',
    category: 'basics',
    readTime: '5 min',
    difficulty: 'beginner',
    featured: true,
    tags: ['compound interest', 'wealth building', 'time value'],
    author: 'AIVesting Team',
    publishedDate: '2024-01-15'
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-500 bg-green-500/10';
      case 'intermediate': return 'text-yellow-500 bg-yellow-500/10';
      case 'advanced': return 'text-red-500 bg-red-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
  };

  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold text-white mb-6">{line.substring(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-white mb-4 mt-8">{line.substring(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold text-white mb-3 mt-6">{line.substring(4)}</h3>;
      } else if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={index} className="text-white font-bold mb-4">{line.substring(2, line.length - 2)}</p>;
      } else if (line.trim() === '') {
        return <div key={index} className="h-4"></div>;
      } else if (line.startsWith('- ')) {
        return <li key={index} className="text-gray-300 mb-2 ml-4">{line.substring(2)}</li>;
      } else if (line.match(/^\d+\./)) {
        return <li key={index} className="text-gray-300 mb-2 ml-4">{line}</li>;
      } else {
        return <p key={index} className="text-gray-300 mb-4 leading-relaxed">{line}</p>;
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0E15] via-[#181C2A] to-[#23263A]">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-700/20 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '15s'}}></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '20s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-[#151822]/90 backdrop-blur-md border-b border-gray-800/30 sticky top-0 z-20">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate('/learn')}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeftIcon className="h-5 w-5" />
                <span>Back to Learn</span>
              </button>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">{mockArticle.readTime}</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(mockArticle.difficulty)}`}>
                  {mockArticle.difficulty}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Article Header */}
          <div className="mb-8">
            {mockArticle.featured && (
              <div className="flex items-center gap-2 mb-4">
                <StarIcon className="h-4 w-4 text-yellow-500" />
                <span className="text-sm text-yellow-500 font-medium">Featured Article</span>
              </div>
            )}
            
            {mockArticle.premium && (
              <div className="flex items-center gap-2 mb-4">
                <ZapIcon className="h-4 w-4 text-purple-500" />
                <span className="text-sm text-purple-500 font-medium">Premium Content</span>
              </div>
            )}

            <h1 className="text-4xl font-bold text-white mb-4">{mockArticle.title}</h1>
            <p className="text-xl text-gray-400 mb-6">{mockArticle.excerpt}</p>
            
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <BookOpenIcon className="h-4 w-4" />
                <span>By {mockArticle.author}</span>
              </div>
              <span>•</span>
              <span>{mockArticle.publishedDate}</span>
              <span>•</span>
              <span>{mockArticle.category}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {mockArticle.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                  <TagIcon className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article Body */}
          <div className="bg-[#151822]/90 backdrop-blur-md rounded-xl border border-gray-800/30 p-8">
            <div className="prose prose-invert max-w-none">
              {formatContent(mockArticle.content)}
            </div>
          </div>

          {/* Article Footer */}
          <div className="mt-8 pt-8 border-t border-gray-800/30">
            <div className="bg-gradient-to-r from-yellow-500/10 to-blue-500/10 border border-yellow-500/20 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Want More Personalized Content?</h3>
              <p className="text-gray-300 mb-4">
                Sign up for AIVesting to get AI-powered recommendations, personalized learning paths, and advanced portfolio insights.
              </p>
              <button
                onClick={() => navigate('/signup')}
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:from-yellow-400 hover:to-yellow-300 transition-all"
              >
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 