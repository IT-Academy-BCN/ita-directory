const { transporter, mailOptions } = require('../utils/transporterEmail')
const { apiResponse } = require('../utils/utils')

const contactController = async (req, res) => {
  const { email } = req.body

  mailOptions.to = email
  mailOptions.html = process.env.NODEMAILER_MESSAGECONTACT

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).json(
        apiResponse({
          message: 'Error sending email.',
          errors: error.message,
          status: 500,
        })
      )
    } else {
      res.status(200).json(
        apiResponse({
          message: 'Email sent',
          data: info.messageId,
          status: 200,
        })
      )
    }
  })
}

module.exports = {
  contactController,
}
