import { Buffer } from 'buffer';

export function decodeBase64(base64: string): string {
    if (!base64) return '';

    return Buffer.from(base64, 'base64').toString('utf-8');
}

export function encodeBase64(value: string): string {
    if (!value) return '';

    return Buffer.from(value, 'utf-8').toString('base64');
}
