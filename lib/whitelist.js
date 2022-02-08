const fs = require('fs');

const data = fs.readFileSync('./config/whitelist.json');
const whitelist = JSON.parse(data);
console.log(whitelist);
async function whitelisted(account) {
  console.log(account, whitelist.indexOf(account));
  return whitelist.indexOf(account) >= 0? true: false;
}

module.exports = {
  whitelisted: whitelisted
 }