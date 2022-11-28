const { z } = require('zod')

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  text: z.string().min(1),
})

module.exports = ContactSchema
