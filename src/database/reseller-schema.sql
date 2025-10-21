-- =====================================================
-- RESELLER/PARTNER PROGRAM DATABASE SCHEMA
-- Multi-level tracking, automated commissions, full analytics
-- =====================================================

-- =====================================================
-- RESELLERS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS public.resellers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  referral_code VARCHAR(50) UNIQUE NOT NULL,
  company_name VARCHAR(255),
  website TEXT,
  target_market VARCHAR(100),
  experience_level VARCHAR(50) DEFAULT 'beginner',
  
  -- Status and tier
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended', 'pending')),
  tier VARCHAR(50) DEFAULT 'standard' CHECK (tier IN ('standard', 'gold', 'platinum')),
  
  -- Commission settings
  commission_rate DECIMAL(5,4) DEFAULT 0.25, -- 25%
  override_commission_rate DECIMAL(5,4), -- Optional custom rate
  
  -- Tracking
  total_referrals INTEGER DEFAULT 0,
  active_referrals INTEGER DEFAULT 0,
  total_earnings DECIMAL(10,2) DEFAULT 0,
  pending_payout DECIMAL(10,2) DEFAULT 0,
  lifetime_payouts DECIMAL(10,2) DEFAULT 0,
  
  -- Stripe
  stripe_account_id VARCHAR(255), -- For automated payouts
  payout_method VARCHAR(50) DEFAULT 'stripe' CHECK (payout_method IN ('stripe', 'paypal', 'wire', 'check')),
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_payout_at TIMESTAMP WITH TIME ZONE,
  
  UNIQUE(user_id)
);

-- =====================================================
-- REFERRALS TABLE (Tracks all referred customers)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.referrals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reseller_id UUID NOT NULL REFERENCES public.resellers(id) ON DELETE CASCADE,
  referred_user_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  referral_code_used VARCHAR(50) NOT NULL,
  
  -- Subscription info
  plan_id VARCHAR(50) NOT NULL,
  plan_name VARCHAR(100),
  plan_price DECIMAL(10,2) NOT NULL,
  
  -- Commission tracking
  commission_rate DECIMAL(5,4) DEFAULT 0.25,
  monthly_commission DECIMAL(10,2) NOT NULL,
  total_commission_paid DECIMAL(10,2) DEFAULT 0,
  
  -- Status
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'expired', 'churned')),
  subscription_start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  subscription_end_date TIMESTAMP WITH TIME ZONE,
  
  -- Multi-level tracking (if this customer was referred by another reseller)
  parent_reseller_id UUID REFERENCES public.resellers(id) ON DELETE SET NULL,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE(referred_user_id)
);

-- =====================================================
-- COMMISSION PAYOUTS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS public.commission_payouts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reseller_id UUID NOT NULL REFERENCES public.resellers(id) ON DELETE CASCADE,
  
  -- Payout details
  amount DECIMAL(10,2) NOT NULL,
  period_start DATE NOT NULL,
  period_end DATE NOT NULL,
  
  -- Payment info
  payment_method VARCHAR(50) NOT NULL,
  stripe_transfer_id VARCHAR(255), -- Stripe transfer ID for tracking
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed')),
  
  -- Breakdown
  active_referrals_count INTEGER NOT NULL,
  total_referrals_in_period INTEGER NOT NULL,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  paid_at TIMESTAMP WITH TIME ZONE,
  failed_at TIMESTAMP WITH TIME ZONE,
  failure_reason TEXT
);

-- =====================================================
-- RESELLER ANALYTICS TABLE (Daily snapshots for trending)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.reseller_analytics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reseller_id UUID NOT NULL REFERENCES public.resellers(id) ON DELETE CASCADE,
  snapshot_date DATE NOT NULL,
  
  -- Metrics
  active_referrals INTEGER NOT NULL,
  new_referrals INTEGER DEFAULT 0,
  churned_referrals INTEGER DEFAULT 0,
  total_revenue DECIMAL(10,2) DEFAULT 0,
  commission_earned DECIMAL(10,2) DEFAULT 0,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE(reseller_id, snapshot_date)
);

-- =====================================================
-- INDEXES
-- =====================================================
CREATE INDEX IF NOT EXISTS idx_resellers_referral_code ON public.resellers(referral_code);
CREATE INDEX IF NOT EXISTS idx_resellers_user_id ON public.resellers(user_id);
CREATE INDEX IF NOT EXISTS idx_resellers_status ON public.resellers(status);

CREATE INDEX IF NOT EXISTS idx_referrals_reseller_id ON public.referrals(reseller_id);
CREATE INDEX IF NOT EXISTS idx_referrals_status ON public.referrals(status);
CREATE INDEX IF NOT EXISTS idx_referrals_referred_user_id ON public.referrals(referred_user_id);
CREATE INDEX IF NOT EXISTS idx_referrals_parent_reseller ON public.referrals(parent_reseller_id);

