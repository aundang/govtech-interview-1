const fs = require('fs');
const path = require('path');

/**
 * This function recursively returns all files from a given root directory and its subdirectories
 *
 * @param {string}  rootDir Root of the directory
 * @param {string}  arrayOfFiles array container for the recursive call
 * @return {type} Returns array of files
 */
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
