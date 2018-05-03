import * as client from './client';

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
    return client.listPrograms();
  },
};

export const Program = {
  async self({ source }) {
    return root.programs.one({ id: source.id });
  },

  async latestVersion({ source }) {
    return client.getProgramVersion(source.latestVersion.id);
  },
};

export const ProgramVersion = {
  async program({ source }) {
    return client.getProgram(source.programId);
  },
};

export const ProgramInstance = {
  self({ source }) {
    return root.programs.one({ id: source.id });
  },
  async programVersion({ source }) {
    return client.getProgramVersion(source.programVersion.id);
  },
};
