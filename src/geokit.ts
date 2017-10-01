import { LatLngLiteral } from './interfaces';

/**
 * A class for the Geokit.
 */
export class Geokit {
  /**
   * Get Base 32 symbol from decimal chunk (5 bit binary value).
   * @param value Decimal value of chunk (5 bit binary value).
   * @returns Base 32 value.
   */
  private _base32(value: number): string {
    return '0123456789bcdefghjkmnpqrstuvwxyz'.charAt(value);
  }

  /**
   * Get the distance between two coordinates.
   * @param start Starting coordinates.
   * @param end Ending coordinates.
   * @param unit Unit of distance returned, defaults to Km.
   * @returns The distance between two coordinates.
   */
  public distance(start: LatLngLiteral, end: LatLngLiteral, unit?: string): number {
    const radius: number = (unit === 'miles') ? 3963 : 6371;
    const dLat: number = this._toRad(end.lat - start.lat);
    const dLon: number = this._toRad(end.lng - start.lng);
    const lat1: number = this._toRad(start.lat);
    const lat2: number = this._toRad(end.lat);
    const a: number = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (radius * c);
  }

  /**
   * Get the geohash of a point.
   * @param coordinates Coordinates to hash.
   * @param precision Precision of hash desired, defaults to 10.
   * @returns Geohash of point.
   */
  public hash(coordinates: LatLngLiteral, precision: number = 10): string {
    let hash: string = '';
    let latRng: number[] = [-90, 90];
    let lngRng: number[] = [-180, 180];
    while (hash.length < precision) {
      let temp: number = 0;
      for (let i: number = 0; i < 5; i++) {
        let even: boolean = (((hash.length * 5) + i) % 2) == 0;
        let coord: number = (even) ? coordinates.lng : coordinates.lat;
        const range: number[] = (even) ? lngRng : latRng;
        let middle: number = (range[0] + range[1]) / 2;
        temp = (temp << 1) + this._getBit(coord, range);
        (coord > middle) ? range[0] = middle : range[1] = middle;
      }
      hash += this._base32(temp);
    }
    return hash;
  }

  /**
   * Determine if coordinate is greater than midle of range in a bit representation.
   * @param point Coordinates.
   * @param range Range of coordinates to check.
   * @returns Number representation if point is greater than the middle of the range.
   */
  private _getBit(point: number, range: number[]): number {
    const middle: number = (range[0] + range[1]) / 2;
    return (middle > point) ? 0 : 1;
  }

  /**
   * Get radians from degrees.
   * @param degrees Degrees.
   * @returns Radians.
   */
  private _toRad(degrees: number): number {
    return (degrees * Math.PI / 180);
  }
}