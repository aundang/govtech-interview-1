const getAllFiles = require('./getallfiles');
const processFile = require('./processfile');

const rootDir = './';

/**
 * Main program
 */
getAllFiles(rootDir).forEach(async filename => {
  const absolutPath = await processFile(filename);
  if (absolutPath) console.log(absolutPath);
});
