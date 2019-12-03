const assert = require('chai').assert;
const getAllFiles = require('../getAllFiles');

describe('check if there are 3 files in the directory', () => {
  it('getAllFiles method should return array of files', () => {
    assert.equal(getAllFiles('./test').length, 3);
  });
});

describe('check files contains "text.txt" and "appTest.js"', () => {
  it('getAllFiles method should return array of files', () => {
    const files = getAllFiles('./test');
    let count = 0;
    for (let i = 0; i < files.length; i++) {
      let path = files[i];
      if (path.includes('text.txt') || path.includes('appTest.js')) {
        count++;
      }
    }
    assert.equal(count, 2);
  });
});
