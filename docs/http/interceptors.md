# Interceptors

Interceptors allow us to perform actions before request happens, after it happens, retry the request multiple times or even totally ignore it and serve content in a different way (i.e. serve content from in-memory cache).

The concept of interceptors should sound familiar to you if you ever used [Angular](https://angular.io/api/common/http/HttpInterceptor) or [OkHttp](https://square.github.io/okhttp/interceptors/).
