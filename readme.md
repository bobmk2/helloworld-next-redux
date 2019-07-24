nextjs-redux-ssr
====

## What is this ❓

- Minimal project using `Next.js` + `Redux` + `redux-thunk` + `TypeScript` .
- And finally, this project is deployed to `Now`.

## Using ⭐

- [Next.js](https://nextjs.org/)
- [Redux](https://redux.js.org/)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [TypeScript](https://www.typescriptlang.org/)
- [Now](https://zeit.co/now)

## Intro 🚀

```bash
# setup
npm install

# local development
npm run dev:now

# browser ---> http://localhost:3000
# web api --->  GET http://localhost:3000/api/counter
#              POST http://localhost:3000/api/counter/increment
#              POST http://localhost:3000/api/counter/decrement
#              POST http://localhost:3000/api/counter/reset

# deploy
npm run deploy:now
```

> Note: You should update API_ENDPOINT of production config at next.config.js before your deploying.

## Flow memo 📝

1. `Server` Get current count value in server.
2. `Server` Store the count in `store` of redux in server.
3. `Server` Rendering in server.
4. `Browser` Request web api to server when buttons are clicked.
5. `Browser` The count value will be updated in browser.
6. `Browser` Re-Rendering in browser.

## Known issues 📚

- Unexpected rebuild and restart entry points by `now dev` when I click buttons at `http://localhost:3000`. 🤔
  - So, the counter will not be working perfectly in local development.
  - Because the local count value is reset. 😭
