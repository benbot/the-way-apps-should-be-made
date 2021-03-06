import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:3000/graphql",
  fetch: process.browser ? window.fetch : require("node-fetch")
});

export default new ApolloClient({
  cache,
  link
});
