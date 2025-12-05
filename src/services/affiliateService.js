// Affiliate Program Service
// Handles affiliate tracking, commissions, and payouts

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

class AffiliateService {
  constructor() {
    this.baseUrl = `${API_BASE_URL}/affiliates`;
  }

  // Generate unique referral code for user
  async generateReferralCode(userId) {
    try {
      const response = await fetch(`${this.baseUrl}/generate-code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ userId })
      });

      if (!response.ok) throw new Error('Failed to generate referral code');
      
      const data = await response.json();
      return data.code;
    } catch (error) {
      console.error('Error generating referral code:', error);
      throw error;
    }
  }

  // Track referral signup
  async trackReferral(referralCode, referredUserId, planId, amount) {
    try {
      const response = await fetch(`${this.baseUrl}/track-referral`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          referralCode,
          referredUserId,
          planId,
          amount,
          commissionRate: 0.25, // 25%
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) throw new Error('Failed to track referral');
      
      return await response.json();
    } catch (error) {
      console.error('Error tracking referral:', error);
      throw error;
    }
  }

  // Get affiliate dashboard data
  async getAffiliateDashboard(userId) {
    try {
      const response = await fetch(`${this.baseUrl}/dashboard/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) throw new Error('Failed to fetch dashboard data');
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching affiliate dashboard:', error);
      throw error;
    }
  }

  // Get referral details
  async getReferrals(userId, status = 'all') {
    try {
      const response = await fetch(`${this.baseUrl}/referrals/${userId}?status=${status}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) throw new Error('Failed to fetch referrals');
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching referrals:', error);
      throw error;
    }
  }

  // Calculate commission for a referral
  calculateCommission(planAmount, commissionRate = 0.25) {
    return parseFloat((planAmount * commissionRate).toFixed(2));
  }

  // Process monthly commission payouts
  async processCommissionPayout(affiliateUserId, amount, period) {
    try {
      const response = await fetch(`${this.baseUrl}/process-payout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          affiliateUserId,
          amount,
          period,
          payoutMethod: 'paypal', // or 'bank_transfer'
          status: 'pending'
        })
      });

      if (!response.ok) throw new Error('Failed to process payout');
      
      return await response.json();
    } catch (error) {
      console.error('Error processing payout:', error);
      throw error;
    }
  }

  // Get commission history
  async getCommissionHistory(userId, limit = 50) {
    try {
      const response = await fetch(`${this.baseUrl}/commission-history/${userId}?limit=${limit}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) throw new Error('Failed to fetch commission history');
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching commission history:', error);
      throw error;
    }
  }

  // Update referral status (active, cancelled, etc.)
  async updateReferralStatus(referralId, status, reason = null) {
    try {
      const response = await fetch(`${this.baseUrl}/update-referral-status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          referralId,
          status,
          reason,
          updatedAt: new Date().toISOString()
        })
      });

      if (!response.ok) throw new Error('Failed to update referral status');
      
      return await response.json();
    } catch (error) {
      console.error('Error updating referral status:', error);
      throw error;
    }
  }

  // Get affiliate statistics
  async getAffiliateStats(userId) {
    try {
      const response = await fetch(`${this.baseUrl}/stats/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) throw new Error('Failed to fetch affiliate stats');
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching affiliate stats:', error);
      throw error;
    }
  }

  // Validate referral code
  async validateReferralCode(code) {
    try {
      const response = await fetch(`${this.baseUrl}/validate-code/${code}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) return { valid: false };
      
      return await response.json();
    } catch (error) {
      console.error('Error validating referral code:', error);
      return { valid: false };
    }
  }

  // Generate affiliate marketing materials
  async getMarketingMaterials(affiliateId) {
    try {
      const response = await fetch(`${this.baseUrl}/marketing-materials/${affiliateId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) throw new Error('Failed to fetch marketing materials');
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching marketing materials:', error);
      throw error;
    }
  }
}

export default new AffiliateService();