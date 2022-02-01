const {transporter, mailOptions} = require("../utils/transporterEmail");

const contactController = async (req, res) => {
	const {email} = req.body;

	mailOptions.to = email;
	mailOptions.html = process.env.NODEMAILER_MESSAGECONTACT;

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
