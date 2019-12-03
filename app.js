const getAllFiles = require('./getAllFiles');
const processFile = require('./processFile');

const rootDir = './';

getAllFiles(rootDir).forEach(filename => {
  processFile(filename);
});
