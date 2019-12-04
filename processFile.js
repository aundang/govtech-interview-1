const fs = require('fs');
const readline = require('readline');
const resolve = require('path').resolve;

const processFile = async filename => {
  const fileStream = fs.createReadStream(filename);
  const rl = readline.createInterface({
    input: fileStream
  });

  const absolutePath = await fileScan(rl, filename);

  return absolutePath;
};

const fileScan = async (rl, filename) => {
  let path = null;
  for await (const line of rl) {
    let strLine = line.toUpperCase();
    if (strLine.includes('TODO')) {
      path = resolve(filename);
      break;
    }
  }
  return path;
};

module.exports = processFile;
