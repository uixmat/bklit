interface BklitOptions {
    siteId: string;
    apiHost?: string;
    environment?: 'development' | 'production';
    debug?: boolean;
}
declare function initBklit(options: BklitOptions): void;
declare function trackPageView(): void;
declare global {
    interface Window {
        trackPageView?: () => void;
        bklitSiteId?: string;
        bklitApiHost?: string;
        bklitEnvironment?: 'development' | 'production';
        bklitDebug?: boolean;
    }
}

export { initBklit, trackPageView };
