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
  - `/api/violations` - Submit and get violation reports
  - `/api/violations/stats` - Violation statistics
  - `/api/admin/login` - Admin authentication (requires ADMIN_PASSWORD)
  - `/api/admin/moderate/:id` - Moderate violations (requires session token)
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
1. **Civil Rights Hub** - Central hub for reporting violations, finding attorneys, and accessing resources
2. **Violations Map** - Interactive OpenStreetMap showing ALL real-time civil rights violations (700px height, scroll zoom, status badges)
3. **Attorney Directory** - 618 civil rights attorneys across all 50 US states (10+ per state)
4. **Police Scanner Directory** - 100+ police scanner frequencies across all 50 states with Broadcastify live feed links
5. **Marijuana Laws** - Comprehensive 50-state + DC marijuana law database
6. **Admin Moderation Panel** - Password-protected panel for moderating violation reports (approve/reject/pending)
7. **Case Explorer** - Search and analyze legal cases via CourtListener API
8. **Real-Time Dashboard** - Live legal data and statistics
9. **Legislative Tracker** - Track legislative changes and updates
10. **AI Legal Assistant** - AI-powered legal guidance
11. **Affiliate Program** - Referral and commission tracking system
12. **Subscription Plans** - Multi-tier pricing (Starter, Pro, Ultimate)

## External Integrations
- **CourtListener API**: Legal case search and data
- **Supabase**: Authentication and database (with mock fallback)
- **FBI Crime Data API**: Historical crime statistics (via CrimeDataAPI service)
- **Broadcastify**: Live police scanner feeds (linked from scanner directory)
- **Legislative Tracker API**: Legislative data (planned)
- **News Aggregator API**: Legal news updates (planned)

## Recent Changes

### October 21, 2025 - Secure Admin Authentication & Violations Transparency
- **Public Violation Display**: ALL violation reports are now immediately visible to everyone on the map
  - Transparency-first approach: violations show in real-time until admin moderates
  - Color-coded status badges: Yellow (Pending), Green (Approved), Red (Rejected)
  - Interactive map tooltips show detailed violation information
- **Secure Admin Moderation Panel**: Production-ready authentication system
  - Server-side password validation (no credentials in client bundle)
  - Cryptographically secure 64-character session tokens
  - 24-hour session expiration
  - Secure-by-default: NO default password, must be explicitly configured
  - Setup via `.env` file with clear instructions in `.env.example`
  - Graceful error handling with helpful setup messages
- **Database Schema**: Created `violations-schema.sql` for Supabase table setup
  - Stores violation reports with location, description, and evidence
  - Tracks moderation status and timestamps
  - Admin session management

### October 21, 2025 - Civil Rights Hub Expansion
- **Massively Expanded Attorney Directory**: Grew from 20 to **618 civil rights attorneys** (10+ per state across all 50 states)
- **Police Scanner Directory**: Added 100+ police scanner frequencies across all 50 states
  - Searchable by state, city, and agency type
  - Includes frequency, mode (FM/Digital/P25), and type (Police/Fire/EMS)
  - Direct links to Broadcastify live feeds where available
  - Integrated as "Police Scanners" tab in Civil Rights Hub
- **Enhanced Interactive Map**: 
  - Increased height to 700px with prominent border styling
  - Added scroll wheel zoom and better navigation controls
  - Added helpful description text for users
  - Properly displays OpenStreetMap tiles
- **Crime Data API Service**: Created CrimeDataAPI.ts with FBI Crime Data API integration for historical crime statistics
- **Marijuana Resources**: Updated to use comprehensive 50-state + DC dataset

### October 12, 2025 - Initial Setup
- Configured Vite to support Replit proxy with host 0.0.0.0 and HMR over WSS
- Updated backend to use port 3001 (avoiding frontend port conflict)
- Fixed browser-side code to use `import.meta.env` instead of `process.env` for Vite compatibility
- Added .gitignore for Node.js project
- Configured deployment settings for autoscale
- Set up frontend workflow on port 5000
- Installed serve package for production deployment
- **Removed ALL mock/demo data** to ensure professional presentation:
  - NewsAggregatorAPI: Removed fake news articles, returns empty arrays on API failure
  - LegislativeTrackerAPI: Removed fake legislative bills, returns empty arrays on API failure
  - AffiliateDashboard: Removed fake referrals and hardcoded earnings data
  - Real-time subscriptions: Show proper "requires API configuration" messages instead of generating fake updates

## Development Notes
- The project uses a mock Supabase client when the real client is unavailable
- **No mock data is displayed** - all services show real API data or proper empty states
- Frontend is configured for Replit environment with proper host settings
- All dependencies are installed and ready to use
