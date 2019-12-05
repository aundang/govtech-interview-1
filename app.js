const getAllFiles = require('./getallfiles');
const processFile = require('./processfile');

const rootDir = './';

/**
 * Main program
 */
getAllFiles(rootDir).forEach(async filename => {
  const absolutePath = await processFile(filename);
  if (absolutePath) console.log(absolutePath);
});
