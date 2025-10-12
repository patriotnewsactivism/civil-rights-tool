# Legal Toolkit - Civil Rights Platform

## Overview
A comprehensive legal toolkit and civil rights platform built with React and Vite, featuring real-time legal data, interactive maps, case exploration tools, and affiliate program management.

## Project Structure
- **Frontend**: React 18 + Vite 7 (TypeScript/JSX)
- **Backend**: Express.js API server (affiliate program endpoints)
- **Styling**: Tailwind CSS with custom forms and typography plugins
- **Charts**: Chart.js with React integration
- **Authentication**: Supabase (with fallback mock client)
- **Legal Data**: CourtListener API integration

## Technology Stack
- React 18.2.0
- Vite 7.1.9 (build tool)
- Express 5.1.0 (backend API)
- Supabase 2.58.0 (authentication & database)
- Chart.js 4.5.0 (data visualization)
- Tailwind CSS 3.4.18 (styling)
- Lucide React (icons)

## Development Setup

### Frontend (Port 5000)
- **Host**: 0.0.0.0 (configured for Replit proxy)
- **Port**: 5000
- **Command**: `npm run dev`
- **HMR**: WebSocket on port 443 with WSS protocol

### Backend (Port 3001)
- **Host**: localhost
- **Port**: 3001
- **Command**: `node src/backend/server.js`
- **Endpoints**:
  - `/health` - Health check
  - `/api/affiliates/dashboard/:userId` - Affiliate dashboard data
  - `/api/affiliates/referrals/:userId` - Referral list
  - `/api/affiliates/stats/:userId` - Affiliate statistics
  - `/api/affiliates/generate-code` - Generate referral code
  - `/api/affiliates/track-referral` - Track new referrals

## Deployment Configuration
- **Target**: Autoscale (stateless web app)
- **Build**: `npm run build`
- **Serve**: `npx serve -s dist -l 5000`
- **Output**: `dist/` directory

## Key Features
1. **Legal Resources & Laws** - Comprehensive legal information and resources
2. **Interactive 3D Map** - Geographical legal data visualization
3. **Case Explorer** - Search and analyze legal cases via CourtListener API
4. **Real-Time Dashboard** - Live legal data and statistics
5. **Legislative Tracker** - Track legislative changes and updates
6. **AI Legal Assistant** - AI-powered legal guidance
7. **Affiliate Program** - Referral and commission tracking system
8. **Subscription Plans** - Multi-tier pricing (Starter, Pro, Ultimate)

## External Integrations
- **CourtListener API**: Legal case search and data
- **Supabase**: Authentication and database (with mock fallback)
- **Legislative Tracker API**: Legislative data (planned)
- **News Aggregator API**: Legal news updates (planned)

## Recent Changes (October 12, 2025)
- Configured Vite to support Replit proxy with host 0.0.0.0 and HMR over WSS
- Updated backend to use port 3001 (avoiding frontend port conflict)
- Fixed browser-side code to use `import.meta.env` instead of `process.env` for Vite compatibility
- Added .gitignore for Node.js project
- Configured deployment settings for autoscale
- Set up frontend workflow on port 5000
- Installed serve package for production deployment

## Development Notes
- The project uses a mock Supabase client when the real client is unavailable
- Backend uses mock data for affiliate program demonstration
- Frontend is configured for Replit environment with proper host settings
- All dependencies are installed and ready to use
