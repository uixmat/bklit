interface BklitOptions {
    siteId: string;
    apiHost?: string;
}
declare function initBklit(options: BklitOptions): void;

export { initBklit };
