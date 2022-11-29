const router = require('express').Router()
// const authenticateToken = require('../middleware/verifyToken')
const locationController = require('../controllers/location.controller')
const validate = require('../middleware/zodValidation')
const LocationSchema = require('../schemas/LocationSchema')

router.use(validate(LocationSchema))

/**
 * Location data
 * @typedef {object} levelData
 * @property {integer} id.required - Location id
 * @property {string} name.required - Location name
 * @property {integer} parent_id.required - Location parent id
 * @property {levelTypeData} level_type_id.required - Location type id
 */

/**
 * LevelType data
 * @typedef {object} levelTypeData
 * @property {integer} id.required - Location id
 * @property {string} name.required - Location name
 * @property {integer} country - Location parent id
 * @property {integer} state - Location type
 * @property {integer} city - Location type
 * @property {integer} town - Location type
 * @property {integer} district - Location type
 */

/**
 * GET /locations/region/{name}
 * @summary Gets the region starting from a searched location.
 * @tags Locations
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

router.get('/locations/region/:name', locationController.getRegion)

/**
 * GET /locations/relative/{name}
 * @summary Gets a searched location's parent and children.
 * @tags Locations
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
router.get('/locations/relative/:name', locationController.getParentChild)

module.exports = { router }
