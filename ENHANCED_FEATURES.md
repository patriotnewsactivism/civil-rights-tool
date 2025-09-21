# Civil Rights Tool - Enhanced Features

This document outlines the enhanced features added to the Civil Rights Tool application.

## Overview

The Civil Rights Tool has been enhanced with interactive features, modern UI/UX, and additional functionality to provide a more comprehensive platform for legal analysis, activism, and journalism related to civil rights.

## New Components

### UI Components
- **Navbar**: Navigation bar with responsive design and dark mode toggle
- **ThemeToggle**: Toggle between light and dark mode
- **Button**: Reusable button component with various styles and sizes
- **Card**: Flexible card component for displaying information
- **SearchBar**: Advanced search component with filtering capabilities

### Visualization Components
- **CircuitMap**: Interactive map visualization of federal circuit courts
- **CircuitAnalysisChart**: Chart visualization of circuit court data

### Feature Components
- **CaseExplorer**: Interactive case law explorer with search and filtering
- **UserDashboard**: Personalized dashboard for saved cases and preferences
- **AuthForms**: Login and signup forms for user authentication

### Context Providers
- **ThemeContext**: Context for managing theme preferences
- **AuthContext**: Context for managing user authentication

## Technical Improvements

### Styling
- Added Tailwind CSS configuration
- Implemented dark mode support
- Created responsive design for all screen sizes

### Authentication
- Integrated with Supabase for user authentication
- Added login, signup, and password reset functionality
- Created protected routes for authenticated users

### Data Visualization
- Added interactive charts using Chart.js
- Created circuit court map visualization
- Implemented data filtering and analysis tools

### User Experience
- Added toast notifications for user feedback
- Implemented loading states for asynchronous operations
- Created intuitive navigation between different sections

## Integration with Existing Components

The enhanced features have been integrated with the existing components:
- **ActivistToolkit**: Specialized tools for activists
- **JournalistToolkit**: Specialized tools for journalists
- **StateProfile**: Comprehensive state-specific information

## Getting Started

To run the enhanced application:

```bash
npm install
npm start
```

## Configuration

The application uses the following configuration files:
- **tailwind.config.js**: Tailwind CSS configuration
- **postcss.config.js**: PostCSS configuration for Tailwind

## Dependencies

New dependencies added:
- Tailwind CSS and plugins
- Chart.js and react-chartjs-2
- Framer Motion for animations
- React Hook Form for form handling
- React Query for data fetching