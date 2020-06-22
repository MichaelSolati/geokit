import {LatLngLiteral} from './definitions';

// Characters used in location geohashes
export const BASE32 = '0123456789bcdefghjkmnpqrstuvwxyz';

/**
 * Get Base 32 symbol from decimal chunk (5 bit binary value).
 * @param value Decimal value of chunk (5 bit binary value).
 * @returns Base 32 value.
 */
export function base32(value: number): string {
  return BASE32.charAt(value);
}

/**
 * Get decimal chunk (5 bit binary value) from Base 32 character.
 * @param value Base 32 character.
 * @returns Decimal value of chunk (5 bit binary value).
 */
export function decimalChunk(value: string): number {
  return '0123456789bcdefghjkmnpqrstuvwxyz'.indexOf(value.toLowerCase());
}

/**
 * Determine if coordinate is greater than midle of range in a bit representation.
 * @param point Coordinates.
 * @param range Range of coordinates to check.
 * @returns Number representation if point is greater than the middle of the range.
 */
export function getBit(point: number, range: number[]): number {
  const middle: number = (range[0] + range[1]) / 2;
  return middle > point ? 0 : 1;
}

/**
 * Get radians from degrees.
 * @param degrees Degrees.
 * @returns Radians.
 */
export function toRad(degrees: number): number {
  return (degrees * Math.PI) / 180;
}
