import {validateCoordinates} from './validate-coordinates';
import {LatLngLiteral} from '../definitions';
import {base32, getBit} from '../utils';
/**
 * Generates Geohash of coordinates.
 * @param coordinates Coordinates to hash.
 * @param precision Precision of hash desired, defaults to 10.
 * @returns Geohash of point.
 */
export function hash(coordinates: LatLngLiteral, precision = 10): string {
  validateCoordinates(coordinates);

  let hash = '';
  const latRng: number[] = [-90, 90];
  const lngRng: number[] = [-180, 180];

  while (hash.length < precision) {
    let temp = 0;
    for (let i = 0; i < 5; i++) {
      const even: boolean = (hash.length * 5 + i) % 2 === 0;
      const coord: number = even ? coordinates.lng : coordinates.lat;
      const range: number[] = even ? lngRng : latRng;
      const middle: number = (range[0] + range[1]) / 2;
      temp = (temp << 1) + getBit(coord, range);
      coord > middle ? (range[0] = middle) : (range[1] = middle);
    }
    hash += base32(temp);
  }

  return hash;
}
