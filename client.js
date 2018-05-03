const { TOKEN } = process.env;

const URL = 'http://api.membrane.io/graphql';

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
