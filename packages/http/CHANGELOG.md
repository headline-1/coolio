# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.1](https://github.com/headline-1/coolio/compare/v1.1.0...v1.1.1) (2020-02-19)

**Note:** Version bump only for package @coolio/http





# [1.1.0](https://github.com/headline-1/coolio/compare/v1.0.3...v1.1.0) (2020-02-19)


### Features

* **timeout support:** full timeout support for all request handlers ([ef5f6d9](https://github.com/headline-1/coolio/commit/ef5f6d93f1dca1009fec62c817a7d4c5cdd11199))





## [1.0.3](https://github.com/headline-1/coolio/compare/v1.0.2...v1.0.3) (2020-02-18)


### Bug Fixes

* **types:** properly arranged types for typescript<3.7 ([875ca12](https://github.com/headline-1/coolio/commit/875ca128be935136cdaf38cb134c695fe5899509))





## [1.0.2](https://github.com/headline-1/coolio/compare/v1.0.1...v1.0.2) (2020-02-18)

**Note:** Version bump only for package @coolio/http





## [1.0.1](https://github.com/headline-1/coolio/compare/v1.0.0...v1.0.1) (2020-02-18)


### Bug Fixes

* **typings:** using downlevel-dts to bring back TS<3.7 support ([0d6aff9](https://github.com/headline-1/coolio/commit/0d6aff9f8814a4d06cbc97008d2d51848428de3e))





# [1.0.0](https://github.com/headline-1/coolio/compare/v0.9.0...v1.0.0) (2020-02-16)


### Bug Fixes

* **request-handlers:** all request handlers are available from bindings ([bec0b26](https://github.com/headline-1/coolio/commit/bec0b26d7b2eebbc3f1817f03b178a0d7c54e9a1))
* **url-encoding:** url string should override query passed in object ([b8419f8](https://github.com/headline-1/coolio/commit/b8419f80d9fef68e17371d2edb31172e2d308586))


### Features

* **case-conversion:** body casing enum has now string names ([44c5c43](https://github.com/headline-1/coolio/commit/44c5c43c23d8c96baaddf2d1b9ad2bb4124c4ab8))
* **http-module:** exposed request-handlers separately ([d6d4646](https://github.com/headline-1/coolio/commit/d6d46463fedb3e76f2aff6bc846918e943facc9a))
* **query-string-options:** one can configure query string options ([cc97360](https://github.com/headline-1/coolio/commit/cc97360300e2776985ae30c33bd3385ca10d1db0))
* **redirection-interceptor:** built-in support for redirections ([b472e13](https://github.com/headline-1/coolio/commit/b472e1313f485031c0a071edfc3c2121e95146c9))
* **redirections:** redirection support ([cf392d7](https://github.com/headline-1/coolio/commit/cf392d7d1acc599ba2fb1d1e89d1ef2cef3661d0))


### BREAKING CHANGES

* **url-encoding:** url string has now bigger priority than query passed in object, which results in better composability (parameters from url are always merged into object)





# [0.9.0](https://github.com/headline-1/coolio/compare/v0.8.3...v0.9.0) (2020-02-04)


### Bug Fixes

* **encoding:** fix for invalid body encoding issue ([c87351c](https://github.com/headline-1/coolio/commit/c87351ca5ee706db8934cc9341ed1b09f15fee18))
* **http-request-handler:** removed duplicated helpers ([1622e4b](https://github.com/headline-1/coolio/commit/1622e4b3bb43b4d4d2ede1077c6455cf34834512))


### Features

* **http-request-handler:** moved to a separate package ([569d120](https://github.com/headline-1/coolio/commit/569d120114b8f5d8138f692b76941648fd587265))





## [0.8.3](https://github.com/headline-1/coolio/compare/v0.8.2...v0.8.3) (2019-12-17)


### Bug Fixes

* **http:** fix for headers being overwritten ([159e810](https://github.com/headline-1/coolio/commit/159e8104520370e11fc8a273a90640b4e3182642))





## [0.8.2](https://github.com/headline-1/coolio/compare/v0.8.1...v0.8.2) (2019-12-12)


### Bug Fixes

* **http:** body cache fix ([98f7375](https://github.com/headline-1/coolio/commit/98f737590572b99a8ec96de500112dcb7cd3825d))





## [0.8.1](https://github.com/headline-1/coolio/compare/v0.8.0...v0.8.1) (2019-12-06)


### Bug Fixes

* **http-request-handler:** fix for node.js path/query support ([d99449c](https://github.com/headline-1/coolio/commit/d99449c8a1090010a54f4fc99db05278da69f0ff))





# [0.8.0](https://github.com/headline-1/coolio/compare/v0.7.0...v0.8.0) (2019-12-06)


### Features

* **http:** native request handler for node.js ([c0351c5](https://github.com/headline-1/coolio/commit/c0351c5e479884ffcd03fd0380816a55a61a074a))





# [0.7.0](https://github.com/headline-1/coolio/compare/v0.6.9...v0.7.0) (2019-11-30)


### Features

* **auth-interceptor:** class-based queue & auth-interceptor ([5ec4e40](https://github.com/headline-1/coolio/commit/5ec4e40a4f622fbb9a56bb758b9d4056b2b0adbb))
* **auth-interceptor:** initial implementation of auth interceptor ([8a71e64](https://github.com/headline-1/coolio/commit/8a71e64c61388b5d9729605998e2c82464bfd1c4))
* **http-interceptors:** built-in error interceptor ([4c18a23](https://github.com/headline-1/coolio/commit/4c18a2394b4a7d6c9380aea74b464ac176436cde))
* **http-interceptors:** built-in logging interceptor ([67d907c](https://github.com/headline-1/coolio/commit/67d907cf111e699f851481c218605a0bfc4c606e))





## [0.6.9](https://github.com/headline-1/coolio/compare/v0.6.8...v0.6.9) (2019-11-25)

**Note:** Version bump only for package @coolio/http





## [0.6.8](https://github.com/headline-1/coolio/compare/v0.6.7...v0.6.8) (2019-11-25)

**Note:** Version bump only for package @coolio/http





## [0.6.7](https://github.com/headline-1/coolio/compare/v0.6.6...v0.6.7) (2019-11-25)

**Note:** Version bump only for package @coolio/http





## [0.6.6](https://github.com/headline-1/coolio/compare/v0.6.5...v0.6.6) (2019-11-25)

**Note:** Version bump only for package @coolio/http





## [0.6.5](https://github.com/headline-1/coolio/compare/v0.6.4...v0.6.5) (2019-11-25)

**Note:** Version bump only for package @coolio/http





## [0.6.4](https://github.com/headline-1/coolio/compare/v0.6.3...v0.6.4) (2019-11-25)

**Note:** Version bump only for package @coolio/http





## [0.6.3](https://github.com/headline-1/coolio/compare/v0.6.2...v0.6.3) (2019-11-25)

**Note:** Version bump only for package @coolio/http





## [0.6.2](https://github.com/headline-1/coolio/compare/v0.6.1...v0.6.2) (2019-11-25)

**Note:** Version bump only for package @coolio/http





## [0.6.1](https://github.com/headline-1/coolio/compare/v0.5.0...v0.6.1) (2019-11-25)


### Bug Fixes

* **build:** build & vulnerability fix ([6c3399a](https://github.com/headline-1/coolio/commit/6c3399a7feb25628dac432588ec607620b9fc6e6))





# [0.6.0](https://github.com/headline-1/coolio/compare/v0.5.0...v0.6.0) (2019-11-25)


### Bug Fixes

* **build:** build & vulnerability fix ([6c3399a](https://github.com/headline-1/coolio/commit/6c3399a7feb25628dac432588ec607620b9fc6e6))



# [0.5.0](https://github.com/headline-1/coolio/compare/v0.4.0...v0.5.0) (2019-10-28)


### Bug Fixes

* **dependencies:** dependency update ([a78e303](https://github.com/headline-1/coolio/commit/a78e30362be13aa34a198af40c1e4031e49119e8))
* **json-api:** new syntax for passing multiple square-bracketed keys to filter in json api ([d3f95c1](https://github.com/headline-1/coolio/commit/d3f95c1ad71030757bad9bcf14cac5feacedb6de))



# [0.4.0](https://github.com/headline-1/coolio/compare/v0.3.8...v0.4.0) (2019-09-15)



## [0.3.8](https://github.com/headline-1/coolio/compare/v0.3.7...v0.3.8) (2019-07-31)



## [0.3.7](https://github.com/headline-1/coolio/compare/v0.3.6...v0.3.7) (2019-07-30)



## [0.3.6](https://github.com/headline-1/coolio/compare/v0.3.5...v0.3.6) (2019-07-29)



## [0.3.5](https://github.com/headline-1/coolio/compare/v0.3.3...v0.3.5) (2019-07-11)



## [0.3.3](https://github.com/headline-1/coolio/compare/v0.3.1-alpha.0...v0.3.3) (2019-07-11)



## [0.3.1-alpha.0](https://github.com/headline-1/coolio/compare/v0.3.0-alpha.0...v0.3.1-alpha.0) (2019-07-11)



# [0.3.0-alpha.0](https://github.com/headline-1/coolio/compare/v0.2.0-alpha.0...v0.3.0-alpha.0) (2019-07-10)



# [0.2.0-alpha.0](https://github.com/headline-1/coolio/compare/v0.1.20...v0.2.0-alpha.0) (2019-07-10)



## [0.1.20](https://github.com/headline-1/coolio/compare/v0.1.19...v0.1.20) (2019-06-26)



## [0.1.19](https://github.com/headline-1/coolio/compare/v0.1.18...v0.1.19) (2019-06-25)



## [0.1.18](https://github.com/headline-1/coolio/compare/v0.1.14...v0.1.18) (2019-06-25)



## [0.1.14](https://github.com/headline-1/coolio/compare/v0.1.11...v0.1.14) (2019-05-20)



## [0.1.11](https://github.com/headline-1/coolio/compare/v0.1.10...v0.1.11) (2019-05-15)



## [0.1.10](https://github.com/headline-1/coolio/compare/v0.1.9...v0.1.10) (2019-04-10)



## [0.1.9](https://github.com/headline-1/coolio/compare/v0.1.8...v0.1.9) (2019-04-01)



## [0.1.8](https://github.com/headline-1/coolio/compare/v0.1.7...v0.1.8) (2019-04-01)



## [0.1.7](https://github.com/headline-1/coolio/compare/v0.1.6...v0.1.7) (2019-03-31)



## [0.1.6](https://github.com/headline-1/coolio/compare/v0.1.5...v0.1.6) (2019-03-31)



## [0.1.5](https://github.com/headline-1/coolio/compare/v0.1.4...v0.1.5) (2019-03-31)



## [0.1.4](https://github.com/headline-1/coolio/compare/v0.1.3...v0.1.4) (2019-03-31)



## [0.1.3](https://github.com/headline-1/coolio/compare/v0.1.2...v0.1.3) (2019-03-31)



## [0.1.2](https://github.com/headline-1/coolio/compare/v0.1.1...v0.1.2) (2019-03-30)



## [0.1.1](https://github.com/headline-1/coolio/compare/v0.1.0...v0.1.1) (2019-03-30)



# 0.1.0 (2019-03-30)
