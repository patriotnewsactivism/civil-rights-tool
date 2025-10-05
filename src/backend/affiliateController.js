const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const db = require('./database');

// Generate unique referral code
router.post('/generate-code', authenticateToken, async (req, res) => {
  try {
    const { userId } = req.body;
    
    // Check if user already has a referral code
    const existingCode = await db.query(
      'SELECT referral_code FROM affiliates WHERE user_id = ?',
      [userId]
    );

    if (existingCode.length > 0) {
      return res.json({ code: existingCode[0].referral_code });
    }

    // Generate unique referral code
    const code = generateReferralCode();
    
    // Insert new affiliate
    await db.query(
      'INSERT INTO affiliates (user_id, referral_code, created_at) VALUES (?, ?, NOW())',
      [userId, code]
    );

    res.json({ code });
  } catch (error) {
    console.error('Error generating referral code:', error);
    res.status(500).json({ error: 'Failed to generate referral code' });
  }
});

// Track referral signup
router.post('/track-referral', async (req, res) => {
  try {
    const { referralCode, referredUserId, planId, amount, commissionRate, timestamp } = req.body;

    // Validate referral code
    const affiliate = await db.query(
      'SELECT id, user_id FROM affiliates WHERE referral_code = ?',
      [referralCode]
    );

    if (affiliate.length === 0) {
      return res.status(400).json({ error: 'Invalid referral code' });
    }

    const affiliateId = affiliate[0].id;

    // Check if this user was already referred
    const existingReferral = await db.query(
      'SELECT id FROM referrals WHERE referred_user_id = ?',
      [referredUserId]
    );

    if (existingReferral.length > 0) {
      return res.status(400).json({ error: 'User already referred' });
    }

    // Calculate commission
    const commission = parseFloat((amount * commissionRate).toFixed(2));

    // Insert referral
    const result = await db.query(
      `INSERT INTO referrals 
       (affiliate_id, referred_user_id, plan_id, amount, commission_amount, commission_rate, status, created_at) 
       VALUES (?, ?, ?, ?, ?, ?, 'active', NOW())`,
      [affiliateId, referredUserId, planId, amount, commission, commissionRate]
    );

    res.json({ 
      success: true, 
      referralId: result.insertId,
      commission 
    });
  } catch (error) {
    console.error('Error tracking referral:', error);
    res.status(500).json({ error: 'Failed to track referral' });
  }
});

