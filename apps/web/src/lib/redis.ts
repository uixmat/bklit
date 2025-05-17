import Redis from "ioredis";

// Initialize Redis client
// Ensure your Redis server is running. By default, ioredis connects to 127.0.0.1:6379.
// You can configure this using environment variables or a connection string if needed.
// For example: new Redis(process.env.REDIS_URL)

const redis = new Redis(process.env.REDIS_URL || "redis://127.0.0.1:6379");

redis.on("connect", () => {
  console.log("Connected to Redis");
});

redis.on("error", (err) => {
  console.error("Redis connection error:", err);
});

export default redis;
