const assert = require('chai').assert;
const getAllFiles = require('../getallfiles');
const processFile = require('../processfile');

describe('check if there are 6 files in the directory', () => {
  it('get all files in the directory and check', () => {
    assert.equal(getAllFiles('./test').length, 6);
  });
});

describe('check if file "withtodo.js" and "dummy.js" exist in the array', () => {
  it('get all files in the directory and check', () => {
    const files = getAllFiles('./test');
    let count = 0;
    for (let i = 0; i < files.length; i++) {
      let path = files[i];
      if (path.includes('withtodo.js') || path.includes('dummy.js')) {
        count++;
      }
    }
    assert.equal(count, 4);
  });
});

describe('check if files inside sub-directories contains "TODO"', () => {
  it('get all files in the directory and check', () => {
    const files = getAllFiles('./test');
    let found = false;
    for (let i = 0; i < files.length; i++) {
      let path = files[i];
      if (path.includes('somedir/withtodo.js')) {
        found = true;
        break;
      }
    }
    assert.isTrue(found);
  });
});

describe('check if processFile returns the absolute path', () => {
  it('call processFile to check the file', async () => {
    const path = await processFile('./test/withtodo.js');
    assert.isTrue(path.includes('/'));
  });
});

describe('check if file "withtodo.js" contain "TODO"', () => {
  it('call processFile to check the file', async () => {
    const path = await processFile('./test/withtodo.js');
    assert.notEqual(path, null);
  });
});

describe('check if file "dummy.js" does not contain "TODO"', () => {
  it('call processFile to scan the file', async () => {
    const path = await processFile('./test/dummy.js');
    assert.equal(path, null);
  });
});
