const getAllFiles = require('./getAllFiles');
const processFile = require('./processFile');

const rootDir = './';

getAllFiles(rootDir).forEach(async filename => {
  const path = await processFile(filename);
  if (path) console.log(path);
});
