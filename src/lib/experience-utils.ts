/**
 * Pure utility functions for the Experience section.
 * Extracted here so they can be unit-tested independently of the React component.
 */

/**
 * Returns the end year from a duration string like "Jan 2020 – Mar 2023".
 * Returns the current year as a string if the duration contains "Present".
 * Returns an empty string if no 4-digit year can be parsed.
 */
export function getTimelineYear(duration: string): string {
  if (/\bPresent\b/i.test(duration)) {
    return new Date().getFullYear().toString();
  }
  const parts = duration.split(/[–-]/);
  const endPart = parts[1] ? parts[1].trim() : duration;
  const match = endPart.match(/\b\d{4}\b/);
  return match ? match[0] : '';
}

/**
 * Converts a camelCase metric key into a human-readable label.
 * Special cases:
 *  - 'ttfb'   → 'TTFB'
 *  - 'p95*'   → 'P95 <Rest>'
 *  - 'api*'   → 'API <Rest>'
 *  - else     → Title Cased with spaces before capitals
 */
export function formatMetricKey(key: string): string {
  if (key === 'ttfb') return 'TTFB';
  if (key.startsWith('p95')) {
    return 'P95 ' + key.slice(3).replace(/([A-Z])/g, ' $1').trim().replace(/^./, (str) => str.toUpperCase());
  }
  if (key.startsWith('api')) {
    return 'API ' + key.slice(3).replace(/([A-Z])/g, ' $1').trim().replace(/^./, (str) => str.toUpperCase());
  }
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());
}
