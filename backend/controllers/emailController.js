require("dotenv").config();
const nodemailer = require("nodemailer");

exports.sendEmail = sendEmail;

function sendEmail(req, res, next) {
    try {
        _send(req)
            .then((resolve) => {
                res.send({ message: "Sent", success: true });
            })
            .catch((err) => {
                res.send({ message: "Error", err: err, success: false });
            });
    } catch (error) {
        res.send({ message: "Error catch", err: error, success: false });
    }
}

function _getTransporter() {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_EMAIL_HOST,
        port: process.env.SMTP_EMAIL_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_EMAIL_USER,
            pass: process.env.SMTP_EMAIL_PASS,
        },
    });
    return transporter;
}

async function _send(req) {
    const transporter = _getTransporter();
    const info = await transporter.sendMail({
        from: '"Portfolio Contact 👻 <Portfolio@gmail.com>"',
        to: process.env.SMTP_EMAIL_USER,
        subject: "Portfolio Message",
        html:
            "<h1>From : " +
            req.body.name +
            " / " +
            req.body.email +
            "</h1>" +
            "<p>Message : " +
            req.body.message +
            " </p>",
    });
}
