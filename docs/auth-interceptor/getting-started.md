# Getting Started

## Auth Interceptor

Auth interceptor can be plugged in to a HttpClient to ensure passing proper authorization data to all requests and automatically refresh the tokens when they expire. You can configure whether authorization is done by body, header or query param, you can define your own refresh mechanism or use some ready-made, commonly used options.

### Quick Start

Add the Auth Interceptor package, assuming that you already have `@coolio/http` installed:

```bash
npm install @coolio/auth-interceptor
```

Declare `httpClient` as described in [@coolio/http's README.md](/packages/http/README.md) and then use `createAuthInterceptor`, passing all parameters required by `options` object. `authInterceptor` itself may also make it's own calls \(via `reauthorize` function\), so you may need to create another `HttpClient`, which won't interfere with your basic `HttpClient`'s interceptors. See the **Usage** section for complete example.

### Usage

```typescript
import {
  BodyCasing,
  bodyParser,
  bodySerializer,
  fetchRequestHandler,
  getHostname,
  HttpClient,
  NormalizedHttpOptions
} from '@coolio/http';
import { createAuthInterceptor } from '@coolio/auth-interceptor';

/**
 * This client is only used for authorization purposes - it doesn't have any interceptors.
 */
const authorizationClient = new HttpClient({
  requestHandler: fetchRequestHandler(),
  responseParser: bodyParser({ bodyCasing: BodyCasing.CAMEL_CASE }),
  bodySerializer: bodySerializer({ bodyCasing: BodyCasing.SNAKE_CASE }),
  baseUrl: 'https://my-domain.org/'
});

const authInterceptor = createAuthInterceptor({
  reauthorize: async () => {
    const response = await authorizationClient.post('/oauth/token', {
      body: {
        clientId: 'client_id',
        refreshToken: 'refresh_token_from_store',
        grantType: 'refresh_token',
      },
    });
    const { accessToken, refreshToken, tokenType, expires } = await response.parsedBody();

    // Store received tokens somewhere (let's say... local storage?)
    // Note: it's not 100% safe to store tokens that way
    localStorage.setItem('secrets', JSON.stringify({
      accessToken, refreshToken, tokenType, expires,
    }));
  },
  setAuthorizationData: (options: NormalizedHttpOptions) => {
    // Get previously stored tokens
    const { accessToken, tokenType } = JSON.parse(localStorage.getItem('secrets') || '{}');
    if (!options.headers) {
      options.headers = {};
    }
    options.headers['Authorization'] = tokenType ? `${tokenType} ${accessToken}` : accessToken;
  },
  onAuthorizationFailure: (error: Error) => {
    console.log(error.message);
    // You may clear the app state here and redirect user to login page
    throw error;
  },
  canAuthorize: (options: NormalizedHttpOptions) => getHostname(options.url) === 'my-domain.org',
});

export const httpClient = new HttpClient({
  requestHandler: fetchRequestHandler(),
  responseParser: bodyParser({ bodyCasing: BodyCasing.CAMEL_CASE }),
  bodySerializer: bodySerializer({ bodyCasing: BodyCasing.SNAKE_CASE }),
  baseUrl: 'https://my-domain.org/'
})
  .addInterceptor(authInterceptor);
```

Now each request directed to `my-domain.org` has a proper `Authorization` header. In case of `401` response, all requests are paused and token refresh happens. When token is fresh, all requests are resumed. The whole process is transparent and doesn't affect calls.

### OAuth2 Usage

If you're using OAuth2 authentication mechanisms, you can use an interceptor pre-made specifically for that case. See an example below:

```typescript
import {
  BodyCasing,
  bodyParser,
  bodySerializer,
  ContentType,
  fetchRequestHandler,
  getHostname,
  HttpClient,
  NormalizedHttpOptions,
} from '@coolio/http';
import { createOAuth2Interceptor } from '@coolio/auth-interceptor';

const authInterceptor = createOAuth2Interceptor({
  httpClientOptions: {
    // You can override default client options used for making refresh token requests
  },
  clientId: 'client-id',
  clientSecret: 'client-secret',
  contentType: ContentType.JSON, // URL-encoded by default
  getAuthorizationData: () => JSON.parse(localStorage.getItem('auth')),
  setAuthorizationData: (data) => localStorage.setItem('auth', JSON.stringify(data)),
  canAuthorize: (options: NormalizedHttpOptions) => getHostname(options.url) === 'my-domain.org',
  refreshTokenUrl: 'https://my-domain.org/auth/token',
  onAuthorizationFailure: (error: Error) => {
    console.log(error.message);
    // You may clear the app state here and redirect user to login page
    throw error;
  },
});

export const httpClient = new HttpClient({
  requestHandler: fetchRequestHandler(),
  responseParser: bodyParser({ bodyCasing: BodyCasing.CAMEL_CASE }),
  bodySerializer: bodySerializer({ bodyCasing: BodyCasing.SNAKE_CASE }),
  baseUrl: 'https://my-domain.org/'
})
  .addInterceptor(authInterceptor);
```

