const router = require('express').Router()
const UsersController = require('../controllers/users.controller')
const authenticateToken = require('../middleware/verifyToken')
const checkRole = require('../middleware/roleAuth')
const validate = require('../middleware/zodValidation')
const userSchema = require('../schemas/UserSchema')

router.get('/v1/user', authenticateToken, UsersController.getUser)

/**
 * Registration data
 * @typedef {object} userRegistrationData
 * @property {string} email.required - Email of the user
 * @property {string} password.required - Pwd of the user
 * @property {boolean} privacy.required - Accept privacy from user
 */

/**
 * POST /users/v1/user
 * @summary Allows user to register
 * @tags User
 * @param {userRegistrationData} request.body.required - The payload looks like this:
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 * @example request - Payload example
 * {
    "name": "name",
    "lastnames":"surname",
    "email": "email@email.com",
    "password": "8charactersOneNumberOnespecial!"
}
 * @example response - 200 - Example success response
 * { "status":"200", "message": "User registered correctly"}
 * @example response - 400 - Example error response
 * { "errCode":"errCode", "message":"Failed to register the user"}
 */
// Register
router.post('/v1/user', UsersController.registerUser)

/**
 * GET /users/
 * @summary Gets all users from the database.
 * @tags User
 * @security bearerAuth
 * @return {object} 200 - Success response - application/json
 * @example response - 200 - Example success response
* {"message": "Data fetched correctly.",
    "data": [
        {
            "id": 1,
            "name": "test",
            "lastnames": "test test",
            "email": "test@test.test",
            "createdAt": "2022-06-14T11:43:36.351Z",
            "updatedAt": "2022-06-14T11:43:36.352Z",
            "userStatusId": 1,
            "userRoleId": 3,
            "media": [
                {
                    "path": "/public/2021/10/image1.jpg"
                }
            ]
        }
]}
 */
router.get('/', authenticateToken, checkRole('Admin'), UsersController.getAllUsers)
// router.get('/', UsersController.getAllUsers)

// Refresh-token
router.get('/v1/refresh-token', UsersController.getRefreshToken)

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
 * { "email": "test@test.test", "password":"Test-test99"}
 * @example response - 200 - Example success response
 * {
    "code": "success",
    "header": "Welcome back",
    "message": "We are redirecting you to your account.",
    "token": "ACCESS TOKEN HERE",
    "refreshToken": "REFRESH TOKEN HERE"
}
 * @example response - 400 - Example error response
 * { "errCode":"errCode", "message":"login failed"}
 */
router.post('/v1/login', UsersController.login)

/**
 * Update data
 * @typedef {object} userUpdateData
 * @property {string} name- name of the user
 * @property {string} lastnames- lastnames of the user
 * @property {string} email- Email of the user
 * @property {string} password - Pwd of the user
 * @property {integer} userStatusId- Status of the user
 * @property {integer} userRoleId- Role of the user
 */

/**
 * PATCH /users/v1/user
 * @summary Allows Update some field to User
 * @tags User
 * @security bearerAuth
 * @param {userUpdateData} request.body.required - The payload looks like this:
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 * @example request - Payload example
 * { "userStatusId":2}
 * @example response - 200 - Example success response
 * { "status":"200", "message": "User updated correctly"}
 * @example response - 400 - Example error response
 * { "errCode":"errCode", "message":"User not found"}
 */
// Update some field to User
router.patch(
  '/v1/user',
  authenticateToken,
  validate(userSchema.partial()),
  UsersController.updateUser
)

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
 * { "email": "email@example.com"}
 * @example response - 200 - Example success response
 * { "status":"200", "message": "email sent successfully"}
 * @example response - 400 - Example error response
 * { "errCode":"errCode", "message":"email not found"}
 */

router.post('/v1/recover-password', UsersController.receiveEmailGetToken)

/**
 * NewPassword data
 * @typedef {object} newPasswordData
 * @property {string} password1.required
 * @property {string} password2.required
 */

/**
 * POST /users/v1/change-password/:token
 * @summary Checks the token in the params; if valid, changes the password for the associated user
 * @tags User
 * @param {newPasswordData} request.body.required - The payload looks like this:
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 * @example request - Payload example
 * { "password1": "qwertasd1!", "password2": "qwertasd1!"}
 * @example response - 200 - Example success response
 * {"message": "You password has been successfully changed."}
 * @example response - 400 - Example error response
 * {"code": "error", "message": "Your token has expired!"}
 * @example response - 400 - Example error response
 * {
    "message": "The password does not match",
    "data": {},
    "errors": []
}
 */
router.post('/v1/change-password/:token', UsersController.changePassword)

/**
 * DELETE /v1/user
 * @summary Delete user from the database.
 * @tags User
 * @security bearerAuth
 * @return {object} 200 - Success response - application/json
 */
// Route delete user
router.delete('/v1/user', UsersController.deleteUser)

module.exports = router
