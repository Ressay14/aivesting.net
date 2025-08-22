# 🚀 AIVesting Beta Account Setup Guide

## 🎯 **What You're Getting**

A **fully functional beta account** with access to:
- ✅ **AI Co-Pilot Dashboard** - Unified intelligence across all tools
- ✅ **WealthPulse** - AI-powered wealth management
- ✅ **MarketPro** - Portfolio optimization & risk analysis
- ✅ **Complete Dashboard** - Full platform access
- ✅ **Premium Features** - All plans available during beta

## 🗄️ **Step 1: Set Up Supabase Database**

### 1.1 Go to Your Supabase Dashboard
- Visit: https://supabase.com/dashboard
- Open your project: `ffhogyweggprycxgvdjy`

### 1.2 Run the SQL Schema
- Go to **SQL Editor** in the left sidebar
- Copy the entire content from `supabase-schema.sql`
- Paste and run the SQL commands
- This creates all necessary tables and security policies

### 1.3 Verify Tables Created
You should see these tables:
- `profiles` - User account information
- `user_goals` - Financial goals
- `user_portfolios` - Investment portfolios
- `portfolio_holdings` - Individual investments
- `user_spending_patterns` - Spending analysis

## 🎨 **Step 2: Create Your Beta Account**

### 2.1 Visit the Signup Page
- Go to: `http://localhost:5195/signup`
- You'll see the new beta account creation form

### 2.2 Fill Out Your Information
- **First Name**: Your first name
- **Last Name**: Your last name
- **Email**: Your email address
- **Password**: Create a secure password (8+ characters)
- **Beta Code**: Enter any code (e.g., `BETA2024`, `MYBETA`, etc.)
- **Plan**: Choose your preferred plan (Plus, Metal, or Ultra)

### 2.3 Choose Your Plan
- **Plus Plan** (€19/month) - Basic AI insights, portfolio tracking
- **Metal Plan** (€49/month) - Advanced AI Co-Pilot, risk analysis ⭐ **POPULAR**
- **Ultra Plan** (€99/month) - Full AI suite, custom strategies

## 🎉 **Step 3: Access Your Beta Account**

### 3.1 After Signup
- Check your email for verification
- Click "Complete Profile Setup" to go to onboarding
- Or go directly to `/profile` to see your account

### 3.2 Your Beta Account Features
- **Free Premium Access** - All features available during beta
- **Early Feature Access** - Test new AI capabilities first
- **Direct Feedback Channel** - Help shape the platform
- **Exclusive Community** - Connect with other beta users

## 🚀 **Step 4: Explore the Platform**

### 4.1 Main Dashboard
- **URL**: `http://localhost:5195/dashboard`
- **Features**: All dashboard tools and AI Co-Pilot access

### 4.2 AI Co-Pilot (Direct Access)
- **URL**: `http://localhost:5195/ai-copilot`
- **Features**: Unified AI intelligence across all products

### 4.3 Your Profile
- **URL**: `http://localhost:5195/profile`
- **Features**: Account details, plan information, beta status

## 🔧 **Technical Details**

### Database Schema
The system automatically creates:
- User authentication via Supabase Auth
- User profiles with plan selection
- Financial goals and portfolios
- Spending patterns and AI insights
- Secure Row Level Security (RLS) policies

### Authentication Flow
1. User signs up with beta code
2. Account created in Supabase Auth
3. Profile automatically created in `profiles` table
4. User redirected to onboarding or dashboard
5. Full access to all beta features

## 🎯 **Beta Account Benefits**

### 🆓 **Free Premium Access**
- No charges during beta period
- Access to all plan features
- Full AI Co-Pilot capabilities

### 🚀 **Early Feature Access**
- Test new AI capabilities first
- Provide feedback on features
- Help prioritize development

### 🤝 **Direct Development Connection**
- Direct feedback channel
- Feature request priority
- Bug report fast-track

### 👥 **Exclusive Community**
- Beta user community access
- Early adopter recognition
- Special beta user badge

## 🔒 **Security Features**

### Row Level Security (RLS)
- Users can only access their own data
- Secure profile isolation
- Protected financial information

### Authentication
- Supabase Auth integration
- Secure password handling
- Email verification required

### Data Privacy
- Your data stays private
- No sharing with third parties
- GDPR compliant

## 🚨 **Troubleshooting**

### Common Issues

**"Profile not found" error**
- Run the SQL schema again
- Check if tables were created
- Verify RLS policies are active

**Authentication errors**
- Check Supabase project settings
- Verify API keys in `supabaseClient.ts`
- Ensure email verification is complete

**Database connection issues**
- Check Supabase project status
- Verify network connectivity
- Check browser console for errors

### Getting Help
- Check browser console for error messages
- Verify Supabase dashboard status
- Check if all SQL commands ran successfully

## 🎊 **Welcome to the Beta!**

You now have access to the most advanced AI-powered wealth management platform available. Your feedback and testing will help shape the future of personal finance.

**Ready to start?** Go to `http://localhost:5195/signup` and create your beta account!

---

*Need help? Check the console logs or Supabase dashboard for detailed error information.* 