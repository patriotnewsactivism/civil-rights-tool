# Legal Toolkit - Civil Rights Platform

## Overview
This project is a comprehensive legal toolkit and civil rights platform built to empower activists, journalists, and citizens. It provides tools for reporting civil rights violations, accessing legal resources, tracking legislation, and connecting with legal professionals. The platform aims to foster transparency, facilitate legal aid, and build a community around civil rights advocacy. Key capabilities include interactive maps of violations, attorney and police scanner directories, an AI legal assistant, and a social networking aspect for activists and journalists. The platform also features an affiliate program and subscription plans, indicating a business vision for sustainable operation and widespread impact.

## User Preferences
I prefer iterative development with clear communication at each stage. Please ask before making major architectural changes or introducing new external dependencies. Focus on delivering production-ready code.

## System Architecture
The platform is built with a React 18 + Vite frontend (TypeScript/JSX) and an Express.js backend for specific API endpoints (e.g., affiliate program, admin moderation). Styling is handled with Tailwind CSS, including custom forms and typography. Data visualization uses Chart.js. Authentication and core database services are managed by Supabase, fully configured with Google OAuth and Row Level Security (RLS).

Key architectural decisions include:
- **UI/UX**: A bold, modern design featuring a black background with blue/purple/pink gradients for the homepage, emphasizing activist/journalist messaging and prominent sign-up CTAs. Interactive elements like the Violations Map and social feed are central to the user experience.
- **Modularity**: Separation of concerns with dedicated components for different features (e.g., HomePage, MainNavigation, SocialFeed).
- **Real-time Data**: Emphasis on displaying real-time information for civil rights violations and social interactions.
- **Transparency**: All reported civil rights violations are immediately public on an interactive map, with color-coded status badges (Pending, Approved, Rejected) reflecting admin moderation.
- **Scalability**: Designed as a stateless web app for autoscale deployment.
- **Social Platform**: Integration of a full social network with post creation, likes, comments, shares, hashtags, trending topics, notifications, and user networking features.
- **Community Features**: User profiles with roles (Activist, Journalist, Attorney, Moderator, Admin), verification, contributor stats, private messaging, and public commenting with upvote/downvote functionality.
- **Security**: Server-side password validation for admin login, cryptographically secure session tokens, and robust Row Level Security (RLS) policies implemented in Supabase.
- **PDF Generation**: Utilizes jsPDF for generating professional-grade press passes and activist toolkits.

Feature Specifications:
- **Civil Rights Hub**: Centralized access to resources, including a directory of 618 civil rights attorneys across all 50 US states and a directory of 100+ police scanner frequencies with Broadcastify live feed links.
- **Violations Map**: Interactive OpenStreetMap displaying real-time civil rights violations with detailed tooltips.
- **Free Press Pass Generator**: Instant digital press credential generation (PDF/PNG) with photo upload, contact details, and organization info.
- **Case Explorer**: Search and analysis of legal cases via the CourtListener API.
- **Affiliate Program**: Referral and commission tracking system.
- **Subscription Plans**: Multi-tier pricing structure (Starter, Pro, Ultimate).
- **WTP News Integration**: Featured civil rights articles from wtpnews.org integrated throughout the platform, including sponsored sections.
- **Activist & Journalist PDF Toolkit**: Comprehensive legal guide and pocket-sized ID card generator.

## External Dependencies
- **Supabase**: Primary backend-as-a-service for authentication (Google OAuth configured) and database (PostgreSQL).
- **CourtListener API**: For legal case search and data within the Case Explorer.
- **Broadcastify**: Provides live police scanner feeds, linked from the Police Scanner Directory.
- **FBI Crime Data API**: Integrated via `CrimeDataAPI.ts` for historical crime statistics.
- **Chart.js**: For data visualization.
- **OpenStreetMap**: Used for the interactive Violations Map.
- **jsPDF**: For generating PDF documents (press passes, toolkits).
- **Express.js**: Backend API server for specific functionalities.
- **Vite**: Frontend build tool.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Lucide React**: Icon library.