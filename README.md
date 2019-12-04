## To run the code

```
npm run start
```

## Sample output:

```
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
npm run test
```

## test folder structure

```
/path/to/your/dir
  - somedir
    - dummy.js
    - withtodo.js
  - apptest.js
  - dummy.js
  - withtodo.js
```

## Sample output:

```
  check if there are 6 files in the directory
    ✓ get all files in the directory and check

  check if file "withtodo.js" and "dummy.js" exist in the array
    ✓ get all files in the directory and check

  check if files inside sub-directories contains "TODO"
    ✓ get all files in the directory and check

  check if processFile returns the absolute path
    ✓ call processFile to check the file

  check if file "withtodo.js" contain "TODO"
    ✓ call processFile to check the file

  check if file "dummy.js" does not contain "TODO"
    ✓ call processFile to scan the file


  6 passing (11ms)
```
