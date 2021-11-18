const authenticateToken = require("../middleware/verifyToken");
const locationController = require("../controllers/location");
const router = require("express").Router();


/**
 * GET /location/v1/region
 * @summary Cascade gets all the parents starting from a searched location.
 * @tags Location
 * @return {object} 200 - Success response - application/json
 * @example request - Correct location payload
 * { "name": "barcelona" }
 * @example response - 200 - Example success response
 * {
    "message": "Location fetched",
    "data": [
        {
            "id": 955,
            "name": "Barcelona",
            "parent_id": 28,
            "level_type_id": 4
        },
        {
            "id": 28,
            "name": "Barcelona",
            "parent_id": 10,
            "level_type_id": 3
        },
        {
            "id": 10,
            "name": "Cataluña",
            "parent_id": 1,
            "level_type_id": 2
        },
        {
            "id": 1,
            "name": "España",
            "parent_id": null,
            "level_type_id": 1
        }
    ]
}
 */

router.get("/v1/region", locationController.getRegion);


module.exports = router;
