┌────────────────────────────────────────────────┐
│ Frontend │
│ Next.js + React + Tailwind │
│ Nx Monorepo — Accessibility-first │
│ │
│ Components ↔ Hooks ↔ Context │
│ ⬇️ API Client Layer (Axios/Fetch) │
└────────────────────────────────────────────────┘
⬇️ HTTP API Request
┌────────────────────────────────────────────────┐
│ Backend │
│ NestJS + Nx Monorepo │
│ Modules (Employees, Contracts, etc.) │
│ Services ↔ Controllers ↔ DTOs │
│ ⬇️ Prisma ORM ↔ PostgreSQL DB │
│ ⬆️ RabbitMQ Producer (Async tasks) │
└────────────────────────────────────────────────┘
⬇️ ⬆️
┌──────────────────┐ ┌────────────────────────┐
│ PostgreSQL DB │ │ RabbitMQ Queue │
│ employees table │ │ Events / Jobs │
│ contracts table │ │ │
└──────────────────┘ └────────────────────────┘
⬆️ ⬇️
┌────────────────────────────────────────────────┐
│ External Integrations (Gov API) │
│ ⬆️ Webhooks / API responses │
│ ⬇️ Outbound requests from backend │
└────────────────────────────────────────────────┘
