![Coolio](/assets/coolio.svg?sanitize=true)

# JSON API

JSON API Client Wrapper

## Quick Start

Add the JSON API package, assuming that you already have `@coolio/http` installed:

```bash
npm install @coolio/json-api
```

Declare `httpClient` as described in [@coolio/http's README.md](/packages/http/README.md) and then build JSON API Client:

```typescript
import { HttpClient } from '@coolio/http';
import { JsonApiClient } from '@coolio/json-api';

const httpClient = new HttpClient(/* ... */);
export const jsonApiClient = new JsonApiClient(httpClient);

```

Make sure that httpClient uses standard `bodyParser` or a parser that returns complete body of server's response (an object including at least `data` property).

## Usage

An instance of `JsonApiClient` exposes a collection of `get()`, `getList()`, `post()`, `remove()`, `put()` and `patch()` methods. Each method returns a request builder. For example:

```typescript
import { Data, FilterOperator, MergedData } from '@coolio/json-api';
import { Config } from './config';
import { jsonApiClient } from './apiClient';

export interface UserAttributes {
  name: string;
  surname: string;
  email: string;
}

export interface UserRelationships {
  // TODO
}

export type UserData = Data<UserAttributes, UserRelationships>;
export type User = MergedData<UserData>;

const getUsers = jsonApiClient.getList<UserAttributes>(`${Config.API_BASE_URL}/users`)
  .filter('name', 'John', FilterOperator.LIKE)
  // Pagination can be done by passing offset and limit
  .pageOffset(30)
  .pageLimit(10)
  // Pagination can be also done by passing page number
  .pageNumber(3)
  // Merges the data in "included" response property into values in "data"
  .resolveIncluded()
  .send({
    // other http options that can be passed to a standard httpClient method
  });

export const UsersRepository = {
  getUsers,
}

```

`UsersRepository.getUsers()` method presented above returns a `Promise<JsonListResponse<UserAttributes, UserRelationships>>`. `@coolio/json-api` merges attributes and relationships automatically. 

```typescript
import { UsersRepository } from './users.repository';

UsersRepository.getUsers().then(response => {
  response.elements(); // User[]
});
```
