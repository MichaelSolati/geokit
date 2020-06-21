import {BASE32} from '../utils';

/**
 * Validates a Geohash and returns a boolean if valid, or throws an error if invalid.
 *
 * @param geohash The geohash to be validated.
 * @param flag Tells function to send up boolean if valid instead of throwing an error.
 * @returns Boolean if Geohash is valid.
 */
export function validateHash(geohash: string, flag = false): boolean {
  let error;

  if (typeof geohash !== 'string') {
    error = 'geohash must be a string';
  } else if (geohash.length === 0) {
    error = 'geohash cannot be the empty string';
  } else {
    for (const letter of geohash) {
      if (BASE32.indexOf(letter) === -1) {
        error = "geohash cannot contain '" + letter + "'";
      }
    }
  }

  if (typeof error !== 'undefined' && !flag) {
    throw new Error("Invalid geohash '" + geohash + "': " + error);
  } else {
    return !error;
  }
}
