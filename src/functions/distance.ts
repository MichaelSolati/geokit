import {validateCoordinates} from './validate-coordinates';
import {LatLngLiteral} from '../definitions';
import {toRad} from '../utils';

/**
 * Calculates the distance, in kilometers, between two coordinates.
 * @param start Starting coordinates.
 * @param end Ending coordinates.
 * @param unit Unit of distance returned, defaults to Km.
 * @returns The distance between two coordinates.
 */
export function distance(
  start: LatLngLiteral,
  end: LatLngLiteral,
  unit = 'km'
): number {
  validateCoordinates(start);
  validateCoordinates(end);

  const radius: number = unit.toLowerCase() === 'miles' ? 3963 : 6371;
  const dLat: number = toRad(end.lat - start.lat);
  const dLon: number = toRad(end.lng - start.lng);
  const lat1: number = toRad(start.lat);
  const lat2: number = toRad(end.lat);
  const a: number =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return radius * c;
}
