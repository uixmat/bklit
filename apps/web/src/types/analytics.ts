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

// Session data structure
export interface SessionData {
  id: string;
  sessionId: string;
  siteId: string;
  startedAt: Date;
  endedAt: Date | null;
  duration: number | null;
  didBounce: boolean;
  visitorId: string | null;
  entryPage: string;
  exitPage: string | null;
  userAgent: string | null;
  country: string | null;
  city: string | null;
  pageViewEvents: Array<{
    id: string;
    url: string;
    timestamp: Date;
    createdAt: Date;
  }>;
}

// Session analytics data
export interface SessionAnalyticsData {
  totalSessions: number;
  bouncedSessions: number;
  bounceRate: number;
  avgSessionDuration: number;
  avgPageViews: number;
  recentSessions: SessionData[];
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

// Live users data
export interface LiveUsersData {
  count: number;
}
