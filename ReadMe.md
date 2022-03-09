# Create typescript config file (tsconfig.json)
$ tsc --init

# Create node project
$ npm init -y

# Create build and src folder
- update tsconfig.json file with following entry
   `
   "outDir": "./build"
    "rootDir": "./src"
    `

# Create index.js into src folder
Write console.log("Message")

# Run below command on terminal to compline to js
$ tsc

# Run below command on terminal
$ node ./build/index.js

# Install 3rd party node modules
$ npm install --save-dev nodemon concurrently

# Run below command on terminal
$ npm start
