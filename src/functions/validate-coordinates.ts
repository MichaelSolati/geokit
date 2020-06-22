import {LatLngLiteral} from '../definitions';

/**
 * Validates coordinates and returns a boolean if valid, or throws an error if invalid.
 *
 * @param coordinates Coordinates to validate.
 * @param flag Tells function to send up boolean if not valid instead of throwing an error.
 * @return Boolean if coordinates are valid.
 */
export function validateCoordinates(
  coordinates: LatLngLiteral,
  flag = false
): boolean {
  const error: string[] = [];

  if (!coordinates) {
    error.push('Coordinates must exist.');
  } else if (typeof coordinates.lat === 'undefined') {
    error.push('Latitude must exist on coordinates');
  } else if (typeof coordinates.lng === 'undefined') {
    error.push('Longitude must exist on coordinates');
  } else {
    const latitude = coordinates.lat;
    const longitude = coordinates.lng;

    if (typeof latitude !== 'number' || isNaN(latitude)) {
      error.push('Latitude must be a number.');
    } else if (latitude < -90 || latitude > 90) {
      error.push('Latitude must be within the range [-90, 90].');
    } else if (typeof longitude !== 'number' || isNaN(longitude)) {
      error.push('Longitude must be a number');
    } else if (longitude < -180 || longitude > 180) {
      error.push('Longitude must be within the range [-180, 180]');
    }
  }

  if (error.length > 0 && !flag) {
    throw new Error('Invalid coordinates: ' + error.join(' '));
  } else {
    return !error;
  }
}
