const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	host: process.env.NODEMAILER_HOST,
	port: process.env.NODEMAILER_PORT,
	secure: false,
	auth: {
		user: process.env.NODEMAILER_USER,
		pass: process.env.NODEMAILER_PASS,
	},
});

const mailOptions = {
	from: process.env.NODEMAILER_FROM,
	to: "",
	subject: process.env.NODEMAILER_SUBJECT,
	html: "",
};

module.exports = {transporter, mailOptions};
