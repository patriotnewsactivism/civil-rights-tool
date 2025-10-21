import express from 'express';

const router = express.Router();

// API keys from environment (server-side only, not VITE_ prefixed)
const COURTLISTENER_API_KEY = process.env.COURTLISTENER_API_KEY || '';
const LEGISCAN_API_KEY = process.env.LEGISCAN_API_KEY || '';
const NEWS_API_KEY = process.env.NEWS_API_KEY || '';

// CourtListener API Proxy
router.get('/courtlistener/search', async (req, res) => {
  try {
    if (!COURTLISTENER_API_KEY) {
      return res.status(503).json({ error: 'CourtListener API key not configured' });
    }

    const params = new URLSearchParams(req.query);
    const url = `https://www.courtlistener.com/api/rest/v4/search/?${params.toString()}`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Token ${COURTLISTENER_API_KEY}`,
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`CourtListener API error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('CourtListener proxy error:', error);
    res.status(500).json({ error: 'Failed to fetch from CourtListener API' });
  }
});

router.get('/courtlistener/opinions/:id', async (req, res) => {
  try {
    if (!COURTLISTENER_API_KEY) {
      return res.status(503).json({ error: 'CourtListener API key not configured' });
    }

    const { id } = req.params;
    const url = `https://www.courtlistener.com/api/rest/v4/opinions/${id}/`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Token ${COURTLISTENER_API_KEY}`,
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`CourtListener API error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('CourtListener proxy error:', error);
    res.status(500).json({ error: 'Failed to fetch opinion details' });
  }
});

// LegiScan API Proxy
router.get('/legislative/bills', async (req, res) => {
  try {
    if (!LEGISCAN_API_KEY) {
      return res.status(503).json({ error: 'LegiScan API key not configured' });
    }

    const { state = 'ALL', session = '2025' } = req.query;
    const url = `https://api.legiscan.com/?key=${LEGISCAN_API_KEY}&op=getMasterList&state=${state}&session=${session}`;

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`LegiScan API error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('LegiScan proxy error:', error);
    res.status(500).json({ error: 'Failed to fetch from LegiScan API' });
  }
});

router.get('/legislative/bill/:id', async (req, res) => {
  try {
    if (!LEGISCAN_API_KEY) {
      return res.status(503).json({ error: 'LegiScan API key not configured' });
    }

    const { id } = req.params;
    const url = `https://api.legiscan.com/?key=${LEGISCAN_API_KEY}&op=getBill&id=${id}`;

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`LegiScan API error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('LegiScan proxy error:', error);
    res.status(500).json({ error: 'Failed to fetch bill details' });
  }
});

// NewsAPI Proxy
router.get('/news/everything', async (req, res) => {
  try {
    if (!NEWS_API_KEY) {
      return res.status(503).json({ error: 'NewsAPI key not configured' });
    }

    const { q, limit = 10 } = req.query;
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&apiKey=${NEWS_API_KEY}&sortBy=publishedAt&pageSize=${limit}`;

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`NewsAPI error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('NewsAPI proxy error:', error);
    res.status(500).json({ error: 'Failed to fetch from NewsAPI' });
  }
});

router.get('/news/top-headlines', async (req, res) => {
  try {
    if (!NEWS_API_KEY) {
      return res.status(503).json({ error: 'NewsAPI key not configured' });
    }

    const { q = 'civil rights', limit = 10 } = req.query;
    const url = `https://newsapi.org/v2/top-headlines?q=${encodeURIComponent(q)}&apiKey=${NEWS_API_KEY}&pageSize=${limit}`;

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`NewsAPI error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('NewsAPI proxy error:', error);
    res.status(500).json({ error: 'Failed to fetch headlines' });
  }
});

export default router;
