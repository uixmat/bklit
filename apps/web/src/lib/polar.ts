import { Polar } from "@polar-sh/sdk";

// Using any for Product as a temporary workaround for persistent type resolution issues.
// import type { Product } from "@polar-sh/sdk/models/components";

const SERVER_POLAR_ACCESS_TOKEN = process.env.POLAR_ACCESS_TOKEN;
const POLAR_SERVER_MODE = process.env.POLAR_SERVER_MODE;

if (!SERVER_POLAR_ACCESS_TOKEN) {
  if (process.env.NODE_ENV === "development") {
    console.warn("POLAR_ACCESS_TOKEN is not configured. Polar features might not work.");
  } else if (process.env.NODE_ENV === "production") {
    console.error("POLAR_ACCESS_TOKEN is not set in production. Polar integration will FAIL.");
  }
}

// Simplified client initialization based on Polar docs
// It prioritizes POLAR_SERVER_MODE for sandbox/production setting.
const polar = new Polar({
  accessToken: SERVER_POLAR_ACCESS_TOKEN,
  // If POLAR_SERVER_MODE is 'sandbox', use 'sandbox'. Otherwise, SDK defaults to production.
  server: POLAR_SERVER_MODE === "sandbox" ? "sandbox" : undefined,
});

console.log(
  "Polar client initialized with server mode:",
  POLAR_SERVER_MODE === "sandbox" ? "sandbox" : "production (default)"
);
console.log("Access token used (first few chars):", SERVER_POLAR_ACCESS_TOKEN?.substring(0, 10));

export default polar;

// Using any for Product[] in return type and for the products array.
export async function getPublishedPolarProducts(): Promise<any[]> {
  if (!SERVER_POLAR_ACCESS_TOKEN) {
    console.error("Polar access token is not configured. Cannot fetch products.");
    return [];
  }
  try {
    console.log("Fetching Polar products...");
    const productsIterator = await polar.products.list({
      isArchived: false,
      // Add limit if you expect many products, e.g., limit: 100
    });

    const products: any[] = [];
    for await (const page of productsIterator) {
      // Check if the iterated item has the structure { result: { items: [...] } }
      if (page?.result && Array.isArray(page.result.items)) {
        products.push(...page.result.items);
      } else if (Array.isArray(page)) {
        // Fallback for direct array (less likely now)
        products.push(...page);
      } else if (page && Array.isArray((page as any).items)) {
        // Fallback for { items: [...] } (less likely now)
        products.push(...(page as any).items);
      } else {
        console.warn(
          "Unexpected page structure in Polar products iterator (or no items found in page.result.items):",
          page
        );
      }
    }
    console.log("Fetched products count:", products.length);
    return products;
  } catch (error) {
    console.error("Error fetching Polar products:", error);
    return [];
  }
}

// You might need specific product IDs for your checkout links later.
// It's good practice to store these in environment variables.
export const POLAR_PRO_PRODUCT_ID = process.env.NEXT_PUBLIC_POLAR_PRO_PRODUCT_ID;
