import { getTimelineYear, formatMetricKey } from '@/lib/experience-utils';

// ─── getTimelineYear ──────────────────────────────────────────────────────────

describe('getTimelineYear', () => {
  it('returns the current year for "Present" (case-insensitive)', () => {
    const currentYear = new Date().getFullYear().toString();
    expect(getTimelineYear('Jan 2020 – Present')).toBe(currentYear);
    expect(getTimelineYear('2019 - present')).toBe(currentYear);
    expect(getTimelineYear('PRESENT')).toBe(currentYear);
  });

  it('returns the end year from an en-dash range', () => {
    expect(getTimelineYear('Jan 2019 – Mar 2023')).toBe('2023');
  });

  it('returns the end year from a hyphen range', () => {
    expect(getTimelineYear('2018 - 2021')).toBe('2021');
  });

  it('returns the year when only a single year appears (no separator)', () => {
    // No separator → endPart falls back to the full string
    expect(getTimelineYear('2015')).toBe('2015');
  });

  it('returns an empty string when no 4-digit year is found', () => {
    expect(getTimelineYear('unknown')).toBe('');
  });

  it('returns the end year when there are extra spaces', () => {
    expect(getTimelineYear('2016 –  2020')).toBe('2020');
  });
});

// ─── formatMetricKey ─────────────────────────────────────────────────────────

describe('formatMetricKey', () => {
  it('returns "TTFB" for key "ttfb"', () => {
    expect(formatMetricKey('ttfb')).toBe('TTFB');
  });

  it('handles p95 prefix with no suffix', () => {
    expect(formatMetricKey('p95')).toBe('P95 ');
  });

  it('handles p95 prefix with camelCase suffix', () => {
    expect(formatMetricKey('p95Latency')).toBe('P95 Latency');
  });

  it('handles p95 prefix with multi-word camelCase suffix', () => {
    expect(formatMetricKey('p95ResponseTime')).toBe('P95 Response Time');
  });

  it('handles api prefix with camelCase suffix', () => {
    expect(formatMetricKey('apiResponseTime')).toBe('API Response Time');
  });

  it('handles api prefix with single word suffix', () => {
    expect(formatMetricKey('apiLatency')).toBe('API Latency');
  });

  it('title-cases a regular camelCase key', () => {
    expect(formatMetricKey('pageLoadTime')).toBe('Page Load Time');
  });

  it('title-cases a single lowercase word', () => {
    expect(formatMetricKey('uptime')).toBe('Uptime');
  });

  it('handles a key that starts with a capital letter (leading space preserved)', () => {
    // The generic replace(/([A-Z])/g, ' $1') inserts a space before every capital,
    // including the first character, so 'ErrorRate' → ' Error Rate'.
    // This matches the actual runtime behaviour in the UI.
    expect(formatMetricKey('ErrorRate')).toBe(' Error Rate');
  });
});