CREATE INDEX IF NOT EXISTS idx_payouts_reseller_id ON public.commission_payouts(reseller_id);
CREATE INDEX IF NOT EXISTS idx_payouts_status ON public.commission_payouts(status);
CREATE INDEX IF NOT EXISTS idx_payouts_period ON public.commission_payouts(period_start, period_end);

CREATE INDEX IF NOT EXISTS idx_analytics_reseller_date ON public.reseller_analytics(reseller_id, snapshot_date);

-- =====================================================
-- ROW LEVEL SECURITY (RLS)
-- =====================================================
ALTER TABLE public.resellers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.commission_payouts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reseller_analytics ENABLE ROW LEVEL SECURITY;

-- Resellers can view/update their own data
DROP POLICY IF EXISTS "Resellers can view own data" ON public.resellers;
CREATE POLICY "Resellers can view own data"
  ON public.resellers FOR SELECT
  USING (user_id = auth.uid());

DROP POLICY IF EXISTS "Resellers can insert" ON public.resellers;
CREATE POLICY "Resellers can insert"
  ON public.resellers FOR INSERT
  WITH CHECK (user_id = auth.uid());

DROP POLICY IF EXISTS "Resellers can update own data" ON public.resellers;
CREATE POLICY "Resellers can update own data"
  ON public.resellers FOR UPDATE
  USING (user_id = auth.uid());

-- Referrals: resellers can view their own referrals
DROP POLICY IF EXISTS "Resellers can view own referrals" ON public.referrals;
CREATE POLICY "Resellers can view own referrals"
  ON public.referrals FOR SELECT
  USING (reseller_id IN (SELECT id FROM public.resellers WHERE user_id = auth.uid()));

-- Payouts: resellers can view their own payouts
DROP POLICY IF EXISTS "Resellers can view own payouts" ON public.commission_payouts;
CREATE POLICY "Resellers can view own payouts"
  ON public.commission_payouts FOR SELECT
  USING (reseller_id IN (SELECT id FROM public.resellers WHERE user_id = auth.uid()));

-- Analytics: resellers can view their own analytics
DROP POLICY IF EXISTS "Resellers can view own analytics" ON public.reseller_analytics;
CREATE POLICY "Resellers can view own analytics"
  ON public.reseller_analytics FOR SELECT
  USING (reseller_id IN (SELECT id FROM public.resellers WHERE user_id = auth.uid()));

-- =====================================================
-- FUNCTIONS & TRIGGERS
-- =====================================================

-- Update updated_at timestamp
CREATE OR REPLACE FUNCTION update_reseller_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_resellers_updated_at ON public.resellers;
CREATE TRIGGER update_resellers_updated_at
  BEFORE UPDATE ON public.resellers
  FOR EACH ROW EXECUTE FUNCTION update_reseller_updated_at();

DROP TRIGGER IF EXISTS update_referrals_updated_at ON public.referrals;
CREATE TRIGGER update_referrals_updated_at
  BEFORE UPDATE ON public.referrals
  FOR EACH ROW EXECUTE FUNCTION update_reseller_updated_at();

-- Auto-update reseller stats when referral changes
CREATE OR REPLACE FUNCTION update_reseller_stats()
RETURNS TRIGGER AS $$
BEGIN
  -- Update active referrals count
  UPDATE public.resellers
  SET 
    total_referrals = (
      SELECT COUNT(*) FROM public.referrals 
      WHERE reseller_id = NEW.reseller_id
    ),
    active_referrals = (
      SELECT COUNT(*) FROM public.referrals 
      WHERE reseller_id = NEW.reseller_id AND status = 'active'
    )
  WHERE id = NEW.reseller_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_reseller_stats_trigger ON public.referrals;
CREATE TRIGGER update_reseller_stats_trigger
  AFTER INSERT OR UPDATE ON public.referrals
  FOR EACH ROW EXECUTE FUNCTION update_reseller_stats();

-- =====================================================
-- GRANT PERMISSIONS
-- =====================================================
GRANT ALL ON TABLE public.resellers TO anon, authenticated;
GRANT ALL ON TABLE public.referrals TO anon, authenticated;
GRANT ALL ON TABLE public.commission_payouts TO anon, authenticated;
GRANT ALL ON TABLE public.reseller_analytics TO anon, authenticated;

-- =====================================================
-- SUCCESS MESSAGE
-- =====================================================
DO $$
BEGIN
  RAISE NOTICE '✅ Reseller/Partner program database schema created successfully!';
  RAISE NOTICE '📊 Tables: resellers, referrals, commission_payouts, reseller_analytics';
  RAISE NOTICE '🔐 Row Level Security (RLS) policies enabled';
  RAISE NOTICE '⚡ Auto-updating stats triggers configured';
END $$;
