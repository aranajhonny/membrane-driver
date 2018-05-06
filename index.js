import * as client from './client';

const { root } = program.refs;

export async function init() {
  await root.set({
    programs: {},
    programInstances: {},
  });
}

export const ProgramCollection = {
  async one({ args }) {
    return client.getProgram(args.id);
  },
  async items() {
    return client.listPrograms();
  },
};

export const ProgramInstanceCollection = {
  async one({ args }) {
    return client.getProgramInstance(args.id);
  },
  async items() {
    return client.allProgramsInstances();
  },
  async killProgramInstance({ args }) {
    return client.killProgramInstance(args.id);
  },
};

export const Program = {
  async self({ source }) {
    return root.programs.one({ id: source.id });
  },

  async latestVersion({ source }) {
    return client.getProgramVersion(source.latestVersion.id);
  },
  async runningInstances({ source }) {
    const instances = await Promise.all(
      source.runningInstances.map(inst => {
        return client.getProgramInstance(inst.id);
      })
    );
    return instances;
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
