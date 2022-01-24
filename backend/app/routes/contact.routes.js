const router = require("express").Router();
const {contactController} = require("../controllers/contact.controller");

router.post("/v1/contact", contactController);

module.exports = router;
