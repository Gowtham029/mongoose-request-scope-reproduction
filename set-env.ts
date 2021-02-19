
const fsDev = require('fs')
const writeFileDev = fsDev.writeFile;
const targetPathDev = 'config/default.yml';
const colorsDev = require('colors');
require('dotenv').config();

const envConfigFileDev = `
server:
  href: '${process.env.currentURI_href}'
  origin: '${process.env.currentURI_origin}'
  protocol: '${process.env.currentURI_protocol}'
  host: '${process.env.currentURI_host}'
  hostname: '${process.env.currentURI_hostname}'
  port: '${process.env.currentURI_port}'
  pathname: '${process.env.currentURI_pathname}'
  search: '${process.env.currentURI_search}'
  hash: '${process.env.currentURI_hash}'
db:
  type: 'mongodb'
  name: 'localhost'
  port: 27017
  database: 'test'
  mongoURI: '${process.env.currentURI_mongoURI}'
jwt:
  expiresIn: 3600
  secret: 'somesecret'
`;

console.log(colorsDev.magenta('The file `default.yml` will be written with the following content: \n'));
console.log(colorsDev.grey(envConfigFileDev));
writeFileDev(targetPathDev, envConfigFileDev, function (err) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(colorsDev.magenta(`NestJS default.yml file generated correctly at ${targetPathDev} \n`));
   }
});