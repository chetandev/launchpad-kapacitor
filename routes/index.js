var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("app is working");
});



router.post('/relay', function(req, res, next) {
 console.log(req)
  res.send("app is working");
});





module.exports = router;
