const { TOKEN } = process.env;

const URL = 'https://membrane.io/api/graphql';

import { GraphQLClient } from '@membrane/graphql-request';

export const client = new GraphQLClient(URL, {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export async function listPrograms() {
  const query = `
          query {
            allPrograms {
              id
              name
              latestVersion {
                id
              }
              runningInstances {
                id
              }
            }
          }
  `;
  const result = await client.request(query);
  return result.allPrograms;
}

export async function getProgram(id) {
  const query = `
          query {
            program(id: "${id}") {
              id
              name
              latestVersion {
                id
              }
              runningInstances {
                id
                alias
                programVersion {
                  id
                }
                status
                environment {
                  name
                  value
                }
                dependencies {
                  name
                  value
                }
                endpoints {
                  id
                  name
                  type
                  url
                  description
                }
              }
            }
          }
  `;
  const result = await client.request(query);
  return result.program;
}

export async function getProgramInstance(id) {
  const query = `
          query {
            programInstance(id: "${id}") {
                id
                alias
                programVersion {
                  id
                }
                status
                environment {
                  name
                  value
                }
                dependencies {
                  name
                  value
                }
                endpoints {
                  id
                  name
                  type
                  url
                  description
                }
            }
          }
        `;
  const result = await client.request(query);
  return result.programInstance;
}

export async function getProgramVersion(id) {
  const query = `
          query {
            programVersion(id: "${id}") {
                id
                hash
                programId
                schema {
                  types {
                    name
                    description
                    fields {
                      name
                      description
                      params {
                        name
                        type
                        ofType {
                          type
                        }
                      }
                      type
                      ofType {
                        type
                      }
                    }
                    computedFields {
                      name
                      description
                      params {
                        name
                        type
                        ofType {
                          type
                        }
                      }
                      type
                      ofType {
                        type
                      }
                    }
                    actions {
                      name
                      description
                      params {
                        name
                        type
                        ofType {
                          type
                        }
                      }
                      type
                      ofType {
                        type
                      }
                    }
                    events {
                      name
                      description
                      params {
                        name
                        type
                        ofType {
                          type
                        }
                      }
                      type
                      ofType {
                        type
                      }
                    }
                  }
                  imports {
                    id
                    name
                    types {
                      name
                      description
                      fields {
                        name
                        description
                        params {
                          name
                          type
                          ofType {
                            type
                          }
                        }
                        type
                        ofType {
                          type
                        }
                      }
                      computedFields {
                        name
                        description
                        params {
                          name
                          type
                          ofType {
                            type
                          }
                        }
                        type
                        ofType {
                          type
                        }
                      }
                      actions {
                        name
                        description
                        params {
                          name
                          type
                          ofType {
                            type
                          }
                        }
                        type
                        ofType {
                          type
                        }
                      }
                      events {
                        name
                        description
                        params {
                          name
                          type
                          ofType {
                            type
                          }
                        }
                        type
                        ofType {
                          type
                        }
                      }
                    }
                  }
                }
                dependencies {
                  description
                  name
                  type
                }
                environment {
                  description
                  name
                  type
                }
                expressions {
                  description
                  name
                  pattern
                }
                files {
                  path
                  content
                }
            }
          }
  `;
  const result = await client.request(query);
  return result.programVersion;
}

export async function allProgramsInstances() {
  const query = `
          query {
            allProgramInstances{
                id
                alias
                programVersion {
                  id
                }
                status
                environment {
                  name
                  value
                }
                dependencies {
                  name
                  value
                }
                endpoints {
                  id
                  name
                  type
                  url
                  description
                }
            }
          }
  `;
  const result = await client.request(query);
  return result.allProgramInstances;
}
export async function killProgramInstance(id) {
  const mutation = `
  mutation {
    killProgramInstance(programInstanceId: "${id}")
  }
  `
  return client.request(mutation)
}

export async function updateProgramInstance(programInstanceId, programVersionId) {
  const mutation = `
  mutation {
    updateProgramInstance(programVersionId: "${programInstanceId}", programVersionId: "${programVersionId}")
  }
  `
  return client.request(mutation)
}

export async function action(ref, name, args) {
  const mutation = `
  mutation {
      action(ref:, "${ref}" name:"${name}", args: "${args}")
  }
  `
  return client.request(mutation)
}

export async function query(ref, query) {
  const mutation = `mutation($ref: String, $query: String) { query(ref:$ref, query:$query) }`

  const variables = { ref, query};

  const result = await client.request(mutation, variables);

  return result.query
}
