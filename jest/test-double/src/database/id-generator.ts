import { randomBytes } from 'crypto';

export function generateId() {
  const randomId = randomBytes(10).toString('hex');
  return randomId;
}
