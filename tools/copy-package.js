const fs = require('fs');
var resizable = fs.readFileSync('package.json').toString();
console.log(resizable);
fs.writeFileSync('dist/package.json', resizable);

