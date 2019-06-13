var Slack = require('slack-node');
webhookUri = "https://hooks.slack.com/services/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";
slack = new Slack();
slack.setWebhook(webhookUri);


async function send(body) {

	params = body.message.split('|')

    return slack.webhook({
        channel: "#kapacitor-alarm",
        username: "bot",
        icon_emoji: ":ghost:",
        text: `[${params[0]} Alarm ${params[1]}-${params[2]} is ${params[0]} with metric ${params[3]}.toUpperCase() value is ${params[4]}`
    }, function(err, response) {
        if(err){
        	throw err
        }

        return response


    });
}