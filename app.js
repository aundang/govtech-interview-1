const getAllFiles = require('./getallfiles');
const processFile = require('./processfile');

const rootDir = './';

/**
 * Main program
 */
getAllFiles(rootDir).forEach(async filename => {
  const path = await processFile(filename);
  if (path) console.log(path);
});
