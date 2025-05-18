export const getSdkUsageSnippet = (siteId: string, apiHost: string) => `\
import { initBklit } from 'bklit';

// In your application client-side code (e.g., main component or layout effects):
initBklit({
  siteId: "${siteId}",
  // By default, the SDK will try to send data to '${apiHost}'.
  // If your Bklit instance gets deployed elsewhere, provide the correct apiHost:
  // apiHost: "https://your-bklit-instance.com/api/track"
});`;
