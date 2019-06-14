const webhookUri = "https://hooks.slack.com/services/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";
var rp = require('request-promise');


async function send(body) {

    var params = body.message.split('|')
    var message = `[${params[0]}] Alarm ${params[1]}-${params[2]} is ${params[0]} with metric ${params[3].toUpperCase()} value is ${params[4]}`
    var color = params[0]=="CRITICAL"?"#FF0000":"#36a64f"
    var priority = params[0]=="CRITICAL"?"High":"Normal"


    var options = {
        method: 'POST',
        uri: params[6],
        simple: true,
        rejectUnauthorized: false,
        body: {
            "attachments": [{
                "fallback": "Required plain-text summary of the attachment.",
                "color": color,
               
                "author_name": "Launchpad-Kapacitor",
                //"author_link": "http://flickr.com/bobby/",
                //"author_icon": "http://flickr.com/icons/bobby.jpg",
                "title": message,
                //"title_link": "https://api.slack.com/",
                //"text": "Optional text that appears within the attachment",
                "fields": [{
                    "title": "Priority",
                    "value": priority,
                    "short": false
                }],
                //"image_url": "http://my-website.com/path/to/image.jpg",
                //"thumb_url": "http://example.com/path/to/thumb.png",
                //"footer": "Slack API",
                //"footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
                //"ts": 123456789
            }],
            "channel": params[5]
        },
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    };
    return rp(options)
}

//'CRITICAL|TEST1|IAM|cpu|99.80|#kapacitor|webhookurl|dev440@gmail.com'


module.exports = { send: send }