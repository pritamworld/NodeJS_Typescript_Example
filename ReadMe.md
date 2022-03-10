# Create folder name week09_node_typescript
$ mkdir week09_node_typescript

# Create typescript config file (tsconfig.json)
$ tsc --init

# Create node project (will add package.json)
$ npm init -y

# Create build and src folder
- update tsconfig.json file with following entry
   `
   "outDir": "./build"
    "rootDir": "./src"
    `

# Create index.ts into src folder
Write console.log("Message")

# Run below command on terminal to compline to js
$ tsc

# Run below command on terminal
$ node ./build/index.js

# Install 3rd party node modules
$ npm install --save-dev nodemon concurrently

# add following to script tag
    `
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
    `
# Run below command on terminal
$ npm start
