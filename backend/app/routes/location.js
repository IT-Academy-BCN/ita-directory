const authenticateToken = require("../middleware/verifyToken");
const locationController = require("../controllers/location");
const router = require("express").Router();

router.get("/v1/region", locationController.getRegion);


module.exports = router;
