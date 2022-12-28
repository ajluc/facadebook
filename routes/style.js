const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', controllers.styleController.getAllStyles)
router.get('/new', controllers.styleController.createStyle)

module.exports = router
