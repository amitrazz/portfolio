import { validateString, getErrorMessage } from '@/lib/utils';

describe('validateString', () => {
  it('returns true for a valid non-empty string within limit', () => {
    expect(validateString('hello', 10)).toBe(true);
  });

  it('returns false for an empty string', () => {
    expect(validateString('', 10)).toBe(false);
  });

  it('returns false for null', () => {
    expect(validateString(null, 10)).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(validateString(undefined, 10)).toBe(false);
  });

  it('returns false for a non-string value (number)', () => {
    expect(validateString(42, 10)).toBe(false);
  });

  it('returns false for a non-string value (object)', () => {
    expect(validateString({}, 10)).toBe(false);
  });

  it('returns false when string length equals maxLength + 1', () => {
    expect(validateString('abcde', 4)).toBe(false);
  });

  it('returns true when string length equals maxLength exactly', () => {
    expect(validateString('abcd', 4)).toBe(true);
  });

  it('returns false for a zero-length string (empty string is falsy)', () => {
    expect(validateString('', 0)).toBe(false);
  });
});

describe('getErrorMessage', () => {
  it('returns the message from an Error instance', () => {
    expect(getErrorMessage(new Error('boom'))).toBe('boom');
  });

  it('returns the message from a plain object with a message property', () => {
    expect(getErrorMessage({ message: 'oops' })).toBe('oops');
  });

  it('returns the string directly when error is a string', () => {
    expect(getErrorMessage('raw error')).toBe('raw error');
  });

  it('returns the fallback message for null', () => {
    expect(getErrorMessage(null)).toBe('Something went wrong');
  });

  it('returns the fallback message for undefined', () => {
    expect(getErrorMessage(undefined)).toBe('Something went wrong');
  });

  it('returns the fallback message for a number', () => {
    expect(getErrorMessage(404)).toBe('Something went wrong');
  });

  it('returns the fallback message for an empty object', () => {
    expect(getErrorMessage({})).toBe('Something went wrong');
  });

  it('coerces a non-string message property to string', () => {
    expect(getErrorMessage({ message: 99 })).toBe('99');
  });
});
