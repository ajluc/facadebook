const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

// router.get('/', (req, res) => res.send('This is building root'))

router.get('/', controllers.buildingController.getAllBuildings)
router.post('/new', controllers.buildingController.createBuilding)
router.get('/:name', controllers.buildingController.searchBuilding)
router.get('/id/:id', controllers.buildingController.getBuildingById)

module.exports = router
