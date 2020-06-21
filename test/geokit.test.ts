import * as chai from 'chai';

import {Geokit} from '../src/geokit';
import {invalidGeohashes, validGeohashes} from './common';

const expect = chai.expect;

describe('Geokit Class', () => {
  describe('distance()', () => {
    it('Distance between New Haven and Sydney should be 16082.811206563834 km', () => {
      expect(
        Geokit.distance(
          {lat: 41.3083, lng: -72.9279},
          {lat: -33.8688, lng: 151.2093}
        )
      ).to.equal(16082.811206563834);
    });

    it('Distance between New York and San Francisco should be 2568.4458439997047 miles', () => {
      expect(
        Geokit.distance(
          {lat: 40.7128, lng: -74.006},
          {lat: 37.7749, lng: -122.4194},
          'miles'
        )
      ).to.equal(2568.4458439997047);
    });

    it('Distance between 91, 0 and 0, 0 with should throw an Error', () => {
      expect(() =>
        Geokit.distance({lat: 91, lng: 0}, {lat: 0, lng: 0})
      ).to.throw(
        undefined,
        'Start coordinates: Your latitude is greater than 90°'
      );
    });

    it('Distance between 0, 0 and -91, 0 with should throw an Error', () => {
      expect(() =>
        Geokit.distance({lat: 0, lng: 0}, {lat: -91, lng: 0})
      ).to.throw(undefined, 'End coordinates: Your latitude is less than -90°');
    });

    it('Distance between 0, 181 and 0, 0 with should throw an Error', () => {
      expect(() =>
        Geokit.distance({lat: 0, lng: 181}, {lat: 0, lng: 0})
      ).to.throw(
        undefined,
        'Start coordinates: Your longitude is greater than 180°'
      );
    });

    it('Distance between 0, 0 and 0, -181 with should throw an Error', () => {
      expect(() =>
        Geokit.distance({lat: 0, lng: 0}, {lat: 0, lng: -181})
      ).to.throw(
        undefined,
        'End coordinates: Your longitude is less than -180°'
      );
    });
  });

  describe('hash()', () => {
    it("Geohash coordinates 41.3083, -72.9279 should yield 'drk4urzw2c'", () => {
      expect(Geokit.hash({lat: 41.3083, lng: -72.9279})).to.equal('drk4urzw2c');
    });

    it("Geohash coordinates -33.8688, 151.2093 with a precision of 9 should yield 'r3gx2f77b'", () => {
      expect(Geokit.hash({lat: -33.8688, lng: 151.2093}, 9)).to.equal(
        'r3gx2f77b'
      );
    });

    it('Geohash coordinates 91, 0 with should throw an Error', () => {
      expect(() => Geokit.hash({lat: 91, lng: 0})).to.throw(
        undefined,
        'Your latitude is greater than 90°'
      );
    });
  });

  describe('decodeHash()', () => {
    it("Geohash 'drk4urzw2c' should yield coordinates 41.30830138921738, -72.9278951883316", () => {
      expect(Geokit.decodeHash('drk4urzw2c')).to.deep.equal({
        lat: 41.30830138921738,
        lng: -72.9278951883316,
      });
    });

    it("Geohash 'r3gx2f77b' should yield coordinates -33.86881113052368, 151.2093186378479", () => {
      expect(Geokit.decodeHash('r3gx2f77b')).to.deep.equal({
        lat: -33.86881113052368,
        lng: 151.2093186378479,
      });
    });

    it('Throws error when given invalid Geohash', () => {
      invalidGeohashes.forEach(invalidGeohash => {
        expect(() => Geokit.decodeHash(invalidGeohash)).to.throw();
      });
    });
  });

  describe('validateHash()', () => {
    it('validateGeohash() does not throw errors given valid geohashes', () => {
      validGeohashes.forEach(validGeohash => {
        expect(() => Geokit.validateHash(validGeohash)).not.to.throw();
      });
    });

    it('validateGeohash() throws errors given invalid geohashes', () => {
      invalidGeohashes.forEach(invalidGeohash => {
        expect(() => Geokit.validateHash(invalidGeohash)).to.throw();
      });
    });

    it('validateGeohash() returns false when given invalid geohashes with the `flag` set to `true`', () => {
      invalidGeohashes.forEach(invalidGeohash => {
        expect(Geokit.validateHash(invalidGeohash, true)).to.deep.equal(false);
      });
    });
  });
});
