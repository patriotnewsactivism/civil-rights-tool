import React, { useState } from 'react';
import { Users, DollarSign, TrendingUp, Target, Calendar, CheckCircle, ArrowRight, Copy, BarChart3, Shield } from 'lucide-react';
// @ts-ignore
import { useAuth } from '../context/AuthContext.jsx';
// @ts-ignore
import { supabase } from '../lib/supabase.js';

const ResellerProgram = () => {
  const { user } = useAuth();
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    targetMarket: '',
    experienceLevel: 'beginner'
  });
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [referralCode, setReferralCode] = useState('');

  // EARNINGS PROJECTIONS - Path to $3000-$4000/month
  const planData = [
    {
      name: 'Starter',
      price: 29,
      avgCommission: 7.25, // 25% commission
      description: 'Individual activists & journalists',
      features: ['Press Pass Generator', 'Attorney Directory', 'Police Scanners', 'Violation Reporting']
    },
    {
      name: 'Pro',
      price: 79,
      avgCommission: 19.75, // 25% commission
      description: 'Small organizations & law firms',
      features: ['All Starter features', 'Case Explorer', 'Legislative Tracker', 'Priority Support']
    },
    {
      name: 'Ultimate',
      price: 149,
      avgCommission: 37.25, // 25% commission
      description: 'Large teams & institutions',
      features: ['All Pro features', 'API Access', 'Custom Integrations', 'Dedicated Support']
    }
  ];

  // Calculate average commission across all plans (weighted)
  const avgPlanPrice = (planData[0].price * 0.5 + planData[1].price * 0.35 + planData[2].price * 0.15);
  const avgCommissionPerAccount = avgPlanPrice * 0.25; // 25% commission rate

  // Attrition rate: Industry standard is 5-7% monthly, we're targeting 5%
  const monthlyAttritionRate = 0.05; // 5% monthly churn
  const annualRetentionRate = Math.pow((1 - monthlyAttritionRate), 12) * 100; // ~54% annual retention

  // Path to $3000-$4000/month projections
  const earningsPath = [
    { accounts: 20, monthly: 20 * avgCommissionPerAccount, months: '1-2', effort: 'Part-time marketing' },
    { accounts: 40, monthly: 40 * avgCommissionPerAccount, months: '3-4', effort: '10-15 hours/week' },
    { accounts: 75, monthly: 75 * avgCommissionPerAccount, months: '5-7', effort: 'Consistent outreach' },
    { accounts: 110, monthly: 110 * avgCommissionPerAccount, months: '8-10', effort: 'Established pipeline' },
    { accounts: 150, monthly: 150 * avgCommissionPerAccount, months: '11-12', effort: 'Referral momentum' }
  ];

  // Target for $3500/month average
  const targetAccounts = Math.ceil(3500 / avgCommissionPerAccount);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('Please sign in to join the reseller program');
      return;
    }

    setLoading(true);
    try {
      // Generate unique referral code
      const code = `RSL${user.id.substring(0, 8).toUpperCase()}`;
      
      // Insert reseller into database
      const { error } = await supabase
        .from('resellers')
        .insert({
          user_id: user.id,
          referral_code: code,
          company_name: formData.companyName,
          website: formData.website,
          target_market: formData.targetMarket,
          experience_level: formData.experienceLevel,
          status: 'active',
          commission_rate: 0.25,
          tier: 'standard'
        });

      if (error) throw error;

      setReferralCode(code);
      setShowSignupForm(false);
      alert(`Welcome to the Reseller Program! Your referral code is: ${code}`);
    } catch (error: any) {
      console.error('Error signing up:', error);
      alert('Error signing up. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full font-bold text-sm">
            <DollarSign className="h-4 w-4 mr-2" />
            25% Recurring Commission · Passive Income
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white">
            Build Your Legal Tech
            <span className="block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Reselling Empire
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Partner with the Civil Rights Network and earn <span className="font-bold text-green-400">$3,000-$4,000/month</span> in recurring revenue. 
            We handle the product, you bring the customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => user ? setShowSignupForm(true) : alert('Please sign in first')}
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition flex items-center"
            >
              Join Reseller Program Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <div className="text-white/60 text-sm">
              ✓ No upfront costs · ✓ Automated payouts · ✓ Full analytics
            </div>
          </div>
        </div>

        {/* Earnings Breakdown */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <BarChart3 className="h-8 w-8 mr-3 text-green-400" />
            Your Path to $3,500/Month
          </h2>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 p-6 rounded-xl border border-green-400/30">
              <div className="text-green-400 font-bold text-sm mb-2">Average Plan Cost</div>
              <div className="text-3xl font-black text-white">${avgPlanPrice.toFixed(0)}</div>
              <div className="text-white/60 text-xs mt-1">per subscriber</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 p-6 rounded-xl border border-blue-400/30">
              <div className="text-blue-400 font-bold text-sm mb-2">Your Commission</div>
              <div className="text-3xl font-black text-white">${avgCommissionPerAccount.toFixed(2)}</div>
              <div className="text-white/60 text-xs mt-1">per account/month (25%)</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-6 rounded-xl border border-purple-400/30">
              <div className="text-purple-400 font-bold text-sm mb-2">Monthly Attrition</div>
              <div className="text-3xl font-black text-white">5%</div>
              <div className="text-white/60 text-xs mt-1">~{annualRetentionRate.toFixed(0)}% annual retention</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 p-6 rounded-xl border border-orange-400/30">
              <div className="text-orange-400 font-bold text-sm mb-2">Accounts Needed</div>
              <div className="text-3xl font-black text-white">{targetAccounts}</div>
              <div className="text-white/60 text-xs mt-1">for $3,500/month</div>
            </div>
          </div>

          {/* Growth Timeline */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Realistic Growth Timeline</h3>
            {earningsPath.map((milestone, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/30 transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">Month {milestone.months}</div>
                        <div className="text-white/60 text-sm">{milestone.effort}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <div className="text-white/60 text-sm">Active Accounts</div>
                      <div className="text-white font-bold text-2xl">{milestone.accounts}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/60 text-sm">Monthly Revenue</div>
                      <div className="text-green-400 font-black text-3xl">${milestone.monthly.toFixed(0)}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-6 rounded-xl border border-yellow-400/30">
            <div className="flex items-start gap-3">
              <Target className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <div className="text-yellow-400 font-bold mb-2">Maintaining Your Revenue Stream</div>
                <div className="text-white/80 text-sm leading-relaxed">
                  With 5% monthly attrition, you'll need to add ~{Math.ceil(targetAccounts * 0.05)} new accounts per month 
                  to maintain ${(targetAccounts * avgCommissionPerAccount).toFixed(0)}/month. 
                  This is typically 1-2 new signups per week from your established marketing channels.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commission Structure */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6">Commission Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planData.map((plan, index) => (
              <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-xl border border-white/20 hover:scale-105 transition">
                <div className="text-center space-y-4">
                  <div className="text-white/60 font-bold">{plan.name} Plan</div>
                  <div className="text-white text-4xl font-black">${plan.price}<span className="text-xl">/mo</span></div>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-bold">
                    You Earn: ${plan.avgCommission}/mo
                  </div>
                  <div className="text-white/60 text-sm">{plan.description}</div>
                  <ul className="text-left space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Partner With Us */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6">Why Become a Reseller?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-lg mb-2">Automated Monthly Payouts</div>
                <div className="text-white/70 text-sm">
                  Commissions are automatically calculated and paid via Stripe on the 1st of each month. No invoicing, no chasing payments.
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-lg mb-2">Zero Risk, No Upfront Costs</div>
                <div className="text-white/70 text-sm">
                  100% free to join. No inventory, no setup fees. You only earn when your referrals subscribe.
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-lg mb-2">Real-Time Analytics Dashboard</div>
                <div className="text-white/70 text-sm">
                  Track every referral, conversion, commission, and payout in real-time. Full transparency on your earnings.
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-lg mb-2">Multi-Level Tracking</div>
                <div className="text-white/70 text-sm">
                  Earn on your direct referrals AND when your resellers refer new resellers (2-tier system).
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Signup Form Modal */}
        {showSignupForm && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 max-w-md w-full border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Join as a Reseller</h3>
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Company Name (Optional)</label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
                    placeholder="Your company or personal brand"
                  />
                </div>
                
                <div>
                  <label className="block text-white/70 text-sm mb-2">Website (Optional)</label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">Target Market</label>
                  <select
                    value={formData.targetMarket}
                    onChange={(e) => setFormData({...formData, targetMarket: e.target.value})}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
                    required
                  >
                    <option value="">Select target market</option>
                    <option value="activists">Activists & Organizers</option>
                    <option value="journalists">Journalists & Media</option>
                    <option value="attorneys">Attorneys & Law Firms</option>
                    <option value="nonprofits">Non-Profit Organizations</option>
                    <option value="general">General / Multiple</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">Experience Level</label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({...formData, experienceLevel: e.target.value})}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
                  >
                    <option value="beginner">Beginner - First time reselling</option>
                    <option value="intermediate">Intermediate - Some experience</option>
                    <option value="advanced">Advanced - Experienced reseller</option>
                  </select>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition disabled:opacity-50"
                  >
                    {loading ? 'Joining...' : 'Join Now'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSignupForm(false)}
                    className="px-6 py-3 bg-white/10 text-white rounded-lg font-bold hover:bg-white/20 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ResellerProgram;
