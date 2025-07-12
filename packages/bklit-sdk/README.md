# Bklit Analytics SDK

A lightweight analytics SDK for tracking page views, sessions, and user behavior.

## Installation

```bash
npm install bklit
# or
yarn add bklit
# or
pnpm add bklit
```

## Quick Start

```javascript
import { initBklit } from "bklit";

// Initialize the SDK
initBklit({
  siteId: "your-site-id-here",
  apiHost: "https://your-analytics-api.com/api/track", // optional
});
```

## Console Logging

The SDK provides comprehensive console logging to help you debug and monitor tracking events. Open your browser's developer console to see detailed logs.

### Log Types

- 🎯 **Initialization**: SDK setup and configuration
- 🆔 **Session Management**: Session creation and updates
- 🚀 **Page Views**: Page view tracking events
- 🔄 **Route Changes**: SPA navigation detection
- ✅ **Success**: Successful API calls and operations
- ❌ **Errors**: Failed requests and error messages

### Example Console Output

```
🎯 Bklit SDK: Initializing with configuration {
  siteId: "your-site-id",
  apiHost: "https://your-api.com/api/track",
  userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)..."
}

🆔 Bklit SDK: New session created {
  sessionId: "1703123456789-abc123def456"
}

🎯 Bklit SDK: Initializing page view tracking...

🚀 Bklit SDK: Tracking page view... {
  url: "https://yoursite.com/page",
  sessionId: "1703123456789-abc123def456",
  siteId: "your-site-id"
}

✅ Bklit SDK: Page view tracked successfully! {
  url: "https://yoursite.com/page",
  sessionId: "1703123456789-abc123def456",
  status: 200
}

🔄 Bklit SDK: Route change detected {
  from: "https://yoursite.com/page1",
  to: "https://yoursite.com/page2",
  sessionId: "1703123456789-abc123def456"
}

🔄 Bklit SDK: Ending session on page unload... {
  sessionId: "1703123456789-abc123def456",
  siteId: "your-site-id"
}

✅ Bklit SDK: Session ended successfully! {
  sessionId: "1703123456789-abc123def456",
  status: 200
}
```

## Manual Tracking

You can manually trigger page view tracking using the global function:

```javascript
// Manual page view tracking
window.trackPageView();
```

This is useful for:

- Custom events
- Single-page applications with custom routing
- Testing and debugging

## Features

- ✅ **Automatic Page View Tracking**: Tracks page views automatically
- ✅ **Session Management**: Creates and manages user sessions
- ✅ **SPA Support**: Detects route changes in single-page applications
- ✅ **Session Ending**: Automatically ends sessions when users leave
- ✅ **Comprehensive Logging**: Detailed console logs for debugging
- ✅ **Manual Tracking**: Global function for custom tracking
- ✅ **Error Handling**: Graceful error handling with detailed logs

## API Reference

### `initBklit(options)`

Initialize the Bklit SDK.

**Parameters:**

- `options.siteId` (string, required): Your unique site identifier
- `options.apiHost` (string, optional): API endpoint URL (defaults to localhost)

### `window.trackPageView()`

Manually trigger a page view tracking event.

**Returns:** void

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

MIT
