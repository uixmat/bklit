# Tracker - Analytics Platform

A real-time analytics platform with tracking SDK, dashboard, and live visitor monitoring.

## Project Structure

```
tracker/
├── apps/
│   ├── web/           # Next.js dashboard application
│   └── playground/    # Test application for SDK
├── packages/
│   └── bklit-sdk/     # Analytics tracking SDK
├── scripts/
│   └── start-ngrok.js # Automated ngrok setup
└── server.ts          # Custom server with Socket.IO
```

## Development Setup

### Prerequisites

- Node.js 18+
- pnpm 9+
- Redis
- ngrok
- PostgreSQL database (or use a service like PlanetScale/Neon)

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Database Setup

1. Set up your PostgreSQL database
2. Create `.env` file in `apps/web/` with your database connection:

   ```env
   DATABASE_URL="your_postgresql_connection_string"
   GITHUB_ID="your_github_oauth_app_id"
   GITHUB_SECRET="your_github_oauth_app_secret"
   NEXTAUTH_SECRET="your_nextauth_secret"
   ```

3. Run database migrations:
   ```bash
   pnpm prisma:migrate:web
   ```

### 3. Development Workflow

**Option A: Manual Setup (Recommended for development)**

1. **Start Redis:**

   ```bash
   brew services start redis
   ```

2. **Start ngrok in a new terminal:**
   ```bash
   ngrok http 3000
   ```
3. **Update the ngrok URL:**

   - Copy the `https://` forwarding URL from ngrok (e.g., `https://abc123.ngrok-free.app`)
   - Create/update `.ngrok-url` file in the project root with just the URL:

   ```bash
   echo "https://abc123.ngrok-free.app" > .ngrok-url
   ```

4. **Start the web application:**

   ```bash
   cd apps/web && pnpm dev:track
   ```

5. **Start the playground (in another terminal):**

   ```bash
   pnpm dev:playground
   ```

6. **Update the Site ID in playground:**
   - Open Prisma Studio: `cd apps/web && pnpm prisma:studio`
   - Go to http://localhost:5555
   - Find your Site ID in the `Site` table
   - Update `YOUR_SITE_ID` in `apps/playground/src/App.tsx` with the correct ID

**Option B: Automated Setup**

```bash
pnpm dev:all
```

Note: This runs all services but requires `.ngrok-url` to be populated first.

### 4. Testing the Setup

1. **Open the dashboard:** http://localhost:3000
2. **Open the playground:** http://localhost:5173
3. **Check browser console** in playground for initialization message
4. **Check web app terminal** for tracking data reception
5. **Verify live data** appears in the dashboard

### 5. Troubleshooting

**No tracking data appearing:**

- Verify `.ngrok-url` file contains current ngrok URL
- Check Site ID matches between playground and database
- Ensure Redis is running
- Check browser console for errors

**Socket.IO connection errors:**

- Make sure you're using `pnpm dev:track` (not `pnpm dev`) for the web app
- Verify the custom server is running (should see "Socket.IO initialized" message)

**Build errors:**

- Run `pnpm build` to build SDK and web app
- Fix any TypeScript/ESLint errors that appear

## Scripts Reference

### Root Scripts

- `pnpm dev:all` - Start all services (requires .ngrok-url setup)
- `pnpm dev:web` - Start web app with custom server
- `pnpm dev:playground` - Start playground
- `pnpm dev:sdk` - Start SDK in watch mode
- `pnpm build` - Build SDK and web app
- `pnpm prisma:migrate:web` - Run database migrations
- `pnpm prisma:studio:web` - Open Prisma Studio

### Web App Scripts (from apps/web/)

- `pnpm dev:track` - Start Redis + custom server
- `pnpm dev` - Start standard Next.js dev server (no Socket.IO)
- `pnpm build` - Build web application
- `pnpm prisma:studio` - Open Prisma Studio

## Architecture

- **Web App**: Next.js dashboard with real-time analytics
- **SDK**: TypeScript library for tracking page views and user presence
- **Custom Server**: Node.js server with Socket.IO for real-time features
- **Database**: PostgreSQL with Prisma ORM
- **Cache**: Redis for event storage and real-time data
- **Tunneling**: ngrok for local development with external access

## API Endpoints

### Tracking

- `POST /api/track` - Track page views with IP geolocation (used by SDK)

## Important Notes

- ngrok URLs change on each restart - always update `.ngrok-url`
- Use the custom server (`dev:track`) for Socket.IO features
- Site IDs must match between playground and database
- Redis must be running for event storage
- Page views are stored in both Redis (for real-time) and PostgreSQL (for historical analytics)
