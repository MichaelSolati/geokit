import * as chai from 'chai';

import {decodeHash} from '../src';
import {invalidGeohashes} from './common';

const expect = chai.expect;

describe('decodeHash()', () => {
  it("Geohash 'drk4urzw2c' should yield coordinates 41.30830138921738, -72.9278951883316", () => {
    expect(decodeHash('drk4urzw2c')).to.deep.equal({
      lat: 41.30830138921738,
      lng: -72.9278951883316,
    });
  });

  it("Geohash 'r3gx2f77b' should yield coordinates -33.86881113052368, 151.2093186378479", () => {
    expect(decodeHash('r3gx2f77b')).to.deep.equal({
      lat: -33.86881113052368,
      lng: 151.2093186378479,
    });
  });

  it('Throws error when given invalid Geohash', () => {
    invalidGeohashes.forEach(invalidGeohash => {
      expect(() => decodeHash(invalidGeohash)).to.throw();
    });
  });
});
