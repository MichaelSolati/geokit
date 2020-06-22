import {validateCoordinates} from './validate-coordinates';
import {LatLngLiteral} from '../definitions';
import {base32} from '../utils';
/**
 * Generates Geohash of coordinates.
 * @param coordinates Coordinates to hash.
 * @param precision Precision of hash desired, defaults to 10.
 * @returns Geohash of point.
 */
export function hash(coordinates: LatLngLiteral, precision = 10): string {
  validateCoordinates(coordinates);
  if (typeof precision === 'number' && !isNaN(precision)) {
    if (precision <= 0) {
      throw new Error('Precision must be greater than 0');
    } else if (precision > 22) {
      throw new Error('Precision cannot be greater than 22');
    } else if (Math.round(precision) !== precision) {
      throw new Error('Precision must be an integer');
    }
  } else {
    throw new Error('Precision must be a number');
  }

  const latRng: [number, number] = [-90, 90];
  const lngRng: [number, number] = [-180, 180];
  let hash = '';
  let hashVal = 0;
  let bits = 0;
  let even: number | boolean = 1;

  while (hash.length < precision) {
    const val = even ? coordinates.lng : coordinates.lat;
    const range = even ? lngRng : latRng;
    const mid = (range[0] + range[1]) / 2;

    if (val > mid) {
      hashVal = (hashVal << 1) + 1;
      range[0] = mid;
    } else {
      hashVal = (hashVal << 1) + 0;
      range[1] = mid;
    }

    even = !even;
    if (bits < 4) {
      bits++;
    } else {
      bits = 0;
      hash += base32(hashVal);
      hashVal = 0;
    }
  }

  return hash;
}
