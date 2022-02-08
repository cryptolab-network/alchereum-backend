require('dotenv').config();
const Web3 = require('web3');

// contract details
const provider = process.env.WEB3_PROVIDER;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(provider)

async function sign(sender) {
  // Message to sign : contract address + address to give access
  const encoded = web3.utils.encodePacked(process.env.ETH_CONTRACT_ADDRESS, sender);
  console.log(encoded);
  var message = web3.utils.keccak256(encoded);
  // Signing message (with "\x19Ethereum Signed Message:\n32" as prefix by default)
  const data = await web3.eth.accounts.sign(message, process.env.ETH_PRIVATE_KEY);
  return data;
}

module.exports = {
 sign: sign
}
