"use strict";
require("dotenv").config();
const nodemailer = require("nodemailer");
const emailConfig = {
    service: process.env.EMAIL_SERVICE,
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
};
const transporter = nodemailer.createTransport(emailConfig);
transporter.verify((error, success) => {
    if (error) {
        console.log("Error in email config", error);
    }
    else {
        console.log("Email config is working", success);
    }
});
module.exports = transporter;
