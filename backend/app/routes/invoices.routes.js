const router = require('express').Router()
const authenticateToken = require('../middleware/verifyToken')
const invoicesController = require('../controllers/invoices.controller')

/**
 * POST /invoices
 * @summary Create new invoice
 * @tags Invoices
 * @security bearerAuth
 * @param {postInvoiceData} request.body.required - The payload looks like this:
 * @return {object} 200 - Success response - application/json
 * @return {object} 400 - Bad request response - application/json
 * @example request - Correct invoice payload
 * { "user_id": "1", "billingaddress": "Carrer Diagonal 000",
 * "postalCode": "08021", "city": "Barcelona",
 * "state": "Catalonia","country": "Spain","vatId": "B00000000","vatAmount": 21,"secondTax": 30}
 * @example response - 200 - Example success response
 * { "user_id": "1", "billingaddress": "Carrer Diagonal 000",
 * "postalCode": "08021", "city": "Barcelona",
 * "state": "Catalonia","country": "Spain","vatId": 'B00000000',"vatAmount": 21,"secondTax": 30}
  * @example request - Incorrect invoice payload
  { "user_id": "1" }
  @example response - 400 - Example bad request response
  {
    "message": "At least one value is not defined.",
    "data": {},
    "errors": "\"user_id\" is required"
}
 */
router.post('/invoices', authenticateToken, invoicesController.createInvoice) //

/**
 * GET /invoices
 * @summary Gets all invoices from the database.
 * @tags Invoices
 * @security bearerAuth
 * @return {object} 200 - Success response - application/json
 * @example response - 200 - Example success response
* {"message": "Data fetched correctly.",
    "data": [
        {
            "id": 1,
            "userId": 1,
            "billingaddress": "Carrer Diagonal 000",
            "postalCode": "08021",
            "city": "Barcelona",
            "state": "Catalonia",
            "country": "Spain",
            "vatId": "B00000000",
            "vatAmount": 21,
            "secondTax": 30,
            "createdAt": "2022-11-07T17:19:21.352Z",
            "invoiceNumber": "1",
            "status": "PENDING"
        },
        {
            "id": 2,
            "userId": 2,
            "billingaddress": "Carrer Muntaner 000",
            "postalCode": "08023",
            "city": "Barcelona",
            "state": "Catalonia",
            "country": "Spain",
            "vatId": "B00000001",
            "vatAmount": 21,
            "secondTax": 20,
            "createdAt": "2022-11-07T17:19:21.371Z",
            "invoiceNumber": "2",
            "status": "PENDING"
        },
        {
            "id": 3,
            "userId": 1,
            "billingaddress": "Carrer Diagonal 000",
            "postalCode": "08021",
            "city": "Barcelona",
            "state": "Catalonia",
            "country": "Spain",
            "vatId": "B00000000",
            "vatAmount": 21,
            "secondTax": 30,
            "createdAt": "2022-11-07T17:19:21.379Z",
            "invoiceNumber": "3",
            "status": "PENDING"
        },
        {
            "id": 4,
            "userId": 3,
            "billingaddress": "Gran Via 000",
            "postalCode": "28013",
            "city": "Madrid",
            "state": "Madrid",
            "country": "Spain",
            "vatId": "B00000002",
            "vatAmount": 21,
            "secondTax": 30,
            "createdAt": "2022-11-07T17:19:21.386Z",
            "invoiceNumber": "4",
            "status": "PENDING"
        }
    ]}
 */
router.get('/invoices', authenticateToken, invoicesController.getAllInvoices)

/**
 * GET /invoices/user/{userId}
 * @summary Gets all invoices by user id
 * @tags Invoices
 * @security bearerAuth
 * @param {number} userId.path - User id
 * @return {object} 200 - Success response - application/json
 * @return {object} 400 - Bad request response - application/json
 * @return {object} 404 - Id not found - application/json
 * @example response - 200 - Example success response
* {"message": "Data fetched correctly.",
    "data": [
        {
            "id": 1,
            "userId": 1,
            "billingaddress": "Carrer Diagonal 000",
            "postalCode": "08021",
            "city": "Barcelona",
            "state": "Catalonia",
            "country": "Spain",
            "vatId": "B00000000",
            "vatAmount": 21,
            "secondTax": 30,
            "createdAt": "2022-11-07T17:19:21.352Z",
            "invoiceNumber": "1",
            "status": "PENDING"
        },
        {
            "id": 3,
            "userId": 1,
            "billingaddress": "Carrer Diagonal 000",
            "postalCode": "08021",
            "city": "Barcelona",
            "state": "Catalonia",
            "country": "Spain",
            "vatId": "B00000000",
            "vatAmount": 21,
            "secondTax": 30,
            "createdAt": "2022-11-07T17:19:21.379Z",
            "invoiceNumber": "3",
            "status": "PENDING"
        }
    ]}
 */
