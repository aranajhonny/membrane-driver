import * as client from './client';

const { root } = program.refs;

export async function init() {
  await root.set({
    programs: {},
    programInstances: {},
  });
}

export const Root = {
  async action({ args }) {
    return client.action(args.ref, args.name, args.args);
  },
  async query({ args }) {
    return client.query(args.ref, args.query);
  },
};

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
    return root.programInstances.one({ id: source.id });
  },
  async programVersion({ source }) {
    return client.getProgramVersion(source.programVersion.id);
  },
  async killProgramInstance({ self }) {
    const { id } = self.match(root.programInstances.one());
    return client.killProgramInstance(id);
  },
};

export const TypeCollection = {
  async one({ args, source }) {
    return source.find(item => item.id === args.id);
  },
  async items({ source }) {
    return source;
  },
};

export const SchemaImportCollection = {
  async one({ args, source }) {
    return source.find(item => item.id === args.id);
  },
  async items({ source }) {
    return source;
  },
};

export const ActionCollection = {
  async one({ args, source }) {
    return source.find(item => item.id === args.id);
  },
  async items({ source }) {
    return source;
  },
};

export const EventCollection = {
  async one({ args, source }) {
    return source.find(item => item.id === args.id);
  },
  async items({ source }) {
    return source;
  },
};

export const FieldCollection = {
  async one({ args, source }) {
    return source.find(item => item.id === args.id);
  },
  async items({ source }) {
    return source;
  },
};

export const ComputedFieldCollection = {
  async one({ args, source }) {
    return source.find(item => item.id === args.id);
  },
  async items({ source }) {
    return source;
  },
};

export const ParamCollection = {
  async one({ args, source }) {
    return source.find(item => item.id === args.id);
  },
  async items({ source }) {
    return source;
  },
};

export const ProgramVersionDependencyCollection = {
  async one({ args, source }) {
    return source.find(item => item.id === args.id);
  },
  async items({ source }) {
    return source;
  },
};

export const ProgramVersionEnvironmentVariableCollection = {
  async one({ args, source }) {
    return source.find(item => item.id === args.id);
  },
  async items({ source }) {
    return source;
  },
};

export const ProgramVersionExpressionCollection = {
  async one({ args, source }) {
    return source.find(item => item.id === args.id);
  },
  async items({ source }) {
    return source;
  },
};

export const ProgramVersionFileCollection = {
  async one({ args, source }) {
    return source.find(item => item.id === args.id);
  },
  async items({ source }) {
    return source;
  },
};
