const constantsController = require("../controllers/constants");
const router = require("express").Router();

router.get("/v1/constants", constantsController.getConstantsRoute);

module.exports = router;
