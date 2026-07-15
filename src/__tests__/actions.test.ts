import { sendEmailAction, FormState } from '@/app/actions';

// Helper to create a FormData with the given fields
function makeFormData(fields: Record<string, string>): FormData {
  const fd = new FormData();
  for (const [k, v] of Object.entries(fields)) {
    fd.append(k, v);
  }
  return fd;
}

describe('sendEmailAction', () => {
  const prevState: FormState | null = null;

  // ── Email validation ───────────────────────────────────────────────────────

  it('returns a field error when email is missing', async () => {
    const fd = makeFormData({ message: 'Hello world' });
    const result = await sendEmailAction(prevState, fd);
    expect(result.success).toBe(false);
    expect(result.fieldErrors?.email).toContain('Invalid email address');
  });

  it('returns a field error when email has no "@"', async () => {
    const fd = makeFormData({ email: 'notanemail', message: 'Hello world' });
    const result = await sendEmailAction(prevState, fd);
    expect(result.success).toBe(false);
    expect(result.fieldErrors?.email).toContain('Invalid email address');
  });

  // ── Message validation ─────────────────────────────────────────────────────

  it('returns a field error when message is missing', async () => {
    const fd = makeFormData({ email: 'user@example.com' });
    const result = await sendEmailAction(prevState, fd);
    expect(result.success).toBe(false);
    expect(result.fieldErrors?.message).toContain('Message must be at least 5 characters');
  });

  it('returns a field error when message is fewer than 5 characters', async () => {
    const fd = makeFormData({ email: 'user@example.com', message: 'Hi' });
    const result = await sendEmailAction(prevState, fd);
    expect(result.success).toBe(false);
    expect(result.fieldErrors?.message).toContain('Message must be at least 5 characters');
  });

  it('returns a field error when message is exactly 4 characters', async () => {
    const fd = makeFormData({ email: 'user@example.com', message: 'Hi!!' });
    const result = await sendEmailAction(prevState, fd);
    expect(result.success).toBe(false);
    expect(result.fieldErrors?.message).toContain('Message must be at least 5 characters');
  });

  // ── Success path ───────────────────────────────────────────────────────────

  it('returns success when both email and message are valid', async () => {
    const fd = makeFormData({ email: 'user@example.com', message: 'Hello there!' });
    const result = await sendEmailAction(prevState, fd);
    expect(result.success).toBe(true);
    expect(result.error).toBeUndefined();
  }, 10_000); // allow for the 800 ms simulated delay

  it('accepts a message of exactly 5 characters', async () => {
    const fd = makeFormData({ email: 'a@b.co', message: 'Hello' });
    const result = await sendEmailAction(prevState, fd);
    expect(result.success).toBe(true);
  }, 10_000);

  // ── Error (catch) path ────────────────────────────────────────────────────

  it('returns an error when an unexpected exception is thrown', async () => {
    // Force the simulated async delay to throw so the catch branch is exercised
    const spy = jest
      .spyOn(global, 'setTimeout')
      .mockImplementationOnce(() => { throw new Error('network failure'); });

    const fd = makeFormData({ email: 'user@example.com', message: 'Hello there!' });
    const result = await sendEmailAction(prevState, fd);

    expect(result.success).toBe(false);
    expect(result.error).toBe('network failure');

    spy.mockRestore();
  });

  it('returns the generic message when a non-Error is thrown', async () => {
    const spy = jest
      .spyOn(global, 'setTimeout')
      .mockImplementationOnce(() => { throw 'string error'; });

    const fd = makeFormData({ email: 'user@example.com', message: 'Hello there!' });
    const result = await sendEmailAction(prevState, fd);

    expect(result.success).toBe(false);
    expect(result.error).toBe('An unexpected error occurred. Please try again later.');

    spy.mockRestore();
  });
});
