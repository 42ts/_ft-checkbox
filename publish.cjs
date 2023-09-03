/* eslint-disable */

const fs = require('fs');

const {
  name,
  version,
  description,
  files,
  types,
  main,
  author,
  repository,
  license,
  peerDependencies,
  dependencies,
} = JSON.parse(fs.readFileSync('./package.json').toString());

fs.writeFileSync(
  './dist/package.json',
  JSON.stringify({
    name,
    version,
    description,
    files,
    types,
    main,
    author,
    repository,
    license,
    peerDependencies,
    dependencies,
  })
);
