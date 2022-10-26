const router = require('express').Router()
const authenticateToken = require('../middleware/verifyToken')
const adsController = require('../controllers/ads.controller')
const { uploadAdCSV } = require('../middleware/uploadAdsCSV')
const validate = require('../middleware/zodValidation')
const AdsSchema = require('../schemas/AdsSchema')

/**
 * Ad data
 * @typedef {object} postAdData
 * @property {integer} userId.required - User id
 * @property {string} title.required - Title of the ad
 * @property {string} description.required - Description of the ad
 * @property {string} city.required - City where the property is located
 * @property {integer} nRooms.required - Number of rooms of the property
 * @property {integer} price.required - Price of the rent
 * @property {integer} squareMeters.required - m^2 of the property
 * @property {integer} nBathrooms.required - Number of bathrooms
 * @property {number} mapLat.required - Latitude of the location on the map
 * @property {number} mapLon.required - Longitude of the location on the map
 * @property {adTypeData} adTypeId.required - Ad type referred to the table adType
 */

/**
 * adType data
 * @typedef {object} adTypeData
 * @property {integer} id.required - adType id
 * @property {string} name.required - adType name
 * @property {integer} house - adType type
 * @property {integer} room - adType type
 * @property {integer} garage - adType type
 * @property {integer} storage - adType type
 * @property {integer} office - adType type
 * @property {integer} warehouse - adType type
 * @property {integer} building - adType type
 * @property {integer} newBuilding - adType type
 */

/**
 * POST /ads
 * @summary Create new ad
 * @tags Ads
 * @security bearerAuth
 * @param {postAdData} request.body.required - The payload looks like this:
 * @return {object} 200 - Success response - application/json
 * @return {object} 400 - Bad request response - application/json
 * @example request - Correct ad payload
 * { "title": "Apartment in Barcelona",
 * "description": "Apartment in sunny Barcelona close to Collserola", "city": "Barcelona",
 * "nRooms": 4, "price": 500000, "squareMeters": 100, "nBathrooms": 2, "mapLat": 41.418664, "mapLon": 2.133707,
 * "adTypeId": 1, "adStatusId": 1}
 * @example response - 200 - Example success response
 * { "message": "Ad created successfully.", "data": { "userId": 1, "title": "Apartment in Barcelona",
  "description": "Apartment in sunny Barcelona close to Collserola", "city": "Barcelona", "nRooms": 4,
  "price": 500000, "squareMeters": 100, "nBathrooms": 2, "mapLat": 41.418664, "mapLon": 2.133707, "adTypeId": 1, "adStatusId": 1}}
  * @example request - Incorrect ad payload
  { "userId": 1 }
  @example response - 400 - Example bad request response
  {
    "message": "At least one value is not defined.",
    "data": {},
    "errors": "\"title\" is required"
}
 */
router.post('/ads', authenticateToken, validate(AdsSchema.partial()), adsController.createAd)

/**
 * GET /ads
 * @summary Gets all ads from the database.
 * @tags Ads
 * @security bearerAuth
 * @return {object} 200 - Success response - application/json
* @example request - Correct ad payload
 * { "userId": 1, "title": "Apartment in Barcelona",
 * "description": "Apartment in sunny Barcelona close to Collserola", "city": "Barcelona",
 * "nRooms": 4, "price": 500000, "squareMeters": 100, "nBathrooms": 2, "mapLat": 41.418664, "mapLon": 2.133707}
 * @example response - 200 - Example success response
* {"message": "Data fetched correctly.",
    "data": [
        {
            "id": 1,
            "userId": 1,
            "title": "ad1",
            "description": "ad house 1",
            "city": "Barcelona",
            "nRooms": 2,
            "price": 900,
            "squareMeters": 80,
            "nBathrooms": 1,
            "mapLat": 41.385063,
            "mapLon": 2.173404,
            "adTypeId": 1
        },
        {
            "id": 2,
            "userId": 1,
            "title": "ad2",
            "description": "ad house 2",
            "city": "Berlin",
            "nRooms": 3,
            "price": 1200,
            "squareMeters": 90,
            "nBathrooms": 2,
            "mapLat": 52.520008,
            "mapLon": 13.404954,
            "adTypeId": 1
        }
]}
 */
