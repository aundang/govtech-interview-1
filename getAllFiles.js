const fs = require('fs');
const path = require('path');

/**
 * This function recursively returns all files from a given root directory and its subdirectories
 *
 * @param {string}  rootDir Root of the directory
 * @param {string}  arrayOfFilenames array container for the recursive call
 * @return {type} Returns array of files
 */
const getAllFiles = (rootDir, arrayOfFilenames) => {
  let files = fs.readdirSync(rootDir);

  arrayOfFilenames = arrayOfFilenames || [];

  files.forEach(file => {
    if (fs.statSync(rootDir + '/' + file).isDirectory()) {
      arrayOfFilenames = getAllFiles(rootDir + '/' + file, arrayOfFilenames);
    } else {
      arrayOfFilenames.push(path.join(__dirname, rootDir, '/', file));
    }
  });

  return arrayOfFilenames;
};

module.exports = getAllFiles;
