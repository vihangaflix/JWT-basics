const express = require('express')
const router = express.Router()

const { login, dashboard} = require('../controllers/login')

const authMiddleware = require('../middleware/auth')

router.route('/dashbor').get(authMiddleware, dashboard)
router.route('/login').post(login)

module.exports = router;