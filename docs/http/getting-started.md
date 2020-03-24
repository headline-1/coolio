# Getting Started

## Coolio's HTTP Package

`@coolio/http` is a simple, yet extendable HTTP client for web apps. It features:

* body parsing and serialization, with case-conversion support
  * raw data \(ArrayBuffer\)
  * JSON
  * URL-encoded
  * plain text
  * multipart \([FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)\)
* extensibility via [interceptors](interceptors.md), with built-ins such as:
  * logger
  * error handler
  * redirection interceptor
* configurable requestHandler layer, which let's you choose the underlaying mechanism used for HTTP communication

## Quick start

### Installation

Install `@coolio/http` package using `npm` or `yarn`.

```bash
npm install @coolio/http
```

### Creating a client

You may create multiple `HttpClient` instances, as your application connects to various APIs and each API probably has slightly different conventions. You can initialize a HttpClient and configure it as below:

```typescript
import { bodyParser, bodySerializer, BodyCasing, ContentType, HttpClient, fetchRequestHandler } from '@coolio/http';
import { fetchRequestHandler } from '@coolio/http/request-handlers/fetch';

export const httpClient = new HttpClient({
  baseUrl: 'https://api.example.com/v1/',
  requestHandler: fetchRequestHandler,
  headers: {
    'Content-Type': ContentType.JSON,
  },
  bodyParser: bodyParser({ 
    bodyCasing: BodyCasing.CAMEL_CASE
  }),
  bodySerializer: bodySerializer({
    bodyCasing: BodyCasing.SNAKE_CASE
  }),
});
```

In the example above, we create `HttpClient` instance which will route all paths to `api.example.com/v1` address:

* if you request `/users`, the request will go to `api.example.com/v1/users`
* if you request `https://google.com`, the request will go to `google.com`, as you specified full URL and `baseUrl` is not applied in such case.

Then, our `httpClient` uses `fetchRequestHandler` to deal with HTTP requests, in order to use Fetch API as request handler. Each `requestHandler` in _**coolio**_ acts as a bridge between natively available mechanisms \(such as [XmlHttpRequest](https://developer.mozilla.org/pl/docs/XMLHttpRequest), [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) or [http](https://nodejs.org/api/http.html) module available in Node.js\) and [RawHttpResponse](api/interfaces/rawhttpresponse.md). Such Raw response has to be further processed by `bodyParser`. BodyParser and BodySerializer automatically handle most common body types, such as JSON, URL-encoded, plain text, multipart and raw \(for binary uploads\). As a result we get a nicely processed [HttpResponse](api/interfaces/httpresponse.md), which lets us get response body, headers and status code of a response.

You can find all options directly in [HttpClientConfig](api/interfaces/httpclientconfig.md) API docs. 

### Requests

`httpClient` allows you to perform requests using all basic http methods. See [HttpRequestOptions](api/interfaces/httprequestoptions.md) to check what can be passed there.

### Repositories

You may use the repository pattern to separate API requests from other code. You can use previously defined `HttpClient` as below:

```typescript
import { httpClient } from './httpClient';
import { User } from './user.types';

const getUsers = async (page: number, limit = 10): Promise<User[]> => {
  const response = await httpClient.get('/users', {
    query: {
      page,
      limit,
    },
  });
  return await response.parsedBody();
};

const getProfile = async (): Promise<User> => {
  const response = await httpClient.get('/users/me');
  return await response.parsedBody();
};

export const UserRepository = {
  getUsers,
  getProfile,
};
```

After doing the following, you can simply call `UserRepository.getProfile()` to receive the Promise returning `User` object.

Another way of dealing with repositories is to use class-based approach:

```typescript
import { bodyParser, bodySerializer, BodyCasing, ContentType, HttpClient } from '@coolio/http';
import { fetchRequestHandler } from '@coolio/http/request-handlers/fetch';

export class BaseRepository {
  protected client: HttpClient;

  constructor(baseUrl = '/'){
    this.client = new HttpClient({
      baseUrl: `https://api.example.com/v1/${baseUrl}`,
      requestHandler: fetchRequestHandler,
      headers: {
        'Content-Type': ContentType.JSON,
      },
      bodyParser: bodyParser({ 
        bodyCasing: BodyCasing.CAMEL_CASE
      }),
      bodySerializer: bodySerializer({
        bodyCasing: BodyCasing.SNAKE_CASE
      }),
    });    
  }
}

export class UserRepository extends BaseRepository {
  constructor(){
    super('/users'); // baseUrl is now https://api.example.com/v1/users
  }
  
  async getUsers(page: number, limit = 10): Promise<User[]> {
    const response = await this.client.get('/', {
      query: {
        page,
        limit,
      },
    });
    return await response.parsedBody();
  }

  async getProfile(): Promise<User> {
    const response = await this.client.get('/me');
    return await response.parsedBody();
  }
}

export const userRepository = new UserRepository();
```

### Advanced Use Cases

If you happen to use JSON API, you may benefit from using a wrapper library that handles most of it's specs:

```bash
npm install @coolio/json-api
```

See [@coolio/json-api](../json-api/getting-started.md) docs for details.

