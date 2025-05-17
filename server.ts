import { createServer, IncomingMessage, ServerResponse } from "http";
import { parse } from "url";
import next from "next";
import path from "path";
import { fileURLToPath } from "url";

// const { initSocket } = require("./apps/web/src/lib/socketio-server.ts"); // Old require

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
    // Import after Next.js has prepared, especially if socketio-server might depend on Next.js internals or aliased paths
    import("./apps/web/src/lib/socketio-server")
      .then(({ initSocket }) => {
        const httpServer = createServer(
          async (req: IncomingMessage, res: ServerResponse) => {
            try {
              const parsedUrl = parse(req.url!, true);
              // Let Next.js handle all requests
              await handle(req, res, parsedUrl);
            } catch (err) {
              console.error("Error handling request:", err);
              res.statusCode = 500;
              res.end("internal server error");
            }
          }
        );

        // Initialize Socket.IO with the httpServer instance
        initSocket(httpServer);

        httpServer.listen(port, () => {
          // Removed (err) parameter as listen callback in Node for http typically doesn't pass error first for success
          console.log(`> Ready on http://localhost:${port}`);
          console.log(`> Next.js app from ${appDir} is being served.`);
          console.log(
            `> Socket.IO initialized and listening on path /api/socketio`
          );
        });

        httpServer.on("error", (err: Error) => {
          console.error("Failed to start server:", err);
          process.exit(1);
        });
      })
      .catch((ex) => {
        console.error("Failed to import or initialize socket.io:", ex);
        process.exit(1);
      });
  })
  .catch((ex) => {
    console.error("Next.js app preparation error:", ex.stack);
    process.exit(1);
  });
