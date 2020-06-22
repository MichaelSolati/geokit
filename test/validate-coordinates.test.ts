import * as chai from 'chai';

import {validateCoordinates} from '../src';
import {invalidCoordinates, validCoordinates} from './common';

const expect = chai.expect;

describe('validateCoordinates()', () => {
  it('validateCoordinates() does not throw errors given valid coordinates', () => {
    validCoordinates.forEach(validLocation => {
      expect(() => validateCoordinates(validLocation)).not.to.throw();
    });
  });

  it('validateCoordinates() throws errors given invalid coordinates', () => {
    invalidCoordinates.forEach(invalidLocation => {
      expect(() => validateCoordinates(invalidLocation)).to.throw();
    });
  });
});
