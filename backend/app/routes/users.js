const router = require("express").Router();
const UsersController = require("./../controllers/users");
const uploadFile = require("./../middleware/uploadFile");

router.get("/v1/get_me", UsersController.getUser);

/**
 * Registration data
 * @typedef {object} userRegistrationData
 * @property {string} email.required - Email of the user
 * @property {string} password.required - Pwd of the user
 * @property {boolean} privacy.required - Accept privacy from user
 */

/**
 * POST /users/v1/register
 * @summary Allows user to register
 * @tags User
 * @param {userRegistrationData} request.body.required - The payload looks like this:
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 * @example request - Payload example
 * { "email": "email@example.com", "password":"secret", "privacy":true}
 * @example response - 200 - Example success response
 * { "status":"200", "message": "User registered correctly"}
 * @example response - 400 - Example error response
 * { "errCode":"errCode", "message":"Failed to register the user"}
 */

//Register
router.post("/v1/register", UsersController.registerUser);

//Read All Users (for testing purpose)
router.get("/", UsersController.getAllUsers);

//Refresh-token
router.get("/v1/refresh-token", UsersController.getRefreshToken);

/**
 * Login data
 * @typedef {object} userLoginData
 * @property {string} email.required - Email of the user
 * @property {string} password.required - Pwd of the user
 * @property {boolean} privacy.required - Accept privacy from user
 */

/**
 * POST /users/v1/login
 * @summary Allows user to login
 * @tags User
 * @param {userLoginData} request.body.required - The payload looks like this:
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 * @example request - Payload example
 * { "email": "email@example.com", "password":"secret", "privacy":true}
 * @example response - 200 - Example success response
 * { "status":"200", "message": "successfully logged in"}
 * @example response - 400 - Example error response
 * { "errCode":"errCode", "message":"login failed"}
 */
router.post("/v1/login", UsersController.login);

/**
 * Update data
 * @typedef {object} userUpdateData
 * @property {string} name- name of the user
 * @property {string} lastnames- lastnames of the user
 * @property {string} email- Email of the user
 * @property {string} password - Pwd of the user
 * @property {integer} user_status_id- Status of the user
 * @property {integer} user_role_id- Role of the user
 */

/**
 * PATCH /users/v1/user
 * @summary Allows Update some field to User
 * @tags User
 * @param {userUpdateData} request.body.required - The payload looks like this:
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 * @example request - Payload example
 * { "email": "email@example.com", "password":"secret", "privacy":true}
 * @example response - 200 - Example success response
 * { "status":"200", "message": "User updated correctly"}
 * @example response - 400 - Example error response
 * { "errCode":"errCode", "message":"User not found"}
 */
//Update some field to User
//router.patch("/v1/user", UsersController.updateUser);

/**
 * RecoverPassword data
 * @typedef {object} userRecoverData
 * @property {string} email.required - Email of the user
 * @property {boolean} privacy.required - Accept privacy from user
 */

/**
 * POST /users/v1/recover-password
 * @summary Allows user recover password
 * @tags User
 * @param {userRecoverData} request.body.required - The payload looks like this:
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 * @example request - Payload example
 * { "email": "email@example.com", "privacy":true}
 * @example response - 200 - Example success response
 * { "status":"200", "message": "email sent successfully"}
 * @example response - 400 - Example error response
 * { "errCode":"errCode", "message":"email not found"}
 */

router.post("/v1/recover-password", UsersController.receiveEmailGetToken);
router.put("/test", UsersController.updateUserRole);

router.get("/v1/change-password/:token", UsersController.recoverPassword);
router.post("/v1/change-password", UsersController.changePassword);

module.exports = router;
