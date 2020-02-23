/* eslint-disable */
const fs = require('fs');
const path = require('path');

const regex = /^( *)\* \[(.+)]\((.*)\)$/;

const createSummaryCollection = lines => lines
  .map(line => line.match(regex))
  .filter(Boolean)
  .map(([, whitespace, name, path]) => ({
    indentation: whitespace.length,
    name,
    path,
  }));

const createSummaryLinesFromCollection = (
  summaryCollection,
  prefix = '',
  globalIndentation = 0,
) => summaryCollection.map(({ indentation, name, path }) => {
  const whitespace = ' '.repeat(globalIndentation + indentation);
  const linePath = path ? prefix + path : '';
  return `${whitespace}* [${name}](${linePath})`;
});

const getNestedRangeForPhrase = (lines, phrase) => {
  const phraseIndex = lines.findIndex(line => line.includes(phrase));

  if (phraseIndex < 0) {
    throw new Error(`Phrase "${phrase}" not found in document.`);
  }

  const getIndentation = lineIndex => lines[lineIndex].match(/^ */)[0].length;

  const baseIndentation = getIndentation(phraseIndex);
  let end = phraseIndex + 1;
  for (; end < summary.length; end++) {
    if (getIndentation(end) <= baseIndentation) {
      break;
    }
  }
  return {
    start: phraseIndex + 1,
    end,
    baseIndentation,
  };
};

const processApiDocs = (summary, packageName) => {
  const summaryPath = path.join('docs', packageName, 'api/SUMMARY.md');
  const packageSummary = fs.readFileSync(summaryPath, { encoding: 'utf8' })
    .split('\n');

  const summaryCollection = createSummaryCollection(packageSummary);

  const rootApiEntry = `[API](${packageName}/api/README.md)`;
  const { start, end, baseIndentation } = getNestedRangeForPhrase(summary, rootApiEntry);

  // Remove all children of found summary node and insert new summary at the same position
  summary.splice(
    start,
    end - start - 1,
    ...createSummaryLinesFromCollection(
      summaryCollection,
      `${packageName}/api/`,
      baseIndentation + 2,
    ),
  );
};

const packagesDir = path.resolve('packages');
const summaryPath = 'docs/SUMMARY.md';

const summary = fs.readFileSync(summaryPath, { encoding: 'utf8' }).split('\n');
for (const project of fs.readdirSync(packagesDir).filter(dir => !dir.startsWith('.'))) {
  console.log(`Processing docs for "${project}"...`);

  try {
    processApiDocs(summary, project);
  } catch (error) {
    if (error) {
      console.error(`Failed to process docs for "${project}":`);
      console.error(error.message);
    }
  }
}

console.log('Writing updated SUMMARY.md with all API docs combined...');
fs.writeFileSync(summaryPath, summary.join('\n'), { encoding: 'utf8' });
