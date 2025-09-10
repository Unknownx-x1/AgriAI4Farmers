# AgriAI - AI-Powered Crop Yield Prediction Platform

## Overview

AgriAI is a full-stack web application that leverages artificial intelligence to predict crop yields using soil health, weather patterns, and agricultural data. The platform provides farmers and agricultural professionals with data-driven insights to make informed decisions about their crops and optimize their farming practices.

The application features a modern, responsive frontend built with React and a RESTful API backend, designed to deliver real-time agricultural insights through an intuitive user interface with a space/agricultural theme.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and developer experience
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a "Deep Space" agricultural theme with green accent colors
- **UI Components**: Comprehensive component library using Radix UI primitives with shadcn/ui styling patterns
- **State Management**: TanStack React Query for server state management and caching
- **Animations**: Framer Motion for smooth animations and micro-interactions
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful API architecture with `/api` prefix for all endpoints
- **Development**: Hot reloading with Vite integration for seamless full-stack development
- **Error Handling**: Centralized error handling middleware with structured error responses

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema synchronization
- **Development Storage**: In-memory storage implementation for development and testing
- **Connection**: Neon Database serverless PostgreSQL for production deployment

### Authentication and Authorization
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **User Model**: Basic user entity with username/password authentication (extensible for additional auth methods)
- **Security**: Session-based authentication with secure cookie configuration

### External Dependencies
- **Database Hosting**: Neon Database for serverless PostgreSQL hosting
- **Deployment**: Replit-optimized with environment-specific configurations
- **Development Tools**: Replit Cartographer for enhanced development experience
- **Fonts**: Google Fonts integration (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Error Monitoring**: Replit runtime error overlay for development debugging

The architecture follows a monorepo structure with clear separation between client, server, and shared code, enabling efficient development and deployment while maintaining code organization and reusability.