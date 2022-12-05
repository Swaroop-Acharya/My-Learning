// Three types of modules in nodejs:- Built-in , Userdefined, ThirdParty modules
// Using NPM we can install third party modules
// Demonstration of Fs modules
const fs=require("fs");
let text=fs.readFileSync("data.txt","utf-8");
console.log(text);

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(text);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


text=text.replace("swaroop","shrivatsa");
fs.writeFileSync("data.txt","text");
