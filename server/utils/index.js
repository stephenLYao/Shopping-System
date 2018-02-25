import crypto from 'crypto';

export const randId = (method = 'base64') => crypto.randomBytes(64).toString(method);
