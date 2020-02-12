/* eslint-disable */
const fs = require('fs');
const path = require('path');

const packagesDir = path.resolve('packages');

const processPackage = (projectDir, packageJson) => {
  if (!packageJson.bindings) {
    return;
  }
  if (typeof packageJson.bindings !== 'object') {
    throw new Error('"bindings" is expected to be an object.');
  }
  const {
    baseDistDir,
    baseTypesDir,
    map,
  } = packageJson.bindings;
  if (!baseDistDir || typeof baseDistDir !== 'string') {
    throw new Error('Missing "baseDistDir" string property in "bindings".');
  }
  if (!baseTypesDir || typeof baseTypesDir !== 'string') {
    throw new Error('Missing "baseTypesDir" string property in "bindings".');
  }
  if (!map || typeof map !== 'object') {
    throw new Error('Missing "map" object property in "bindings".');
  }


  for (const [key, target] of Object.entries(map)) {
    const baseKeyDir = path.resolve(path.dirname(key));
    const normalizedBaseTypesDir = path.relative(baseKeyDir, path.resolve(baseTypesDir));
    const normalizedBaseDistDir = path.relative(baseKeyDir, path.resolve(baseDistDir));

    console.log(`${key} -> ${target}`);
    const sourceTypes = path.join(normalizedBaseTypesDir, target);
    const bindingPathTypes = path.join(projectDir, key + '.d.ts');
    const typesTemplate = `export * from '${sourceTypes}';\n`;
    fs.mkdirSync(path.dirname(bindingPathTypes), { recursive: true });
    fs.writeFileSync(bindingPathTypes, typesTemplate, { encoding: 'utf8' });

    const sourceDist = path.join(normalizedBaseDistDir, target);
    const bindingPathDist = path.join(projectDir, key + '.js');
    const distTemplate = `module.exports = require('${sourceDist}');\n`;
    fs.mkdirSync(path.dirname(bindingPathDist), { recursive: true });
    fs.writeFileSync(bindingPathDist, distTemplate, { encoding: 'utf8' });
  }
};

for (const project of fs.readdirSync(packagesDir)) {
  console.log(`Processing package "${project}"...`);
  try {
    const projectDir = path.join(packagesDir, project);
    const packageJson = JSON.parse(fs.readFileSync(path.join(projectDir, 'package.json'), { encoding: 'utf8' }));
    processPackage(projectDir, packageJson);
  } catch (error) {
    if (error) {
      console.error(`Failed to process package "${project}":`);
      console.error(error.message);
    }
  }
}
