const { TOKEN } = process.env;

const URL = 'http://api.membrane.io/graphql';

global.fetch = require('node-fetch').fetch;

import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(URL, {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});
