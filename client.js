import fetch from 'node-fetch';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const { TOKEN } = process.env;

const URL = 'http://api.membrane.io/graphql';

const cache = new InMemoryCache();

export const client = new ApolloClient({
  link: new HttpLink({
    uri: URL,
    fetch,
    headers: {
      Authorization: 'Bearer ' + TOKEN,
    },
  }),
  cache,
});
