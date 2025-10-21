// Violations API Controller - Handle civil rights violation reports
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

// POST /api/violations - Submit a new violation report
export async function submitViolation(req, res) {
  try {
    const {
      title,
      description,
      category,
      incident_at,
      latitude,
      longitude,
      address,
      city,
      state,
      zip_code,
      severity,
      media_url
    } = req.body;

    // Validation
    if (!title || !description || !category || !incident_at || !latitude || !longitude) {
      return res.status(400).json({
        error: 'Missing required fields: title, description, category, incident_at, latitude, longitude'
      });
    }

    // Validate coordinates
    if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
      return res.status(400).json({
        error: 'Invalid coordinates'
      });
    }

    // Create hash of IP for rate limiting (without storing actual IP)
    const ipHash = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';

    // Insert violation (starts as 'pending' by default)
    const { data, error } = await supabase
      .from('violations')
      .insert([{
        title,
        description,
        category,
        incident_at,
        latitude,
        longitude,
        address,
        city,
        state,
        zip_code,
        severity: severity || 3,
        media_url,
        ip_hash: ipHash,
        status: 'approved' // Auto-approve for demo - in production, use 'pending' and moderate
      }])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to submit violation report' });
    }

    res.status(201).json({
      success: true,
      violation: data
    });
  } catch (error) {
    console.error('Error submitting violation:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// GET /api/violations - Get approved violations (with optional filtering)
export async function getViolations(req, res) {
  try {
    const { state, category, limit = 100 } = req.query;

    let query = supabase
      .from('violations')
      .select('*')
      .eq('status', 'approved')
      .order('incident_at', { ascending: false })
      .limit(parseInt(limit));

    if (state) {
      query = query.eq('state', state);
    }

    if (category) {
      query = query.eq('category', category);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to fetch violations' });
    }

    res.json({
      success: true,
      violations: data || []
    });
  } catch (error) {
    console.error('Error fetching violations:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// GET /api/violations/stats - Get violation statistics
export async function getViolationStats(req, res) {
  try {
    // Get total count
    const { count: totalCount } = await supabase
      .from('violations')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'approved');

    // Get by category
    const { data: byCategory } = await supabase
      .from('violations')
      .select('category')
      .eq('status', 'approved');

    // Group by category
    const categoryCounts = {};
    byCategory?.forEach(v => {
      categoryCounts[v.category] = (categoryCounts[v.category] || 0) + 1;
    });

    // Get by state
    const { data: byState } = await supabase
      .from('violations')
      .select('state')
      .eq('status', 'approved');

    // Group by state
    const stateCounts = {};
    byState?.forEach(v => {
      if (v.state) {
        stateCounts[v.state] = (stateCounts[v.state] || 0) + 1;
      }
    });

    res.json({
      success: true,
      stats: {
        total: totalCount || 0,
        byCategory: categoryCounts,
        byState: stateCounts
      }
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
