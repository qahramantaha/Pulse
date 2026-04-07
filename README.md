# Pulse

Pulse is an autonomous reliability platform that monitors microservices, detects failures, applies recovery actions, and tracks incidents through a central control dashboard.

## Overview

Pulse is a long-term systems enginerring project focused on monitoring distributed services, detecting health failures, triggering automated recovery actions, storing incident history, and providing visibility through a central dashboard.

## Core Architecture

### Managed Services
- auth-service
- ticket-service
- notification-service

### Pulse Platform Services
- monitor-service
- healing-engine
- incident-service
- dashboard

## Repository Structure

- 'services/' - backend services
- 'dashboard/' - control dashboard
- 'infrastructure/' - Docker, compose, and scripts
- 'docs/' - architecture, planning, and API documentation
- 'shared/' - shared utilities and types

## Current Status

The project is currently in the planning and foundation setup stage. Architecture, service boundaries, recovery rules, naming conventions, and repository structure are being defined before implementation begines.

## Planning Capabilities

- service health monitoring
- automated recovery workflows
- incident lifecycle tracking
- reliability analytics
- central dashboard visibility
- containerized local development environment

## Tech Stack

- TypeScript
- Node.js
- Express
- React
- PostgreSQL
- Prisma
- Docker
- Docker Compose

## Development Approach

Pulse is being built in small, controlled phases. The project starts with architecture and foundation setup, then moves into managed services, monitoring, incident handling, recovery logic, visibility, and later advanced observability features.