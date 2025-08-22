-- AIVesting Beta Account Schema
-- Run this in your Supabase SQL Editor

-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT UNIQUE,
    plan TEXT CHECK (plan IN ('plus', 'metal', 'ultra')) DEFAULT 'metal',
    beta_code TEXT,
    is_beta_user BOOLEAN DEFAULT true,
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, first_name, last_name, email, plan, beta_code, is_beta_user)
    VALUES (
        NEW.id,
        NEW.raw_user_meta_data->>'first_name',
        NEW.raw_user_meta_data->>'last_name',
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'plan', 'metal'),
        NEW.raw_user_meta_data->>'beta_code',
        COALESCE((NEW.raw_user_meta_data->>'is_beta_user')::boolean, true)
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create user_goals table for WealthPulse integration
CREATE TABLE IF NOT EXISTS public.user_goals (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    type TEXT CHECK (type IN ('house', 'travel', 'retirement', 'emergency', 'custom')),
    target_amount DECIMAL(15,2) NOT NULL,
    target_date DATE NOT NULL,
    priority TEXT CHECK (priority IN ('low', 'medium', 'high')) DEFAULT 'medium',
    current_amount DECIMAL(15,2) DEFAULT 0,
    monthly_contribution DECIMAL(10,2) DEFAULT 0,
    category TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for user_goals
ALTER TABLE public.user_goals ENABLE ROW LEVEL SECURITY;

-- Create policies for user_goals
CREATE POLICY "Users can view own goals" ON public.user_goals
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own goals" ON public.user_goals
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own goals" ON public.user_goals
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own goals" ON public.user_goals
    FOR DELETE USING (auth.uid() = user_id);

-- Create user_portfolios table for MarketPro integration
CREATE TABLE IF NOT EXISTS public.user_portfolios (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    name TEXT DEFAULT 'Main Portfolio',
    description TEXT,
    risk_profile TEXT CHECK (risk_profile IN ('conservative', 'moderate', 'aggressive')) DEFAULT 'moderate',
    benchmark TEXT DEFAULT 'SPX',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for user_portfolios
ALTER TABLE public.user_portfolios ENABLE ROW LEVEL SECURITY;

-- Create policies for user_portfolios
CREATE POLICY "Users can view own portfolios" ON public.user_portfolios
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own portfolios" ON public.user_portfolios
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own portfolios" ON public.user_portfolios
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own portfolios" ON public.user_portfolios
    FOR DELETE USING (auth.uid() = user_id);

-- Create portfolio_holdings table
CREATE TABLE IF NOT EXISTS public.portfolio_holdings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    portfolio_id UUID REFERENCES public.user_portfolios(id) ON DELETE CASCADE,
    symbol TEXT NOT NULL,
    name TEXT NOT NULL,
    asset_class TEXT CHECK (asset_class IN ('stock', 'etf', 'bond', 'crypto', 'cash', 'other')),
    currency TEXT DEFAULT 'USD',
    quantity DECIMAL(15,6) NOT NULL,
    price DECIMAL(10,4) NOT NULL,
    weight DECIMAL(5,2),
    sector TEXT,
    country TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for portfolio_holdings
ALTER TABLE public.portfolio_holdings ENABLE ROW LEVEL SECURITY;

-- Create policies for portfolio_holdings (users can only access holdings in their own portfolios)
CREATE POLICY "Users can view own portfolio holdings" ON public.portfolio_holdings
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.user_portfolios 
            WHERE id = portfolio_id AND user_id = auth.uid()
        )
    );

CREATE POLICY "Users can insert own portfolio holdings" ON public.portfolio_holdings
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.user_portfolios 
            WHERE id = portfolio_id AND user_id = auth.uid()
        )
    );

CREATE POLICY "Users can update own portfolio holdings" ON public.portfolio_holdings
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM public.user_portfolios 
            WHERE id = portfolio_id AND user_id = auth.uid()
        )
    );

CREATE POLICY "Users can delete own portfolio holdings" ON public.portfolio_holdings
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM public.user_portfolios 
            WHERE id = portfolio_id AND user_id = auth.uid()
        )
    );

-- Create user_spending_patterns table for WealthPulse
CREATE TABLE IF NOT EXISTS public.user_spending_patterns (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    category TEXT NOT NULL,
    monthly_average DECIMAL(10,2) NOT NULL,
    elasticity DECIMAL(3,2) DEFAULT 0.5,
    variance DECIMAL(10,2) DEFAULT 0,
    trend TEXT CHECK (trend IN ('up', 'down', 'stable')) DEFAULT 'stable',
    optimization_potential DECIMAL(10,2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for user_spending_patterns
ALTER TABLE public.user_spending_patterns ENABLE ROW LEVEL SECURITY;

-- Create policies for user_spending_patterns
CREATE POLICY "Users can view own spending patterns" ON public.user_spending_patterns
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own spending patterns" ON public.user_spending_patterns
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own spending patterns" ON public.user_spending_patterns
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own spending patterns" ON public.user_spending_patterns
    FOR DELETE USING (auth.uid() = user_id);

-- Insert default data for beta testing
INSERT INTO public.profiles (id, first_name, last_name, email, plan, beta_code, is_beta_user)
VALUES (
    '00000000-0000-0000-0000-000000000000',
    'Beta',
    'User',
    'beta@aivesting.com',
    'metal',
    'BETA2024',
    true
) ON CONFLICT (id) DO NOTHING;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_profiles_user_id ON public.profiles(id);
CREATE INDEX IF NOT EXISTS idx_user_goals_user_id ON public.user_goals(user_id);
CREATE INDEX IF NOT EXISTS idx_user_portfolios_user_id ON public.user_portfolios(user_id);
CREATE INDEX IF NOT EXISTS idx_portfolio_holdings_portfolio_id ON public.portfolio_holdings(portfolio_id);
CREATE INDEX IF NOT EXISTS idx_user_spending_patterns_user_id ON public.user_spending_patterns(user_id);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON public.profiles TO anon, authenticated;
GRANT ALL ON public.user_goals TO anon, authenticated;
GRANT ALL ON public.user_portfolios TO anon, authenticated;
GRANT ALL ON public.portfolio_holdings TO anon, authenticated;
GRANT ALL ON public.user_spending_patterns TO anon, authenticated; 