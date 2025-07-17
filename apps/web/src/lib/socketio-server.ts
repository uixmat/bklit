import type { Server as HttpServer } from "node:http";
import { type Socket, Server as SocketIOServer } from "socket.io";

// Declare a global variable to hold the Socket.IO server instance.
// This is a common pattern for Next.js without a full custom server.js,
// but has caveats, especially for serverless environments if not managed carefully.
declare global {
  // eslint-disable-next-line no-var
  var io: SocketIOServer | undefined;
}

// Live users tracking is now handled by database session tracking
// Socket.IO is used for real-time notifications (new page views, etc.)

// This function needs to be called ONCE with the main http.Server instance when your server starts.
// For example, in a custom server.js file.
export const initSocket = (httpServer: HttpServer): SocketIOServer => {
  if (!global.io) {
    console.log(
      "Initializing Socket.IO server and attaching to HTTP server...",
    );
    const io = new SocketIOServer(httpServer, {
      path: "/api/socketio", // Client will connect to this path
      addTrailingSlash: false,
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true,
      },
      transports: ["websocket", "polling"], // Allow both WebSocket and polling
      allowEIO3: true, // Allow Engine.IO v3 clients
    });

    io.on("connection", (socket: Socket) => {
      console.log(`Socket connected: ${socket.id}`);

      socket.on("join_site_room", (siteId: string) => {
        if (!siteId) {
          console.log(
            `Socket ${socket.id} attempted to join without a siteId.`,
          );
          return;
        }
        socket.join(siteId);
        console.log(`Socket ${socket.id} joined room: ${siteId}`);
      });

      socket.on("leave_site_room", (siteId: string) => {
        if (!siteId) return;
        socket.leave(siteId);
        console.log(`Socket ${socket.id} left room: ${siteId}`);
      });

      socket.on("disconnect", () => {
        console.log(`Socket disconnected: ${socket.id}`);
      });
    });

    global.io = io; // Store the instance globally
    console.log("Socket.IO server initialized and stored globally.");
  } else {
    console.log("Socket.IO server already running (global instance found).");
  }
  return global.io;
};

// Function to get the IO server instance
export const getIoServer = (): SocketIOServer | undefined => {
  if (!global.io) {
    // This warning is important. If global.io is not set, emits will fail.
    console.warn(
      "Socket.IO server instance (global.io) not found. " +
        "Ensure initSocket(httpServer) has been called from your server setup.",
    );
  }
  return global.io;
};
