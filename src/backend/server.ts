import express from 'express';
import cors from 'cors';
import { searchCases, getCaseDetails, searchFinancialDisclosures, searchInvestments, searchOralArguments } from './services/courtlistener';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Case law search endpoint
app.get('/api/courtlistener/cases/search', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q || typeof q !== 'string') {
      return res.status(400).json({ error: 'Query parameter "q" is required' });
    }
    
    const results = await searchCases(q);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// Case details endpoint
app.get('/api/courtlistener/cases/:clusterId', async (req, res) => {
  try {
    const { clusterId } = req.params;
    const clusterIdNum = parseInt(clusterId, 10);
    
    if (isNaN(clusterIdNum)) {
      return res.status(400).json({ error: 'Invalid cluster ID' });
    }
    
    const details = await getCaseDetails(clusterIdNum);
    res.json(details);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// Financial disclosure search endpoint
app.get('/api/courtlistener/financial-disclosures', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q || typeof q !== 'string') {
      return res.status(400).json({ error: 'Query parameter "q" is required' });
    }
    
    const results = await searchFinancialDisclosures(q);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// Investment search endpoint
app.get('/api/courtlistener/investments', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q || typeof q !== 'string') {
      return res.status(400).json({ error: 'Query parameter "q" is required' });
    }
    
    const results = await searchInvestments(q);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// Oral argument search endpoint
app.get('/api/courtlistener/oral-arguments', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q || typeof q !== 'string') {
      return res.status(400).json({ error: 'Query parameter "q" is required' });
    }
    
    const results = await searchOralArguments(q);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.listen(port, () => {
  console.log(`CourtListener API proxy server running at http://localhost:${port}`);
});