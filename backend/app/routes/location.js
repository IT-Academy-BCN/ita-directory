const authenticateToken = require("../middleware/verifyToken");
const locationController = require("../controllers/location");
const router = require("express").Router();


/**
 * GET /location/v1/region/:name
 * @summary Gets the region starting from a searched location.
 * @tags Location
 * @return {object} 200 - Success response - application/json
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

router.get("/v1/region/:name", locationController.getRegion);


/**
 * GET /location/v1/relative/:name
 * @summary Gets a searched location's parent and children.
 * @tags Location
 * @return {object} 200 - Success response - application/json
 * @example response - 200 - Example success response
 * {
    "message": "Location fetched",
    "data": [
        {
            "id": 28,
            "name": "Barcelona",
            "parent_id": 10,
            "level_type_id": 3,
            "parent": [
                {
                    "id": 10,
                    "name": "Cataluña",
                    "parent_id": 1,
                    "level_type_id": 2
                }
            ],
            "children": [
                {
                    "id": 935,
                    "name": "Abrera",
                    "parent_id": 28,
                    "level_type_id": 4
                },
                {
                    "id": 100000000,
                    "name": "and many more towns",
                    "parent_id": 28,
                    "level_type_id": 4
                }
            ]
        },
        {
            "id": 955,
            "name": "Barcelona",
            "parent_id": 28,
            "level_type_id": 4,
            "parent": [
                {
                    "id": 28,
                    "name": "Barcelona",
                    "parent_id": 10,
                    "level_type_id": 3
                }
            ],
            "children": [
                {
                    "id": 8214,
                    "name": "Eixample",
                    "parent_id": 955,
                    "level_type_id": 5
                },
                {
                    "id": 100000000,
                    "name": "and many other districts",
                    "parent_id": 955,
                    "level_type_id": 5
                }
            ]
        }
    ]
}
 */


router.get("/v1/relative/:name", locationController.getParentChild);


module.exports = router;
