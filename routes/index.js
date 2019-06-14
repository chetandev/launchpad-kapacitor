var express = require('express');
var router = express.Router();

var slack = require('../slack')
/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("app is working");
});



router.post('/relay', async function(req, res, next) {

    try {
        body = req.body
        console.log(body)
        var result = await slack.send(body)
        res.send(result);
    } catch (e) {
        res.send(e);
    }

});





module.exports = router;