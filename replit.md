# Content Cartel Marketing Website

## Overview

This is a modern, full-stack marketing website for Content Cartel, a premium content marketing agency. The application is built using a React frontend with TypeScript, Express.js backend, and Drizzle ORM with PostgreSQL for data persistence. The project follows a monorepo structure with shared components and utilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **Styling**: Custom design system with brand colors and modern aesthetics
- **State Management**: TanStack React Query for server state management
- **Routing**: React Router for client-side navigation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for fast bundling

### Data Storage
- **Database**: PostgreSQL with Neon Database serverless driver
- **ORM**: Drizzle ORM for type-safe database operations
- **Migrations**: Drizzle Kit for schema management
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple

## Key Components

### Frontend Components
- **Hero Section**: Landing page with gradient backgrounds and call-to-action buttons
- **Services**: Showcase of marketing services with icons and descriptions
- **Portfolio**: Client work examples with metrics and results
- **Founder**: Personal branding section for the agency founder
- **Clients**: Testimonials and client logos display
- **Contact**: Contact form with toast notifications
- **Footer**: Links and social media integration

### UI Component System
- Comprehensive shadcn/ui component library
- Custom button variants (hero, glow) for brand-specific styling
- Form components with validation
- Toast notifications and modals
- Responsive design components

### Backend Structure
- **Routes**: Centralized route registration system
- **Storage**: Abstract storage interface with in-memory implementation
- **Error Handling**: Global error middleware
- **Development**: Integrated Vite development server

## Data Flow

### Frontend Data Flow
1. React components use TanStack React Query for server state
2. Form submissions trigger toast notifications
3. Component state managed locally with useState hooks
4. Navigation handled by React Router

### Backend Data Flow
1. Express middleware processes requests
2. Storage interface abstracts data operations
3. Error middleware handles exceptions
4. Logging middleware tracks API requests

### Database Schema
- **Users Table**: Basic user authentication structure
- Primary key: Serial ID
- Unique username constraint
- Password storage field

## External Dependencies

### UI and Styling
- **Radix UI**: Headless UI components for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe variant API for components

### Data and State Management
- **TanStack React Query**: Server state management
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation library
- **Drizzle Zod**: Integration between Drizzle and Zod

### Development Tools
- **TypeScript**: Type safety across the entire stack
- **Vite**: Fast build tool with HMR
- **ESBuild**: Production bundling
- **Replit Plugins**: Development environment integration

## Deployment Strategy

### Development Environment
- Vite development server with HMR
- Express server running on Node.js
- TypeScript compilation on-the-fly
- Environment-specific configuration

### Production Build Process
1. Frontend: Vite builds optimized React bundle
2. Backend: ESBuild compiles TypeScript to JavaScript
3. Static files served from dist/public directory
4. Express server serves API and static content

### Database Management
- Drizzle migrations for schema changes
- Environment-based database URL configuration
- PostgreSQL connection pooling via Neon serverless

### Hosting Considerations
- Node.js environment required
- PostgreSQL database connection
- Environment variables for database URL
- Static asset serving capability

The architecture prioritizes developer experience with TypeScript throughout, modern tooling, and a clean separation between frontend and backend concerns while maintaining type safety across the entire stack.