const nodemailer = require("nodemailer");

require('dotenv').config({ path: `./config/config.env` });

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: process.env.USERNAME,
        pass: process.env.APP_PASSWORD,
    },
})

module.exports = transporter;