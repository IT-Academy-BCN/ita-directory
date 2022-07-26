const validate = (schema) => (req, res, next) => {
  try {
    const data = { ...req.body, ...req.params, ...req.query, id: req.userId }
    schema.parse(data)
    next()
  } catch (err) {
    res.status(400).json({ message: 'Zod validation error', errors: err.errors })
  }
}

module.exports = validate
