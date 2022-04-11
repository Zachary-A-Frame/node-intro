const fs = require('fs')
const process = require('process')

function cat(path) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.error(`Error reading ${path}: ${err}`);
            process.exit(1)
        } else {
            console.log(data)
        }
    })
}

cat(process.argv[2])

// Do this in command line
// node step1.js one.txt
// ^^^ Will return "This is file one."
// node step1.js two.txt
// ^^^ Will return "no such file or directory open"