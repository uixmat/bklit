# Bklit Analytics SDK

A lightweight analytics SDK for tracking page views, sessions, and user behavior.

## Installation

```bash
npm install bklit
# or
pnpm add bklit
```

## Quick Start

```javascript
import { initBklit } from "@bklit/sdk";

// Initialize the SDK
initBklit({
  siteId: "your-site-id-here",
  apiHost: "https://your-analytics-api.com/api/track", // optional
});
```

## Environment Configuration

The SDK supports multiple environments and can be configured using environment variables or runtime options.

### Environment Variables

You can set these environment variables during build time:

```bash
# API endpoint (overrides default for the environment)
BKLIT_API_HOST=https://your-custom-api.com/api/track

# Environment (development, staging, production)
BKLIT_ENVIRONMENT=production

# Enable debug logging
BKLIT_DEBUG=true
```

### Runtime Configuration

```javascript
import { initBklit } from "@bklit/sdk";

// Development environment
initBklit({
  siteId: "your-site-id",
  environment: "development", // Enables debug logging automatically
});

// Staging environment
initBklit({
  siteId: "your-site-id",
  environment: "staging",
  apiHost: "https://staging-api.yourdomain.com/api/track",
});

// Production environment
initBklit({
  siteId: "your-site-id",
  environment: "production", // Default
  debug: false, // Disable debug logging
});
```

### Default API Hosts

The SDK uses these default API hosts based on environment:

- **Development**: `http://localhost:3000/api/track`
- **Staging**: `https://staging-api.yourdomain.com/api/track`
- **Production**: `https://api.yourdomain.com/api/track`

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
  environment: "development",
  debug: true,
  userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)..."
}

🆔 Bklit SDK: New session created {
  sessionId: "1703123456789-abc123def456"
}

🎯 Bklit SDK: Initializing page view tracking...

🚀 Bklit SDK: Tracking page view... {
  url: "https://yoursite.com/page",
  sessionId: "1703123456789-abc123def456",
  siteId: "your-site-id",
  environment: "development"
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
- ✅ **Environment Configuration**: Support for multiple environments
- ✅ **Environment Variables**: Build-time configuration support

## API Reference

### `initBklit(options)`

Initialize the Bklit SDK.

**Parameters:**

- `options.siteId` (string, required): Your unique site identifier
- `options.apiHost` (string, optional): API endpoint URL (overrides environment default)
- `options.environment` (string, optional): Environment ('development', 'staging', 'production')
- `options.debug` (boolean, optional): Enable/disable debug logging

### `window.trackPageView()`

Manually trigger a page view tracking event.

**Returns:** void

## Deployment

### NPM Package

The recommended way to distribute your SDK is through npm:

```bash
# Build the SDK
pnpm build

# Publish to npm
npm publish
```

### Environment-Specific Builds

You can create environment-specific builds by setting environment variables:

```bash
# Development build
BKLIT_ENVIRONMENT=development BKLIT_DEBUG=true pnpm build

# Production build
BKLIT_ENVIRONMENT=production pnpm build
```

### CDN Distribution

For direct browser usage, build and upload to a CDN:

```bash
# Build for CDN
pnpm build

# Upload dist/ folder to your CDN
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

MIT
