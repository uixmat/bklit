import countryCoordinatesData from "./country-coordinates.json";

interface CountryCoordinate {
  country: string;
  alpha2Code: string;
  alpha3Code: string;
  latitude: number;
  longitude: number;
}

// Common country code variations that might be in our database
const countryCodeMappings: Record<string, string> = {
  // Common variations
  UK: "GB",
  USA: "US",
  UAE: "AE",
  KSA: "SA", // Saudi Arabia
  "U.S.": "US",
  "U.S.A.": "US",
  "United States": "US",
  "United Kingdom": "GB",
  "Great Britain": "GB",
  England: "GB",
  Scotland: "GB",
  Wales: "GB",
  "Northern Ireland": "GB",
};

let countryCoordinatesCache: CountryCoordinate[] | null = null;

export function getCountryCoordinates(): CountryCoordinate[] {
  if (countryCoordinatesCache) {
    return countryCoordinatesCache;
  }

  try {
    // Use the imported JSON data directly
    countryCoordinatesCache = countryCoordinatesData as CountryCoordinate[];
    console.log(`Loaded ${countryCoordinatesCache.length} country coordinates`);
    return countryCoordinatesCache;
  } catch (error) {
    console.error("Error loading country coordinates:", error);
    return [];
  }
}

export function findCountryCoordinates(
  countryCode: string
): CountryCoordinate | null {
  const coordinates = getCountryCoordinates();

  // Normalize the country code (uppercase, trim)
  const normalizedCode = countryCode.toUpperCase().trim();

  // Check if we have a mapping for this country code
  const mappedCode = countryCodeMappings[normalizedCode] || normalizedCode;

  // First try exact match with alpha2Code
  let found = coordinates.find((coord) => coord.alpha2Code === mappedCode);

  // If not found, try alpha3Code
  if (!found) {
    found = coordinates.find((coord) => coord.alpha3Code === mappedCode);
  }

  // If still not found, try the original normalized code
  if (!found) {
    found = coordinates.find((coord) => coord.alpha2Code === normalizedCode);
  }

  if (!found) {
    found = coordinates.find((coord) => coord.alpha3Code === normalizedCode);
  }

  // If still not found, try partial matches (for edge cases)
  if (!found) {
    found = coordinates.find(
      (coord) =>
        coord.alpha2Code.includes(normalizedCode) ||
        coord.alpha3Code.includes(normalizedCode)
    );
  }

  if (!found) {
    console.log(
      `No coordinates found for country code: ${countryCode} (normalized: ${normalizedCode}, mapped: ${mappedCode})`
    );
  }

  return found || null;
}
