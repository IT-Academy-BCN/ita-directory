const router = require('express').Router()
const UsersController = require('../controllers/users.controller')
const authenticateToken = require('../middleware/verifyToken')
const checkRole = require('../middleware/roleAuth')
const validate = require('../middleware/zodValidation')
const userSchema = require('../schemas/UserSchema')
const { roleValues } = require('../utils/CONSTANTS')
const uploadFile = require('../middleware/uploadFile')

/**
 * GET /user
 * @summary Get user data
 * @tags Users
 * @security bearerAuth
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.get(
  '/user',
  authenticateToken,
  validate(userSchema.pick({ id: true })),
  UsersController.getUser
)

/**
 * Registration data
 * @typedef {object} userRegistrationData
 * @property {string} email.required - Email of the user
 * @property {string} password.required - Pwd of the user
 */

/**
 * POST /register
 * @summary Allows user to register
 * @tags Users
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
router.post('/register', UsersController.registerUser)

/**
 * GET /users/
 * @summary Gets all users from the database.
 * @tags Users
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
router.get('/users', authenticateToken, checkRole(roleValues.Admin), UsersController.getAllUsers)

// Refresh-token
router.get('/refresh-token', UsersController.getRefreshToken)

/**
 * Login data
 * @typedef {object} userLoginData
 * @property {string} email.required - Email of the user
 * @property {string} password.required - Pwd of the user
 * @property {boolean} privacy.required - Accept privacy from user
 */

/**
 * POST /login
 * @summary Allows user to login
 * @tags Users
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
router.post('/login', UsersController.login)

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
 * PATCH /users
 * @summary Allows Update some field to User
 * @tags Users
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
  '/users',
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
 * POST /recover-password
 * @summary Allows user recover password
 * @tags Users
 * @param {userRecoverData} request.body.required - The payload looks like this:
 * @return {object} 200 - success response - application/json
 * @return {object} 404 - Not found
 * @return {object} 400 - Bad request response
 * @example request - Payload example
 * { "email": "email@example.com"}
 * @example response - 200 - Example success response
 * { "status":"200", "message": "email sent successfully"}
 * @example response - 404 - Example error response
 * { "errCode":"errCode", "message":"email not found"}
 * @example response - 400 - Example error response
 * { "errCode":"errCode", "message":"some error"}
 */

router.post('/recover-password', UsersController.receiveEmailGetToken)

/**
 * NewPassword data
 * @typedef {object} newPasswordData
 * @property {string} password1.required
 * @property {string} password2.required
 */

/**
 * POST /change-password/{token}
 * @summary Checks the token in the params; if valid, changes the password for the associated user
 * @tags Users
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
// TODO: refactor controller method to use middleware auth
router.post('/change-password/:token', UsersController.changePassword)

/**
 * DELETE /users/{userId}
 * @summary Delete user from the database.
 * @tags Users
 * @security bearerAuth
 * @return {object} 200 - Success response - application/json
 */
// Route delete user
router.delete('/users', UsersController.deleteUser)

// TODO: Swagger doc
router.patch('/users/update-avatar', authenticateToken, uploadFile, UsersController.updateAvatar)

module.exports = router
