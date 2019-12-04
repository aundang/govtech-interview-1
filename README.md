## To run the code

```
npm start
```

## Sample Output:

```
/path/to/your/govtech-interview-1/node_modules/argparse/lib/help/formatter.js
/path/to/your/govtech-interview-1/node_modules/camelcase/index.js
/path/to/your/govtech-interview-1/node_modules/camelcase/index.d.ts
/path/to/your/govtech-interview-1/node_modules/chai/CONTRIBUTING.md
/path/to/your/govtech-interview-1/node_modules/chai/History.md
/path/to/your/govtech-interview-1/node_modules/chai/README.md
/path/to/your/govtech-interview-1/node_modules/chai/package.json
/path/to/your/govtech-interview-1/node_modules/chai/sauce.browsers.js
/path/to/your/govtech-interview-1/node_modules/debug/dist/debug.js
/path/to/your/govtech-interview-1/node_modules/debug/src/browser.js
/path/to/your/govtech-interview-1/node_modules/es-abstract/es2015.js
/path/to/your/govtech-interview-1/node_modules/glob/common.js
/path/to/your/govtech-interview-1/node_modules/he/he.js
/path/to/your/govtech-interview-1/node_modules/js-yaml/dist/js-yaml.js
/path/to/your/govtech-interview-1/node_modules/js-yaml/lib/js-yaml/loader.js
/path/to/your/govtech-interview-1/node_modules/js-yaml/lib/js-yaml/type.js
/path/to/your/govtech-interview-1/node_modules/minimatch/minimatch.js
/path/to/your/govtech-interview-1/node_modules/mocha/lib/cli/run-helpers.js
/path/to/your/govtech-interview-1/node_modules/mocha/lib/reporters/html.js
/path/to/your/govtech-interview-1/node_modules/mocha/lib/suite.js
/path/to/your/govtech-interview-1/node_modules/mocha/lib/utils.js
/path/to/your/govtech-interview-1/node_modules/object-inspect/.eslintrc
/path/to/your/govtech-interview-1/node_modules/p-try/index.d.ts
/path/to/your/govtech-interview-1/node_modules/p-try/index.js
/path/to/your/govtech-interview-1/node_modules/pathval/package.json
/path/to/your/govtech-interview-1/node_modules/yargs/lib/argsert.js
/path/to/your/govtech-interview-1/node_modules/yargs/lib/usage.js
/path/to/your/govtech-interview-1/node_modules/yargs/lib/validation.js
/path/to/your/govtech-interview-1/node_modules/yargs/yargs.js
/path/to/your/govtech-interview-1/processFile.js
/path/to/your/govtech-interview-1/somedir1/somemodule/somefiles.js
/path/to/your/govtech-interview-1/somedir1/somemodule/someotherfiles.js
/path/to/your/govtech-interview-1/somedir2/anotherdir/index.js
/path/to/your/govtech-interview-1/somedir2/anotherdir/yet_another_dir/index.js
/path/to/your/govtech-interview-1/somedir2/index.js
/path/to/your/govtech-interview-1/somedir3/another_file.js
/path/to/your/govtech-interview-1/test/appTest.js
/path/to/your/govtech-interview-1/test/withtodo.js
/path/to/your/govtech-interview-1/node_modules/mocha/mocha.js
/path/to/your/govtech-interview-1/node_modules/yargs/CHANGELOG.md
```

## To run unit test

```
npm test
```

## test folder structor

```
/path/to/your/dir
  - somedir
    - dummy.js
    - withtodo.js
  - apptest.js
  - dummy.js
  - withtodo.js
```

## Sample Output:

```
  check if there are 4 files in the directory
    ✓ getAllFiles method should return array of files

  check if file "withtodo.js" and "dummy.js" exist in the array
    ✓ getAllFiles method should return array of files

  check if processFile returns the absolute path
    ✓ call processFile to scan the file

  check if file "withtodo.js" contain "TODO"
    ✓ call processFile to scan the file

  check if file "dummy.js" does not contain "TODO"
    ✓ call processFile to scan the file


  5 passing (10ms)
```
