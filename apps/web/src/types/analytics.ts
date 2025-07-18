// Analytics-related type definitions

// Top pages data
export interface TopPageData {
  path: string;
  count: number;
}

// Browser statistics
export interface BrowserStats {
  browser: string;
  count: number;
}

// Session analytics data
export interface SessionAnalyticsData {
  totalSessions: number;
  bouncedSessions: number;
  bounceRate: number;
  avgSessionDuration: number;
  avgPageViews: number;
  recentSessions: any[]; // This could be more specific based on your session type
}

// Mobile/Desktop statistics
export interface MobileDesktopStats {
  mobile: number;
  desktop: number;
}

// Analytics stats summary
export interface AnalyticsStats {
  totalViews: number;
  recentViews: number;
  uniquePages: number;
  uniqueVisits: number;
}
