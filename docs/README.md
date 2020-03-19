---
description: 'Networking client for Node.js, React Native & browser web apps'
---

# Coolio

Coolio is an environment-agnostic networking client for Node.js, React Native & browser web apps. The aim of Coolio is to abstract out the technical stuff and let developers query APIs in DRY manner. Usually such approach makes simple things easier while making complex use-cases impossible. Coolio gives users more control over networking, allowing to customize almost every step of it's networking pipeline:

* sending and handling requests,
* body normalization,
* pre and postprocessing.

This is achieved by using interceptors concept and providing pluggable interfaces whenever possible.

## Packages

Coolio is broken down into several packages, allowing you to pick what's really needed.

| Package | Description |
| :--- | :--- |
| [@coolio/auth-interceptor](auth-interceptor/getting-started.md) | Auth Interceptor with OAuth2 refresh token support for `@coolio/http` |
| [@coolio/http](http/getting-started.md) | HTTP networking client |
| [@coolio/json-api](json-api/getting-started.md) | JSON API client |

## Contributing

Most important `yarn` scripts during development:

* `start` - runs builds for all packages in watch mode
* `verify` - runs lint & tests

