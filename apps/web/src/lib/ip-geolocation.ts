interface IPLocationData {
  status: string;
  message?: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  currency: string;
  isp: string;
  mobile: boolean;
  query: string; // The IP address
}

interface LocationData {
  ip: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  mobile: boolean;
}

export async function getLocationFromIP(ip: string): Promise<LocationData | null> {
  try {
    // Skip localhost and private IPs
    if (
      ip === "127.0.0.1" ||
      ip === "localhost" ||
      ip.startsWith("192.168.") ||
      ip.startsWith("10.") ||
      ip.startsWith("172.")
    ) {
      return null;
    }

    const fields =
      "status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,currency,isp,mobile,query";
    const url = `http://ip-api.com/json/${ip}?fields=${fields}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      console.warn(`IP-API request failed for IP ${ip}: ${response.status}`);
      return null;
    }

    const data: IPLocationData = await response.json();

    if (data.status === "success") {
      return {
        ip: data.query,
        country: data.country,
        countryCode: data.countryCode,
        region: data.region,
        regionName: data.regionName,
        city: data.city,
        zip: data.zip,
        lat: data.lat,
        lon: data.lon,
        timezone: data.timezone,
        isp: data.isp,
        mobile: data.mobile,
      };
    } else {
      console.warn(`IP-API returned error for IP ${ip}: ${data.message}`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching location data for IP ${ip}:`, error);
    return null;
  }
}

export function extractClientIP(request: Request): string | null {
  // Try to get IP from various headers (common in different hosting environments)
  const headers = request.headers;

  // Check for forwarded headers first
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    // x-forwarded-for can contain multiple IPs, take the first one
    return forwardedFor.split(",")[0].trim();
  }

  // Check other common headers
  const realIP = headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }

  const clientIP = headers.get("x-client-ip");
  if (clientIP) {
    return clientIP;
  }

  // For local development, you might need to handle this differently
  // since the request might come from localhost
  return null;
}
