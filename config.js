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

collection('ProgramInstanceCollection')
    .action('killProgramInstance')
     .param('id','String', 'Program instance id')

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
  .field('types','[Type]')
  .field('imports','[SchemaImport]')

schema.type('Type')
  .computed('self', 'Type*')
  .field('name','String')
  .field('description','String')
  .field('fields','[Field]')
  .field('computedFields','[ComputedField]')
  .field('actions','[Action]')
  .field('events','[Event]')

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

schema.type('Field')
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
  .field('params','[Param]')
  .field('type','String')
  .field('ofType','OfType')

schema.type('Event')
  .field('name','String')
  .field('description','String')
  .field('params','[Param]')
  .field('type','String')
  .field('ofType','OfType')

schema.type('SchemaImport')
  .computed('self', 'SchemaImport*')
  .field('id','String')
  .field('name','String')
  .field('type','[Type]')

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
  .field('environment','[ProgramInstanceEnvironmentVariable]')
  .field('dependencies','[ProgramInstanceDependency]')
  .field('endpoints','[ProgramInstanceEndpoint]')

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
