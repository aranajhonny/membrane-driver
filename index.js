import { client } from './client';
const { root } = program.refs;

export async function init() {
  await root.set({
    programs: {},
    programInstances: {},
  });
}

export const ProgramCollection = {
  async one({ args }) {
  },
  async items() {
     const result = await client.query(gql`
    query {
      allPrograms {
        id
        name
        latestVersion { id, hash, dependencies { name description type }, environment { name description type }}
      }
    }
  `);

  console.log(result.allPrograms)
  return result.allPrograms
  },
};

export const Program = {
  async self() {
  },
};
