const authenticateToken = require("../middleware/verifyToken");
const adsController = require("../controllers/ads");
const router = require("express").Router();

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
 * "n_rooms": 4, "price": 500000, "square_meters": 100, "n_bathrooms": 2, "map_lat": 41.418664, "map_lon": 2.133707}
 * @example response - 200 - Example success response
 * { "message": "Ad created successfully.", "data": { "user_id": "1", "title": "Apartment in Barcelona",
  "description": "Apartment in sunny Barcelona close to Collserola", "city": "Barcelona", "n_rooms": 4,
  "price": 500000, "square_meters": 100, "n_bathrooms": 2, "map_lat": 41.418664, "map_lon": 2.133707}}
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
* {"message": "Data fetched correctly.","data": [
    {"id": 1,"user_id": 1,"title": "asdf","description": "asf","city": "fff","n_rooms": 1,"price": 2,"square_meters": 3,"n_bathrooms": 4,"map_lat": 3.4,"map_lon": 3.6},
    {"id": 5,"user_id": 1,    "title": "asdf",    "description": "asf",    "city": "fff",    "n_rooms": 1,    "price": 2,    "square_meters": 3,    "n_bathrooms": 4,    "map_lat": 3.4,    "map_lon": 3.6}]}
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
*{"message":"Ad fetched correctly.","data":{"id":1,"user_id":1,"title":"asdf","description":"asf","city":"fff","n_rooms":1,"price":2,"square_meters":3,"n_bathrooms":4,"map_lat":"3.4","map_lon":"3.6"}} 
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

router.delete("/v1/ads/:adId", adsController.deleteById);

module.exports = router;
