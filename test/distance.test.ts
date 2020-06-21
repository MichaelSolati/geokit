import * as chai from 'chai';

import {distance} from '../src';

const expect = chai.expect;

describe('distance()', () => {
  it('Distance between New Haven and Sydney should be 16082.811206563834 km', () => {
    expect(
      distance({lat: 41.3083, lng: -72.9279}, {lat: -33.8688, lng: 151.2093})
    ).to.equal(16082.811206563834);
  });

  it('Distance between New York and San Francisco should be 2568.4458439997047 miles', () => {
    expect(
      distance(
        {lat: 40.7128, lng: -74.006},
        {lat: 37.7749, lng: -122.4194},
        'miles'
      )
    ).to.equal(2568.4458439997047);
  });

  it('Distance between 91, 0 and 0, 0 with should throw an Error', () => {
    expect(() => distance({lat: 91, lng: 0}, {lat: 0, lng: 0})).to.throw(
      undefined,
      'Start coordinates: Your latitude is greater than 90°'
    );
  });

  it('Distance between 0, 0 and -91, 0 with should throw an Error', () => {
    expect(() => distance({lat: 0, lng: 0}, {lat: -91, lng: 0})).to.throw(
      undefined,
      'End coordinates: Your latitude is less than -90°'
    );
  });

  it('Distance between 0, 181 and 0, 0 with should throw an Error', () => {
    expect(() => distance({lat: 0, lng: 181}, {lat: 0, lng: 0})).to.throw(
      undefined,
      'Start coordinates: Your longitude is greater than 180°'
    );
  });

  it('Distance between 0, 0 and 0, -181 with should throw an Error', () => {
    expect(() => distance({lat: 0, lng: 0}, {lat: 0, lng: -181})).to.throw(
      undefined,
      'End coordinates: Your longitude is less than -180°'
    );
  });
});
