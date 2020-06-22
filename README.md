# geokit

[![npm](https://img.shields.io/npm/v/geokit)](https://www.npmjs.com/package/geokit) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/geokit)](https://bundlephobia.com/result?p=geokit) [![Lint and Test](https://github.com/MichaelSolati/geokit/workflows/Lint%20and%20Test/badge.svg?branch=master)](https://github.com/MichaelSolati/geokit/actions?query=workflow%3A%22Lint+and+Test%22) [![Coveralls github](https://img.shields.io/coveralls/github/MichaelSolati/geokit)](https://coveralls.io/github/MichaelSolati/geokit) [![David](https://img.shields.io/david/michaelsolati/geokit)](https://david-dm.org/michaelsolati/geokit) [![GitHub stars](https://img.shields.io/github/stars/MichaelSolati/geokit)](https://github.com/MichaelSolati/geokit/stargazers) [![GitHub forks](https://img.shields.io/github/forks/MichaelSolati/geokit)](https://github.com/MichaelSolati/geokit/network/members)

Full documentation is available at [https://geokit.geofirestore.com](https://geokit.geofirestore.com).

An assortment of geolocation related tools, all packaged in one easy to use kit.

## Methods

### `distance(start: LatLngLiteral, end: LatLngLiteral, unit?: string): number`

Calculates the distance, in kilometers, between two coordinates.

`start` and `end` must be LatLngLiterals `{ lat: 0, lng: 0 }`.

```TypeScript
import * as geokit from 'geokit';

const start = {lat: 41.3083, lng: -72.9279};
const end = {lat: -33.8688, lng: 151.2093};

const distance = geokit.distance(location1, location2); // distance === 16082.811206563834
```

### `hash(coordinates: LatLngLiteral, precision?: number): string`

Generates Geohash of coordinates.

`coordinates` must be LatLngLiterals `{ lat: 0, lng: 0 }`.

```TypeScript
import * as geokit from 'geokit';

const coordinates = {lat: 41.3083,  lng: -72.9279};

const hash = geokit.hash(coordinates); // hash === 'drk4urzw2c'
```

### `decodeHash(hash: string): LatLngLiteral`

Decodes a Geohash into its Latitude and Longitude as a LatLngLiteral.

```TypeScript
import * as geokit from 'geokit';

const hash = 'r3gx2f77b';

const coordinates = geokit.decodeHash(hash); // coordinates === {lat: -33.86881113052368,  lng: 151.2093186378479}
```

### `validateCoordinates(coordinates: LatLngLiteral): boolean`

Validates coordinates and returns a boolean if valid, or throws an error if invalid.

`coordinates` must be LatLngLiterals `{ lat: 0, lng: 0 }`.

```TypeScript
import * as geokit from 'geokit';

const coordinates = {lat: 41.3083,  lng: -72.9279};

const isValid = geokit.validateCoordinates(coordinates); // true
```

### `validateHash(hash: string): LatLngLiteral`

Validates a Geohash and returns a boolean if valid, or throws an error if invalid.

```TypeScript
import * as geokit from 'geokit';

const hash = 'r3gx2f77b';

const isValid = geokit.validateHash(hash); // true
```
