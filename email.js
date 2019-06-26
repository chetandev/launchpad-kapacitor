"use strict";
const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "10.142.240.27",
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "", // generated ethereal user
        pass: "" // generated ethereal password
    }
});

let send = async function(obj) {

    await transporter.sendMail({
        from: '"Launchpad-Kapacitor"<jawsalerts.com>', // sender address
        to: obj.email,
        subject: obj.message, // Subject line
        html: "<a href=link>Click to monitor vm</a>" // html body
    });

}



module.exports = { send: send }