router.get('/invoices/user/:userId', authenticateToken, invoicesController.getUserInvoices)

/**
 * GET /invoices/{invoiceId}
 * @summary Get invoice by id
 * @tags Invoices
 * @security bearerAuth
 * @param {number} invoiceId.path - Invoice id to search in database
 * @return {object} 200 - Success response - application/json
 * @return {object} 400 - Bad request response - application/json
 * @return {object} 404 - Id not found - application/json
 * @example response - 200 - Example success response
 * {"message": "Data fetched correctly.",
    "data": 
        {
            "id": 1,
            "userId": 1,
            "billingaddress": "Carrer Diagonal 000",
            "postalCode": "08021",
            "city": "Barcelona",
            "state": "Catalonia",
            "country": "Spain",
            "vatId": "B00000000",
            "vatAmount": 21,
            "secondTax": 30,
            "createdAt": "2022-11-07T17:19:21.352Z",
            "invoiceNumber": "1",
            "status": "PENDING"
        }
    }
 * @example response - 400 - Example bad request response
{
    "message": "invoiceId param must be an integer.",
    "data": {},
    "errors": []
} 
 * @example response - 404 - The invoiceId is not in the database
{
    "message": "This invoiceId does not exist.",
    "data": {},
    "errors": []
}
 */
router.get('/invoices/:invoiceId', authenticateToken, invoicesController.getInvoiceById)

/**
 * DELETE /invoices/{invoiceId}
 * @summary Delete invoice by id
 * @tags Invoices
 * @security bearerAuth
 * @param {number} invoiceId.path - Invoice id to search in database
 * @return {object} 200 - Success response - application/json
 * @return {object} 400 - Bad request response - application/json
 * @return {object} 404 - Id not found - application/json
 * @example response - 200 - Example success response
*{"message":"Invoice successfully deleted.","data":{"id":1,"user_id":1,"title":"asdf","description":"asf","city":"fff","n_rooms":1,"price":2,"square_meters":3,"n_bathrooms":4,"map_lat":"3.4","map_lon":"3.6"}} 
  @example response - 400 - Example bad request response
{
    "message": "invoiceId param must be an integer.",
    "data": {},
    "errors": []
} 
* @example response - 404 - The invoiceId is not in the database
{
    "message": "This invoiceId does not exist.",
    "data": {},
    "errors": []
}
*/
router.delete('/invoices/:invoiceId', authenticateToken, invoicesController.deleteInvoiceById)

/**
 * PATCH /invoices/{invoiceId}
 * @summary Update invoice by id
 * @tags Invoices
 * @security bearerAuth
 * @param {number} invoiceId.path - Invoice id to search in database
 * @param {object} request.body.required - The payload 
 * @return {object} 200 - Success response - application/json
 * @return {object} 400 - Bad request response - application/json
 * @return {object} 404 - Id not found - application/json
 * @example response - 200 - Example success response
 * {"message":"Invoice successfully updated.","data":{ "user_id": "1", "billingaddress": "Carrer Diagonal 000",
 * "postalCode": "08021", "city": "Barcelona",
 * "state": "Catalonia","country": "Spain","vatId": "B00000000","vatAmount": 21,"secondTax": 30}} 
  @example response - 400 - Example bad request response
{
    "message": "invoiceId param must be an integer.",
    "data": {},
    "errors": []
} 
* @example response - 404 - The invoiceId is not in the database
{
    "message": "This invoiceId does not exist.",
    "data": {},
    "errors": []
}
*/
router.patch('/invoices/:invoiceId', authenticateToken, invoicesController.updateInvoice)

module.exports = router
