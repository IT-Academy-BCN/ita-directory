const nodemailer = require("nodemailer");
const mensaje = require("../utils/messagEmail");

const contactController = async (req, res) => {
	const {name, email, text} = req.body;

	let transporter = await nodemailer.createTransport({
		host: process.env.NODEMAILER_HOST,
		port: 587,
		secure: false,
		auth: {
			user: process.env.NODEMAILER_USER,
			pass: process.env.NODEMAILER_PASS,
		},
	});

	let mailOptions = {
		from: process.env.NODEMAILER_FROM,
		to: email,
		subject: process.env.NODEMAILER_SUBJECT,
		text: mensaje,
	};

	await transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			res.status(500).json(error.message);
		} else {
			//console.log("email enviado.");
			res.status(200).json({
				id: info.messageId,
				msg: "Email sent",
			});
		}
	});
};

module.exports = {
	contactController,
};
