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
        //'CRITICAL|TEST1|IAM|cpu|99.80|#kapacitor|webhookurl|dev440@gmail.com,saket@gmail.com|serverid|domain'
        console.log(body)
        var params = body.message.split('|')
        var message = `[${params[0]}] Alarm ${params[1]}-${params[2]} is ${params[0]} with metric ${params[3].toUpperCase()} value is ${params[4]}`
        var webhookUrl = params[6]
        var emailList = params[7]
        var serverId = params[8]
        var link = params[9]
        var color = params[0] == "CRITICAL" ? "#FF0000" : "#36a64f"
        var priority = params[0] == "CRITICAL" ? "High" : "Normal"

        var result = await slack.send({
            "webhook_url": webhookUrl,
            "message": message,
            "color": color,
            "priority": priority,
            "channel": channel,
            "link": link
        })
        var result = await email.send({
            "email": emailList,
            "message": message,
            "color": color,
            "priority": priority,
            "link": link
        })
        console.log(result)
        res.send(result);

    } catch (e) {
        console.log(e)
        res.send(e);
    }

});



module.exports = router;