router.get('/ads', adsController.getAllAds)

/**
 * GET /ads/user/{userId}
 * @summary Gets all user ads from the database.
 * @tags Ads
 * @security bearerAuth
 * @param {number} userId.path - User id
 * @return {object} 200 - Success response - application/json
 * @example response - 200 - Example success response
 * {"message": "Data fetched correctly.",
    "data": [
        {
            "id": 1,
            "userId": 1,
            "title": "ad1",
            "description": "ad house 1",
            "city": "Barcelona",
            "nRooms": 2,
            "price": 900,
            "squareMeters": 80,
            "nBathrooms": 1,
            "mapLat": 41.385063,
            "mapLon": 2.173404,
            "adTypeId": 1
        }
    ]}
 */
router.get('/ads/user/:userId', authenticateToken, adsController.getUserAds)

/**
 * GET /ads/{adId}
 * @summary Gets ad by id
 * @tags Ads
 * @security bearerAuth
 * @param {number} adId.path - Ad id to search in database
 * @return {object} 200 - Success response - application/json
 * @return {object} 400 - Bad request response - application/json
 * @return {object} 404 - Id not found - application/json
 * @example response - 200 - Example success response
*{"message":"Ad fetched correctly.","data":{
            "id": 1,
            "userId": 1,
            "title": "ad1",
            "description": "ad house 1",
            "city": "Barcelona",
            "nRooms": 2,
            "price": 900,
            "squareMeters": 80,
            "nBathrooms": 1,
            "mapLat": 41.385063,
            "mapLon": 2.173404,
            "adTypeId": 1
        }} 
  @example response - 400 - Example bad request response
{
    "message": "adId param must be an integer.",
    "data": {},
    "errors": []
} 
* @example response - 404 - The adId is not in the database
{
    "message": "This adId does not exist.",
    "data": {},
    "errors": []
}
*/
router.get('/ads/:adId', adsController.getAdById)

/**
 * GET /ads/type/{type}
 * @summary Gets all ads filtered according to their type name.
 * @tags Ads
 * @return {object} 200 - Success response - application/json
 * @example response - 200 - Example success response
*  {
    "message": "Ad fetched correctly.",
    "data": [
        {
            "id": 11,
            "userId": 1,
            "title": "ad11",
            "description": "ad room 1",
            "city": "Tampa",
            "nRooms": 1,
            "price": 300,
            "squareMeters": 20,
            "nBathrooms": 1,
            "mapLat": 27.950575,
            "mapLon": -82.457176,
            "adTypeId": 2
        }
    ]
}
 */
router.get('/ads/type/:type', adsController.getAdsByType)

/**
 * GET /ads/types
 * @summary Gets all ad type names.
 * @tags Ads
 * @return {object} 200 - Success response - application/json
 * @example response - 200 - Example success response
*  {
    "message": "Types fetched correctly.",
    "data": [
        "house",
        "room",
        "garage",
        "storage",
        "office",
        "warehouse",
        "building",
        "newBuilding"
    ]
}
 */
router.get('/ads/types', adsController.getAdTypes)

/**
 * GET /ads/{location}/{type} 
 * @summary Gets ads filtered by location and type
 * @tags Ads
 * @return {object} 200 - Success response - application/json
 * @example response - 200 - Example success response
 * {
    "message": "Ad fetched correctly.",
    "data": [
        {
            "id": 21,
            "userId": 1,
            "title": "ad1",
            "description": "ad house 1",
            "city": "Barcelona",
            "nRooms": 2,
            "price": 900,
            "squareMeters": 80,
            "nBathrooms": 1,
            "mapLat": 41.385063,
            "mapLon": 2.173404,
            "adTypeId": 2
        },
        {
            "id": 22,
            "userId": 1,
            "title": "ad123",
            "description": "ad room 123",
            "city": "Barcelona",
            "nRooms": 2,
            "price": 900,
            "squareMeters": 80,
            "nBathrooms": 1,
            "mapLat": 41.385063,
            "mapLon": 2.173404,
            "adTypeId": 2
        }
    ]
  }
 */
