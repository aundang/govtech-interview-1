const fs = require('fs');
const readline = require('readline');
const resolve = require('path').resolve;

const processFile = async filename => {
  const fileStream = fs.createReadStream(filename);
  const rl = readline.createInterface({
    input: fileStream
  });

  for await (const line of rl) {
    let strLine = line.toUpperCase();
    if (strLine.includes('TODO')) {
      console.log(resolve(filename));
      break;
    }
  }
};

module.exports = processFile;
