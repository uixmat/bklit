import {
  createServer,
  type IncomingMessage,
  type ServerResponse,
} from "node:http";
import path from "node:path";
import { fileURLToPath, parse } from "node:url";
import next from "next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT || "3000", 10);

// Directory of your Next.js app (apps/web)
const appDir = path.join(__dirname, "apps/web");
const app = next({ dev, dir: appDir });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const httpServer = createServer(
      async (req: IncomingMessage, res: ServerResponse) => {
        try {
          const parsedUrl = parse(req.url || "", true);
          // Let Next.js handle all requests
          await handle(req, res, parsedUrl);
        } catch (err) {
          console.error("Error handling request:", err);
          res.statusCode = 500;
          res.end("internal server error");
        }
      },
    );

    httpServer.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
      console.log(`> Next.js app from ${appDir} is being served.`);
    });

    httpServer.on("error", (err: Error) => {
      console.error("Failed to start server:", err);
      process.exit(1);
    });
  })
  .catch((ex) => {
    console.error("Next.js app preparation error:", ex.stack);
    process.exit(1);
  });
