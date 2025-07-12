# Bklit - Analytics

Open source analytics platform for modern web apps.

## Quick Start

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Run Prisma migrations**

   ```bash
   pnpm prisma:migrate:web
   ```

3. **Generate Prisma client**

   ```bash
   pnpm prisma:generate:web
   ```

4. **Start ngrok** (in a separate terminal)

   ```bash
   ngrok http 3000
   ```

5. **Build the SDK**

   ```bash
   pnpm build:sdk
   ```

6. **Start the web app**

   ```bash
   pnpm dev:web
   ```

7. **Start the playground** (in another terminal)
   ```bash
   pnpm dev:playground
   ```

That's it! You should now be able to use Bklit Analytics locally.
