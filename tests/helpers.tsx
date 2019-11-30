import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import {
  addMockFunctionsToSchema,
  makeExecutableSchema,
  IMocks
} from "graphql-tools";
import { importSchema } from "graphql-import";
import { SchemaLink } from "apollo-link-schema";
import { InMemoryCache } from "apollo-cache-inmemory";
import path from "path";
import { render } from "@testing-library/react";
import { ReactElement } from "react";

const schemaDef = importSchema(
  path.join(__dirname, "../src/graphql/schema.graphql")
);

export const makeTestClient = (mocks: IMocks) => {
  const schema = makeExecutableSchema({
    typeDefs: schemaDef,
    resolverValidationOptions: { requireResolversForResolveType: false }
  });

  const testLink = new SchemaLink({ schema });

  addMockFunctionsToSchema({ schema: schema, mocks });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: testLink
  });
};

export const renderWithApollo = (component: ReactElement, mocks: IMocks = {}) =>
  render(
    <ApolloProvider client={makeTestClient(mocks)}>{component}</ApolloProvider>
  );
