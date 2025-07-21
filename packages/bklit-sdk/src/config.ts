// packages/bklit-sdk/src/config.ts

export interface BklitConfig {
  apiHost: string;
  environment: 'development' | 'production';
  debug: boolean;
}

// Environment variable names
const ENV_VARS = {
  BKLIT_API_HOST: 'BKLIT_API_HOST',
  BKLIT_ENVIRONMENT: 'BKLIT_ENVIRONMENT',
  BKLIT_DEBUG: 'BKLIT_DEBUG',
} as const;

// Default API hosts for different environments
const DEFAULT_API_HOSTS = {
  development: 'http://localhost:3000/api/track',
  production: 'https://api.yourdomain.com/api/track',
} as const;

/**
 * Get environment variable value
 */
function getEnvVar(key: string): string | undefined {
  if (typeof process !== 'undefined' && process.env) {
    return process.env[key];
  }
  return undefined;
}

/**
 * Get default configuration based on environment
 */
export function getDefaultConfig(environment?: string): BklitConfig {
  const env = environment || getEnvVar(ENV_VARS.BKLIT_ENVIRONMENT) || 'production';
  
  // Get API host from environment variable or use default
  const apiHost = getEnvVar(ENV_VARS.BKLIT_API_HOST) || DEFAULT_API_HOSTS[env as keyof typeof DEFAULT_API_HOSTS];
  
  // Determine debug mode
  const debugEnv = getEnvVar(ENV_VARS.BKLIT_DEBUG);
  const debug = debugEnv ? debugEnv === 'true' : env === 'development';

  return {
    apiHost,
    environment: env as 'development' | 'production',
    debug,
  };
}

/**
 * Validate configuration
 */
export function validateConfig(config: Partial<BklitConfig>): void {
  if (config.apiHost && !isValidUrl(config.apiHost)) {
    throw new Error(`Invalid API host URL: ${config.apiHost}`);
  }
  
  if (config.environment && !['development', 'production'].includes(config.environment)) {
    throw new Error(`Invalid environment: ${config.environment}. Must be one of: development, production`);
  }
}

/**
 * Simple URL validation
 */
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Get configuration for build-time environment variables
 */
export function getBuildTimeConfig(): BklitConfig {
  return getDefaultConfig();
} 