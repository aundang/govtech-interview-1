const fs = require('fs');
const path = require('path');

const getAllFiles = (rootDir, arrayOfFiles) => {
  let files = fs.readdirSync(rootDir);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(file => {
    if (fs.statSync(rootDir + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(rootDir + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, rootDir, '/', file));
    }
  });

  return arrayOfFiles;
};

module.exports = getAllFiles;
