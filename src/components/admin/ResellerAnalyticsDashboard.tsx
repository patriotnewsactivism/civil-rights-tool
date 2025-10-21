import React, { useState, useEffect } from 'react';
import { BarChart3, Users, DollarSign, TrendingUp, Download, Search, Filter } from 'lucide-react';
// @ts-ignore
import { supabase } from '../../lib/supabase.js';

interface Reseller {
  id: string;
  user_id: string;
  referral_code: string;
  company_name: string;
  status: string;
  tier: string;
  total_referrals: number;
  active_referrals: number;
  total_earnings: number;
  pending_payout: number;
  lifetime_payouts: number;
  created_at: string;
}

const ResellerAnalyticsDashboard = () => {
  const [resellers, setResellers] = useState<Reseller[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState<'earnings' | 'referrals' | 'date'>('earnings');

  useEffect(() => {
    loadResellers();
  }, []);

  const loadResellers = async () => {
    try {
      const { data, error } = await supabase
        .from('resellers')
        .select('*')
        .order('total_earnings', { ascending: false });

      if (error) throw error;
      setResellers(data || []);
    } catch (error) {
      console.error('Error loading resellers:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredResellers = resellers
    .filter(r => {
      if (statusFilter !== 'all' && r.status !== statusFilter) return false;
      if (searchTerm && !r.referral_code.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !r.company_name?.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'earnings') return b.total_earnings - a.total_earnings;
      if (sortBy === 'referrals') return b.active_referrals - a.active_referrals;
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });

  const totalStats = {
    totalResellers: resellers.length,
    activeResellers: resellers.filter(r => r.status === 'active').length,
    totalReferrals: resellers.reduce((sum, r) => sum + r.total_referrals, 0),
    activeReferrals: resellers.reduce((sum, r) => sum + r.active_referrals, 0),
    totalEarnings: resellers.reduce((sum, r) => sum + r.total_earnings, 0),
    pendingPayouts: resellers.reduce((sum, r) => sum + r.pending_payout, 0),
    lifetimePayouts: resellers.reduce((sum, r) => sum + r.lifetime_payouts, 0)
  };

  const exportToCSV = () => {
    const headers = ['Referral Code', 'Company', 'Status', 'Tier', 'Total Referrals', 'Active Referrals', 'Total Earnings', 'Pending Payout', 'Lifetime Payouts'];
    const rows = filteredResellers.map(r => [
      r.referral_code,
      r.company_name || 'N/A',
      r.status,
      r.tier,
      r.total_referrals,
      r.active_referrals,
      r.total_earnings.toFixed(2),
      r.pending_payout.toFixed(2),
      r.lifetime_payouts.toFixed(2)
    ]);

    const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `reseller-analytics-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Reseller Analytics</h1>
            <p className="text-white/60">Monitor all reseller performance and payouts</p>
          </div>
          <button
            onClick={exportToCSV}
            className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition flex items-center gap-2"
          >
            <Download className="h-5 w-5" />
            Export CSV
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <Users className="h-8 w-8 text-blue-400" />
              <div className="text-white/60 text-sm">Total Resellers</div>
            </div>
            <div className="text-3xl font-black text-white">{totalStats.totalResellers}</div>
            <div className="text-green-400 text-sm mt-1">{totalStats.activeResellers} active</div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="h-8 w-8 text-purple-400" />
              <div className="text-white/60 text-sm">Active Referrals</div>
            </div>
            <div className="text-3xl font-black text-white">{totalStats.activeReferrals}</div>
            <div className="text-white/60 text-sm mt-1">{totalStats.totalReferrals} total</div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="h-8 w-8 text-green-400" />
              <div className="text-white/60 text-sm">Pending Payouts</div>
            </div>
            <div className="text-3xl font-black text-white">${totalStats.pendingPayouts.toFixed(0)}</div>
            <div className="text-white/60 text-sm mt-1">due this month</div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="h-8 w-8 text-orange-400" />
              <div className="text-white/60 text-sm">Lifetime Paid</div>
            </div>
            <div className="text-3xl font-black text-white">${totalStats.lifetimePayouts.toFixed(0)}</div>
            <div className="text-white/60 text-sm mt-1">all time</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by code or company..."
                className="w-full bg-white/5 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-white/40"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white"
            >
              <option value="earnings">Sort by Earnings</option>
              <option value="referrals">Sort by Referrals</option>
              <option value="date">Sort by Join Date</option>
            </select>
          </div>
        </div>

        {/* Resellers Table */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="text-left p-4 text-white/60 font-bold text-sm">Code</th>
                  <th className="text-left p-4 text-white/60 font-bold text-sm">Company</th>
                  <th className="text-left p-4 text-white/60 font-bold text-sm">Status</th>
                  <th className="text-left p-4 text-white/60 font-bold text-sm">Tier</th>
                  <th className="text-right p-4 text-white/60 font-bold text-sm">Referrals</th>
                  <th className="text-right p-4 text-white/60 font-bold text-sm">Total Earnings</th>
                  <th className="text-right p-4 text-white/60 font-bold text-sm">Pending</th>
                  <th className="text-right p-4 text-white/60 font-bold text-sm">Lifetime Paid</th>
                </tr>
              </thead>
              <tbody>
                {filteredResellers.map((reseller) => (
                  <tr key={reseller.id} className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="p-4">
                      <div className="font-mono text-blue-400 font-bold">{reseller.referral_code}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-white">{reseller.company_name || 'No company'}</div>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        reseller.status === 'active' ? 'bg-green-500/20 text-green-400' :
                        reseller.status === 'inactive' ? 'bg-gray-500/20 text-gray-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {reseller.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        reseller.tier === 'platinum' ? 'bg-purple-500/20 text-purple-400' :
                        reseller.tier === 'gold' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {reseller.tier}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="text-white font-bold">{reseller.active_referrals}</div>
                      <div className="text-white/40 text-xs">{reseller.total_referrals} total</div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="text-white font-bold">${reseller.total_earnings.toFixed(2)}</div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="text-green-400 font-bold">${reseller.pending_payout.toFixed(2)}</div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="text-white font-bold">${reseller.lifetime_payouts.toFixed(2)}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResellerAnalyticsDashboard;
