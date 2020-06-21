import {validateHash} from './validate-hash';
import {LatLngLiteral} from '../definitions';
import {decimalChunk} from '../utils';

/**
 * Decodes a Geohash into its Latitude and Longitude as a LatLngLiteral.
 * @param hash Geohash string.
 * @returns Coordinates to hash.
 */
export function decodeHash(hash: string): LatLngLiteral {
  validateHash(hash);
  let even = true;
  const latRng: number[] = [-90, 90];
  const lngRng: number[] = [-180, 180];
  const hashChars: string[] = hash.split('');

  while (hashChars.length) {
    const chunk: number = decimalChunk(hashChars.shift() as string);
    for (let i = 0; i < 5; i++) {
      const mask = [16, 8, 4, 2, 1][i];
      const range: number[] = even ? lngRng : latRng;
      const middle: number = (range[0] + range[1]) / 2;
      range[chunk & mask ? 0 : 1] = middle;
      even = !even;
    }
  }

  return {lat: (latRng[0] + latRng[1]) / 2, lng: (lngRng[0] + lngRng[1]) / 2};
}
