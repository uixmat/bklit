interface BklitOptions {
  siteId: string;
  apiHost?: string;
}
declare function initBklit(options: BklitOptions): void;
declare function trackPageView(): void;
declare global {
  interface Window {
    trackPageView?: () => void;
    bklitSiteId?: string;
    bklitApiHost?: string;
  }
}

export { initBklit, trackPageView };
