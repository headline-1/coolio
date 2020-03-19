# Interceptors

## What is an Interceptor

Quite often we need to do something "in-between" while our API requests are running. This is why we have a built-in interceptors mechanism. Interceptors allow us to :

* perform actions before request happens,
* perform actions after request happens,
* retry the request multiple times,
* even totally ignore the request and serve content in a different way \(i.e. serve content from in-memory cache\).

Common use-cases for interceptors:

* throw errors if response status code indicates that request failed,
* automagically retry request up to X times if it failed,
* transparently reauthorize if your access token has been revoked

The concept of interceptors should sound familiar to you if you ever used [Angular](https://angular.io/api/common/http/HttpInterceptor) or [OkHttp](https://square.github.io/okhttp/interceptors/).

One can add interceptor to `HttpClient` using `addInterceptor` method. `addInterceptor` can be chained and it **mutates the httpClient**, so you can define a client as below.

```typescript
import { httpClient } 

const httpClient = new HttpClient({ ... })
  .addInterceptor(createErrorInterceptor())
  .addInterceptor(createLoggingInterceptor());
```

## Built-in interceptors

_**coolio**_ offers some basic interceptors, which you probably want to add right away.

| Interceptor | Purpose | Import |
| :--- | :--- | :--- |
| Logger | Logs out requests, responses and errors. | ``import { createLoggerInterceptor } from '@coolio/http`;`` |
| Error Handler | Throws [HttpResponseError](api/classes/httpresponseerror.md) when response contains 4xx/5xx status code. | `import { createErrorInterceptor } from '@coolio/http';`  |
| Redirection Handler | Follows redirections, when response contains 301 status code. | `import { createRedirectionInterceptor } from '@coolio/http';` |
| Auth | Handles Authorization and reauthenticates automatically when it's needed. | `import { createAuthInterceptor } from '@coolio/auth-interceptor';` |
| OAuth | AuthInterceptor following OAuth2 specs. Your job is to provide a storage for tokens only.  | `import { createOAuth2Interceptor } from '@coolio/auth-interceptor';` |

## Creating your own interceptor

_**coolio**_ supports two ways of creating interceptors. One is a [function-based approach](api/#httpinterceptorfunction) and second is a [class-based approach](api/interfaces/httpinterceptorinterface.md). Both ways are correct, just use what fits your use-case best.

Interceptors accept two arguments:

* `request: HttpFetch` - a function that returns a Promise that performs http request. It allows to queue or delay multiple requests, retry them etc.
* `options: NormalizedHttpOptions` - options that can be modified before request is made, i.e. you can add `Authorization` header in your `authInterceptor`.

 See the example of error interceptor created as a function:

```typescript
const interceptor: HttpInterceptorFunction = (request, options) => {
  return async () => {
    const response = await request();
    if (response.status >= 400) {
      throw new HttpResponseError(response);
    }
    return response;
  };
};
```

Interceptor has to return **async function that returns response**. In other words, it can either:

* just return request, which is passed as a first argument to interceptor
* create an async function, which performs some operations and then returns response

In the above case, we create such function manually and check the response status code, throwing an error when something goes wrong. 

If we'd like to create an interceptor as a class, it would look like that:

```typescript
export class ErrorInterceptor implements HttpInterceptorInterface { 
  onIntercept(request, options) {
    return async () => {
      const response = await request();
      if (response.status >= 400) {
        throw new HttpResponseError(response);
      }
      return response;
    };
  }
}
```

By exploiting the fact, that we return a function in our interceptor, we can implement retry mechanism, embed a queue and more. You can see some examples in [coolio's auth-interceptor](https://github.com/headline-1/coolio/tree/master/packages/auth-interceptor) source code.

