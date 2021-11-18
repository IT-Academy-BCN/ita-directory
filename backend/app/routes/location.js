const authenticateToken = require("../middleware/verifyToken");
const locationController = require("../controllers/location");
const router = require("express").Router();


/**
 * GET /location/v1/region
 * @summary Gets the region starting from a searched location.
 * @tags Location
 * @return {object} 200 - Success response - application/json
 * @example request - Correct location payload
 * {"name": "montcada"}
 * @example response - 200 - Example success response
 * {
    "message": "Location fetched",
    "data": [
        {
            "id": 1069,
            "name": "Montcada I Reixac",
            "parent_id": 28,
            "level_type_id": 4
        },
        {
            "id": 10,
            "name": "Cataluña",
            "parent_id": 1,
            "level_type_id": 2
        }
    ]
}
 */

router.get("/v1/region", locationController.getRegion);


module.exports = router;
