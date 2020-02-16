/* eslint-disable */
const fs = require('fs');
const path = require('path');
const { merge } = require('lodash');

const packagesDir = path.resolve('packages');

const processPackage = (projectDir) => {
  const writeTsconfig = (base, overrides) => {
    const baseFile = base ? `tsconfig.${base}.json` : 'tsconfig.json';
    const location = path.join(projectDir, baseFile);
    const tsconfig = merge({
      extends: `../../${baseFile}`,
      compilerOptions: {
        baseUrl: '.',
        rootDir: 'src',
        outDir: `./dist/${base}`,
      },
      include: [
        './src',
      ],
    }, overrides);
    const contents = JSON.stringify(tsconfig, null, 2);
    fs.writeFileSync(location, contents, { encoding: 'utf8' });
  };

  writeTsconfig('cjs');
  writeTsconfig('esm');
  writeTsconfig('esm5');
  writeTsconfig(undefined, { compilerOptions: { noEmit: true } });
  writeTsconfig('types', { compilerOptions: { declarationDir: './dist/types' } });
};

for (const project of fs.readdirSync(packagesDir)) {
  console.log(`Processing tsconfig "${project}"...`);
  try {
    const projectDir = path.join(packagesDir, project);
    processPackage(projectDir);
  } catch (error) {
    if (error) {
      console.error(`Failed to process package "${project}":`);
      console.error(error.message);
    }
  }
}