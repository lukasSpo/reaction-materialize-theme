Package.describe({
  name: 'luki21213:reaction-materialize-theme',
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
  api.versionsFrom('1.0.4.2');
  api.use('reactioncommerce:core@0.5.6');
  api.imply('reactioncommerce:core');
  api.use('templating');
  api.addFiles('reaction-materialize-theme.js');
  api.addFiles(['client/layout/header/header.html','client/layout/header/header.js'],'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('luki21213:reaction-materialize-theme');
  api.addFiles('reaction-materialize-theme-tests.js');
});
