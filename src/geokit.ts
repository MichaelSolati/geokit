import { LatLngLiteral } from './interfaces';

export class Geokit {
  readonly _base32chars: string = '0123456789bcdefghjkmnpqrstuvwxyz';

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
}