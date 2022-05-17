module.exports = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body)
    next()
  } catch (err) {
    res.status(400).json({
      msg: err.message,
    })
  }
}
