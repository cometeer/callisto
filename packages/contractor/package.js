Package.describe({
  name: 'contractor',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use(['templating'], 'client');
  api.imply(['templating'], 'client');
  api.use('underscore', 'client');
  api.use('iron:router', 'client');
  api.use('jquery', 'client');

  api.addFiles([
    'lib/collections/Contractor.js'
  ], [
    'client',
    'server'
  ]);

  api.addFiles([
    'lib/publications/publications.js'
  ], ['server']);

  api.addFiles('lib/routes/routes.js', 'client');

  api.addFiles([
    'lib/templates/contractorCreate.html',
  ], ['client']);

  api.addFiles([
    'lib/templates/contractorCreate.js',
  ], ['client']);
});

Package.onTest(function(api) {
  api.use('sanjo:jasmine');
  api.addFiles('tests/jasmine/server/unit/contractorSpec.js', 'server');
  api.addFiles('tests/jasmine/client/integration/contractorSpec.js', 'client');
});
