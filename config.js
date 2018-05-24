const { schema, imports, dependencies, environment, expressions, endpoints } = program;

function collection(type) {
  const collection = schema.type(type + 'Collection')
    .computed('one', type)
      .param('id', 'String')
    .computed('items', `[${type}]`)

  return collection
}

environment
  .add('TOKEN', 'The API TOKEN')

schema.type('Root')
  .field('programInstances', 'ProgramInstanceCollection')
  .field('programs', 'ProgramCollection')
  .action('action')
    .param('ref', 'String')
    .param('name', 'String')
    .param('args', 'String')
  .action('query')
    .param('ref', 'String')
    .param('query', 'String')

collection('ProgramInstance')

collection('Program')

schema.type('Program')
  .computed('self', 'Program*')
  .field('id', 'String')
  .field('name', 'String')
  .computed('latestVersion', 'ProgramVersion')
  .computed('runningInstances', '[ProgramInstance]')

schema.type('ProgramVersion')
  .field('id','String')
  .field('hash','String')
  .field('programId','String')
  .computed('program','Program')
  .field('schema','Schema')
  .field('dependencies','[ProgramVersionDependency]')
  .field('environment','[ProgramVersionEnvironmentVariable]')
  .field('expressions','[ProgramVersionExpression]')
  .field('files','[ProgramVersionFile]')

schema.type('Schema')
  .field('types','TypeCollection')
  .field('imports','SchemaImportCollection')

schema.type('Type')
  .computed('self', 'Type*')
  .field('name','String')
  .field('description','String')
  .field('fields','FieldCollection')
  .field('computedFields','ComputedFieldCollection')
  .field('actions','ActionCollection')
  .field('events','EventCollection')

schema.type('Field')
  .field('name','String')
  .field('description','String')
  .field('params','[Param]')
  .field('type','String')
  .field('ofType','OfType')

schema.type('Param')
  .computed('self', 'Param*')
  .field('name','String')
  .field('type','String')
  .field('ofType','OfType')

schema.type('OfType')
  .field('type','String')
  .field('ofType','OfType')

schema.type('ComputedField')
  .field('name','String')
  .field('description','String')
  .field('params','[Param]')
  .field('type','String')
  .field('ofType','OfType')

schema.type('Action')
  .field('name','String')
  .field('description','String')
  .field('params','ParamCollection')
  .field('type','String')
  .field('ofType','OfType')

schema.type('Event')
  .field('name','String')
  .field('description','String')
  .field('params','ParamCollection')
  .field('type','String')
  .field('ofType','OfType')

schema.type('SchemaImport')
  .computed('self', 'SchemaImport*')
  .field('id','String')
  .field('name','String')
  .field('type','TypeCollection')

schema.type('ProgramVersionDependency')
  .computed('self', 'ProgramVersionDependency*')
  .field('name','String')
  .field('description','String')
  .field('type','String')

schema.type('ProgramVersionEnvironmentVariable')
  .computed('self', 'ProgramVersionEnvironmentVariable*')
  .field('name','String')
  .field('description','String')
  .field('type','String')

schema.type('ProgramVersionExpression')
  .computed('self', 'ProgramVersionExpression*')
  .field('name','String')
  .field('description','String')
  .field('pattern','String')

schema.type('ProgramVersionFile')
  .computed('self', 'ProgramVersionFile*')
  .field('path','String')
  .field('content','String')

schema.type('ProgramInstance')
  .computed('self', 'ProgramInstance*')
  .field('id','String')
  .field('alias','String')
  .computed('programVersion','ProgramVersion')
  .field('status','String')
  .field('environment','ProgramInstanceEnvironmentVariableCollection')
  .field('dependencies','ProgramInstanceDependencyCollection')
  .field('endpoints','ProgramInstanceEndpointCollection')
  .action('kill')
  .action('update')

schema.type('ProgramInstanceEnvironmentVariable')
  .computed('self', 'ProgramInstanceEnvironmentVariable*')
  .field('name','String')
  .field('value','String')

schema.type('ProgramInstanceDependency')
  .computed('self', 'ProgramInstanceDependency*')
  .field('name','String')
  .field('value','String')

schema.type('ProgramInstanceEndpoint')
  .computed('self', 'ProgramInstanceEndpoint*')
  .field('id','String')
  .field('name','String')
  .field('type','String')
  .field('url','String')
  .field('description','String')

collection('Type')

collection('SchemaImport')

collection('Action')

collection('Event')

collection('Field')

collection('ComputedField')

collection('Param')

collection('ProgramVersionDependency')

collection('ProgramVersionEnvironmentVariable')

collection('ProgramVersionExpression')

collection('ProgramVersionFile')

collection('ProgramInstanceEnvironmentVariable')

collection('ProgramInstanceDependency')

collection('ProgramInstanceEndpoint')
