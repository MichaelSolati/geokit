import {LatLngLiteral} from '../src';

export const invalidCoordinates: any[] = [
  {lat: -91, lng: 0},
  {lat: 91, lng: 0},
  {lat: 0, lng: 181},
  {lat: 0, lng: -181},
  {lat: [0, 0], lng: 0},
  {lat: 'a', lng: 0},
  {lat: 0, lng: 'a'},
  {lat: 'a', lng: 'a'},
  {lat: NaN, lng: 0},
  {lat: 0, lng: NaN},
  {lat: undefined, lng: NaN},
  {lat: null, lng: 0},
  {lat: null, lng: null},
  {lat: 0, lng: undefined},
  {lat: undefined, lng: undefined},
  '',
  'a',
  true,
  false,
  [],
  [1],
  {},
  {a: 1},
  null,
  undefined,
  NaN,
];
export const invalidGeohashes: any[] = [
  '',
  'aaa',
  1,
  true,
  false,
  [],
  [1],
  {},
  {a: 1},
  null,
  undefined,
  NaN,
];
export const validCoordinates: LatLngLiteral[] = [
  {lat: 0, lng: 0},
  {lat: -90, lng: 180},
  {lat: 90, lng: -180},
  {lat: 23, lng: 74},
  {lat: 47.235124363, lng: 127.2379654226},
];
export const validGeohashes: string[] = ['4', 'd62dtu', '000000000000'];
