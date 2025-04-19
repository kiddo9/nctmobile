const nodemailer = require("nodemailer");

const emailConfig = {
  service: process.env.EMAIL_SERVICE,
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};

const transporter = nodemailer.createTransport(emailConfig);
transporter.verify((error: any, success: any) => {
  if (error) {
    console.log("Error in email config", error);
  } else {
    console.log("Email config is working", success);
  }
});
