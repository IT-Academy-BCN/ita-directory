const router = require('express').Router()
const authenticateToken = require('../middleware/verifyToken')
const adsController = require('../controllers/ads.controller')
const { uploadAdCSV } = require('../middleware/uploadAdsCSV')

/**
 * Ad data
 * @typedef {object} postAdData
 * @property {integer} user_id.required - User id
 * @property {string} title.required - Title of the ad
 * @property {string} description.required - Description of the ad
 * @property {string} city.required - City where the property is located
 * @property {integer} n_rooms.required - Number of rooms of the property
 * @property {integer} price.required - Price of the rent
 * @property {integer} square_meters.required - m^2 of the property
 * @property {integer} n_bathrooms.required - Number of bathrooms
 * @property {number} map_lat.required - Latitude of the location on the map
 * @property {number} map_lon.required - Longitude of the location on the map
 * @property {adTypeData} ad_type_id.required - Ad type referred to the table ad_type
 */

/**
 * adType data
 * @typedef {object} adTypeData
 * @property {integer} id.required - Ad_type id
 * @property {string} name.required - Ad_type name
 * @property {integer} house - Ad_type type
 * @property {integer} room - Ad_type type
 * @property {integer} garage - Ad_type type
 * @property {integer} storage - Ad_type type
 * @property {integer} office - Ad_type type
 * @property {integer} warehouse - Ad_type type
 * @property {integer} building - Ad_type type
 * @property {integer} new_building - Ad_type type
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
 * { "user_id": "1", "title": "Apartment in Barcelona",
 * "description": "Apartment in sunny Barcelona close to Collserola", "city": "Barcelona",
 * "n_rooms": 4, "price": 500000, "square_meters": 100, "n_bathrooms": 2, "map_lat": 41.418664, "map_lon": 2.133707,
 * "ad_type_id": 1}
 * @example response - 200 - Example success response
 * { "message": "Ad created successfully.", "data": { "user_id": "1", "title": "Apartment in Barcelona",
  "description": "Apartment in sunny Barcelona close to Collserola", "city": "Barcelona", "n_rooms": 4,
  "price": 500000, "square_meters": 100, "n_bathrooms": 2, "map_lat": 41.418664, "map_lon": 2.133707, "ad_type_id": 1}}
  * @example request - Incorrect ad payload
  { "user_id": "1" }
  @example response - 400 - Example bad request response
  {
    "message": "At least one value is not defined.",
    "data": {},
    "errors": "\"title\" is required"
}
 */
router.post('/ads', authenticateToken, adsController.createAd)

/**
 * GET /ads
 * @summary Gets all ads from the database.
 * @tags Ads
 * @security bearerAuth
 * @return {object} 200 - Success response - application/json
* @example request - Correct ad payload
 * { "user_id": "1", "title": "Apartment in Barcelona",
 * "description": "Apartment in sunny Barcelona close to Collserola", "city": "Barcelona",
 * "n_rooms": 4, "price": 500000, "square_meters": 100, "n_bathrooms": 2, "map_lat": 41.418664, "map_lon": 2.133707}
 * @example response - 200 - Example success response
* {"message": "Data fetched correctly.",
    "data": [
        {
            "id": 1,
            "user_id": 1,
            "title": "ad1",
            "description": "ad house 1",
            "city": "Barcelona",
            "n_rooms": 2,
            "price": 900,
            "square_meters": 80,
            "n_bathrooms": 1,
            "map_lat": "41.385063",
            "map_lon": "2.173404",
            "ad_type_id": 1
        },
        {
            "id": 2,
            "user_id": 1,
            "title": "ad2",
            "description": "ad house 2",
            "city": "Berlin",
            "n_rooms": 3,
            "price": 1200,
            "square_meters": 90,
            "n_bathrooms": 2,
            "map_lat": "52.520008",
            "map_lon": "13.404954",
            "ad_type_id": 1
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
            "user_id": 1,
            "title": "ad1",
            "description": "ad house 1",
            "city": "Barcelona",
            "n_rooms": 2,
            "price": 900,
            "square_meters": 80,
            "n_bathrooms": 1,
            "map_lat": "41.385063",
            "map_lon": "2.173404",
            "ad_type_id": 1
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
            "user_id": 1,
            "title": "ad1",
            "description": "ad house 1",
            "city": "Barcelona",
            "n_rooms": 2,
            "price": 900,
            "square_meters": 80,
            "n_bathrooms": 1,
            "map_lat": "41.385063",
            "map_lon": "2.173404",
            "ad_type_id": 1
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
            "user_id": 1,
            "title": "ad11",
            "description": "ad room 1",
            "city": "Tampa",
            "n_rooms": 1,
            "price": 300,
            "square_meters": 20,
            "n_bathrooms": 1,
            "map_lat": "27.950575",
            "map_lon": "-82.457176",
            "ad_type_id": 2
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
        "new_building"
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
            "user_id": 1,
            "title": "ad1",
            "description": "ad house 1",
            "city": "Barcelona",
            "n_rooms": 2,
            "price": 900,
            "square_meters": 80,
            "n_bathrooms": 1,
            "map_lat": "41.385063",
            "map_lon": "2.173404",
            "ad_type_id": 2
        },
        {
            "id": 22,
            "user_id": 1,
            "title": "ad123",
            "description": "ad room 123",
            "city": "Barcelona",
            "n_rooms": 2,
            "price": 900,
            "square_meters": 80,
            "n_bathrooms": 1,
            "map_lat": "41.385063",
            "map_lon": "2.173404",
            "ad_type_id": 2
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
            "user_id": 1,
            "title": "ad1",
            "description": "ad house 1",
            "city": "Barcelona",
            "n_rooms": 2,
            "price": 900,
            "square_meters": 80,
            "n_bathrooms": 1,
            "map_lat": "41.385063",
            "map_lon": "2.173404",
            "ad_type_id": 2
        },
        {
            "id": 22,
            "user_id": 1,
            "title": "ad123",
            "description": "ad room 123",
            "city": "Barcelona",
            "n_rooms": 2,
            "price": 900,
            "square_meters": 80,
            "n_bathrooms": 1,
            "map_lat": "41.385063",
            "map_lon": "2.173404",
            "ad_type_id": 2
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
*{"message":"Ad successfully deleted.","data":{"id":1,"user_id":1,"title":"asdf","description":"asf","city":"fff","n_rooms":1,"price":2,"square_meters":3,"n_bathrooms":4,"map_lat":"3.4","map_lon":"3.6"}} 
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
*{"message":"Ad successfully updated.","data":{"id":1,"user_id":1,"title":"asdf","description":"asf","city":"fff","n_rooms":1,"price":2,"square_meters":3,"n_bathrooms":4,"map_lat":"3.4","map_lon":"3.6"}} 
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
