const router = require('express').Router()
const authenticateToken = require('../middleware/verifyToken')
const invoicesController = require('../controllers/invoices.controller')

router.post('/invoices', authenticateToken, invoicesController.createInvoice)

router.get('/invoices', invoicesController.getAllInvoices)

router.get('/invoices/user/:userId', authenticateToken, invoicesController.getUserInvoices)

router.get('/invoices/:invoiceId', invoicesController.getInvoiceById)

router.delete('/invoices/:invoiceId', authenticateToken, invoicesController.deleteInvoiceById)

router.patch('/invoices/:invoiceId', authenticateToken, invoicesController.updateInvoice)

module.exports = router
