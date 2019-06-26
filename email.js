"use strict";
const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.bss.jio.com",
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
        type : "oauth2",
        user: "", // generated ethereal user
        pass: "" // generated ethereal password
    }
});


transporter.verify(function(error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
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