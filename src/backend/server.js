import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mock data for demonstration
const mockAffiliates = [
  {
    id: 1,
    user_id: 123,
    referral_code: 'LEGAL25',
    created_at: '2024-01-15'
  }
];

const mockReferrals = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@example.com',
    plan: 'Pro',
    monthly: 50,
    commission: 12.50,
    status: 'active',
    date: '2024-08-15'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    plan: 'Ultimate',
    monthly: 100,
    commission: 25.00,
    status: 'active',
    date: '2024-09-01'
  },
  {
    id: 3,
    name: 'Mike Davis',
    email: 'mike@example.com',
    plan: 'Starter',
    monthly: 10,
    commission: 2.50,
    status: 'active',
    date: '2024-09-10'
  }
];

// API Routes
app.get('/api/affiliates/dashboard/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    
    // Mock dashboard data
    const dashboardData = {
      referral_code: 'LEGAL25',
      total_referrals: 12,
      active_referrals: 8,
      total_earnings: 245.50,
      monthly_recurring: 87.50,
      conversion_rate: 3.2
    };
    
    res.json(dashboardData);
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
});

app.get('/api/affiliates/referrals/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    const { status } = req.query;
    
    let referrals = mockReferrals;
    if (status && status !== 'all') {
      referrals = referrals.filter(r => r.status === status);
    }
    
    res.json(referrals);
  } catch (error) {
    console.error('Error fetching referrals:', error);
    res.status(500).json({ error: 'Failed to fetch referrals' });
  }
});

app.get('/api/affiliates/stats/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    
    const stats = {
      total_referrals: 12,
      active_referrals: 8,
      cancelled_referrals: 4,
      total_commission: 245.50,
      active_commission: 87.50,
      avg_commission: 20.46,
      first_referral_date: '2024-06-15',
      last_referral_date: '2024-10-01'
    };
    
    res.json(stats);
  } catch (error) {
    console.error('Error fetching affiliate stats:', error);
    res.status(500).json({ error: 'Failed to fetch affiliate stats' });
  }
});

app.post('/api/affiliates/generate-code', (req, res) => {
  try {
    const { userId } = req.body;
    
    // Generate unique referral code
    const code = 'LEGAL25'; // Mock code
    
    res.json({ code });
  } catch (error) {
    console.error('Error generating referral code:', error);
    res.status(500).json({ error: 'Failed to generate referral code' });
  }
});

app.post('/api/affiliates/track-referral', (req, res) => {
  try {
    const { referralCode, referredUserId, planId, amount, commissionRate } = req.body;
    
    // Calculate commission
    const commission = parseFloat((amount * commissionRate).toFixed(2));
    
    res.json({ 
      success: true, 
      referralId: Math.floor(Math.random() * 1000),
      commission 
    });
  } catch (error) {
    console.error('Error tracking referral:', error);
    res.status(500).json({ error: 'Failed to track referral' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Affiliate Program Backend Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`💰 Affiliate API endpoints:`);
  console.log(`   - Dashboard: http://localhost:${PORT}/api/affiliates/dashboard/:userId`);
  console.log(`   - Referrals: http://localhost:${PORT}/api/affiliates/referrals/:userId`);
  console.log(`   - Stats: http://localhost:${PORT}/api/affiliates/stats/:userId`);
});

export default app;