// Get affiliate dashboard data
router.get('/dashboard/:userId', authenticateToken, async (req, res) => {
  try {
    const { userId } = req.params;

    const dashboardData = await db.query(`
      SELECT 
        a.referral_code,
        COUNT(DISTINCT r.id) as total_referrals,
        COUNT(DISTINCT CASE WHEN r.status = 'active' THEN r.id END) as active_referrals,
        COALESCE(SUM(r.commission_amount), 0) as total_earnings,
        COALESCE(SUM(CASE WHEN r.status = 'active' THEN r.commission_amount END), 0) as monthly_recurring,
        COALESCE(AVG(conversion_rate), 0) as conversion_rate
      FROM affiliates a
      LEFT JOIN referrals r ON a.id = r.affiliate_id
      LEFT JOIN (
        SELECT affiliate_id, 
               COUNT(DISTINCT referred_user_id) / NULLIF(COUNT(DISTINCT visitor_id), 0) * 100 as conversion_rate
        FROM affiliate_tracking
        GROUP BY affiliate_id
      ) at ON a.id = at.affiliate_id
      WHERE a.user_id = ?
      GROUP BY a.id
    `, [userId]);

    if (dashboardData.length === 0) {
      return res.json({
        referral_code: null,
        total_referrals: 0,
        active_referrals: 0,
        total_earnings: 0,
        monthly_recurring: 0,
        conversion_rate: 0
      });
    }

    res.json(dashboardData[0]);
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
});

// Get referral details
router.get('/referrals/:userId', authenticateToken, async (req, res) => {
  try {
    const { userId } = req.params;
    const { status } = req.query;

    let statusFilter = '';
    if (status !== 'all') {
      statusFilter = `AND r.status = '${status}'`;
    }

    const referrals = await db.query(`
      SELECT 
        r.id,
        u.name,
        u.email,
        p.name as plan,
        p.price as monthly,
        r.commission_amount as commission,
        r.status,
        r.created_at as date,
        r.cancelled_at as churnDate
      FROM referrals r
      JOIN affiliates a ON r.affiliate_id = a.id
      JOIN users u ON r.referred_user_id = u.id
      JOIN subscription_plans p ON r.plan_id = p.id
      WHERE a.user_id = ? ${statusFilter}
      ORDER BY r.created_at DESC
    `, [userId]);

    res.json(referrals);
  } catch (error) {
    console.error('Error fetching referrals:', error);
    res.status(500).json({ error: 'Failed to fetch referrals' });
  }
});

// Get commission history
router.get('/commission-history/:userId', authenticateToken, async (req, res) => {
  try {
    const { userId } = req.params;
    const { limit } = req.query;

    const history = await db.query(`
      SELECT 
        r.commission_amount,
        p.name as plan_name,
        u.name as referred_user_name,
        r.created_at,
        r.status
      FROM referrals r
      JOIN affiliates a ON r.affiliate_id = a.id
      JOIN users u ON r.referred_user_id = u.id
      JOIN subscription_plans p ON r.plan_id = p.id
      WHERE a.user_id = ?
      ORDER BY r.created_at DESC
      LIMIT ?
    `, [userId, parseInt(limit) || 50]);

    res.json(history);
  } catch (error) {
    console.error('Error fetching commission history:', error);
    res.status(500).json({ error: 'Failed to fetch commission history' });
  }
});

// Process commission payout
router.post('/process-payout', authenticateToken, async (req, res) => {
  try {
    const { affiliateUserId, amount, period, payoutMethod } = req.body;

    // Validate affiliate
    const affiliate = await db.query(
      'SELECT id FROM affiliates WHERE user_id = ?',
      [affiliateUserId]
    );

    if (affiliate.length === 0) {
      return res.status(404).json({ error: 'Affiliate not found' });
    }

    const affiliateId = affiliate[0].id;

    // Insert payout record
    const result = await db.query(
      `INSERT INTO affiliate_payouts 
       (affiliate_id, amount, period, payout_method, status, created_at) 
       VALUES (?, ?, ?, ?, 'pending', NOW())`,
      [affiliateId, amount, period, payoutMethod]
    );

    res.json({ 
      success: true, 
      payoutId: result.insertId,
      message: 'Payout request submitted successfully'
    });
  } catch (error) {
    console.error('Error processing payout:', error);
    res.status(500).json({ error: 'Failed to process payout' });
  }
});

// Update referral status
router.put('/update-referral-status', authenticateToken, async (req, res) => {
  try {
    const { referralId, status, reason } = req.body;

    await db.query(
      `UPDATE referrals 
       SET status = ?, cancelled_reason = ?, cancelled_at = NOW() 
       WHERE id = ?`,
      [status, reason, referralId]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Error updating referral status:', error);
    res.status(500).json({ error: 'Failed to update referral status' });
  }
});

// Get affiliate statistics
router.get('/stats/:userId', authenticateToken, async (req, res) => {
  try {
    const { userId } = req.params;

    const stats = await db.query(`
      SELECT 
        COUNT(DISTINCT r.id) as total_referrals,
        COUNT(DISTINCT CASE WHEN r.status = 'active' THEN r.id END) as active_referrals,
        COUNT(DISTINCT CASE WHEN r.status = 'cancelled' THEN r.id END) as cancelled_referrals,
        COALESCE(SUM(r.commission_amount), 0) as total_commission,
        COALESCE(SUM(CASE WHEN r.status = 'active' THEN r.commission_amount END), 0) as active_commission,
        AVG(r.commission_amount) as avg_commission,
        MIN(r.created_at) as first_referral_date,
        MAX(r.created_at) as last_referral_date
      FROM affiliates a
      LEFT JOIN referrals r ON a.id = r.affiliate_id
      WHERE a.user_id = ?
    `, [userId]);

    res.json(stats[0] || {
      total_referrals: 0,
      active_referrals: 0,
      cancelled_referrals: 0,
      total_commission: 0,
      active_commission: 0,
      avg_commission: 0,
      first_referral_date: null,
      last_referral_date: null
    });
  } catch (error) {
    console.error('Error fetching affiliate stats:', error);
    res.status(500).json({ error: 'Failed to fetch affiliate stats' });
  }
});

// Validate referral code
router.get('/validate-code/:code', async (req, res) => {
  try {
    const { code } = req.params;

    const affiliate = await db.query(
      'SELECT id, user_id FROM affiliates WHERE referral_code = ?',
      [code]
    );

    if (affiliate.length === 0) {
      return res.json({ valid: false });
    }

    res.json({ 
      valid: true,
      affiliateId: affiliate[0].id,
      userId: affiliate[0].user_id
    });
  } catch (error) {
    console.error('Error validating referral code:', error);
    res.status(500).json({ error: 'Failed to validate referral code' });
  }
});

// Helper function to generate unique referral code
function generateReferralCode() {
  const adjectives = ['LEGAL', 'RIGHTS', 'JUSTICE', 'EQUAL', 'FAIR', 'CIVIL'];
  const nouns = ['LAW', 'RIGHTS', 'JUSTICE', 'EQUALITY', 'LIBERTY', 'FREEDOM'];
  
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const number = Math.floor(Math.random() * 100);
  
  return `${adj}${noun}${number}`;
}

// Middleware to authenticate requests
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  // Verify JWT token (implement your JWT verification logic)
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
}

module.exports = router;