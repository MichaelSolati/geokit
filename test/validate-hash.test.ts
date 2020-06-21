import * as chai from 'chai';

import {validateHash} from '../src';
import {invalidGeohashes, validGeohashes} from './common';

const expect = chai.expect;

describe('validateHash()', () => {
  it('validateGeohash() does not throw errors given valid geohashes', () => {
    validGeohashes.forEach(validGeohash => {
      expect(() => validateHash(validGeohash)).not.to.throw();
    });
  });

  it('validateGeohash() throws errors given invalid geohashes', () => {
    invalidGeohashes.forEach(invalidGeohash => {
      expect(() => validateHash(invalidGeohash)).to.throw();
    });
  });

  it('validateGeohash() returns false when given invalid geohashes with the `flag` set to `true`', () => {
    invalidGeohashes.forEach(invalidGeohash => {
      expect(validateHash(invalidGeohash, true)).to.deep.equal(false);
    });
  });
});
