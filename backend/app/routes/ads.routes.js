const authenticateToken = require("../middleware/verifyToken");
const adsController = require("../controllers/ads.controller");
const router = require("express").Router();
const uploadAdCSV = require("../middleware/uploadAdsCSV");

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
 * POST /ads/v1/post-ad
 * @summary Create new ad
 * @tags Ad
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

router.post("/v1/post-ad", adsController.createAd);

/**
 * GET /ads/v1/ads
 * @summary Gets all ads from the database.
 * @tags Ad
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
router.get("/v1/ads", adsController.getAllAds);

/**
 * GET /ads/v1/ads/:adId
 * @summary Gets ad by id
 * @tags Ad
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

router.get("/v1/ads/:adId", adsController.getAdById);

// TODO: Swagger documentation
/**
 * DELETE /ads/v1/ads/:adId
 * @summary Delete ad by id
 * @tags Ad
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

/**
 * GET /ads/v1/ads/type/:type
 * @summary Gets all ads filtered according to their type name.
 * @tags Ad
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

router.get("/v1/ads/type/:type", adsController.getAdsByType);

/**
 * GET /ads/v1/ads/types/list
 * @summary Gets all ad type names.
 * @tags Ad
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
router.get("/v1/ads/types/list", adsController.getAdTypes);

/**
 * GET /ads/v1/ads/:location/:type 
 * @summary Gets ads filtered by location and type
 * @tags Ad
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

router.get("/v1/ads/:location/:type", adsController.getAdsByTypeAndLocation);

router.get("/v1/ads/search/location/:location", adsController.getAdsByLocation);

router.delete("/v1/ads/:adId", adsController.deleteById);

router.patch("/v1/ads/:adId", adsController.updateAd); //TODO verificar que sea la forma, va a necesitar middleware de autenticacion de token?

router.post("/v1/post-ads-csv", uploadAdCSV, adsController.createAdsFromCSVBuffer);

module.exports = router;
