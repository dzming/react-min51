var express = require('express');
var router = express.Router();
var {
  connect,
  insert,
  find,
  ObjectId
} = require("../libs/mongo.js");
var token = require("../libs/token.js");
const { verify } = require('../libs/token.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/goods', async (req, res, next) => {
    let {
        
    } = req.body
    let data = await find(`goods`, {})
    res.send(data);
  
  })
 module.exports = router;