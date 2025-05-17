# Analytics Tracker SaaS Platform

This is a Next.js based analytics platform designed to track page views and custom events from third-party websites. It features user authentication, project management, and data visualization capabilities.

## Features

- **User Authentication**: Sign up and log in using GitHub OAuth.
- **Project Management**: Users can create a project (website) to track.
- **Page View Tracking**: Embeddable JavaScript snippet to track page views on client websites.
- **Data Storage**: Uses PostgreSQL (via Prisma) for relational data (users, sites) and Redis for fast event ingestion.
- **Dashboard**: View tracked page views for your projects.
- Built with Next.js (App Router), Tailwind CSS, Shadcn/ui, Prisma, and Redis.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [pnpm](https://pnpm.io/installation) (as the package manager)
- [Git](https://git-scm.com/)
- [Redis](https://redis.io/)

### Installing Redis (macOS with Homebrew)

If you are on macOS and have [Homebrew](https://brew.sh/) installed, you can install Redis with:

```bash
brew install redis
```

Then, start the Redis service:

```bash
brew services start redis
```

For other operating systems or installation methods, please refer to the official [Redis Quick Start guide](https://redis.io/docs/getting-started/).

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <repository-name>
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project by copying the example file:

```bash
cp .env.example .env
```

Now, open the `.env` file and fill in the required values:

- **`DATABASE_URL`**:

  1.  Go to [prisma.io](https://www.prisma.io/) and click "Sign Up" (usually with GitHub).
  2.  You will be directed to your Personal Workspace on the Prisma Data Platform.
  3.  Click "New Project".
  4.  Give your project a title (e.g., "My Tracker App DB") and choose a region.
  5.  Follow the setup instructions provided by Prisma. They will give you a `DATABASE_URL` (connection string) for your new PostgreSQL database. Use this URL.
      _Example format: `prisma+postgres://USER:PASSWORD@HOST:PORT/DATABASE?schema=public`_

- **`REDIS_URL`** (Optional):

  - If your Redis server is running locally on the default port (6379) without a password, you can omit this variable or leave it commented out, as the application defaults to `redis://127.0.0.1:6379`.
  - If Redis is hosted elsewhere or has a password, provide the full connection string:
    _Example: `redis://:yourpassword@yourhost:yourport`_

- **`GITHUB_ID`** and **`GITHUB_SECRET`**:

  1.  Go to your GitHub account settings.
  2.  Navigate to **Developer settings** > **OAuth Apps**.
  3.  Click **New OAuth App**.
  4.  **Application name**: e.g., "My Tracker App (Dev)"
  5.  **Homepage URL**: `http://localhost:3000` (for local development)
  6.  **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
  7.  Click **Register application**.
  8.  Copy the **Client ID** and use it for `GITHUB_ID`.
  9.  Generate a **New client secret** and use it for `GITHUB_SECRET`.

- **`NEXTAUTH_SECRET`**:

  - This is a crucial secret for NextAuth.js to sign JWTs and other security tokens.
  - Generate a strong random string. You can use the following command in your terminal:
    ```bash
    openssl rand -base64 32
    ```
  - Alternatively, use an online generator like [generate-secret.vercel.app/32](https://generate-secret.vercel.app/32).
  - Paste the generated secret as the value for `NEXTAUTH_SECRET`.

- **`NEXTAUTH_URL`**:
  - The base URL of your application. For local development, this is typically:
    ```
    NEXTAUTH_URL="http://localhost:3000"
    ```

### 4. Apply Database Migrations

This step will set up your database tables based on the Prisma schema.

```bash
pnpm exec prisma migrate dev
```

(If prompted, give your migration a name, e.g., "initial_setup")

### 5. Generate Prisma Client

Although `prisma migrate dev` usually runs this, it's good practice to ensure it's up to date:

```bash
pnpm exec prisma generate
```

### 6. Run the Development Server

The project includes a script that ensures Redis is running (if installed via Homebrew) and then starts the Next.js dev server:

```bash
pnpm dev:track
```

If you are not using Homebrew for Redis, ensure your Redis server is running manually, and then you can use:

```bash
pnpm dev
```

Your application should now be running on [http://localhost:3000](http://localhost:3000).

## How to Use

1.  Navigate to [http://localhost:3000](http://localhost:3000).
2.  Sign in using the "Sign in with GitHub" button.
3.  You will be redirected to the dashboard (`/dashboard`).
4.  If you don't have a project, an "Add Project" form will appear. Fill it out to create your first project.
5.  Once a project is created, its details will be displayed, including a "Project ID (Site ID for tracker)".
6.  Click "View Analytics" to go to the specific analytics page for that project.

### Tracking Events on Your External Site

1.  Get the **Project ID** for your created project from the dashboard.
2.  Open the `public/tracker.js` file in this project.
3.  Update the `siteId` variable with your actual **Project ID**:
    ```javascript
    // Inside public/tracker.js, in the trackPageView function:
    const data = {
      url: window.location.href,
      timestamp: new Date().toISOString(),
      siteId: "YOUR_PROJECT_ID_HERE", // Replace with your actual Project ID
    };
    ```
4.  Include the `tracker.js` script on any external website you want to track (ensure that website is running and accessible from your browser):
    ```html
    <script src="http://localhost:3000/tracker.js" defer></script>
    ```
    _(Adjust `http://localhost:3000` if your tracker application is running on a different URL/port)_
5.  Navigate pages on your external site. The page views should appear on the project-specific analytics page in this application.

## Available Scripts

- `pnpm dev`: Starts the Next.js development server with Turbopack.
- `pnpm dev:track`: Ensures Redis (via Homebrew) is running and then starts the dev server.
- `pnpm build`: Builds the application for production.
- `pnpm start`: Starts a Next.js production server.
- `pnpm lint`: Runs ESLint.
- `pnpm exec prisma studio`: Opens Prisma Studio to view/manage your database.
- `pnpm exec prisma migrate dev`: Applies database migrations.
- `pnpm exec prisma generate`: Generates/updates the Prisma Client.

## Future Enhancements (Planned)

- User management for adding/removing other OAuth providers.
- Real-time data updates on the dashboard using Socket.IO.
- Payments integration using Polar.sh.
- Custom event definition and tracking.
- More detailed analytics and visualizations.
