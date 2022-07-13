const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body, req.params, req.query)
    next()
  } catch (err) {
    res.status(400).json({ message: 'Zod validation error', errors: err.errors })
  }
}

module.exports = validate
