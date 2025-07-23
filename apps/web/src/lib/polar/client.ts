import { Polar } from "@polar-sh/sdk";

const SERVER_POLAR_ACCESS_TOKEN = process.env.POLAR_ACCESS_TOKEN;
const POLAR_SERVER_MODE = process.env.POLAR_SERVER_MODE;

if (!SERVER_POLAR_ACCESS_TOKEN) {
  if (process.env.NODE_ENV === "development") {
    console.warn(
      "POLAR_ACCESS_TOKEN is not configured. Polar features might not work.",
    );
  } else if (process.env.NODE_ENV === "production") {
    console.error(
      "POLAR_ACCESS_TOKEN is not set in production. Polar integration will FAIL.",
    );
  }
}

const polar = new Polar({
  accessToken: SERVER_POLAR_ACCESS_TOKEN,
  server: POLAR_SERVER_MODE === "sandbox" ? "sandbox" : undefined,
});

console.log(
  "Polar client initialized with server mode:",
  POLAR_SERVER_MODE === "sandbox" ? "sandbox" : "production (default)",
);
console.log(
  "Access token used (first few chars):",
  SERVER_POLAR_ACCESS_TOKEN?.substring(0, 10),
);

export default polar;
export { SERVER_POLAR_ACCESS_TOKEN, POLAR_SERVER_MODE };
