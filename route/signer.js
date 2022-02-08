const signer = require('../lib/signer');
const whitelist = require('../lib/whitelist');
function init(app) {
 const path = '/api'
 
 // endpoint to create token to given address
  app.post(path+'/sign', async (req, res) => {
    console.log(req.body);
    const isInWhitelist = await whitelist.whitelisted(req.body.sender);
    if (isInWhitelist === undefined) {
      res.send({message: ''});
    } else {
      const message = await signer.sign(req.body.sender);
      res.send(message);
    }
  });

  app.get(path+'/whitelisted', async (req, res) => {
    const whitelisted = await whitelist.whitelisted(req.body.account);
    res.send(whitelisted);
  });

}
module.exports = init;