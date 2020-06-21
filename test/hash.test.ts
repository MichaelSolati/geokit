import * as chai from 'chai';

import {hash} from '../src';

const expect = chai.expect;

describe('hash()', () => {
  it("Geohash coordinates 41.3083, -72.9279 should yield 'drk4urzw2c'", () => {
    expect(hash({lat: 41.3083, lng: -72.9279})).to.equal('drk4urzw2c');
  });

  it("Geohash coordinates -33.8688, 151.2093 with a precision of 9 should yield 'r3gx2f77b'", () => {
    expect(hash({lat: -33.8688, lng: 151.2093}, 9)).to.equal('r3gx2f77b');
  });

  it('Geohash coordinates 91, 0 with should throw an Error', () => {
    expect(() => hash({lat: 91, lng: 0})).to.throw(
      undefined,
      'Your latitude is greater than 90°'
    );
  });
});
