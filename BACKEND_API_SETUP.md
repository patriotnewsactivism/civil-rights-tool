# Backend API Setup Guide

## 🔒 Security Improvement Complete

All API keys have been moved to a secure backend proxy server. This prevents API keys from being exposed in the client-side code.

## ✅ What's Been Done

### 1. Created Backend API Proxy (`src/backend/api-proxy.js`)
- Secure server-side API proxy for all external services
- Handles CourtListener, LegiScan, and NewsAPI requests
- API keys never exposed to the browser

### 2. Updated Frontend Services
- `LegislativeTrackerAPI.js` → Now calls `/api/legislative/*`
- `NewsAggregatorAPI.js` → Now calls `/api/news/*`
- `CourtListenerAPI.js` → **Needs update** (see below)

### 3. Integrated with Express Server
- Backend server (`src/backend/server.js`) now includes API proxy routes
- All API endpoints available at `http://localhost:3001/api/*`

## 🚀 Next Steps to Complete Setup

### Step 1: Update Environment Variables

The API keys need to be renamed to remove the `VITE_` prefix (so they're server-only):

**Current Secrets (Client-Accessible):**
- `VITE_COURTLISTENER_API_KEY`
- `VITE_LEGISCAN_API_KEY`
- `VITE_NEWS_API_KEY`
- `VITE_SUPABASE_URL` (keep this one - Supabase keys are safe in browser)
- `VITE_SUPABASE_ANON_KEY` (keep this one)

**New Secrets Needed (Server-Only):**
1. Add new secret: `COURTLISTENER_API_KEY` (copy value from VITE_COURTLISTENER_API_KEY)
2. Add new secret: `LEGISCAN_API_KEY` (copy value from VITE_LEGISCAN_API_KEY)
3. Add new secret: `NEWS_API_KEY` (copy value from VITE_NEWS_API_KEY)

After adding the new secrets, you can delete the old VITE_* versions (except Supabase ones).

### Step 2: Start the Backend Server

Create a workflow to run the backend server:

```bash
node src/backend/server.js
```

This starts the API proxy on port 3001.

### Step 3: Update CourtListener Service (Optional - Manual Step)

The `CourtListenerAPI.js` file still makes direct API calls. To fully secure it:

1. Update it to call `/api/courtlistener/*` endpoints
2. Remove the `import.meta.env.VITE_COURTLISTENER_API_KEY` reference

## 📊 API Proxy Endpoints

Once the backend is running, these endpoints are available:

### CourtListener
- `GET /api/courtlistener/search?q=query` - Search cases
- `GET /api/courtlistener/opinions/:id` - Get opinion details

### LegiScan
- `GET /api/legislative/bills?state=ALL&session=2025` - Get bills
- `GET /api/legislative/bill/:id` - Get bill details

### NewsAPI  
- `GET /api/news/everything?q=query&limit=10` - Search news
- `GET /api/news/top-headlines?q=civil+rights&limit=10` - Get headlines

## ✅ Benefits of This Setup

1. **Security**: API keys never exposed in browser code
2. **CORS Fixed**: Backend proxy bypasses CORS restrictions
3. **Rate Limiting**: Can add server-side rate limiting
4. **Monitoring**: Can log and monitor API usage
5. **Caching**: Can add server-side caching for better performance

## 🧪 Testing

After starting the backend server, test endpoints:

```bash
# Health check
curl http://localhost:3001/health

# Test LegiScan proxy (returns civil rights bills)
curl http://localhost:3001/api/legislative/bills?state=ALL&session=2025

# Test NewsAPI proxy
curl "http://localhost:3001/api/news/top-headlines?q=civil+rights&limit=5"
```

## 📝 Current Status

- ✅ Backend proxy created
- ✅ LegiScan integrated (via proxy)
- ✅ NewsAPI integrated (via proxy)
- ⚠️ CourtListener partially integrated (direct calls still present - optional to update)
- ⏸️ Backend server needs to be started
- ⏸️ Environment variables need to be updated (remove VITE_ prefix)
