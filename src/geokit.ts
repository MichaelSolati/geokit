import { LatLngLiteral } from './interfaces';

export class Geokit {
  readonly _base32chars: string = '0123456789bcdefghjkmnpqrstuvwxyz';

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
      hash += this._base32chars.charAt(temp);
    }
    return hash;
  }

  private _getBit(point: number, range: number[]): number {
    const middle: number = (range[0] + range[1]) / 2;
    return (middle > point) ? 0 : 1;
  }

  private _toRad(degrees: number): number {
    return (degrees * Math.PI / 180);
  }
}