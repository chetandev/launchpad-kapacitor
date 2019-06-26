const webhookUri = "https://hooks.slack.com/services/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";
var rp = require('request-promise');


async function send(obj) {

    var options = {
            method: 'POST',
            uri: obj.webhook_url,
            simple: true,
            rejectUnauthorized: false,
            json: true,
            body: "{
            "attachments": [{
                "fallback": "Required plain-text summary of the attachment.",
                "color": obj.color,

                "author_name": "Launchpad-Kapacitor",
                //"author_link": "http://flickr.com/bobby/",
                //"author_icon": "http://flickr.com/icons/bobby.jpg",
                "title": obj.message,
                "title_link": obj.link,
                //"text": "Optional text that appears within the attachment",
                "fields": [{
                    "title": "Priority",
                    "value": obj.priority,
                    "short": false
                }],
                //"image_url": "http://my-website.com/path/to/image.jpg",
                //"thumb_url": "http://example.com/path/to/thumb.png",
                //"footer": "Slack API",
                //"footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
                //"ts": 123456789
            }],
            "channel": obj.channel
            "username": "bot"
        },
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
};
return rp(options)
}



module.exports = { send: send }