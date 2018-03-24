import { Geokit } from '../src/geokit';
import { LatLngLiteral } from '../src/interfaces';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;
describe('Geokit Class', () => {
  it('Distance between New Haven and Sydney should be 16082.811206563834 km', () => {
    expect(Geokit.distance({ lat: 41.3083,  lng: -72.9279 }, { lat: -33.8688,  lng: 151.2093 })).to.equal(16082.811206563834);
  });

  it('Distance between New York and San Francisco should be 2568.4458439997047 miles', () => {
    expect(Geokit.distance({ lat: 40.7128,  lng: -74.0060 }, { lat: 37.7749,  lng: -122.4194 }, 'miles')).to.equal(2568.4458439997047);
  });

  it('Distance between 0, 0 and 91, 0 with should throw an Error', () => {
    expect(() => Geokit.distance({ lat: 0,  lng: 0 }, { lat: 91,  lng: 0 })).to.throw(null, 'End coordinates: Your latitude is greater than 90°');
  });

  it('Hash coordinates 41.3083, -72.9279 should yield \'drk4urzw2c\'', () => {
    expect(Geokit.hash({ lat: 41.3083,  lng: -72.9279 })).to.equal('drk4urzw2c');
  });

  it('Hash coordinates -33.8688, 151.2093 with a precision of 9 should yield \'r3gx2f77b\'', () => {
    expect(Geokit.hash({ lat: -33.8688,  lng: 151.2093 }, 9)).to.equal('r3gx2f77b');
  });

  it('Hash coordinates 91, 0 with should throw an Error', () => {
    expect(() => Geokit.hash({ lat: 91,  lng: 0 })).to.throw(null, 'Your latitude is greater than 90°');
  });
});
