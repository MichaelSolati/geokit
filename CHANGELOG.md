### 1.1.0 (2020-06-22)

##### New Features

* **validateCoordinates:**  add function to validate `LatLngLiteral` ([43039bfb](https://github.com/MichaelSolati/geokit/commit/43039bfba5828f8c4bfe66e922e126df22c7e17c))

##### Bug Fixes

* **hash:**  rewrite `hash` function to address coordinates of 0, 0 ([52ab31ad](https://github.com/MichaelSolati/geokit/commit/52ab31ad8272c56af3c4e88c39b522d39b9c2af7))

#### 1.0.1 (2020-06-21)

##### Build System / Dependencies

*  change firebase hosting project ([ef615a7f](https://github.com/MichaelSolati/geokit/commit/ef615a7f10612dab39cce7e8e8f751dc751f5cc3))

##### Chores

*  update `homepage` in `package.json` ([7a6371c1](https://github.com/MichaelSolati/geokit/commit/7a6371c1d62b65df2a711f7830477c94856345a9))

##### Documentation Changes

*  update docs for functions ([a1a4a243](https://github.com/MichaelSolati/geokit/commit/a1a4a2438a0e7d7a23feb50b9aa66306fb097551))

##### New Features

*  add issue template ([58097c96](https://github.com/MichaelSolati/geokit/commit/58097c96c10f285232d63ed9f8b2d3e9577017bc))

## 1.0.0 (2020-06-21)

##### New Features

* **validateHash:**  add geohash validation ([0bb5cd47](https://github.com/MichaelSolati/geokit/commit/0bb5cd47d8c39cdc48846e4fb5fe64631c5f7e73))

##### Bug Fixes

*  fix docs build and deploy ([97b77f14](https://github.com/MichaelSolati/geokit/commit/97b77f146de164c3e898ea0dc82b0305c2b781db))

##### Refactors

*  break out class into functions ([3f662fe0](https://github.com/MichaelSolati/geokit/commit/3f662fe0efc03ce292a1ab40121e1e50bfba49a1))

#### 0.1.5 (2020-06-11)

##### Chores

*  update mocha options ([b25ecc3d](https://github.com/MichaelSolati/geokit/commit/b25ecc3da93f4db85681ece3a58f7da8da66e60c))
*  update dependencies ([a0a2f55c](https://github.com/MichaelSolati/geokit/commit/a0a2f55c6aaf4a9397967ed4ea70bb3672e1fde6))
*  move ci to GitHub Actions ([726bc2ab](https://github.com/MichaelSolati/geokit/commit/726bc2ab1a1c237c8014357c504d1b4ef9e7099b))
*  update dependencies ([20c21839](https://github.com/MichaelSolati/geokit/commit/20c218393ddcddbb7717d7035f0967b11c310018))

##### Refactors

*  update and fix build ([4a8d63c0](https://github.com/MichaelSolati/geokit/commit/4a8d63c0580e316fc7a0d6fee50bf29a89dfafee))

##### Tests

*  add linting ([b8b92263](https://github.com/MichaelSolati/geokit/commit/b8b92263069ef89b0cf8f6be2900f18d3ce626b1))

#### 0.1.4 (2019-06-17)

##### Build System / Dependencies

* **deps-dev:**
  *  bump firebase-tools from 5.0.1 to 6.11.0 ([c773ba86](https://github.com/MichaelSolati/geokit/commit/c773ba86d91ba53ac06a6b95f5a999b32cba2be7))
  *  bump firebase-tools from 5.0.1 to 6.11.0 ([2e1fbd21](https://github.com/MichaelSolati/geokit/commit/2e1fbd211e519102f1a94dbd477d1daf2935fb69))
  *  bump rollup-plugin-commonjs from 9.2.0 to 9.3.4 ([f157d89b](https://github.com/MichaelSolati/geokit/commit/f157d89b0572a2321b87fbbe5376b1aa2c94d3a2))
  *  bump @types/mocha from 5.2.5 to 5.2.7 ([cf81bb70](https://github.com/MichaelSolati/geokit/commit/cf81bb70c483361eaf2cc1d3f374a65b034aeb39))
  *  bump rollup-plugin-uglify from 6.0.0 to 6.0.2 ([a94fcaf5](https://github.com/MichaelSolati/geokit/commit/a94fcaf5917f877e4fa8a0439afe6897900500b3))
  *  bump rollup-plugin-commonjs from 9.2.0 to 9.3.4 ([7d865520](https://github.com/MichaelSolati/geokit/commit/7d8655201af9211c2d3460ae3130ec2cda7c40e9))
  *  bump rollup-plugin-uglify from 6.0.0 to 6.0.2 ([80a7392b](https://github.com/MichaelSolati/geokit/commit/80a7392b4c8768bc93cd4f5bc87891bc68010b04))
  *  bump @types/mocha from 5.2.5 to 5.2.7 ([a35476bc](https://github.com/MichaelSolati/geokit/commit/a35476bc3e0661c75cb821ba6b90c22085c08c53))
  *  bump mocha from 5.2.0 to 6.1.4 ([33ad2fea](https://github.com/MichaelSolati/geokit/commit/33ad2fea2f1d29de927ac65ec376ec0b7c0829b9))
  *  bump mocha from 5.2.0 to 6.1.4 ([25321c20](https://github.com/MichaelSolati/geokit/commit/25321c2067ef3c3659c25daaa2e52c81e754ba14))
* **deps:**
  *  [security] bump axios from 0.18.0 to 0.18.1 ([c52e02ef](https://github.com/MichaelSolati/geokit/commit/c52e02efe0af3548093758a4a1633ad999504395))
  *  [security] bump axios from 0.18.0 to 0.18.1 ([0034907e](https://github.com/MichaelSolati/geokit/commit/0034907ee57fb61fcd37b89dde623bcd66a92494))
* **rollup:**  call copy only once during rollup build ([4b9db1a6](https://github.com/MichaelSolati/geokit/commit/4b9db1a60d0c99b4bb6ddf19096ecbabfe57e5b4))

##### Chores

*  update dependencies ([892c678e](https://github.com/MichaelSolati/geokit/commit/892c678e2fe156693167fee79d98b3ef3ec069d2))

#### 0.1.3 (2018-08-11)

##### Build System / Dependencies

* **rollup:**  copy interfaces into dist during build ([7364c28b](https://github.com/MichaelSolati/geokit/commit/7364c28b9207d65e799b2e50acf6d342ff1e447c))
* **coveralls:**  add coveralls to travis build process ([e2f932f1](https://github.com/MichaelSolati/geokit/commit/e2f932f18d56d7a29c32d0fbec2f459d282a8f4a))

##### Chores

*  update dependencies ([51aa3f71](https://github.com/MichaelSolati/geokit/commit/51aa3f7112449d90804a5c2d8379bd54fb758043))
*  gitignore `.rpt2_cache` ([306a8e95](https://github.com/MichaelSolati/geokit/commit/306a8e957fc59cbf9e6909ccd2e2e239ea7064d1))

#### 0.1.2 (2018-07-23)

##### Build System / Dependencies

*  change build process to rollup ([42322971](https://github.com/MichaelSolati/geokit/commit/42322971fd54fbba434d4848390fd0dcdd20dfba))

#### 0.1.1 (2018-06-02)

##### Bug Fixes

* **distance:**  set default unit so  doesn't fail ([0001a29e](https://github.com/MichaelSolati/geokit/commit/0001a29e507ca90f45959fcf97d0f79d583e8ef5))

### 0.1.0 (2018-06-02)

##### Chores

*  update dependencies ([af42f559](https://github.com/MichaelSolati/geokit/commit/af42f5594351d91500ac9b7331535101b9e880d5))

##### New Features

* **decodeHash:**  add functionality to decode a geohash ([5922a2f0](https://github.com/MichaelSolati/geokit/commit/5922a2f06851f8fb3885b2046d0ac4d90f207cb9))

#### 0.0.3 (2018-03-24)

##### Refactors

* split out validators and make functions static ([9e7cc083](https://github.com/MichaelSolati/geokit/commit/9e7cc083f21d6b153c393fe1ea71cc249e1c2681))

#### 0.0.2 (2018-03-08)

##### Build System / Dependencies

* **test:** run tests on travis ([ac89f635](https://github.com/MichaelSolati/geokit/commit/ac89f63599ad64d06be8cb280b656124b5bc6bd5))
* **dev:** deploy dev branch with dev tag to npm ([c65e1617](https://github.com/MichaelSolati/geokit/commit/c65e161723c3d337029ecfb8e592a4250910a377))
* **docs:** add doc generation to build process ([39dfebd4](https://github.com/MichaelSolati/geokit/commit/39dfebd4e190c4f61a047f1c50c8ac0d33696899))

##### Chores

* **release:** patch version release ([6ed348cd](https://github.com/MichaelSolati/geokit/commit/6ed348cd7a9ebeb4cdc2ddf55670659eeaf65d00))

##### New Features

* **geokit:** add validation to user inputted coordinates and tests ([250cda07](https://github.com/MichaelSolati/geokit/commit/250cda07be156cb3d3be201cdbbe050eff82e551))
* implement distance function for two coordinates ([1e53f891](https://github.com/MichaelSolati/geokit/commit/1e53f891529f5370de42b7033f4a2a9ed6c76067))
* implement geohash function ([88540d25](https://github.com/MichaelSolati/geokit/commit/88540d254aea4db4a0c1f9e7c6598d63768af8e9))

##### Bug Fixes

* **travis:**
  * skip_cleanup during deployment of dev branch ([43a3cc40](https://github.com/MichaelSolati/geokit/commit/43a3cc4010171ae09b4a436dd743d1bc87eea54a))
  * remove only on master for travis ([22bffc56](https://github.com/MichaelSolati/geokit/commit/22bffc5645b7814bd1a4cf68029b24ec7379e837))

#### 0.0.1 (2017-10-01)

##### New Features

* implement distance function for two coordinates ([1e53f891](https://github.com/MichaelSolati/geokit/commit/1e53f891529f5370de42b7033f4a2a9ed6c76067))
* implement geohash function ([88540d25](https://github.com/MichaelSolati/geokit/commit/88540d254aea4db4a0c1f9e7c6598d63768af8e9))

