# System Architecture

## Overview

CareerPilot AI follows a modular multi-agent architecture.

Components

- React Frontend
- FastAPI Backend
- LangGraph Supervisor
- Resume Agent
- Job Match Agent
- Roadmap Agent
- Interview Agent
- Progress Agent
- RAG Layer
- Gemini API
- PostgreSQL Database

## Data Flow

  User

   ↓

Frontend
 
   ↓

Backend

   ↓

Supervisor Agent

   ↓

Specialized AI Agent

   ↓

Gemini + RAG

   ↓
 
Response

## Advantages

- Modular
- Scalable
- Easy to Extend
- Maintainable
