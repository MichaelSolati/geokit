# geokit

[![Build Status](https://travis-ci.org/MichaelSolati/geokit.svg?branch=master)](https://travis-ci.org/MichaelSolati/geokit) [![npm version](https://badge.fury.io/js/geokit.svg)](https://badge.fury.io/js/geokit) [![Coverage Status](https://coveralls.io/repos/github/MichaelSolati/geokit/badge.svg?branch=master)](https://coveralls.io/github/MichaelSolati/geokit?branch=master)

An assortment of geolocation related tools, all packaged in one easy to use kit.

## Methods

### `Geokit.distance(start: LatLngLiteral, end: LatLngLiteral, unit?: string): number`

Static method which returns the distance, in kilometers, between `start` and `end`.

`start` and `end` must be LatLngLiterals `{ lat: 0, lng: 0 }`.

There exists an optional third argument, where if the string `'miles'` is inputted, the result returned will be in miles rather than kilometers.

```TypeScript
import { Geokit, LatLngLiteral } from 'geokit';

const start: LatLngLiteral = { lat: 40.7128,  lng: -74.0060 };
const end: LatLngLiteral = { lat: 37.7749,  lng: -122.4194 };

const distance: number = Geokit.distance(location1, location2, 'miles');  // distance === 2568.4458439997047
```

### `Geokit.hash(coordinates: LatLngLiteral, precision?: number): string`

Static method which generates the geohash of a point.

`coordinates` must be LatLngLiterals `{ lat: 0, lng: 0 }`.

There exists an optional second argument of precision, where the hash produced will be as many characters as the number inputted. It defaults to 10.

```TypeScript
import { Geokit, LatLngLiteral } from 'geokit';

const coordinates: LatLngLiteral = { lat: 41.3083,  lng: -72.9279 };

const hash: string = Geokit.hash(coordinates);  // hash === 'drk4urzw2c'
```

### `Geokit.decodeHash(hash: string): LatLngLiteral`

Static method which decodes geohash into its Latitude and Longitude as a LatLngLiteral.

```TypeScript
import { Geokit, LatLngLiteral } from 'geokit';

const hash: string = 'r3gx2f77b';

const coordinates: LatLngLiteral = Geokit.decodeHash(hash);  // coordinates === { lat: -33.86881113052368,  lng: 151.2093186378479 }
```
