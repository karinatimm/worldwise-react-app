// server.js

import jsonServer from "json-server";
import path from "path";

// Create server
const server = jsonServer.create();
const router = jsonServer.router(path.resolve("data", "cities.json"));
const middlewares = jsonServer.defaults();

// Use middlewares
server.use(middlewares);
server.use(router);

// Listen on Heroku or localhost
server.listen(process.env.PORT || 8000, () => {
  console.log("JSON Server is running");
});
