const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', controllers.styleController.getAllStyles)

module.exports = router
