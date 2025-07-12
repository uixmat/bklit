import { Server as HttpServer } from "http";
import { Server as SocketIOServer, Socket } from "socket.io";

// Declare a global variable to hold the Socket.IO server instance.
// This is a common pattern for Next.js without a full custom server.js,
// but has caveats, especially for serverless environments if not managed carefully.
declare global {
  // eslint-disable-next-line no-var
  var io: SocketIOServer | undefined;
}

// Store active users per site
// In a real-world scenario, you might use Redis or another store for this if scaling across multiple server instances
const siteViewers = new Map<string, Set<string>>(); // Map<siteId, Set<socketId>>

// This function needs to be called ONCE with the main http.Server instance when your server starts.
// For example, in a custom server.js file.
export const initSocket = (httpServer: HttpServer): SocketIOServer => {
  if (!global.io) {
    console.log(
      "Initializing Socket.IO server and attaching to HTTP server..."
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
            `Socket ${socket.id} attempted to join without a siteId.`
          );
          return;
        }
        socket.join(siteId);
        if (!siteViewers.has(siteId)) {
          siteViewers.set(siteId, new Set());
        }
        const room = siteViewers.get(siteId);
        room?.add(socket.id);
        console.log(`Socket ${socket.id} joined room: ${siteId}`);
        // Use global.io here as 'io' from closure might not be the global one if re-init is attempted
        global.io?.to(siteId).emit("update_live_users", room?.size || 0);
      });

      socket.on("leave_site_room", (siteId: string) => {
        if (!siteId) return;
        socket.leave(siteId);
        const room = siteViewers.get(siteId);
        room?.delete(socket.id);
        console.log(`Socket ${socket.id} left room: ${siteId}`);
        global.io?.to(siteId).emit("update_live_users", room?.size || 0);
      });

      socket.on("disconnect", () => {
        console.log(`Socket disconnected: ${socket.id}`);
        siteViewers.forEach((sockets, siteId) => {
          if (sockets.has(socket.id)) {
            sockets.delete(socket.id);
            global.io?.to(siteId).emit("update_live_users", sockets.size);
            console.log(
              `Socket ${socket.id} removed from site ${siteId} on disconnect`
            );
          }
        });
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
        "Ensure initSocket(httpServer) has been called from your server setup."
    );
  }
  return global.io;
};
