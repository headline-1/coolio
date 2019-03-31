![Cool IO](./assets/coolio.svg)

Networking client for web apps

## Quick start

Install base coolio package:

```bash
npm install @coolio/http
# or if you're using fancy stuff:
yarn add @coolio/http
```

Initialize a HttpClient and configure it as below:

```typescript
import { bodyParser, BodyCasing, ContentType, HttpClient, fetchRequestHandler } from '@coolio/http';
import { Config } from './config';

export const httpClient = new HttpClient({
  requestHandler: fetchRequestHandler,
  defaultHeadersProvider: (host: string) => ({
    'Content-Type': ContentType.JSON,
    'Authorization': host === Config.API_DOMAIN ? 'Bearer abcdef1234567890' : undefined,
  }),
  parser: bodyParser({ 
    bodyCasing: BodyCasing.CAMEL_CASE
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
| `requestHandler` | yes | Abstraction layer for the standard `fetch` mechanism or any other transport you can think of. By default you can use `fetchRequestHandler`, which uses `fetch` underneath. You can also use built-in `mockRequestHandler` for testing purposes. |
| `defaultHeadersProvider` | no | Function returning common headers for all request sent by your client. Host argument can be used to pass authorization data, but only for specific domain. |
| `parser` | no | Adds a custom parser that processes the response body. Parsed body can be always accessed via `parsedBody` Promise in `HttpResponse`. By default it returns an `ArrayBuffer`. If you pass the standard `bodyParser`, it will decode JSON, URL-encoded body and plain text responses. It also supports case conversion, which is useful if your API returns responses in a convention that doesn't match your needs. |

### Interceptors

Quite often we need to do something "in-between" while our API requests are running. This is why we have a built-in interceptors mechanism. They can:
* throw errors if response status code indicates that request failed,
* automagically retry request up to X times if it failed,
* transparently reauthorize if your access token has been revoked

The first case is described below:

```typescript
import { HttpFetch, HttpCode, ResponseError } from '@coolio/http';

export const errorInterceptor = async <Body>(request: HttpFetch<Body>): HttpFetch<Body> => {
  return request().then(response => {
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

## Advanced Use Cases

If you happen to use JSON API, you may benefit from using a wrapper library that handles most of it's specs:

```bash
npm install @coolio/json-api
# or if you're using fancy stuff:
yarn add @coolio/json-api
```

See [@coolio/json-api's README.md](https://github.com/headline-1/coolio/tree/master/packages/json-api#readme) for details.
