// TODO: everything, waiting for a graphql-client library
import { client } from './client';
import 'cross-fetch/polyfill';

const { root } = program.refs;

export async function init() {
  await root.set({
    programs: {},
    //programInstances: {},
  });
}

export const ProgramCollection = {
  async one({ args }) {},
  async items() {
    const query = `
    query {
      allPrograms {
        id
        name
      }
    }
  `;
    const result = await client.request(query);
    console.log(result);
  },
};

export const Program = {
  async self() {},
};