router.get('/ads/:location/:type', adsController.getAdsByTypeAndLocation)

/**
 * GET /ads/location/{location}
 * @summary Gets ads filtered by location
 * @tags Ads
 * @return {object} 200 - Success response - application/json
 * @example response - 200 - Example success response
 * {
    "message": "Ad fetched correctly.",
    "data": [
        {
            "id": 21,
            "userId": 1,
            "title": "ad1",
            "description": "ad house 1",
            "city": "Barcelona",
            "nRooms": 2,
            "price": 900,
            "squareMeters": 80,
            "nBathrooms": 1,
            "mapLat": 41.385063,
            "mapLon": 2.173404,
            "adTypeId": 2
        },
        {
            "id": 22,
            "userId": 1,
            "title": "ad123",
            "description": "ad room 123",
            "city": "Barcelona",
            "nRooms": 2,
            "price": 900,
            "squareMeters": 80,
            "nBathrooms": 1,
            "mapLat": 41.385063,
            "mapLon": 2.173404,
            "adTypeId": 2
        }
    ]
  }
 */
router.get('/ads/location/:location', adsController.getAdsByLocation)

/**
 * DELETE /ads/{adId}
 * @summary Delete ad by id
 * @tags Ads
 * @security bearerAuth
 * @param {number} adId.path - Ad id to search in database
 * @return {object} 200 - Success response - application/json
 * @return {object} 400 - Bad request response - application/json
 * @return {object} 404 - Id not found - application/json
 * @example response - 200 - Example success response
*{"message":"Ad successfully deleted.","data":{"id":1,"userId":1,"title":"asdf","description":"asf","city":"fff","nRooms":1,"price":2,"squareMeters":3,"nBathrooms":4,"mapLat":3.4,"mapLon":3.6}} 
  @example response - 400 - Example bad request response
{
    "message": "adId param must be an integer.",
    "data": {},
    "errors": []
} 
* @example response - 404 - The adId is not in the database
{
    "message": "This adId does not exist.",
    "data": {},
    "errors": []
}
*/
router.delete('/ads/:adId', authenticateToken, adsController.deleteById)

/**
 * PATCH /ads/{adId}
 * @summary Update ad by id
 * @tags Ads
 * @security bearerAuth
 * @param {number} adId.path - Ad id to search in database
 * @param {object} request.body.required - The payload 
 * @return {object} 200 - Success response - application/json
 * @return {object} 400 - Bad request response - application/json
 * @return {object} 404 - Id not found - application/json
 * @example response - 200 - Example success response
*{"message":"Ad successfully updated.","data":{"id":1,"userId":1,"title":"asdf","description":"asf","city":"fff","nRooms":1,"price":2,"squareMeters":3,"nBathrooms":4,"mapLat":3.4,"mapLon":3.6}} 
  @example response - 400 - Example bad request response
{
    "message": "adId param must be an integer.",
    "data": {},
    "errors": []
} 
* @example response - 404 - The adId is not in the database
{
    "message": "This adId does not exist.",
    "data": {},
    "errors": []
}
*/
router.patch('/ads/:adId', authenticateToken, adsController.updateAd)

// TODO: swagger doc
router.post(
  '/ads/post-ads-csv',
  authenticateToken,
  uploadAdCSV,
  adsController.createAdsFromCSVBuffer
)

// TODO: swagger doc
router.get('/ads/chart-data', adsController.activeAdsByLocationAndDate)

module.exports = router
