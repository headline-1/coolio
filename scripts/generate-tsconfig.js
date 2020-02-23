/* eslint-disable */
const fs = require('fs');
const path = require('path');
const { merge } = require('lodash');

const packagesDir = path.resolve('packages');

const processPackage = (projectDir) => {
  const packageName = path.basename(projectDir);
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
  writeTsconfig(undefined, {
    compilerOptions: { noEmit: true },
    typedocOptions: {
      inputFiles: ['./src/index.ts'],
      exclude: ['**/*.spec.ts', '**/spec/*.ts'],
      mode: 'file',
      out: `../../docs/${packageName}/api`,
      readme: 'none',
      theme: 'gitbook',
      excludeNotExported: true,
      excludePrivate: true,
      hideGenerator: true,
      hideSources: true,
    },
  });
  writeTsconfig('types', { compilerOptions: { declarationDir: './dist/types' } });
};

for (const project of fs.readdirSync(packagesDir).filter(dir => !dir.startsWith('.'))) {

  console.log(`Generating tsconfig files for "${project}"...`);
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
