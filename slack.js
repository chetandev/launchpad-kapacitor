var Slack = require('slack-node');
webhookUri = "https://hooks.slack.com/services/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";
var rp = require('request-promise');


// async function send(body) {

//     params = body.message.split('|')

//     return slack.webhook({
//         channel: params[5],
//         username: "bot",
//         icon_emoji: ":heavy_exclamation_mark:",
//         text: `[${params[0]}] Alarm ${params[1]}-${params[2]} is ${params[0]} with metric ${params[3].toUpperCase()} value is ${params[4]}`
//     }, function(err, response) {
//         if (err) {
//             console.log(err)
//             throw err
//         }

//         return response


//     });
// }


async function send(body) {

    var options = {
        method: 'POST',
        uri: webhookUri,
        simple: true,
        rejectUnauthorized: false,
        body: {
            "attachments": [{
                "fallback": "Required plain-text summary of the attachment.",
                "color": "#36a64f",
                "pretext": "Optional text that appears above the attachment block",
                "author_name": "Bobby Tables",
                "author_link": "http://flickr.com/bobby/",
                "author_icon": "http://flickr.com/icons/bobby.jpg",
                "title": "Slack API Documentation",
                "title_link": "https://api.slack.com/",
                "text": "Optional text that appears within the attachment",
                "fields": [{
                    "title": "Priority",
                    "value": "High",
                    "short": false
                }],
                "image_url": "http://my-website.com/path/to/image.jpg",
                "thumb_url": "http://example.com/path/to/thumb.png",
                "footer": "Slack API",
                "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
                "ts": 123456789
            }],
            "channel": params[5]
        },
        json: true,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    };
    return rp(options)
}




module.exports = { send: send }