![Coolio](./assets/coolio.svg?sanitize=true)

Networking client for web apps

## HTTP

A simple HTTP client for web apps. Supports interceptors & global configuration.

## Quick start

Installation:

```bash
npm install @coolio/http
```

Initialize a HttpClient and configure it as below:

```typescript
import { bodyParser, bodySerializer, BodyCasing, ContentType, HttpClient, fetchRequestHandler } from '@coolio/http';
import { Config } from './config';

export const httpClient = new HttpClient({
  baseUrl: 'https://api.headline1.com/v1/',
  requestHandler: fetchRequestHandler,
  defaultHeadersProvider: (host: string) => ({
    'Content-Type': ContentType.JSON,
    'Authorization': host === Config.API_DOMAIN ? 'Bearer abcdef1234567890' : undefined,
  }),
  responseParser: bodyParser({ 
    bodyCasing: BodyCasing.CAMEL_CASE
  }),
  bodySerializer: bodySerializer({
    bodyCasing: BodyCasing.SNAKE_CASE
  }),
});

```

Use the client in repositories containing API bindings:

```typescript
import { httpClient } from './httpClient';
import { Config } from './config';
import { User } from './user.types';

const getUsers = async (): Promise<User[]> => {
  const response = await httpClient.get(`${Config.API_BASE_URL}/users`);
  const body = await response.parsedBody();
  return body.data;
};

const getProfile = async (): Promise<User> => {
  const response = await httpClient.get(`${Config.API_BASE_URL}/me`);
  return await response.parsedBody();
};

export const UserRepository = {
  getUsers,
  getProfile,
};

```

After doing the following, you can simply call `UserRepository.getProfile()` to receive the Promise returning `User` object.

### HttpClient Options

| Parameter | Required | Description |
| --- | --- | --- |
| `baseUrl` | no | Base path for making all relative requests.  |
| `requestHandler` | yes | Abstraction layer for the standard `fetch` mechanism or any other transport you can think of. By default you can use `fetchRequestHandler`, which uses `fetch` underneath. You can also use built-in `mockRequestHandler` for testing purposes. |
| `defaultHeadersProvider` | no | Function returning common headers for all request sent by your client. Host argument can be used to pass authorization data, but only for specific domain. |
| `responseParser` | no | Adds a custom parser that processes the response body. Parsed body can be always accessed via `parsedBody` Promise in `HttpResponse`. By default it returns an `ArrayBuffer`. If you pass the standard `bodyParser`, it will decode JSON, URL-encoded body and plain text responses. It also supports case conversion, which is useful if your API returns responses in a convention that doesn't match your needs. |
| `bodySerializer` | no | Adds a custom serializer that can process body before sending. It supports case conversion. |

### Interceptors

Quite often we need to do something "in-between" while our API requests are running. This is why we have a built-in interceptors mechanism. They can:
* throw errors if response status code indicates that request failed,
* automagically retry request up to X times if it failed,
* transparently reauthorize if your access token has been revoked

The first case is described below:

```typescript
import { HttpFetch, HttpCode, ResponseError, NormalizedHttpOptions } from '@coolio/http';

export const errorInterceptor = <Body>(
  request: HttpFetch<Body>,
  options: NormalizedHttpOptions,
): HttpFetch<Body> => {
  return () => request().then(response => {
    // You can always use `HttpCode` enum as in this case, however
    // `response.status < 400` would be better in this case
    if(response.status === HttpCode.OK){
      return response;
    }
    throw new ResponseError(response);
  })
};

// In your httpClient.ts add the following:

httpClient.addInterceptor(errorInterceptor);

```

As you can see, interceptors accept two arguments:
 - `HttpFetch` - a function that returns a Promise that performs http request. It allows to queue or delay multiple requests, retry them etc.
 - `NormalizedHttpOptions` - options that can be modified before request is made, i.e. you can add `Authorization` header in your `authInterceptor`.

## Advanced Use Cases

If you happen to use JSON API, you may benefit from using a wrapper library that handles most of it's specs:

```bash
npm install @coolio/json-api
# or if you're using fancy stuff:
yarn add @coolio/json-api
```

See [@coolio/json-api's README.md](https://github.com/headline-1/coolio/tree/master/packages/json-api#readme) for details.
