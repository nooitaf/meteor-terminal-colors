Package.describe({
  summary: "Utilize more terminal colors",
  version: "0.1.4",
  name: "nooitaf:terminal-colors",
  git: "https://github.com/nooitaf/meteor-terminal-colors.git"
});

Npm.depends({
  "terminal-colors": "0.1.4"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.add_files('export.js', 'server');
});
