const assert = require('chai').assert;
const getAllFiles = require('../getAllFiles');
const processFile = require('../processFile');

describe('check if there are 4 files in the directory', () => {
  it('getAllFiles method should return array of files', () => {
    assert.equal(getAllFiles('./test').length, 4);
  });
});

describe('check files contains "withtodo.js" and "dummy.js"', () => {
  it('getAllFiles method should return array of files', () => {
    const files = getAllFiles('./test');
    let count = 0;
    for (let i = 0; i < files.length; i++) {
      let path = files[i];
      if (path.includes('withtodo.js') || path.includes('dummy.js')) {
        count++;
      }
    }
    assert.equal(count, 2);
  });
});

describe('check if file "withtodo.js" contains "TODO"', () => {
  it('call processFile to scan the file', async () => {
    const path = await processFile('./test/withtodo.js');
    assert.notEqual(path, null);
  });
});

describe('check if file "dummy.js" does not contains "TODO"', () => {
  it('call processFile to scan the file', async () => {
    const path = await processFile('./test/dummy.js');
    assert.equal(path, null);
  });
});
