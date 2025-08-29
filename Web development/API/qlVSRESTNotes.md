REST with a single endpoint + methods = server-controlled data shape.

GraphQL with one endpoint = client-controlled data shape.

REST CRUD

REST is resource-oriented. Each action usually maps to an HTTP method:
```
Create → POST /users

Read → GET /users or GET /users/:id

Update → PUT /users/:id or PATCH /users/:id

Delete → DELETE /users/:id

/users
   GET    → get all users
   POST   → create a user
/users/:id
   GET    → get one user
   PUT    → update a user
   DELETE → delete a user

```
✅ Advantages:

Simple, intuitive, follows HTTP conventions.

Great for standard CRUD APIs.

Works naturally with HTTP caching (CDNs, proxies).

❌ Drawbacks:

Over-fetching: /users/:id might return more fields than needed.

Under-fetching: sometimes need multiple endpoints (/users/:id + /users/:id/posts).

GraphQL is operation-oriented. You have queries (read) and mutations (create/update/delete).

```
# Create
mutation {
  createUser(name: "Alice", email: "alice@example.com") {
    id
    name
  }
}

# Read
query {
  user(id: 1) {
    id
    name
    posts {
      title
    }
  }
}

# Update
mutation {
  updateUser(id: 1, name: "Alice Updated") {
    id
    name
  }
}

# Delete
mutation {
  deleteUser(id: 1) {
    id
  }
}

```

Server reads the GraphQL query inside the body, not the URL, and executes the right resolver
```
create
POST /graphql
Content-Type: application/json

{
  "query": "mutation { createUser(name: \"Alice\", email: \"alice@example.com\") { id name } }"
}

read
POST /graphql
Content-Type: application/json

{
  "query": "query { user(id: 1) { id name posts { title } } }"
}

```
GraphQL server has a schema that lists available operations (Query and Mutation types).

The client request body specifies which operation to run.

The GraphQL engine routes it to the correct resolver function.
his is why GraphQL only needs one endpoint:

REST encodes operation in METHOD + URL.

GraphQL encodes operation in the query body.
By default

Most GraphQL clients (Apollo, Relay, graphql-request) send POST requests.

Why? Because queries/mutations are in the request body (easy to handle large or complex queries).

But GET can be used for Queries

GraphQL spec allows queries over HTTP GET.
In this case, the query goes into the URL as a query parameter, like this:

GET /graphql?query={user(id:1){id,name}}


👉 This works only for queries (reads) because:

GET requests must be idempotent (should not modify data).

Mutations change data → so they must use POST.

🔹 Why use GET?

Caching → CDNs, browsers, proxies cache GET requests easily, but not POST.

Example: a query like ?query={users{id,name}} can be cached.

Pre-fetching links → GET URLs can be bookmarked or preloaded.

Performance → less overhead when query fits in URL length.

🔹 Example with Apollo Server

If you send:

GET http://localhost:4000/graphql?query={users{id,name}}


Server will respond with:

{
  "data": {
    "users": [
      { "id": "1", "name": "Alice" },
      { "id": "2", "name": "Bob" }
    ]
  }
}


✅ Rule of thumb:

Queries → can be GET (when caching/bookmarking is useful).

Mutations → always POST.

In practice, most GraphQL clients default to POST for everything (simpler), unless you configure GET explicitly.

Redux-Thunk

Redux-Thunk is not built into Redux core.

It’s a separate middleware that intercepts actions before they reach reducers.

It lets you write action creators that return functions instead of plain objects.

Inside those functions, you can perform async work (like fetch) and then dispatch new actions.

🔹 Redux Toolkit (RTK)
Nowadays, most projects use Redux Toolkit (RTK) — the official recommended way.

RTK already includes redux-thunk by default 🎉

You don’t have to install/configure it separately.

If you configure your store with configureStore(), thunk is enabled automatically.

